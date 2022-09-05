import { productTypes as params } from '../interfaces/productTypes';
// This module evaluates if the product is at discount.
// In positive case, it returns the offer value for the product
// In negative case, it returns the normal value for the product


export const getActualPrice = (params:params) => {
    let price:number;

    params.isOffer === true
    ? price = params.offer_price
    : price = params.normal_price

    return price;
}
