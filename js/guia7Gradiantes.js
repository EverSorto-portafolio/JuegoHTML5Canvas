window.onload = function () {
    let canvas = document.getElementById("marco");
    if (canvas && canvas.getContext) {
        let ctx = canvas.getContext("2d");
        if (ctx) {

            let gradiente = ctx.createLinearGradient(0, canvas.height, 0, 0); // Creamos los elementos que sera la gradiente.
            gradiente.addColorStop(0, "blue",);
            gradiente.addColorStop(0.5, "white",);
            gradiente.addColorStop(0.6, "white",);
            gradiente.addColorStop(1, "blue",);

            ctx.fillStyle = gradiente;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
                }
    } else {
        alert("canvas no soportado");
    }
}