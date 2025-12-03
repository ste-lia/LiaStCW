
let cartFromStorage = localStorage.getItem('cart');


let cart = {
}

if (cartFromStorage) {
   cart = JSON.parse(cartFromStorage)
   updateDOM()
}

function addProduct(product, price){
   if (cart[product] != null) {
      cart[product].quantity++;
   } else {
      cart[product] = {}
      cart[product].quantity = 1
      cart[product].price = price;
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

      listItem.textContent = product + ": " + cart[product].quantity + " единиц";

        let totalProductPrice = cart[product].price * cart[product].quantity;

      listItem.textContent += ". " + totalProductPrice + " EUR. "

      let removeButton = document.createElement('button');
      removeButton.textContent = 'удалить единицу';

      removeButton.addEventListener('click', () => {
            deleteProduct(product)
      })


      listItem.insertAdjacentElement('beforeend', removeButton);

      cartList.insertAdjacentElement('beforeend', listItem)

      totalPrice += totalProductPrice
   }

   let price = document.querySelector(".price");
   price.textContent = "Итоговая сумма: " + totalPrice + " EUR.";

   localStorage.setItem('cart', JSON.stringify(cart))
}


function resetCart() {
   cart = {}

   updateDOM();
}



let produse = [
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


function createProductCard(produs) {

   let article = document.createElement('article')
   let h3 = document.createElement('h3')
   let img_card = document.createElement('img');
   let div_imagine = document.createElement('div');
   let h5 = document.createElement('h5')
   let button = document.createElement('button')

   article.classList.add('card')
   img_card.classList.add('img_card_style');
   div_imagine.classList.add("image_container");
   h5.classList.add('pret_produs')
   button.classList.add('buy_button')

	h3.textContent = produs.name
   button.textContent = 'Add to cart'
   h5.textContent = product.price + " EUR"

	img_card.setAttribute('src', produs.image)
   img_card.setAttribute('alt', 'Лэндинг')

button.addEventListener('click', () => {
      addProduct(produs.name, produs.price, produs.image)
   })

	div_imagine.insertAdjacentElement('afterbegin', img_card)
   article.insertAdjacentElement('beforeend', h3)
   article.insertAdjacentElement('beforeend', div_imagine)
   article.insertAdjacentElement('beforeend', h5)
   article.insertAdjacentElement('beforeend', button)

   return article


}



let contain = document.querySelector('.contain');
for (const produs of produse) {
   let card = createProductCard(produs)

   contain.insertAdjacentElement('beforeend', card)
}