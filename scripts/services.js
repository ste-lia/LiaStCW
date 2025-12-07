
let cartFromStorage = localStorage.getItem('cart');


let cart = {
}

if (cartFromStorage) {
   cart = JSON.parse(cartFromStorage)
   updateDOM()
}

let services = [
   {
      name: 'Лэндинг',
      image: '/img/project.svg',
      price: 900
   },
   {
		name: 'Корпоративный сайт',
		image: '/img/email-marketing_10515616.png',
		price: 1000
	},
	{
		name: 'Интернет магазин',
		image: '/img/online-shopping_6189466.png',
		price: 1500
	},
	{
		name: 'Портал',
		image: '/img/web-programming_18810172.png',
		price: 2000
	},

]


function createProductCard(service) {

   let article = document.createElement('article');
   let h3 = document.createElement('h3');
   let img_card = document.createElement('img');
   let div_img = document.createElement('div');
   let h5 = document.createElement('h5');
   let button = document.createElement('button');

   article.classList.add('card');
   img_card.classList.add('img_card_style');
   div_img.classList.add("img_container");
   h5.classList.add('price_product');
   button.classList.add('buy_btn');

	h3.textContent = service.name
   button.textContent = 'Add to cart'
   h5.textContent = service.price + " EUR"

	img_card.setAttribute('src', service.image);
   img_card.setAttribute('alt', 'Лэндинг');

button.addEventListener('click', () => {
      addProduct(service.name, service.price, service.image)
   })

	div_img.insertAdjacentElement('afterbegin', img_card);
   article.insertAdjacentElement('beforeend', h3);
   article.insertAdjacentElement('beforeend', div_img);
   article.insertAdjacentElement('beforeend', h5);
   article.insertAdjacentElement('beforeend', button);

   return article

}

let contain = document.querySelector('.contain');
for (const service of services) {
   let card = createProductCard(service)

   contain.insertAdjacentElement('beforeend', card)
}
// --------------------------------------------

// dam cu mouseul peste shopping cart, apare
let cartImage = document.querySelector('.shoppingCart img');

let cartContent = document.querySelector('.cartContent');
   cartImage.addEventListener('mouseover', () => {
   cartContent.classList.add('cartContentVisible')


   let nav = document.querySelector('nav');


   cartContent.addEventListener('mouseleave', () => {
   cartContent.classList.remove('cartContentVisible')
   })

   nav.addEventListener('mouseleave', () => {
   cartContent.classList.remove('cartContentVisible')
   })


})



function addProduct(product, price, image){
   if (cart[product] != null) {
      cart[product].quantity++;
   } else {
      cart[product] = {}
      cart[product].quantity = 1
      cart[product].price = price;
      cart[product].image = image;
   }

   updateDOM()
}

function deleteProduct(product) {
   if (cart[product].quantity > 1) {
      cart[product].quantity--;
   } else {
      delete cart[product];
   }

   updateDOM()
}

function updateDOM() {
   let cartList = document.querySelector('.shoppingCart');
   cartList.innerHTML = "";


   let totalPrice = 0;

   for (let product in cart) {

      let listItem = document.createElement('li');
      listItem.classList.add('shoppingCartElement')

		let productImage = document.createElement('img')
		productImage.setAttribute('src', cart[product].image);
		productImage.classList.add('.cartElementImage')

      listItem.textContent = product + ": " + cart[product].quantity + " единиц";

        let totalProductPrice = cart[product].price * cart[product].quantity;

      listItem.textContent += ". " + totalProductPrice + " EUR. "

      let removeButton = document.createElement('button');
      removeButton.textContent = 'удалить единицу';

      removeButton.addEventListener('click', () => {
            deleteProduct(product)
      })



      listItem.insertAdjacentElement('beforeend', productImage)
      listItem.insertAdjacentElement('beforeend', removeButton);
      cartList.insertAdjacentElement('beforeend', listItem)

      totalPrice += totalProductPrice
   }

   let price = document.querySelector(".price");
   price.textContent = "Итоговая сумма: " + totalPrice + " EUR.";

   localStorage.setItem('cart', JSON.stringify(cart))
}


// let card = document.querySelector('.card');

// card.addEventListener('click', function() {
// 	alert('Card apasat')
// });



// function resetCart() {
//    cart = {}

//    updateDOM();
// }









