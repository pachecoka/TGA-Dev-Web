if (localStorage.nome) {
    document.getElementById("field-nome-usuario").innerHTML = "Olá, " + localStorage.nome;
}

if (localStorage.darkMode == "true") {
    document.getElementById("darkSwitch").checked = true;
    toggleDarkMode();
}

if (localStorage.isMenuLateralOpen === 'false')
    closeMenu();

document.getElementById("menu").onclick = function openNav() {
    if (localStorage.isMenuLateralOpen == undefined || JSON.parse(localStorage.isMenuLateralOpen) === true) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    localStorage.setItem("isMenuLateralOpen", true);
}

function closeMenu() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    localStorage.setItem("isMenuLateralOpen", false);
}

function toggleDarkMode() {
    document.getElementById("main").classList.toggle("dark");
    document.getElementById("mySidenav").classList.toggle("dark");
    if (document.getElementById("darkSwitch").checked) {
        localStorage.setItem("darkMode", "true");
    } else {
        localStorage.setItem("darkMode", "false");
    }
}

function myAccFunc() {
    var cursosDiv = document.getElementById("cursos");
    if (cursosDiv.className.indexOf("w3-show") == -1) {
        cursosDiv.className += " w3-show";
        cursosDiv.previousElementSibling.className += "paintCadetBlue";
    } else {
        cursosDiv.className = cursosDiv.className.replace(" w3-show", "");
        cursosDiv.previousElementSibling.className =
            cursosDiv.previousElementSibling.className.replace("paintCadetBlue", "");
    }
}

document.getElementById("enviar-usuario").onclick = function () {
    var nome = document.getElementById("nome-usuario").value;

    localStorage.setItem("nome", nome);

    document.getElementById("field-nome-usuario").innerHTML = "Olá, " + localStorage.nome;
}

document.getElementById("idioma-pt-br").onclick = function () {
    var idioma = "ptbr";

    localStorage.setItem("idioma", idioma);
    traduzirPt();

}

document.getElementById("idioma-en").onclick = function () {
    var idioma = "en";

    localStorage.setItem("idioma", idioma);
    traduzirEn();
}

if (localStorage.idioma == "ptbr") {
    traduzirPt();
}

if (localStorage.idioma == "en") {
    traduzirEn();
}

function traduzirPt() {
    console.log(localStorage.idioma);
}

function traduzirEn() {
    console.log(localStorage.idioma);
}
