import {db} from '../infra/database'


export const listarNewsQuery = () => {
    return db.query('select * from table_news;');
};

export const cadastrarNewsQuery = (colaborador: string, tema: string, caso: string, dev?: string, chamado?: string, data?: string, observacao?: string) => {
    return db.query('insert into table_news (colaborador, tema, caso, dev, chamado, data, observacao) values ($1, $2, $3, $4, $5, $6, $7);', [colaborador, tema, caso, dev, chamado, data, observacao])
}


export const buscarUmaNewsQuery = (id: number) => {
    return db.query('select * from table_news where id = $1;',[id]);
};