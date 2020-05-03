document.getElementById("sobre").onclick = function () {
  var value = 
    "<div class=\"container-fluid\" style=\"align-items: flex-start;\">"+
    "<div class=\"row\">"+
      "<div class=\"col-sm-8\">"+
        "<h2>Sobre a Empresa</h2>"+
        "<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis diam in semper malesuada. Mauris"+
          "convallis laoreet mi, sit amet iaculis metus pharetra id. Sed nec pellentesque quam, in accumsan libero.</h4>"+
      "</div>"+
      "<div class=\"col-sm-4\">"+
        "<svg class=\"bi bi-bar-chart-fill\" width=\"10em\" height=\"10em\" viewBox=\"0 0 16 16\" fill=\"currentColor\""+
         "xmlns=\"http://www.w3.org/2000/svg\">"+
          "<rect width=\"4\" height=\"5\" x=\"1\" y=\"10\" rx=\"1\" />"+
          "<rect width=\"4\" height=\"9\" x=\"6\" y=\"6\" rx=\"1\" />"+
          "<rect width=\"4\" height=\"14\" x=\"11\" y=\"1\" rx=\"1\" />"+
        "</svg>"+
      "</div>"+
    "</div>"+
  "</div>"+
  "<div style=\"margin-bottom: 20px; margin-top:60px;\" class=\"container-fluid bg-grey\">"+
    "<div class=\"row\">"+
      "<div class=\"col-sm-4\">"+
        "<svg class=\"bi bi-hash\" width=\"10em\" height=\"10em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">"+
          "<path d=\"M8.39 12.648a1.32 1.32 0 00-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 00.016-.164.51.51 0 00-.516-.516.54.54 0 00-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 00-.523-.516.539.539 0 00-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z\" />"+
        "</svg>"+
      "</div>"+
      "<div class=\"col-sm-8\">"+
        "<h2>Nosos Valores</h2>"+
        "<h4><strong>MISSÃO:</strong> Nossa missão Lorem ipsum..</h4>"+
        "<h4><strong>VISÃO:</strong> Nossa Visão Lorem ipsum..</h4>"+
      "</div>"+
    "</div>"+
  "</div>";

  document.getElementById("content-section").innerHTML = value;

  document.getElementById("page-footer").innerHTML = 
      "<footer class=\"container-fluid bg-4 text-center\">"+
        "<p>Trabalho Grau A Desenvolvimento Web</p>"+ 
      "</footer>"
}