let input = document.querySelector("#add");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");
let el = document.getElementsByTagName("li");

function addtask(){
    let txt = input.value;
    if (txt === "") {
      alert("voce deve digitar alguma coisa");
    } else {
      let li = document.createElement('li');  
      li.innerText = txt;
      list.insertBefore(li, list.childNodes[0]);
      input.value = "";
    }
  }

btn.addEventListener("click", addtask);
list.addEventListener("click", addtask);


input.addEventListener("keyup", function hanldeEnter(e){
    if (e.keyCode == 13) {addtask()}
})