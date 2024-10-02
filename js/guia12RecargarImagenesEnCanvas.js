window.onload = function () {

    let canvas = document.getElementById("marco");
    let archivoSelect = document.getElementById("archivo");
    let img;

    if (canvas && canvas.getContext) {
        let ctx = canvas.getContext("2d");
        if (ctx) {
            img = new Image();
            img.src = "../img/gato.png"
            img.onload = function(e){
                crearImagen(ctx,img);
            }



            archivoSelect.onchange = function (e) {
                if (archivoSelect.value != "") {
                    img.src = "../img/" + archivoSelect.value;
                   // alert(img.src)
                    img.onload = function (e) {
                        crearImagen(ctx,img);
                    }
                }
            }

        }

    }

}

function crearImagen(ctx, img ) {
    limpiar(ctx, img);
    ctx.drawImage(img, 0,0);
}

function limpiar(ctx, img){
    ctx.clearRect(0,0,img.width, img.height);
}
