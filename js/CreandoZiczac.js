window.onload = function(){
    let canvas  = 
    document.getElementById("marco");
    if(canvas && canvas.getContext){
        let ctx = canvas.getContext("2d");
        if(ctx){
          

        

           
// Traza el arco
ctx.stroke();

           
        }else{
           alert("Navegador no soporta canvas 2D");
        }
    }
}

