import {db} from '../infra/database'


export const listarNewsQuery = () => {
    return db.query('select * from news_call;');
};

export const cadastrarNewsQuery = (colaborador: string, tema: string, caso: string, data: string, dev?: string, chamado_envolvido?: string, feedback?: string) => {
    return db.query('insert into news_call (colaborador, tema, caso, data, dev, chamado_envolvido, feedback) values ($1, $2, $3, $4, $5, $6, $7);', [colaborador, tema, caso, data, dev, chamado_envolvido, feedback])
};

export const buscarUmaNewsQuery = (id: number) => {
    return db.query('select * from news_call where id = $1;',[id]);
};

export const editarUmaNewsQuery = (id: number, colaborador: string, tema: string, caso: string, dev?: string, chamado_envolvido?: string, data?: string, feedback?: string) => {
    return db.query("UPDATE news_call SET colaborador = $2, tema = $3, caso = $4, data = $5, dev = $6, chamado_envolvido = $7, feedback = $8 where id = $1;",[id, colaborador, tema, caso, data, dev, chamado_envolvido, feedback]);
};

export const filtrarPalavrasChavesQuery = (palavraChave:string) => {
    return db.query("select * from news_call where colaborador ilike any($1) or dev ilike any($1) or caso ilike any($1) or feedback ilike any($1) or data ilike any($1);", [palavraChave])
}

export const deletarNewsQuery = (id:Number) => {
    return db.query('delete from news_call where id = $1 returning *', [id])
}