let reName = document.querySelectorAll(".btn-rename");
let name1 = document.querySelectorAll("#name");
reName[0].addEventListener('click',function(){
    name1[0].innerHTML='<h3>my</h3>';
})
reName[1].addEventListener('click',function(){
    name1[1].innerHTML='<h3>minh</h3>';
})
reName[2].addEventListener('click',function(){
    name1[2].innerHTML='<h3>kim</h3>';
})


let changeColor = document.querySelectorAll(".btn-changecolor");

changeColor[0].addEventListener('click' , function (){
    name1[0].style.color = "red";
})
changeColor[1].addEventListener('click' , function (){
    name1[1].style.color = "red";
})
changeColor[2].addEventListener('click' , function (){
    name1[2].style.color = "red";
})

let deleteItem = document.querySelectorAll(".btn-delete");

deleteItem[0].addEventListener('click' , function (){
    name1[0].remove();
})
deleteItem[1].addEventListener('click' , function (){
    name1[1].remove();
})
deleteItem[2].addEventListener('click' , function (){
    name1[2].remove();
})


