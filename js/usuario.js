document.getElementById("usuario").onclick = function () {

  var value = "<h1>Informações de Usuário</h1><br>"+
    "<form class=\"usuario-form\">"+
      "<div class=\"form-group\">"+
        "<label for=\"usuario\">Nome de Usuario:</label>"+
        "<input type=\"text\" class=\"form-control\" id=\"nome-usuario\">"+
      "</div>"+
      "<div class=\"form-group\">"+
        "<label for=\"nome\">Nome:</label>"+
        "<input type=\"text\" class=\"form-control\" id=\"nome\">"+
      "</div>"+
      "<div class=\"form-group\">"+
        "<label for=\"sobrenome\">Sobrenome:</label>"+
        "<input type=\"text\" class=\"form-control\" id=\"sobrenome\">"+
      "</div>"+
      "<div class=\"form-group\">"+
        "<label for=\"email\">Email:</label>"+
        "<input type=\"email\" class=\"form-control\" id=\"email\">"+
      "</div><br>"+
    "</form>";

    document.getElementById("page-footer").innerHTML = 
      "<footer class=\"container-fluid bg-4 text-center\">"+
        "<button onclick=\"updateUsuario()\" id=\"update-usuario\" type=\"submit\" class=\"btn-footer btn btn-default\">Enviar</button>"+
        "<button onclick=\"clearUserValues()\" id=\"clear-usuario\" class=\"btn-footer btn btn-default\">Limpar</button>"+
        "<p>Trabalho Grau A Desenvolvimento Web</p>"+ 
      "</footer>"

  document.getElementById("content-section").innerHTML = value;
  initializeUserFields();
}

function updateUsuario() {
  var nomeUsuario = document.getElementById("nome-usuario").value;
  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  var email = document.getElementById("email").value;

  localStorage.setItem("nomeUsuario", nomeUsuario);
  localStorage.setItem("nome", nome);
  localStorage.setItem("sobrenome", sobrenome);
  localStorage.setItem("email", email);

  document.getElementById("field-nome-usuario").innerHTML = "Olá, " + localStorage.nomeUsuario;

  alert("Usuário Atualizado com Sucesso!");
}

function clearUserValues(){
  var nomeUsuario = document.getElementById("nome-usuario").value = '';
  var nome = document.getElementById("nome").value = '';
  var sobrenome = document.getElementById("sobrenome").value = '';
  var email = document.getElementById("email").value = '';

  localStorage.setItem("nomeUsuario", nomeUsuario);
  localStorage.setItem("nome", nome);
  localStorage.setItem("sobrenome", sobrenome);
  localStorage.setItem("email", email);
}

function initializeUserFields(){
  if((localStorage.nomeUsuario || localStorage.nomeUsuario !== undefined)){
    document.getElementById("nome-usuario").value = localStorage.nomeUsuario;
  }

  if((localStorage.nome || localStorage.nome !== undefined)){
    document.getElementById("nome").value = localStorage.nome;
  }

  if((localStorage.sobrenome || localStorage.sobrenome !== undefined)){
    document.getElementById("sobrenome").value = localStorage.sobrenome;
  }

  if((localStorage.email || localStorage.email !== undefined)){
    document.getElementById("email").value = localStorage.email;
  }
}