import { Account } from "src/account/interfaces/account.interface"
import { Order } from "src/order/interfaces/order.interface"

export interface Invoice {
    id: number
    number: string
    status_id: number
    account_id: number
    account?: Account
    order_id: number
    total_amount: number
    order?: Order
    created_at?: string
    updated_at?: string

}