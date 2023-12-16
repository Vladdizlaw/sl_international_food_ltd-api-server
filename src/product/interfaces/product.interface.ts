export interface Product {
    id: number
    name: string
    country: string
    price: number
    rrp: number
    stock: number
    disckount: number
    shelf_life: number
    unit_size:number
    quantity_pack:string
    unit_measure:string
    category_id: number
    image_url: string
    alc_vol: string
    created_at?: string
    updated_at?: string
    category?:string
}

