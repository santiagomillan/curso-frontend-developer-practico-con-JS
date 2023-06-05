const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');
const cardsConatiner = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobilepMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    console.log('click 5')
    const isAsideClose = shoppingCardContainer.classList.contains('inactive')

    if(!isAsideClose){
        shoppingCardContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu() {
    console.log('click 4')
    const isAsideClose = shoppingCardContainer.classList.contains('inactive')

    if(!isAsideClose){
        shoppingCardContainer.classList.add('inactive')
    }

    closeProductDetailAside()
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    console.log('click 3')
    const isMobileClosed = mobileMenu.classList.contains('inactive')
    const ismenuDesktopClosed = menuEmail.classList.contains('inactive')
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')
    if(!isMobileClosed){
        mobileMenu.classList.add('inactive')
    }
    if(!ismenuDesktopClosed){
        desktopMenu.classList.add('inactive')
    }
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }
    shoppingCardContainer.classList.toggle('inactive');
}

const productList =[];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Bike 2",
    price: 122,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Bike 2",
    price: 122,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})


function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add("product-card")
        
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
        productImg.addEventListener('click', openProductDetailAside)

        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")

        const productInfoDiv = document.createElement("div")

        const productPrice = document.createElement("p")
        productPrice.innerText = "$" + product.price

        const productPName = document.createElement("p")
        productPName.innerText = product.name
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productPName)

        const productInfoFigure = document.createElement("figure")
        const productImgCard = document.createElement("img")
        productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg")

        productInfoFigure.appendChild(productImgCard)

        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)

        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)

        cardsConatiner.appendChild(productCard)
    }
}
renderProducts(productList)

function openProductDetailAside(){
    
    shoppingCardContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive')
}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}