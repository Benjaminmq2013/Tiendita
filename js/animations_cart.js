let close_button = document.querySelector(".close_icon");
let cart = document.querySelector(".cart");

let shopping_cart_icon = document.querySelector(".shopping_cart_icon");
let number_of_items = document.querySelector(".number_of_items");


document.addEventListener("mousedown", (event)=>{
    if (event.target == document){
        hidde_cart()
    } 
})

close_button.addEventListener("click", hidde_cart)


function hidde_cart(){
    cart.classList.remove("open_cart")
    cart.classList.add("close_cart")

    setTimeout(()=>{
        cart.classList.add("display-none")
    }, 200)
}

// Show the shopping cart
let shopping_cart_btn = document.querySelector(".shopping_cart_btn");
shopping_cart_btn.addEventListener("click", show_cart);

function show_cart(){
    cart.classList.remove("display-none")
    cart.classList.remove("close_cart");
    cart.classList.add("open_cart");   
}