// Base de datos de pruebas. Productos, nombres y precio
"use strict"

let products__container = document.querySelector(".products__container");
let items_number_count = 0;

let kilogramos = "/kg";

let subtract = "subtract" //Those two variables will differenciate the buttons to add and subtract product.
let add = "add" //Those two variables will differenciate the buttons to add and subtract product.

let products_cart_container = document.querySelector(".products_cart_container");
let empty_cart_message = document.querySelector(".empty_cart_message")

function add_product(product_id){

    if (products[product_id].discount == true){
        kilogramos = "/kg"
    } else if (products[product_id].discount == false){
        kilogramos = ""
    }    

    if (products[product_id].add == false){
        let id = products[product_id];
        let product_structure = (`
        
        <div id="product_cart_${id.prod_id}" class="product_cart">
            <div id="product_${id.prod_id}" class="product_division">
                <img onclick="remove_product(${id.prod_id})" class="eliminate_btn" src="./icons/Property 1=delete-x.svg" alt="">
                <img class="cart_product_image" src="${id.image_url}" alt="">

                <div class="product__cart_description">
                    <span class="cart_product_name">${id.product_name}</span>
                    <span class="cart_product_weight">$${id.product_price} USD${kilogramos}</span>
                </div>
            </div>

            
            <div id="product_${id.prod_id}_details" class="product_division product_details">
                <div class="product_quantity_container">
                    <button onclick="amount_of_products(${id.prod_id}, ${subtract})" class="less_product_btn">-</button>
                    <input id="product_quantity_${id.prod_id}" class="product_quantity" type="text" value="1">
                    <button onclick="amount_of_products(${id.prod_id}, ${add})" class="more_product_btn">+</button>
                </div>

                <div class="products_price_container">
                    <span id="total_${id.prod_id}" class="products_price">$26.82</span>
                </div>
            </div>
            

        </div>
    `)

        let new_product = document.createElement("div");
        new_product.innerHTML = product_structure;
        
        products__container.insertAdjacentElement("beforeend", new_product)

        id.add = true; // It prevents the same product to be added again
        number_of_items.innerHTML = (items_number_count += 1)

        products_cart_container.classList.remove("display-none")
        empty_cart_message.classList.add("display-none") //We disable the message "Your car is empty"


        product_total_price(id.prod_id, 1)

        shopping_cart_btn.classList.add("add_product_alert") //We alert the user to open the shopping cart to see when they add a product
        setTimeout(()=>{
            shopping_cart_btn.classList.remove("add_product_alert")
        }, 1000)
        
    }

    

}



