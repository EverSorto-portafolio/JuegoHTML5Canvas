window.onload = function(){
    let canvas  = 
    document.getElementById("marco");
    if(canvas && canvas.getContext){
        let ctx = canvas.getContext("2d");
        if(ctx){
           let radio = 0, angulo = 0;
           ctx.strokeStyle= "orange";
           ctx.beginPath();
           ctx.moveTo(canvas.width/2, canvas.height/2);

           for(
            let i = 0; // declaramos el inicio
            i <200;  // se detendra en 199
            i++ // i aumentara 1 en cada iteracion 
            ){
                radio  += 0.75; 
                angulo += (Math.PI*2)/50; // angulo aumentars segun aumente las iteraciones
                let x = canvas.width/2 + radio * Math.cos(angulo);  // mueve la x de manera continua sobre el eje x  
                let y =  canvas.height/2 + radio * Math.sin(angulo); // mueve la linea de manera continua en el eje y 
                ctx.lineTo(x,y); 
           }
           ctx.stroke();

        }else{
           alert("Navegador no soporta canvas 2D");
        }
    }
}

