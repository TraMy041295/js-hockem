$(function() {

class phone {
  constructor(id, name, price, quantity) {
    this.name = name;
    this.id = id;
    this.price = price;
    this.quantity = quantity;
  }
}
let urlImage = "https://cdn.tgdd.vn/Products/Images/42/271734/xiaomi-redmi-10a-thumb-600x600.jpg";

function renderPhone(phone) {
  return `<tr class = "row${phone.id}">
  <th scope="row">${phone.id}</th>
  <td>${phone.name}</td>
  <td>${phone.price}</td>
  <td>${phone.quantity}</td>
  <td><button data-id=${phone.id} class="btn btn-danger btn-delete">Delete</button></td>
  <td><button data-id=${phone.id} class="btn btn-danger btn-edit">Edit</button></td>
</tr>`
}
let products = localStorage.products ? JSON.parse(localStorage.products) : [];
renderProducts(products);

// ---------- in ra màn hình 
function renderProducts(products) {
  let productsElement = $('#products');
  for (let item of products) {
     let productHtml = renderPhone(item);
     productsElement.append(productHtml);
  }
}






function render (){
return `  <div class="row mx-4">
                     
<div>
    <input type="text" placeholder="name" id="name">
    <input type="text" placeholder="quantity" id="quantity">

    <input type="text" placeholder="id" id="id">
    <input type="text" placeholder="price" id="price">

    <button class="btn btn-danger mt-4 mb-4 btn-add">ADD</button>
    <button class="btn-update btn-danger mt-4 mb-4">update</button>
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
let productEl = $('#tonghop');
$(document).on("click", ".fix", function(){
    let productElHtml = render();
    productEl.append(productElHtml);
    renderProducts(products);
})
// -------------add
$(document).on("click",".btn-add", function(){
  let name = $('#name').val();
  let quantity = $('#quantity').val();
  let id = $('#id').val();
  let price = $('#price').val();
  let newPhone = new phone(id, name, price, quantity);
  products.push(newPhone);
  localStorage.setItem("products",JSON.stringify(products));
  let html = renderPhone(newPhone);
  productEl.append(html);
  $('#name').val("");
  $('#quantity').val("");
  $('#id').val("");
  $('#price').val("");
})
// --------------delete
$(document).on("click",".btn-delete", function(){
        let idDelete = $(this).attr('data-id');
        if(confirm('do u want delete it ?')){
          let index = products.findIndex(function(item){
            return item.id  == idDelete ;
          })
        
        if (index >=0) {
          products.splice(index,1);
        }
      }
        $(`.row${idDelete}`).remove();
        localStorage.setItem("products",JSON.stringify(products));
    
      
    })
// --------------edit
    let idUpdate ;
    $(document).on("click",".btn-edit", function(){
      let idEdit = $(this).attr('data-id');
      idUpdate = idEdit ;
      let index = products.findIndex(function(item){
          return item.id == idEdit;
        })
      if (index >=0){
        let productFind = products[index];
        $('#name').val(productFind.name);
        $('#quantity').val(productFind.quantity);
        $('#id').val(productFind.id);
        $('#price').val(productFind.price);
      }
      localStorage.setItem("products",JSON.stringify(products));
    })

// ----------update
$(document).on("click",".btn-update", function(){
      let index = products.findIndex(function(item){
        return item.id == idUpdate;
      })
        if ( index >= 0) {
          let productFind = products[index];
          productFind.name = $('#name').val();
          productFind.quantity = $('#quantity').val();
          productFind.id = $('#id').val();
          productFind.price = $('#price').val();
        }
        localStorage.setItem("products",JSON.stringify(products));
        renderProducts(products);
      
    })
  

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
 
$(document).on("click", ".show", function() {
  let productsElement1 = document.querySelector('#tonghop');
    let productHtml1 = "";
    for (let item of products) {
      productHtml1 += renderPhoneImage(item);
    }
  
    productsElement1.innerHTML = productHtml1;
})
})