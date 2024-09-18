window.onload = function(){
    let canvas  = 
    document.getElementById("marco");
    if(canvas && canvas.getContext){
        let ctx = canvas.getContext("2d");
        if(ctx){
            ctx.lineWidth = 25;
            ctx.strokeStyle = "yellow";

            //iniciamos la arco
            ctx.beginPath();
            //y,x, radio, angulo de salida, angulo de finalizacion 
            ctx.arc( 100, 150, 50, 1.1*Math.PI,1.9*Math.PI);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(250,150, 50, 1.1 *Math.PI, 1.9 * Math.PI, true  );
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(300,300, 50, 0, 2 * Math.PI );
            ctx.fill();
            ctx.stroke();

            

// Traza el arco
ctx.stroke();

           
        }else{
           alert("Navegador no soporta canvas 2D");
        }
    }
}

