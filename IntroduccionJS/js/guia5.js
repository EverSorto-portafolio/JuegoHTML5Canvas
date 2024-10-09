window.onload = function () {
    let canvas = document.getElementById("marco");
    if (canvas && canvas.getContext) {
        let ctx = canvas.getContext("2d");
        if (ctx) {
            let puntas = 10; // numero de puntas  que tendra la estrella
            let vertices = puntas * 2; // es la union de los vertices (Cada linea incia y termina por ello 2 vertices por linea)
            let angulo = Math.PI * 2 /vertices; // angulo sera igual para todos los vertices 
            let radioInterno = 40; // ancho que tendra la estrella
            let RadioExterno = 80; // grozor que tendra la estrella
            let xCentro = canvas.width / 2; // Colocamos la estrella en el centro x
            let yCentro = canvas.height / 2; //Colocamos una estrella en el centro y

            //Creamos  configuracion de las lineas 

            ctx.strokeStyle = "red";
            ctx.fillStyle = "yellow";
            ctx.lineWidth = 10;
            ctx.beginPath();
            for (
                let i = 0; // crea una variable para indicar el numero de saltos 
                i < vertices; // indicamos que se detendra en el ultimo numero menor a vertices  
                i++ // indicamos que i aumentara ++ que significa 1 cada paso
            ) {
                let x, y;
                // queremos que la estrella tenga un numero par de lineas 
                if (
                    i % 2 == 0 // % devuelve el valor que sobra de la divicion si es 0 significa que es par
                ) {
                    //obtenemos el punto interno de la primera linea par
                    x = Math.cos(angulo * i) * RadioExterno; //creara el angulo de un punto en x
                    y = Math.sin(angulo * i) * RadioExterno; //creara el angulo de un punto en y

                } else {

                    x = Math.cos(angulo * i) * radioInterno; //creara el angulo de un punto en x
                    y = Math.sin(angulo * i) * radioInterno; //creara el angulo de un punto en y
                }
                
                ctx.lineTo(xCentro+x, yCentro+y);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    } else {
        alert("canvas no soportado");
    }
}