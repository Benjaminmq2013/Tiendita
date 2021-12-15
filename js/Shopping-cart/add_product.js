// Base de datos de pruebas. Productos, nombres y precio
"use strict"

let products__container = document.querySelector(".products__container");
let items_number_count = 0;

let kilogramos = "/kg";

let subtract = "subtract" //Those two variables will differenciate the buttons to add and subtract product.
let add = "add" //Those two variables will differenciate the buttons to add and subtract product.

function add_product(product_id){

    if (products[product_id].discount == true){
        kilogramos = "/kg"
    } else if (products[product_id].discount == false){
        kilogramos = ""
    }    

    if (products[product_id].add == false){
                
        let product_structure = (`
        
        <div class="product_cart">
            <div class="product_division">
                <img class="eliminate_btn" src="./icons/Property 1=delete-x.svg" alt="">
                <img class="cart_product_image" src="${products[product_id].image_url}" alt="">

                <div class="product__cart_description">
                    <span class="cart_product_name">${products[product_id].product_name}</span>
                    <span class="cart_product_weight">$${products[product_id].product_price} USD${kilogramos}</span>
                </div>
            </div>

            
            <div class="product_division product_details">
                <div class="product_quantity_container">
                    <button onclick="amount_of_products(${products[product_id].prod_id}, ${subtract})" class="less_product_btn">-</button>
                    <input id="product_quantity_${products[product_id].prod_id}" class="product_quantity" type="text" value="1">
                    <button onclick="amount_of_products(${products[product_id].prod_id}, ${add})" class="more_product_btn">+</button>
                </div>

                <div class="products_price_container">
                    <span id="total_${products[product_id].prod_id}" class="products_price">$26.82</span>
                </div>
            </div>
            

        </div>
    `)

        let new_product = document.createElement("div");
        new_product.innerHTML = product_structure;
        
        products__container.insertAdjacentElement("beforeend", new_product)

        products[product_id].add = true; // It prevents the same product to be added again
        number_of_items.innerHTML = (items_number_count += 1)

        product_total_price(products[product_id].prod_id, 1)
    }

    

}



