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
            ctx.moveTo(20,50);
            ctx.bezierCurveTo(20, 200, 200, 25, 150,300);
            ctx.stroke();

           
// Traza el arco
ctx.stroke();

           
        }else{
           alert("Navegador no soporta canvas 2D");
        }
    }
}

