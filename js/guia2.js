window.onload = function(){
    let canvas  = 
    document.getElementById("marco");
    if(canvas && canvas.getContext){
        let ctx = canvas.getContext("2d");
        if(ctx){
            ctx.lineWidth = 15;
            ctx.strokeStyle= "yellow"

            // iniciar trazo 
            ctx.beginPath();
            ctx.lineCap = "round"
            ctx.moveTo(50,50);
            ctx.lineTo(350, 50)
            ctx.stroke();

            //segunda linea 
            ctx.strokeStyle= "orange";
             ctx.lineCap = "square"
            ctx.beginPath();
            ctx.moveTo(25,100);
            ctx.lineTo(350, 100)
            ctx.stroke();

            //tercera linea 
            ctx.strokeStyle= "blue";
            ctx.lineCap = "butt"
            ctx.beginPath();
            ctx.moveTo(50,150);
            ctx.lineTo(350, 150)
            ctx.stroke();
        }else{
           alert("Navegador no soporta canvas 2D");
        }
    }
}

