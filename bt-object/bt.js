class phone {
  constructor(id, name, price, quantity) {
    this.name = name;
    this.id = id;
    this.price = price;
    this.quantity = quantity;
  }
}
let urlImage = "https://cdn.tgdd.vn/Products/Images/42/271734/xiaomi-redmi-10a-thumb-600x600.jpg";
let iphone14 = new phone(1, "iphone 16", 20000, 14);
function renderPhone(phone) {
  return `<tr class = "row${phone.id}">
  <th scope="row">${phone.id}</th>
  <td>${phone.name}</td>
  <td>${phone.price}</td>
  <td>${phone.quantity}</td>
  <td><button data-id=${phone.id} id="delete" class="btn btn-danger">Delete</button></td>
  <td><button data-id=${phone.id} id="edit" class="btn btn-danger">Edit</button></td>
</tr>`
}
let products = localStorage.products ? JSON.parse(localStorage.products) : [];
renderProducts(products);

// ---------- in ra màn hình 
function renderProducts(products) {
  let productsElement = document.querySelector('#products');
  let productHtml = "";
  for (let item of products) {
    productHtml += renderPhone(item);
  }

  productsElement.innerHTML = productHtml;
}

// ----------------add
function add() {
  let btnAdd = document.querySelector('.btn');
btnAdd.addEventListener('click', function () {
  let name = document.querySelector('#name').value;
  let quantity = document.querySelector('#quantity').value;
  let id = document.querySelector('#id').value;
  let price = document.querySelector('#price').value;

  let newPhone = new phone(id, name, price, quantity);
  
  products.push(newPhone);
 

  renderProducts(products);
  
  document.querySelector('#name').value = "";
  document.querySelector('#quantity').value = "";
  document.querySelector('#id').value = "";
  document.querySelector('#price').value = "";
  deleteProducts ();
  editProducts ();
  updateProducts ();
  localStorage.products = JSON.stringify(products);

})

}


// --------------xoá
function deleteProducts (){
let btnDelete = document.querySelectorAll('#delete');
btnDelete.forEach(function(item){
  item.addEventListener('click',function (){
    let idDelete = this.getAttribute('data-id');
    if(confirm('do u want delete it ?')){
      let index = products.findIndex(function(item){
        return item.id == idDelete ;
      })
    if (index >=0) {
      products.splice(index,1);
    }
    let deleteProduct = document.querySelector(`.row${idDelete}`)
    deleteProduct.remove();
    localStorage.products = JSON.stringify(products);


    }
    
  })
  
})

}
// ------------edit
let idUpdate ;
function editProducts (){

let btnEdit = document.querySelectorAll('#edit');
btnEdit.forEach(function(item){
 item.addEventListener('click',function(){
  let idEdit = this.getAttribute('data-id');
  idUpdate = idEdit ;
  let index = products.findIndex(function(item){
      return item.id == idEdit;
    })
  if (index >=0){
    let productFind = products[index];
    document.querySelector('#name').value = productFind.name;
    document.querySelector('#quantity').value = productFind.quantity;
    document.querySelector('#id').value = productFind.id;
    document.querySelector('#price').value = productFind.price;
  }
  
 })
})
}
//  --------------update
function updateProducts (){
let btnUpdate = document.querySelectorAll ('.update');
btnUpdate.forEach(function(item){
  item.addEventListener('click',function(){
    let index = products.findIndex(function(item){
      return item.id == idUpdate;
    })
      if ( index >= 0) {
        let productFind = products[index];
        productFind.name = document.querySelector('#name').value;
        productFind.quantity = document.querySelector('#quantity').value;
        productFind.id = document.querySelector('#id').value;
        productFind.price = document.querySelector('#price').value;
      }
      renderProducts(products);
      deleteProducts ();
      localStorage.products = JSON.stringify(products);


  })
})
}

function render (){
return `  <div class="row mx-4">
                     
<div>
    <input type="text" placeholder="name" id="name">
    <input type="text" placeholder="quantity" id="quantity">

    <input type="text" placeholder="id" id="id">
    <input type="text" placeholder="price" id="price">

    <button class="btn btn-danger mt-4 mb-4">ADD</button>
    <button class="update btn-danger mt-4 mb-4">update</button>
    <main class="main">
      <table class="table" >
       <thead>
         <tr>
           <th scope="col">id</th>
           <th scope="col">name</th>
           <th scope="col">price</th>
           <th scope="col">quantity</th>
           <th scope="col">active</th>
         </tr>
       </thead>
       <tbody id="products">
        
       </tbody>
     </table>
     </main>
</div>
</div>`

}
function render1 (){
let a = document.querySelector('#tonghop');
a.innerHTML = render();
add ();
renderProducts(products);
deleteProducts ();
  editProducts ();
  updateProducts ();

}

function renderPhoneImage(phone){
  return `<div class="col-12 col-sm-6 col-md-4 col-lg-4" id="product${phone.id}">
  <div class="product">
    <div class="product-img">
      <img
        src=${urlImage}
        alt=""
      />
    </div>
    <div class="produc-name">
      <a class="produc-name__link">${phone.name}</a>
    </div>
    <div class="produc-price">
      <p class="produc-price__content text-danger">${phone.price}</p>
      <p class="produc-price__sale text-danger">-24%</p>
    </div>

    <div class="product-quantity">
      <p class="product-quantity__progress">${phone.quantity}</p>
    </div>
  </div>
</div>
`
}

function renderproducts1 (products){
let productsElement1 = document.querySelector('#tonghop');
  let productHtml1 = "";
  for (let item of products) {
    productHtml1 += renderPhoneImage(item);
  }

  productsElement1.innerHTML = productHtml1;

}
