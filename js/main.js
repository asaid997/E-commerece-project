const RendererMod = Renderer()

const PManager = ProductManager()

$('#all').on("click", function () {
    RendererMod.renderProducts(PManager.getProducts())
})

$('#cart').on("click", function () {
    RendererMod.renderCart(PManager.getCart())
})

$('#about').on("click", function () {
    RendererMod.renderAbout()
})



const Toast = function (message) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    x.innerHTML = message
    
    // Add the "show" class to DIV
    x.className = "show";

    // After 1.4 seconds, remove the show class from DIV
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 1400);
}

$('#content-container').on("click", ".addToCart", function () {
    const id = $(this).closest('.item-container').data('id')
    PManager.addToCart(id)
    const name = $(this).closest('.item-container').find('.name').text()
    Toast(`Added ${name} to cart`)
})

$('#content-container').on("click", ".removeFromCart", function () {
    const id = $(this).closest('.cart-product-container').data('id')
    PManager.removeFromCart(id)
    RendererMod.renderCart(PManager.getCart())
})




