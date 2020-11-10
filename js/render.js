const Renderer = function () {
    const container = $('#content-container')

    const createElement = function (type, style, text) {
        const element = $(`<${type}>${text}</${type}>`)
        element.addClass(style)
        return element
    }
    const createImageElement = function (url, style) {
        const element = createElement("img", style, "")
        element.attr('src', url)
        return element
    }

    const clickNavButton = function (id) {
        $('#all').removeClass('clicked-nav-item');
        $('#cart').removeClass('clicked-nav-item');
        $('#about').removeClass('clicked-nav-item');
        $(id).addClass('clicked-nav-item')
    }

    // render productsssssss
    const getProductElement = function (product) {
        const productContainer = createElement("div", "item-container", "")
        productContainer.attr('data-id', product.id)

        const imageElement = createImageElement(product.image_url, "image")

        const addToCart = createElement("i", "addToCart fas fa-plus", "")
        productContainer.append(addToCart)

        const namePriceContainer = createElement("div", "name-price-container", "")

        const priceElement = createElement("div", "price", `${product.price}$`)

        const nameElement = createElement("div", "name", `${product.name}`)

        namePriceContainer.append(nameElement)
        namePriceContainer.append(priceElement)


        productContainer.append(imageElement)
        productContainer.append(namePriceContainer)

        productContainer.hover(function () { addToCart.css("visibility", "visible") }, function () { addToCart.css("visibility", "hidden") })

        return productContainer
    }

    const renderProducts = function (products) {
        container.empty()
        const allProductsElements = createElement("div", "all-items-container", "")
        container.append(allProductsElements)

        for (let product of products) {
            const element = getProductElement(product)

            allProductsElements.append(element)
        }
        clickNavButton('#all')

    }

    // render carttttttt
    const getCartProductElement = function (product) {
        const itemContainer = createElement("div", "cart-product-container", "")
        itemContainer.attr('data-id', product.id)

        const image = createImageElement(product.image_url, "cart-image")
        itemContainer.append(image)

        const namePriceContainer = createElement("div", "cart-name-price-container", "")
        itemContainer.append(namePriceContainer)

        const name = createElement("div", "cart-text", product.name)
        namePriceContainer.append(name)

        const price = createElement("div", "cart-text", `${product.price}$`)
        namePriceContainer.append(price)

        const removeFromCart = createElement("div", "removeFromCart far fa-trash-alt", "")
        itemContainer.hover(function () { removeFromCart.css("visibility", "visible") }, function () { removeFromCart.css("visibility", "hidden") })
        itemContainer.append(removeFromCart)

        return itemContainer
    }
    const renderCart = function (cart) {
        container.text("")

        const text = createElement('div', "text", "")
        container.append(text)

        if (cart.length > 0) {
            text.text("Items in cart:")

            const cartContainer = createElement("div", "cart-container", "")
            container.append(cartContainer)

            let sum = 0

            for (let item of cart) {
                const element = getCartProductElement(item)

                cartContainer.append(element)

                sum += item.price
            }
            const total = createElement("div", "total-price", `Total to pay: ${sum}$`)
            cartContainer.append(total)
        }
        else {
            text.text("No items yet")
        }
        clickNavButton('#cart')
    }
    const renderAbout = function () {
        container.text(`About Tripwire
        Formed in 2005 as a humble independent developer and founded by gamers who found success in the video game modding community, Tripwire Interactive has developed and self-published multiple critically acclaimed titles in the wildly popular Killing Floor and Rising Storm franchises, which have collectively sold over 20 million units to date. The studio’s most recent hit release, Maneater, breaks new ground in the popular action RPG genre and finds players taking on the role of a deadly shark with the uncanny ability to evolve as it feeds.\n
        Since then, Tripwire Interactive has expanded its business and now turns its experience and resources to include publishing titles spanning multiple platforms and genres from other talented independent studios. The publishing division named “Tripwire Presents” aims to help like-minded independent studios bring their titles to market, including Chivalry 2 developed by Torn Banner Studios, Espire 1: VR Operative developed by Digital Lode, and Road Redemption developed by EQ Games and Pixel Dash Studios.\n
        Contact\n
        For troubleshooting please head to our support center\n
        
        For publishing inquiries: publishing@tripwireinteractive.com\n
        
        For press inquiries: PR@tripwireinteractive.com\n
        
        For business inquiries: business@tripwireinteractive.com\n
        `)
        clickNavButton('#about')
    }


    return {
        renderAbout,
        renderCart,
        renderProducts
    }
}