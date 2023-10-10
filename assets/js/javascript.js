// Open Cart
const openCart = document.querySelector('.js-openCart');
const closeCart = document.querySelector('.cart__header-close');
const modalCart = document.querySelector('.modal__cart');
const modalProduct = document.querySelector('.modal__cart-container');
openCart.addEventListener('click',() => {
  modalCart.classList.add('active-cover');
})
closeCart.addEventListener('click',() => {
  modalCart.classList.remove('active-cover')
})
