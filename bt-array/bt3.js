



let rowIds = [1, 2, 3, 4];
function renderProduct(rowId) {
    return `<div class="col-12 col-sm-4 col-md-3" id="product${rowIds}">
    <div class="product" >
      <div class="product-img">
        <img
          src="https://cdn.tgdd.vn/Products/Images/42/271734/xiaomi-redmi-10a-thumb-600x600.jpg"
          alt=""
        />
      </div>
      <div class="produc-name">
        <a class="produc-name__link">Iphone 12</a>
      </div>
      <div class="produc-price">
        <p class="produc-price__content text-danger">2000000</p>
        <p class="produc-price__sale text-danger">-24%</p>
      </div>

      <div class="product-quantity">
        <p class="product-quantity__progress">Còn 24/30 suất</p>
      </div>
      <button type="button" data-id="${rowIds}" class="btn btn-danger">Xóa</button>
    </div>
  </div>`
}




let body = document.querySelector('#products');
let bodyInnerHtml = body.innerHTML;
let html = bodyInnerHtml;
for (let item of rowIds) {
    html += renderProduct(item);
}
body.innerHTML = html;

let btnDeletes = document.querySelectorAll('.btn');
btnDeletes.forEach(function (item) {
    item.addEventListener('click', function () {
        let id = this.getAttribute('data-id');
        if (confirm('Delete id')) {
            let product = document.querySelector(`#product${id}`);
            product.remove();
        }
    })
})