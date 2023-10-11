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
modalCart.addEventListener('click',() => {
  modalCart.style.display ='none';
})
modalProduct.addEventListener('click', (event) => {
  event.stopPropagation();
})

//Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Detail Product
function showInfo(menuNumber) {

  for (let i = 1; i <= 4; i++) {
      document.getElementById('info' + i).style.display = 'none';
  }
  document.getElementById('info' + menuNumber).style.display = 'block';

 
}
// slide show sản phẩm
var currentIndex = 0;
var slideWidth = 300; 
var numSlides = document.querySelectorAll('.news-item').length;

var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');
var sliderContent = document.querySelector('.other-product2');

prevButton.addEventListener('click', function() {
  currentIndex--;
  if (currentIndex < 0) {
      currentIndex = numSlides - 1;
  }
  updateSlider();
});

nextButton.addEventListener('click', function() {
  currentIndex++;
  if (currentIndex >= numSlides) {
      currentIndex = 0;
  }
  updateSlider();
});

function updateSlider() {
  var offsetX = -currentIndex * slideWidth;
  sliderContent.style.transform = 'translateX(' + offsetX + 'px)';
}
//Cart

// const products = [
//   {
//     id: 1,
//     name: 'Run star HIKE low black white',
//     image: '/assets/img/product/hike_low.jpg',
//     price: '1,100,000'
//   },
//   {
//     id: 2,
//     name: 'Converse Renew Canvas',
//     image: '/assets/img/product/chunk_renew.png',
//     price: '1,600,000'
//   },
//   {
//     id: 3,
//     name: 'Converse Run Star Move',
//     image: '/assets/img/product/move_platform.png',
//     price: '1,900,000'
//   },
//   {
//     id: 4,
//     name: 'Run star HIKE low black white',
//     image: '/assets/img/product/run_star_hike_default_1.png',
//     price: '1.100,000'
//   }
// ];
// let productInCart = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

// function saveToLocalStorage () {
//   localStorage.setItem('products', JSON.stringify(productInCart));
// }

// //Index page
// function renderProducts () {
//   let data = ``;
//   products.map(value => {
//     data += `
//       <div class='col-3'>
//         <div class='card'>
//           <img src='${value.image}' class='card-img-top' alt=''>
//           <div class='card-body'>
//             <h5 class='card-title'>${value.name}</h5>
//             <p class='card-text'>${value.price}</p>
//             <button onclick='addToCart(${value.id})' class='btn btn-primary'>Add to cart</button>
//           </div>
//         </div>
//       </div>
//     `;
//   });
//   document.getElementById('products').innerHTML = data;
// }

// function addToCart () {
//   let idPro  = products.id;
//   let id = idPro.value;
//   let checkProduct = productInCart.some(value => value.id === id);

//   if (!checkProduct) {
//     let product = products.find(value => value.id === id);
//     productInCart.unshift({
//       ...product,
//       quantity: 1
//     });
//     saveToLocalStorage();
//     calculatorTotal();
//   } else {
//     let product = productInCart.find(value => value.id === id);
//     let getIndex = productInCart.findIndex(value => value.id === id);
//     productInCart[getIndex] = {
//       ...product,
//       quantity: ++product.quantity
//     };
//     saveToLocalStorage();
//   }
// }

// function calculatorTotal () {
//   document.getElementById('quantity').innerHTML = productInCart.length;
// }

// function indexLoadPage () {
//   renderProducts();
//   calculatorTotal();
// }

// //Cart page
// function renderProductsToTable () {
//   let data = ``;
//   productInCart.map((value, index) => {
//     data += `
//       <tr>
//         <td>${value.name}</td>
//         <td><img width='100' src='${value.image}' alt=''></td>
//         <td>${value.price}</td>
//         <td>
//           <button onclick='plusQuantity(${index})' class='btn btn-secondary'>+</button>
//           <span class='mx-2'>${value.quantity}</span>
//           <button onclick='minusQuantity(${index}, ${value.quantity})' class='btn btn-secondary'>-</button>
//         </td>
//         <td>${(value.quantity * value.price.replace(/,/g, '')).toLocaleString()}</td>
//         <td><button onclick='deleteProductInCart(${index})' class='btn btn-danger'>Delete</button></td>
//       </tr>
//     `;
//   });
//   document.getElementById('products-cart').innerHTML = data;
// }

// function plusQuantity (index) {
//   productInCart[index] = {
//     ...productInCart[index],
//     quantity: ++productInCart[index].quantity
//   };
//   saveToLocalStorage();
//   renderProductsToTable();
//   totalMoney()
// }

// function minusQuantity (index, quantity) {
//   if (quantity > 1) {
//     productInCart[index] = {
//       ...productInCart[index],
//       quantity: --productInCart[index].quantity
//     };
//     saveToLocalStorage();
//     renderProductsToTable();
//     totalMoney()
//   } else {
//     alert('Quantity min is 1');
//   }
// }

// function deleteProductInCart (index) {
//   productInCart.splice(index, 1);
//   saveToLocalStorage();
//   renderProductsToTable();
//   totalMoney()
// }

// function totalMoney () {
//   if (productInCart && Array.isArray(productInCart) && productInCart.length > 0) {
//     let total = 0;
//     for (let i = 0; i < productInCart.length; i++) {
//       total += productInCart[i].quantity * productInCart[i].price.replace(/,/g, '');
//     }
//     document.getElementById("total-money").innerHTML = total.toLocaleString()
//   }
// }

// function cartLoadPage () {
//   renderProductsToTable();
//   totalMoney();
// }