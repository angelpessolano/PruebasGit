var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncirijillo");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("Area_trabajo");
var ancho = d.width;
var marco=ancho-1;
var lienzo = d.getContext("2d");
// @Pesso93
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{    var filtro=parseInt(texto.value);
  if(filtro>80){
    filtro=80; //para no dañar la figura
  }
  var lineas = filtro;
  var l = 0;
  var yi, xf;
  var color_ros = "#FAA";
  var color_azu="#0D888E";
  var marco_c="#2149DE";
  var color_ver="#129710";
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
  
  //dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
   dibujarLinea(color_azu, ancho, yi, ancho-xf, ancho);
   dibujarLinea("#010C01", yi, 0, ancho, xf);
   dibujarLinea(color_ver, 0, ancho-yi, xf, 0);
   dibujarLinea(color_ros, 0, yi, xf, ancho);
   console.log("Linea " + .5);
  }
  dibujarLinea(marco_c, 1,marco,marco,marco);
  dibujarLinea(marco_c,marco,1,marco,marco);
  dibujarLinea(marco_c, 1,1,1,marco);
  dibujarLinea(marco_c,1,1,marco,1);
  
  }

  /*
    <p>
    
    <img src="cajero.gif"  />
  </p>
 */