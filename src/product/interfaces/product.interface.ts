export interface Product {
    id: number
    item_name: string
    item_code: string
    barcode: string
    country_name: string
    price: string
    unit_size:string
    quantity_pac:string
    category_id: number
    image_file: string
    created_at?: string
    updated_at?: string
}