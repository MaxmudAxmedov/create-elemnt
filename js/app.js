var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elList = document.querySelector(".list");
var data = [];

function create () {
  
  var elInputValue = elInput.value;
  var obj = {
    line: data.length,
    text: elInputValue
  }

  data.push(obj);
  elList.innerHTML=" ";

  for(let i of data){
    var elLi = document.createElement("li")
    elLi.innerHTML = `${i.line+1}  ${i.text}`;
    elList.appendChild(elLi);
    elInput.value="";
  }
}

elForm.addEventListener("submit",  function (r) {
  r.preventDefault();
  create();
})






// var arr = [5,9,-8,4.5,6,4,-8.7,96,4];
// var news = [];
// console.log(arr);

// function num () {
//   for(var i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//       news.push(Math.round(Math.abs(arr[i])));
//     }else{
//       news.push(Math.round(arr[i]));
//     }
//   } 
//   return news;
// }
// console.log(num());
