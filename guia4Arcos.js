window.onload = function(){
    let canvas  = 
    document.getElementById("marco");
    if(canvas && canvas.getContext){
        let ctx = canvas.getContext("2d");
        if(ctx){
            ctx.lineWidth = 25;
            ctx.strokeStyle = "yellow";

            //iniciamos la linea 
            ctx.beginPath();
            ctx.moveTo(50,100);
            ctx.lineTo(100,50);
            ctx.lineTo(150,100);
            ctx.lineTo(100,150);

            ctx.stroke();

           
        }else{
           alert("Navegador no soporta canvas 2D");
        }
    }
}

