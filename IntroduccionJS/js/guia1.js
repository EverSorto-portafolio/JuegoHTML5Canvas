window.onload = function(){
    let canvas  = 
    document.getElementById("marco");
    if(canvas && canvas.getContext){
        let ctx = canvas.getContext("2d");
        if(ctx){
            //definimos los colores 
            ctx.fillStyle = "yelow";
            ctx.strokeStyle = "#ff0000";
            ctx.lineWidth = 5;
            // x, y , w,h
            ctx.fillRect( 50,50,100,100);
            ctx.strokeRect(50,50,100,100);

            //Crear un segundo Cuadrado
            ctx.fillStyle = "rgb(0,42,255)";
            ctx.fillRect( 200,50,100,100);
            ctx.strokeRect(200,50,100,100);

        }else{
           alert("Navegador no soporta canvas 2D");
        }
    }
}

