let pridej = document.getElementById("pridejPolozku");
let ul = document.getElementById("uelko");
let input = document.getElementById("polozka");

//pridani polozky se span class
pridej.addEventListener("click", function (){
    var createLi = document.createElement("li")
    var span = document.createElement("span");
    var vytvorText = document.createTextNode(input.value);
    span.setAttribute("class", "delete");
    span.innerText = "Hotovo";
    createLi.appendChild(span);
    createLi.appendChild(vytvorText);
    ul.appendChild(createLi);

//zasktrnuti - hotovo
    createLi.addEventListener("click", function(){
        createLi.style.textDecoration = "line-through";
    });
//odstran
    span.addEventListener("click", function(){
    span.parentNode.remove(createLi);
    });
})