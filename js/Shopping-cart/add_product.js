// Base de datos de pruebas. Productos, nombres y precio
"use strict"

let products__container = document.querySelector(".products__container");


function add_product(product_id){
    console.log(products[product_id])

    let product_structure = (`
        <div class="product_cart">
            <img class="eliminate_btn" src="./icons/Property 1=delete-x.svg" alt="">
            <img class="cart_product_image" src="./images/Name=Limon.jpg" alt="">

            <div class="product__cart_description">
                <span class="cart_product_name">Limón con semilla</span>
                <span class="cart_product_weight">26.82/kg</span>
            </div>

            <div class="product_quantity_container">
                <button class="less_product_btn">-</button>
                <input class="product_quantity" type="text">
                <button class="more_product_btn">+</button>
            </div>

            <div class="products_price_container">
                <span class="products_price">$26.82</span>
            </div>

        </div>
    `)
    let new_product = document.createElement("div");
    new_product.innerHTML = product_structure;
    console.log(new_product)
    products__container.insertAdjacentElement("beforeend", new_product)
}



