
const knex = require("../infra/database");


export const listarNewsQuery = () => {
    return knex('news_call');
};

export const cadastrarNewsQuery = (parametros: any) => {
    return knex('news_call').insert(parametros)
};

export const buscarUmaNewsQuery = (id: number) => {
    return knex('news_call').where("id", id);
};

export const editarUmaNewsQuery = (parametros: any, id:number) => {
    return knex('news_call').update(parametros).where('id', id);
};

export const filtrarPalavrasChavesQuery = (palavraChave:[]) => {
    const searchTerm = `%${palavraChave}%`;

    return knex('news_call').where((builder: any) => {
      builder.whereRaw('colaborador ilike any(?)', [[searchTerm]])
        .orWhereRaw('caso ilike any(?)', [[searchTerm]])
        .orWhereRaw('dev ilike any(?)', [[searchTerm]])
        .orWhereRaw('feedback ilike any(?)', [[searchTerm]])
        .orWhereRaw('data ilike any(?)', [[searchTerm]])
        .orWhereRaw('tema ilike any(?)', [[searchTerm]])
        .orWhereRaw('chamado_envolvido ilike any(?)', [[searchTerm]]);
    });
    
  }


export const deletarNewsQuery = (id:Number) => {
    return knex('news_call').delete().where('id', id).returning("*");
}