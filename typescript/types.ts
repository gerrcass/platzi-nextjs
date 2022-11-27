export type TProductId = string
export type TProduct = {
    name: string,
    id: string,
    sku: string,
    price: number,
    image: string,
    attributes: {
        description: string,
        shape: string,
        hardiness: string,
        taste: string,
    }
}
export type ResponseData = {
    data: TProduct[],
    length: number
}