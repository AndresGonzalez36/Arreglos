const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://static.abc.es/media/MM/2021/08/24/2_the_weeknd_mansion_bel_air-ke6--1597x900@abc.jpg",
      rooms: 5,
      m: 500
    },
    {
      name: "Casita Humilde",
      description: "Hasta aca me llega el olor a pobreza",
      src:
      "https://media.gq.com.mx/photos/626d9b0fd02f450ef6d64c28/16:9/w_2560%2Cc_limit/casa%2520en%2520pobreza.jpg",
      rooms : 0,
      m: 10
      }
  ];
  /*card con elementos dinamicos*/
function card(propiedad){
  let template = `
  <div class="propiedad">
     <div class="img" style="background-image: url(${propiedad.src})"></div>
     <section>
         <h5>${propiedad.name}</h5>
         <div class="d-flex justify-content-between">
             <p>Cuartos:${propiedad.rooms}</p>
             <p>Metros: ${propiedad.m}</p>
         </div>
         <p class="my-3">${propiedad.description}</p>
         <button class="btn btn-info ">Ver más</button>
     </section>
 </div>
`;
return template;
}
 /*ciclo que muestra las card en principio*/
let html='';
for( let propiedad of propiedadesJSON){
  
 html += card(propiedad);
}

const propiedades = document.querySelector('.propiedades');
propiedades.innerHTML = html

/*filtro*/


function filtro(){
const cuartos = document.querySelector('#cuartos').value;
const mayor = document.querySelector('#mayor').value;
const menor = document.querySelector("#menor").value;

if (cuartos == ''|| menor == '' || mayor == ''){//condicion 
  alert("Faltan campos por llenar")
}else{
/*filtro por cuartos*/
let cantidadOpciones = 0; //variable que guarda la cantidad de opciones visibles
let clickFiltro = '';//variable que guarda el ciclo filtrado
/*ciclo que muesra las card aplicando el filtro*/
for(const propiedad of propiedadesJSON) {
  if(cuartos == propiedad.rooms && 
    (propiedad.m >= menor && propiedad.m <= mayor))/*condicion de fitro por cuartos y metros*/{
    clickFiltro += card(propiedad);
cantidadOpciones++;//suma de opciones visibles
  }

  /*filtro por metros*/
 /* if(menor >= propiedad.m){
    clickFiltro += card(propiedad);
  }
  /*filtro por metros*/
 /* if(mayor <= propiedad.m){
    clickFiltro += card(propiedad);
  }*/
}

/*impresion de ciclo con filtro*/
const propiedades = document.querySelector('.propiedades');
propiedades.innerHTML = clickFiltro
/*impresion de cantidad de opciones*/
const opciones = document.querySelector('#opciones');
opciones.innerHTML = cantidadOpciones


}
}
document.getElementById("btn").onclick = function (){
  filtro()
}
  