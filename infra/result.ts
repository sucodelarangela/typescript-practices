export class Result {
  Qtd: number; //quantidade de dados que estamos retornando
  Page: number; // página em que estamos
  Total: number; // total de registros que temos salvos no db
  Data: any; // resultado em data
}

// A criação dessa classe Result é uma boa prática no desenvolvimento de APIs, permitindo ter um padrão de retorno.