import { INewsService } from "../contracts/iNewsService"; // contrato / interface
import { Result } from "../infra/result"; // classe de padrão de retorno
import { NewsRepository } from "../repository/newsRepository"; // mapeamento com db

// implementando a interface INewsService e importando a classe NewsRepository que é responsável pela integração com o banco de dados
export class NewsService implements INewsService {
  // implementando os métodos que estão no contrato (get e getAll)
  async get(_id: string) {
    let result = await NewsRepository.findById(_id);
    return result;
  }

  async getAll(page: number, qtd: number): Promise<Result> {
    let result = new Result();
    result.Page = page;
    result.Qtd = qtd;
    result.Total = await NewsRepository.count({});
    result.Data = await NewsRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
    return result;
  }
}