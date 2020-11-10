const renderer = Renderer()

const productManager = ProductManager()

$('#all').on("click", function () {
    renderer.renderProducts(productManager.getProducts())
})

$('#cart').on("click", function () {
    renderer.renderCart(productManager.getCart())
})

$('#about').on("click", function () {
    renderer.renderAbout()
})


let myTimeout
const Toast = function (message) {
    clearTimeout(myTimeout)

    // Get the snackbar DIV
    let snackBar = document.getElementById("snackbar");
    snackBar.innerHTML = message
    
    // Add the "show" class to DIV
    snackBar.className = "show";

    // After 1.4 seconds, remove the show class from DIV
    myTimeout = setTimeout(function () { snackBar.className = snackBar.className.replace("show", ""); }, 1400);
}

$('#content-container').on("click", ".addToCart", function () {
    const id = $(this).closest('.item-container').data('id')
    productManager.addToCart(id)
    const name = $(this).closest('.item-container').find('.name').text()
    Toast(`Added ${name} to cart`)
})

$('#content-container').on("click", ".removeFromCart", function () {
    const id = $(this).closest('.cart-product-container').data('id')
    productManager.removeFromCart(id)
    renderer.renderCart(productManager.getCart())
})




