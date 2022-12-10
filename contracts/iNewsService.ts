import { Result } from '../infra/result';

// contracts dizem o que nosso serviço tem que ter, idem a uma interface ts
export interface INewsService {
  get(id: string);
  getAll(page: number, qtd: number): Promise<Result>;
}
