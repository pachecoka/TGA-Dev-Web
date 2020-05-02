if(localStorage.darkMode == "true"){
    document.getElementById("darkSwitch").checked = true;
    toggleDarkMode();
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function toggleDarkMode() {
    document.getElementById("main").classList.toggle("dark");
    if(document.getElementById("darkSwitch").checked) {
        localStorage.setItem("darkMode" , "true");
    } else {
        localStorage.setItem("darkMode" , "false");
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