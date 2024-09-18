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
            // colocamos en variables los valores x, y 
            let  x1 = 50, y1 = 20
            //iniciamos el movimiento 
            ctx.moveTo(x1, y1);
            // x inicio, y inicio, x final, y final 
            ctx.quadraticCurveTo(25,250,300, 20);
            ctx.stroke();

           
// Traza el arco
ctx.stroke();

           
        }else{
           alert("Navegador no soporta canvas 2D");
        }
    }
}

