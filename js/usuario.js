document.getElementById("usuario").onclick = function () {

  var value = "<h1>Informações de Usuário</h1><br>"+
    "<form class=\"usuario-form\">"+
      "<div class=\"form-group\">"+
        "<label for=\"nome\">Nome:</label>"+
        "<input type=\"text\" class=\"form-control\" id=\"nome\">"+
      "</div>"+
      "<div class=\"form-group\">"+
        "<label for=\"sobrenome\">Sobrenome:</label>"+
        "<input type=\"text\" class=\"form-control\" id=\"sobrenome\">"+
      "</div>"+
      "<div class=\"form-group\">"+
        "<label for=\"telefone\">Telefone:</label>"+
        "<input type=\"text\" class=\"form-control\" id=\"telefone\">"+
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
  var nome = document.getElementById("nome").value;
  var sobrenome = document.getElementById("sobrenome").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;

  localStorage.setItem("nome", nome);
  localStorage.setItem("sobrenome", sobrenome);
  localStorage.setItem("telefone", telefone);
  localStorage.setItem("email", email);

  document.getElementById("field-nome-usuario").innerHTML = "Olá, " + localStorage.nome;

  alert("Usuário Atualizado com Sucesso!");
}

function clearUserValues(){
  var nome = document.getElementById("nome").value = '';
  var sobrenome = document.getElementById("sobrenome").value = '';
  var telefone = document.getElementById("telefone").value = '';
  var email = document.getElementById("email").value = '';

  localStorage.setItem("nome", nome);
  localStorage.setItem("sobrenome", sobrenome);
  localStorage.setItem("telefone", telefone);
  localStorage.setItem("email", email);
}

function initializeUserFields(){
  if((localStorage.nome || localStorage.nome !== undefined)){
    document.getElementById("nome").value = localStorage.nome;
  }

  if((localStorage.sobrenome || localStorage.sobrenome !== undefined)){
    document.getElementById("sobrenome").value = localStorage.sobrenome;
  }

  if((localStorage.telefone || localStorage.telefone !== undefined)){
    document.getElementById("telefone").value = localStorage.telefone;
  }

  if((localStorage.email || localStorage.email !== undefined)){
    document.getElementById("email").value = localStorage.email;
  }
}