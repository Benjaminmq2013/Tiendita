"use strict"



function remove_product(prod_id){
    let product_HTMLelement = document.getElementById("product_cart_"+prod_id) 

    product_HTMLelement.classList.add("remove_product_anim")
    setTimeout(()=>{ 
        //SetTimeOut = 200ms to give time to display the animation.   
        product_HTMLelement.remove() // we remove the entire html element

        if(parseInt(number_of_items.innerHTML) == 0){
            empty_cart_message.classList.remove("display-none") //We re-enable the message "Your car is empty"
            products_cart_container.classList.add("display-none") // We disable the container for the products
        }

    }, 200)


    products[prod_id].add = false // We eliminate the "added" indicator for this product

    if(parseInt(number_of_items.innerHTML) > 0){
        number_of_items.innerHTML = (items_number_count -= 1)
    }  
    
    
    this_purchase[prod_id].product_quantity = 0;
    get_total_price()
}