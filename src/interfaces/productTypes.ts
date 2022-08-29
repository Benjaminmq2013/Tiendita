export interface productTypes {
    id: number,
    product_name: string,
    offer_price: number, 
    normal_price: number,
    image_url: string,
    isOffer: boolean,
    discountRate: number, // Percentage, This is a number from 0 to 100.
    isPopular: boolean,
}