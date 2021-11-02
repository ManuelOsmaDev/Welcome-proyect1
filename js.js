
function Enviar(){
    let formulario = document.forms['formulario']
    let texto = ' ';
    for(let elemento of formulario){
        texto += elemento.value + " "
    }
    document.getElementById('saludo_hora').innerHTML = 'Bienvenido' +"  " + texto  ;
}

let Mostrar = ()=>{
    document.getElementById('hora').innerHTML =  fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(Mostrar,1000);


