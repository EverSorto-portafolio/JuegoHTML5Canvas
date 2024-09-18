window.onload = function(){
    let canvas  = 
    document.getElementById("marco");
    if(canvas && canvas.getContext){
        let ctx = canvas.getContext("2d");
        if(ctx){
          
            //declaramos las variables que utilizaremos para  crear el ziczac
            let xi = 85, yi = 70, desplazamiento = 15, lineas = 15;

            // creamos las propiedades para pintalo. 
            ctx.lineWidth= 10; //ancho de linea
            ctx.strokeStyle = "blue"; // Color del borde de las lineas 
            ctx.lineCap = "round"; //redondeamos el final de la linea
            ctx.lineJoin = "round"; // se define como se unican los vertices de las lineas 
            ctx.beginPath(); // marcamos el inicio de la linea
            ctx.moveTo(xi,yi);// damos las coordenadas para que se mueva la linea

            for(let i = 0; // creamos una variable que aumentara con cada repeticion
                i<lineas;  // definimos que para cuando i sea menor que lienas 
                i++ // aumentamos en 1 la variable i en cada iteracion
            ){
                let x = xi + ((i + 1 )* desplazamiento); 
                let y = yi;

                // vamos a utilizar los nuemeros pares para separa las lineas 
                if(
                    i % 2 == 0 // definimos si % (modulo) 2 es igual a 0 entonces es par
                ){
                    y = yi + 100
                }
                ctx.lineTo(x,y); // hasta donde se van a mover 
            }
                ctx.stroke(); // damos el color a las lineas 
        }else{
           alert("Navegador no soporta canvas 2D");
        }
    }
}

