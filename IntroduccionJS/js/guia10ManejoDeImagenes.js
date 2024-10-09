window.onload = function () {

    let canvas = document.getElementById("marco")

    if (canvas && canvas.getContext) {
        let ctx = canvas.getContext("2d")
        if (ctx) {

            let logo = new Image();
            logo.src = "../img/logo.png";      
            logo.onload = function(e){
               procesarImagen();
            }

            function procesarImagen(){
                ctx.drawImage(logo, 10,10);
            }
        }

    }
}