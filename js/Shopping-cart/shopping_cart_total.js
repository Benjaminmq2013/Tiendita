// Here you get the total amout for the shopping cart and all its products.
let subtotal_h2 = document.querySelector(".subtotal")

function get_total_price(){
    

    let total_amount = 0;
    let sum = 0;
    for (let index = 1000; index < 1015; index++) {
        sum = this_purchase[index].product_price * this_purchase[index].product_quantity;
        total_amount = total_amount + sum
    } 
    subtotal_h2.innerText = ("Subtotal: $"+total_amount.toFixed(2) + " USD")
}







// This collection will save the quantity for each product in this purchase

let this_purchase = {
    1000: {
        product_quantity: 0,
        product_price: 1.28,
        
        prod_id: 1000,
    },
    1001: {
        product_quantity: 0,
        product_price: 1.21,
        
        prod_id: 1001,
    },
    1002: {
        product_quantity: 0,
        product_price: 2.44,
        
        prod_id: 1002,
    },
    1003: {
        product_quantity: 0,
        product_price: 1.67,
        
        prod_id: 1003,
    },
    1004: {
        product_quantity: 0,
        product_price: 1.22,
        
        prod_id: 1004,
    },
    1005: {
        product_quantity: 0,
        product_price: 1.24,
        
        prod_id: 1005,
    },
    1006: {
        product_quantity: 0,
        product_price: 1.28,
        
        prod_id: 1006,
    },
    1007: {
        product_quantity: 0,
        product_price: 2.00,
        
        prod_id: 1007,
    },



    1008: {
        product_quantity: 0,
        product_price: 8.77,
        
        prod_id: 1008,
    },
    1009: {
        product_quantity: 0,
        product_price: 1.86,
        
        prod_id: 1009,
    },
    1010: {
        product_quantity: 0,
        product_price: 2.35,
        
        prod_id: 1010,
    },
    1011: {
        product_quantity: 0,
        product_price: 1.68,
        
        prod_id: 1011,
    },
    1012: {
        product_quantity: 0,
        product_price: 1.85,
        
        prod_id: 1012,
    },
    1013: {
        product_quantity: 0,
        product_price: 1.20,
        
        prod_id: 1013,
    },
    1014: {
        product_quantity: 0,
        product_price: 1.77,
        
        prod_id: 1014,
    },
    1015: {
        product_quantity: 0,
        product_price: 1.95,
        
        prod_id: 1015,
    },
}