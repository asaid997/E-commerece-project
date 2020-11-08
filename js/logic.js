const ProductManager = function () {
    const products = [{
        id: 1,
        name: "pillow",
        price: 20,
        image_url: "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/43855845/3fa562604381fa3531b62fc7a026f673.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=77bafa2b440408237308b4d8d6ca8aa3"
    },
    {
        id: 2,
        name: "speaker",
        price: 50,
        image_url: "https://brain-images-ssl.cdn.dixons.com/5/6/10204265/u_10204265.jpg"
    },
    {
        id: 3,
        name: "mouse",
        price: 30,
        image_url: "https://compass-ssl.microsoft.com/assets/4c/d7/4cd77705-8d4a-4311-907f-0c2603d6d814.jpg?n=pop2.jpg"
    },
    {
        id: 4,
        name: "lamp",
        price: 15,
        image_url: "https://cb2.scene7.com/is/image/CB2/SnakeTableLampSHF19/?$web_zoom$&190430165808&wid=450&hei=450"
    },
    {
        id: 5,
        name: "Monitor stand",
        price: 60,
        image_url: "https://cdn.azrieli.com/Images/744f5d58-c817-4b6b-b457-d3330f6ce298/Normal/27163498.jpg"
    },
    {
        id: 6,
        name: "Bluetooth earphones",
        price: 40,
        image_url: "https://i0.wp.com/gobaseus.com/wp-content/uploads/2020/01/Baseus-Encok-True-Wireless-Earphones-W04-Pro_Accessories_11692_1.png?fit=1024%2C1024&ssl=1"
    },
    {
        id: 7,
        name: "Comb",
        price: 7,
        image_url: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Plastic_comb%2C_2015-06-07.jpg"
    },
    {
        id: 8,
        name: "Watch",
        price: 35,
        image_url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MY9K2_VW_34FR+watch-44-stainless-gold-cell-6s_VW_34FR_WF_CO?wid=750&hei=712&trim=1,0&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1599269261000,1599537309000"
    },
    {
        id: 9,
        name: "Froezen cup",
        price: 15,
        image_url: "https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/6804057863365"
    },
    {
        id: 10,
        name: "Iphone X case",
        price: 55,
        image_url: "https://images-na.ssl-images-amazon.com/images/I/71iLZlFm2vL._AC_SL1500_.jpg"
    },
    {
        id: 11,
        name: "Notebook",
        price: 6,
        image_url: "https://images-na.ssl-images-amazon.com/images/I/71Y6vqQeNtL._AC_SY355_.jpg"
    }]

    const cart = []

    const getProducts = () => products

    const getCart = () => cart

    const addToCart = function (id) {
        for (let product of products)
            if (product.id == id)
                cart.push(product)
    }

    const removeFromCart = function (id) {
        for (let index in cart)
            if (cart[index].id == id){
                cart.splice(index, 1)
                break;
            }
    }

    return {
        getProducts,
        getCart,
        addToCart,
        removeFromCart
    }
}

