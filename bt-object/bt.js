class phone {
  constructor(id, name, price, image, quantity) {
    this.name = name;
    this.id = id;
    this.price = price;
    this.image = image;
    this.quantity = quantity;
  }
}
let urlImage = "https://cdn.tgdd.vn/Products/Images/42/271734/xiaomi-redmi-10a-thumb-600x600.jpg";
let iphone14 = new phone(1, "iphone 16", 20000, urlImage, 14);
function renderPhone(phone) {
  return `<div class="col-12 col-sm-4 col-md-3" id="product${phone.id}">
    <div class="product">
      <div class="product-img">
        <img
          src=${phone.image}
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
      <button data-id=${phone.id} class="delete btn-danger" >Xóa</button>
      <button data-id=${phone.id} class="edit btn-danger" >Sửa</button>
    </div>
  </div>
  `
}
let products = [];
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
let btnAdd = document.querySelector('.btn');
btnAdd.addEventListener('click', function () {
  let name = document.querySelector('#name').value;
  let quantity = document.querySelector('#quantity').value;
  let id = document.querySelector('#id').value;
  let newPhone = new phone(id, name, 20000, urlImage, quantity);
  products.push(newPhone);
  renderProducts(products);
  document.querySelector('#name').value = "";
  document.querySelector('#quantity').value = "";
  document.querySelector('#id').value = "";
  deleteProduct();
  editProduct();
})

// -------------------xóa
deleteProduct();
function deleteProduct() {
  let btnDelete = document.querySelectorAll('.delete');
  btnDelete.forEach(function (item) {
    item.addEventListener('click', function () {
      let idDelete = this.getAttribute('data-id');
      if (confirm('Do u want delete it ?')) {
        let index = products.findIndex(function (item) {
          return item.id == idDelete;
        })
        console.log(index);
        if (index >= 0) {
          products.splice(index, 1);
        }
        let deleteProduct = document.querySelector(`#product${idDelete}`);
        deleteProduct.remove();
    
      }
    })
  })

}

// --------------- sửa
let idElement;
editProduct()
function editProduct() {
  let btnEdit = document.querySelectorAll('.edit');
  btnEdit.forEach(function(item){
    item.addEventListener('click', function (){
      let idEdit = this.getAttribute( 'data-id' );
      idElement = idEdit;
    let index = products.findIndex(function (item){
        return item.id == idEdit;
    })
    if ( index >= 0){
      let productFind = products[index];
      let name = document.querySelector('#name').value;
  let quantity = document.querySelector('#quantity').value;
  let id = document.querySelector('#id').value;
     
      productFind.name = name;
      productFind.quantity = quantity;
      productFind.id = id;
    
    }
  })
  
    
}
  )}
  
// ---------------- update
let btnUpdate = document.querySelector(".update");
  btnUpdate.addEventListener("click", function () {
    
    let index = products.findIndex(function (item) {
      return item.id == idElement;
    });
    if (index >= 0) {
      let productFind = products[index];
      productFind.name = document.querySelector('#name').value;
      productFind.quantity = document.querySelector('#quantity').value;
      productFind.id = document.querySelector('#id').value;
      renderProducts(products);
    }
  });
