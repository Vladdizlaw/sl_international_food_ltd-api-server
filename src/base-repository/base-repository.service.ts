import { Knex } from 'knex';

export abstract class BaseRepositoryService {
  constructor(protected readonly knex: Knex) {}

  async transaction<T>(callback: (trx: BaseTransaction) => Promise<T>) {
    return await this.knex.transaction(async (knexTrx) => {
      const baseTrx = new BaseTransaction(knexTrx);
      return await callback(baseTrx);
    });
  }

  abstract transacting(trx: BaseTransaction): BaseRepositoryService;
}

export class BaseTransaction {
  constructor(readonly transaction: Knex.Transaction<any, any[]>) {}
}