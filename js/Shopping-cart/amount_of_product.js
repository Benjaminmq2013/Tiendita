// Here you can add more product or eliminate one from the shopping cart.
"use strict"



function amount_of_products(product_id, action){

    let input_btn_id = ("product_quantity_"+products[product_id].prod_id)  //Defining the ID name for the input wich product was added
    let product_quantity_input = document.getElementById(input_btn_id)
    let product_quantity = parseInt(product_quantity_input.value);


    if (action == "subtract" && product_quantity > 1){
        product_quantity -=1
    } else if(action == "add"){
        product_quantity +=1
    }

    product_quantity_input.value = product_quantity;
    product_total_price(product_id, product_quantity)
    
}



function product_total_price(product_id, product_quantity){
    //This is the total price of one product in the shopping cart

    let total_price_id = ("total_"+products[product_id].prod_id)
    let total_price_input = document.getElementById(total_price_id)
    
    let total_price = ("$" + (products[product_id].product_price * product_quantity).toFixed(2) )

    total_price_input.innerText = total_price;  
    cart_total_price(product_id) 
}


