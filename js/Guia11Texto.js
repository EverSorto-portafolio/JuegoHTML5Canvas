window.onload = function () {

    let canvas = document.getElementById("marco")

    if (canvas && canvas.getContext) {
        let ctx = canvas.getContext("2d")
        if (ctx) {

          ctx.font = "5em Arial";
          ctx.lineWidth = 1.0;
          ctx.fillStyle = "blue";
          ctx.strokeStyle= "yeloow";


          // sombras 
          ctx.shadowColor="black";
          ctx.shadowOffsetX= 5;
          ctx.shadowOffsetY = -5;
          ctx.shadowBlur = 10;

          ctx.fillText("Hola Mundo", 35,150);
          ctx.strokeText("Hola Mundo", 35,150);
          ctx.fillRect(500, 150, 10,10);
        }

    }
}