window.onload = function(){

    let canvas = document.getElementById("marco"); 
    if(canvas && canvas.getContext){
        let ctx = canvas.getContext("2d");
        if(ctx){
            // centro del canvas 
            let centroX = canvas.width /2; 
            let centroY = canvas.height /2;

            // definimos el radio de los circulos
            let radioExterno = 95; 
            let radioInterno = 50; 
            let radioMedio = radioInterno * 1.6;
            let radioCentro = 20;

            // numero de puntos den engranaje 
            let numeroPuntos =  40; 

            //inicailizamos las lienas 
            ctx.beginPath();
            ctx.lineJoin = "bevel ";
           
            //Creamos el bucle for 
            for(let i= 0; i< numeroPuntos; i++){
                let radio = null; 
                if(i % 2 == 0){
                   radio = radioExterno; 
                }else{
                    radio = radioInterno;
                }
                let angulo = Math.PI *2 / numeroPuntos * (i + 1);
                
                //calcular las coordenadas externas 
                let x = (radio * Math.sin(angulo)) + centroX;
                let y = (radio * Math.cos(angulo)) + centroY;
                
                if(i == 0){
                    ctx.moveTo(x,y); //mueve
                }else{
                    ctx.lineTo(x,y)//dibuja
                }
            }
            ctx.closePath();
            ctx.lineWidth = 5;
            ctx.strokeStyle= "orange";
            ctx.fillStyle = "red"; 
            ctx.stroke();
        }
    }else{
        alert("no soporta canvas ")
    }
}