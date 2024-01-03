export interface Account {
	id?: number
	name: string
	email: string
	company?: string
	company_vat?: string
	billing_address?: string
	delivary_address?: string
	phone?: string
	vat?: string
	static_id: number
	note?: string
	role: 'admin' | 'customer'
	password?: string
}
