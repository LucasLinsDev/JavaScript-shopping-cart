console.log('running');


//select all add-cart class
let carts =document.querySelectorAll('.add-cart');


//Array the object the products

let products=[
  {
    name:'Grey Tshirt',
    tag:'greytsheit',
    price:15,
    inCart:0
  },
  {
    name:'Grey Tshirt',
    tag:'greytsheit',
    price:15,
    inCart:0
  },
  {
    name:'Grey Tshirt',
    tag:'sdfds',
    price:15,
    inCart:0
  },
  {
    name:'Grey Tshirt',
    tag:'ass',
    price:15,
    inCart:0
  },
]

for (let i=0; i< carts.length; i++){
  //add event click for element with class .add-cart
  carts[i].addEventListener('click',()=>{
    cartNumbers(products[i]);
  })
}




function onLoadCartNumbers(){
  
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers){
      document.querySelector('.cart span').textContent=productNumbers;
  }

}

function cartNumbers(product){
  
  console.log('The product clicked is',product);

  //get cartNumber in localStorage with getItem('cartNumbers')
  let productsNumbers= localStorage.getItem('cartNumbers');
  //verify type the variable
  console.log(typeof productNumbers);
  //parseInt convert variable to integers
  productsNumbers=parseInt(productsNumbers);

  if(productsNumbers){
    
  //setting in localStore cartNumbers
  localStorage.setItem('cartNumbers',productsNumbers + 1)
  document.querySelector('.cart span').textContent=productsNumbers+1;
  
  }else{
    
  localStorage.setItem('cartNumbers',1)
  document.querySelector('.cart span').textContent=1;
  
  }

  setItems(product);


}

function setItems(product){

  let cartItems=localStorage.getItem('productsInCart');

  cartItems=JSON.parse(cartItems);
  
  console.log('My cartItems are',cartItems)

  if(cartItems != null){
    if(cartItems[product.tag] == undefined){
      cartItems={
        ...cartItems,
        [product.tag]:product
      }
    }
    cartItems[product.tag].inCart +=1;
  }else{
    product.inCart=1;
    cartItems={
        [product.tag]:product
    }
  }

  localStorage.setItem('productsInCart',JSON.stringify(cartItems));

}



onLoadCartNumbers();