document.getElementById("show-curso1").onclick = function() {
  var value = "<h1>Bootcamp de JavaScript moderno</h1>"+getAulas();

  setAulasHtml(value);
}

document.getElementById("show-curso2").onclick = function() {
  var value = "<h1>Desenvolvimento Web Básico</h1>"+getAulas();

  setAulasHtml(value);
}

document.getElementById("show-curso3").onclick = function() {
  var value = "<h1>Desenvolvimento Web Avançado</h1>"+getAulas();

  setAulasHtml(value);
}

document.getElementById("show-curso4").onclick = function() {
  var value = "<h1>The Modern React Bootcamp</h1>"+getAulas();

  setAulasHtml(value);
}

function getAulas() {
  var value = "<h2 class=\"heading-aulas\">Aula 01 &#128218</h2>"+
  "<p class=\"aulas-paragraph\" id=\"aula1\">"+
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id venenatis velit. "+
    "Donec eget arcu quis ante facilisis eleifend consequat non leo. Phasellus tincidunt dignissim "+
    "venenatis. Proin scelerisque mi ut massa mattis, et porttitor turpis pretium. Fusce vestibulum "+
    "porta cursus. Mauris ut auctor leo, sed maximus eros. Praesent venenatis lacinia felis sit amet "+
    "imperdiet. Morbi sollicitudin, dolor et congue auctor, turpis libero fringilla urna, id euismod "+
    "nisl nunc eget massa. In in varius lectus. Praesent eget aliquet odio. Maecenas ac purus volutpat, "+
    "dictum nisl sit amet, efficitur tellus. Etiam tellus augue, tempus ac tortor sit amet, sodales "+
    "interdum nulla."+
  "</p>"+

  "<h2 class=\"heading-aulas\">Aula 02 &#128216</h2>"+
  "<p class=\"aulas-paragraph\" id=\"aula2\">"+
    "Integer pulvinar cursus feugiat. In dignissim non leo vitae fringilla. Proin ut varius libero. "+
    "Aliquam erat volutpat. Praesent luctus ipsum at eros bibendum cursus. Curabitur auctor gravida "+
    "magna, a pulvinar diam tempus rhoncus. Vivamus vel nisl quis massa auctor viverra. Praesent felis "+
    "erat, luctus quis rutrum a, gravida id tortor. Etiam sit amet magna sollicitudin, feugiat sapien ut, "+
    "maximus eros. Phasellus sagittis mi ut maximus fermentum. Donec maximus eleifend placerat. Aenean quis"+
    "pretium nunc. Integer interdum semper euismod."+
  "</p>";

  return value;
}

function setAulasHtml(value) {
  document.getElementById("content-section").innerHTML = value;
}