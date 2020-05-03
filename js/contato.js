document.getElementById("contato").onclick = function () {
  var value = 
  "<h2 class=\"h1-responsive font-weight-bold text-center my-4\">Contato</h2>"+
  "<p class=\"text-center w-responsive mx-auto mb-5\">Você tem perguntas? Não hesite em nos contatar diretamente. Nosso time"+
    " o responderá o mais rápido possível</p>"+
  "<div class=\"row\">"+
    "<div class=\"col-md-9 mb-md-0 mb-5\">"+
      "<form id=\"contact-form\">"+
        "<div class=\"row\">"+
          "<div class=\"col-md-6\">"+
            "<div class=\"md-form mb-0\">"+
              "<input type=\"text\" id=\"nome-contato\" class=\"form-control\">"+
              "<label for=\"nome-contato\">Seu nome</label>"+
            "</div>"+
          "</div>"+
          "<div class=\"col-md-6\">"+
            "<div class=\"md-form mb-0\">"+
              "<input type=\"text\" id=\"email\" class=\"form-control\">"+
              "<label for=\"email\">Seu email</label>"+
            "</div>"+
          "</div>"+
        "</div>"+
        "<div class=\"row\">"+
          "<div class=\"col-md-12\">"+
            "<div class=\"md-form mb-0\">"+
              "<input type=\"text\" id=\"subject\" class=\"form-control\">"+
              "<label for=\"subject\">Assunto</label>"+
            "</div>"+
          "</div>"+
        "</div>"+
        "<div class=\"row\">"+
          "<div class=\"col-md-12\">"+
            "<div class=\"md-form\">"+
              "<textarea type=\"text\" id=\"message\" rows=\"2\" class=\"form-control md-textarea\"></textarea>"+
              "<label for=\"message\">Sua mensagem</label>"+
            "</div>"+
          "</div>"+
        "</div>"+
      "</form>"+
    "</div>"+
    "<div class=\"col-md-3 text-center\">"+
      "<ul class=\"list-unstyled mb-0\">"+
        "<li><i style=\"font-size:24px\" class=\"fa\">&#xf095;</i>"+
          "<p>+ 55 11 123 456 789</p>"+
        "</li>"+
        "<li><i style=\"font-size:24px\" class=\"fa\">&#xf2b7;</i>"+
          "<p>contato@tgadevweb.com</p>"+
        "</li>"+
      "</ul>"+
    "</div>"+
  "</div>";

  document.getElementById("content-section").innerHTML = value;

  document.getElementById("page-footer").innerHTML = 
  "<footer class=\"container-fluid bg-4 text-center\">"+
    "<button onclick=\"enviarContato()\" id=\"enviar-contato\" type=\"submit\" class=\"btn-footer btn btn-default\">Enviar</button>"+
    "<p>Trabalho Grau A Desenvolvimento Web</p>"+ 
  "</footer>"

  initializeFormFields();
}

function enviarContato() {
  alert("Contato Enviado com Sucesso!");
}

function initializeFormFields(){
  if((localStorage.nome || localStorage.nome !== undefined)){
    document.getElementById("nome-contato").value = localStorage.nome;
  }

  if((localStorage.email || localStorage.email !== undefined)){
    document.getElementById("email").value = localStorage.email;
  }
}