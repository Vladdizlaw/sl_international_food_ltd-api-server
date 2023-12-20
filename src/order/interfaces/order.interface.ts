export interface OrderItem {
    id: number
    order_id: number
    product_id: number
    product_quantity: number
    amount: number
    account_id: number
    created_at?: string
    updated_at?: string
}

export interface Order {
    id: number
    status_id: number
    status?: string
    account_id: number
    total_amount: number
    discount: number
    delivary_date?: string
    created_at?: string
    updated_at?: string
    items?: OrderItem[]

} 