import { Injectable } from "@nestjs/common";
import { Knex } from "knex";
import { InjectConnection } from "nest-knexjs";

@Injectable()
export class InvoiceRepository {
    constructor(@InjectConnection() private readonly knex: Knex) { }
    async create(dto) {
        const invoice = this.knex.table('invoices').insert(dto);
        return invoice
    }

    async update(dto, id: number) {
        const invoice = this.knex.table('invoices')
            .update(dto)
            .where({ id })
            .returning('*')
        return invoice
    }

    async findById(id: number) {
        const invoice = this.knex.table('invoices')
            .select(['invoices.*'])
            .leftJoin('orders', 'orders.id', 'invoices.order_id')
            .leftJoin('order_items', 'order_items.order_id', 'invoices.order_id')
            .where({ id })
        return invoice
    }

    async findByAccountId(accountId: number) {
        const invoices = this.knex.table('invoices')
            .select(['invoices.*'])
            .where({ account_id: accountId })
        return invoices
    }

    async findAll() { }



}