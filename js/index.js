if(localStorage.darkMode == "true"){
    document.getElementById("darkSwitch").checked = true;
    toggleDarkMode();
}

var isMenuLateralOpen = true;

document.getElementById("menu").onclick = function openNav() {
    if (isMenuLateralOpen) {
        closeMenu();
    } else {
        openMenu();
    }

    localStorage.setItem("isMenuLateralOpen", isMenuLateralOpen);
}

function openMenu() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    isMenuLateralOpen = true;
}

function closeMenu() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    isMenuLateralOpen = false;
}

function toggleDarkMode() {
    document.getElementById("main").classList.toggle("dark");
    document.getElementById("mySidenav").classList.toggle("dark");
    if(document.getElementById("darkSwitch").checked) {
        localStorage.setItem("darkMode" , "true");
    } else {
        localStorage.setItem("darkMode" , "false");
    }
}

function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-green";
    } else {
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" w3-green", "");
    }
}

document.getElementById("enviar-usuario").onclick = function () {
    var nome = document.getElementById("nome-usuario").value;

    localStorage.setItem("nome", nome);

    document.getElementById("field-nome-usuario").innerHTML = "Olá, " + localStorage.nome;
}

if (localStorage.nome) {
    document.getElementById("field-nome-usuario").innerHTML = "Olá, " + localStorage.nome;
}

if (localStorage.isMenuLateralOpen == undefined || JSON.parse(localStorage.isMenuLateralOpen) === true) {
    openMenu();
} else {
    closeMenu();
}