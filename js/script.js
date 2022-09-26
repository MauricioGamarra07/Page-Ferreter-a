//Botón para subir al Inicio
window.addEventListener("scroll",Subir)
function Subir(){
    let subir=document.getElementById("subir");
    let posy=window.pageYOffset;
    if (posy>100){
        subir.style.display="block";
    }
    else{
        subir.style.display="none";
    }
}