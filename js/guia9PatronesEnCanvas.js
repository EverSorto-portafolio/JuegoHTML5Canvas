window.onload = function () {

    let canvas = document.getElementById("marco")

    if (canvas && canvas.getContext) {
        let ctx = canvas.getContext("2d")
        if (ctx) {

            let bola = new Image();
            bola.src = "../img/gato.png";      
            bola.onload = function(e){
                let patron = ctx.createPattern(bola, "repeat");
                ctx.fillStyle = patron;
                ctx.fillRect(0, 0,canvas.width, canvas.height);
            }
        }

    }
}