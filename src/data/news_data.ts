import {db} from '../infra/database'


export const listarNewsQuery = () => {
    return db.query('select * from table_news;');
};

export const cadastrarNewsQuery = (colaborador: string, tema: string, caso: string, data: string, dev?: string, chamado?: string, observacao?: string) => {
    return db.query('insert into table_news (colaborador, tema, caso, data, dev, chamado, observacao) values ($1, $2, $3, $4, $5, $6, $7);', [colaborador, tema, caso, data, dev, chamado, observacao])
};

export const buscarUmaNewsQuery = (id: number) => {
    return db.query('select * from table_news where id = $1;',[id]);
};

export const editarUmaNewsQuery = (id: number, colaborador: string, tema: string, caso: string, dev?: string, chamado?: string, data?: string, observacao?: string) => {
    return db.query("UPDATE table_news SET colaborador = $2, tema = $3, caso = $4, data = $5, dev = $6, chamado = $7, observacao = $8 where id = $1;",[id, colaborador, tema, caso, data, dev, chamado, observacao]);
};