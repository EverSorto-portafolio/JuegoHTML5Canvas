window.onload = function(){

    let canvas = document.getElementById("marco")

    if(canvas && canvas.getContext){
        let ctx = canvas.getContext("2d")
        if(ctx){
             let x1, y1,r1,x2,y2,r2

             x1 = canvas.width/2;
             y1= canvas.height/2;
             r1 = 10;

             x2 = canvas.width/2;
             y2= canvas.height/2;
             r2 = 300; 

            let gradiante = ctx.createRadialGradient(x1,y1,r1,x2,y2,r2);

           gradiante.addColorStop(0.1, "blue");
          gradiante.addColorStop(0.2, "yellow");
          gradiante.addColorStop(0.3, "yellow");
           gradiante.addColorStop(0.4, "orange");
            gradiante.addColorStop(0.5, "orange");
            gradiante.addColorStop(0.6, "white");
            gradiante.addColorStop(1, "green");

            ctx.fillStyle = gradiante;
            ctx.fillRect(0,0,canvas.width, canvas.height)

        }

    }
}