var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World";
var ButtonNick = document.getElementById("NickChange")

document.querySelector("html").oncontextmenu = function(){
   
}

function setUserName(){
    var name = prompt("Введите ваш ник")
    if (!name){return}
    localStorage.setItem("name", name)
    myHeading.textContent = "Привет, " + name
    console.log("Соси хуй")
}

if (!localStorage.getItem("name")){
    setUserName()
}
else{
    myHeading.textContent = "Привет, " + localStorage.getItem("name");
}

ButtonNick.onclick = function(){
    setUserName();
}
