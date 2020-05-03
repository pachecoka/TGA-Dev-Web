//guardar html main inicial
var initialContentInnerHtml = document.getElementById("content-section").innerHTML;
var initialFooterInnerHtml = document.getElementById("page-footer").innerHTML;

//Controle variaveis do storage
if (localStorage.nome) {
    document.getElementById("field-nome-usuario").innerHTML = "Olá, " + localStorage.nome;
}

if (localStorage.darkMode == "true") {
    document.getElementById("darkSwitch").checked = true;
    toggleDarkMode();
}

if (localStorage.isMenuLateralOpen === 'false')
    closeMenu();

if (localStorage.showCursos === 'true') {
    var cursosDiv = document.getElementById("cursos");
    cursosDiv.className += " w3-show";
    cursosDiv.previousElementSibling.className += "paintCadetBlue";
}

var comboGoogleTradutor = null;

document.getElementById("menu").onclick = function openNav() {
    if (localStorage.isMenuLateralOpen == undefined || JSON.parse(localStorage.isMenuLateralOpen) === true) {
        closeMenu();
    } else {
        openMenu();
    }
}

myCourses();

function myCourses() {
    for (let index = 1; index < 5; index++) {
        var curso = `curso${index}`;
        var show = `show-${curso}`;
        var preco = `preco${index}`;
        var botao = `botao${index}`;
        if(localStorage[curso] == "true") {
            document.getElementById(preco).innerText = "Comprado";
            document.getElementById(botao).classList.add("invisivel");
            document.getElementById(show).classList.remove("invisivel");
        } else {
            document.getElementById(botao).classList.remove("invisivel");
            document.getElementById(show).classList.add("invisivel");
        }
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

function buyCourse(i) {
    var curso = `curso${i}`;
    localStorage.setItem(curso , "true");
    myCourses();
}

function showCursos() {
    var cursosDiv = document.getElementById("cursos");
    if (cursosDiv.className.indexOf("w3-show") == -1) {
        cursosDiv.className += " w3-show";
        cursosDiv.previousElementSibling.className += "paintCadetBlue";
        localStorage.setItem("showCursos", true);
    } else {
        cursosDiv.className = cursosDiv.className.replace(" w3-show", "");
        cursosDiv.previousElementSibling.className =
            cursosDiv.previousElementSibling.className.replace("paintCadetBlue", "");
        localStorage.setItem("showCursos", false);
    }
}

document.getElementById("enviar-usuario").onclick = function () {
    localStorage.clear();
    var nomeUsuario = document.getElementById("nome-usuario-modal").value;

    localStorage.setItem("nome", nomeUsuario);

    document.getElementById("field-nome-usuario").innerHTML = "Olá, " + localStorage.nome;

    if(document.getElementById("nome") !== null)
        document.getElementById("nome").value = localStorage.nome;
    
    if(document.getElementById("nome-contato") !== null)
        document.getElementById("nome-contato").value = localStorage.nome;

    document.getElementById("nome-usuario-modal").value = "";

    myCourses();
}

//Região de métodos de controle do idioma
document.getElementById("idioma-pt-br").onclick = function () {
    var idioma = "pt";
    localStorage.setItem("idioma", idioma);
    trocarIdioma("pt");

};

document.getElementById("idioma-en").onclick = function () {
    var idioma = "en";
    localStorage.setItem("idioma", idioma);
    trocarIdioma("en");
};

if (localStorage.idioma == "pt") {
    console.log(localStorage.idioma);
    trocarIdioma("pt");
}

if (localStorage.idioma == "en") {
    console.log(localStorage.idioma);
    trocarIdioma("en");
}

//function traduzirPt() {
//    console.log(localStorage.idioma);
//    trocarIdioma("pt");
//}

//function traduzirEn() {
//    console.log(localStorage.idioma);
//    trocarIdioma("en");
//}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        includedLanguages: 'en,pt'
    }, 'google_translate_element');

    comboGoogleTradutor = document.getElementById("google_translate_element").querySelector(".goog-te-combo");
}

function changeEvent(el) {
    if (el.fireEvent) {
        el.fireEvent('onchange');
    } else {
        var evObj = document.createEvent("HTMLEvents");

        evObj.initEvent("change", false, true);
        el.dispatchEvent(evObj);
    }
}

function trocarIdioma(sigla) {
    if (comboGoogleTradutor) {
        comboGoogleTradutor.value = sigla;
        changeEvent(comboGoogleTradutor);//Dispara a troca
    }
}
//Fim da região de métodos de controle do idioma

document.getElementById("home").onclick = function () {
    document.getElementById("content-section").innerHTML = initialContentInnerHtml;
    document.getElementById("page-footer").innerHTML = initialFooterInnerHtml;
    myCourses();
}