export interface PaginatedResource<T> {
	total: number
	items: T[]
	page: number
	size: number
}
