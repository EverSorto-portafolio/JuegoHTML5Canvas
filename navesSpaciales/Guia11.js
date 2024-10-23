
const KEY_ENTER = 13;
const KEY_LEFT = "ArrowLeft";
const KEY_UP = 38;
const KEY_RIGTH = "ArrowRight";
const BARRA = " ";


game = {
    canvas: null,
    ctx: null,
    imagen: null,
    caratula: true,
    imagenEnemigo: null,
    teclaPulsada: null,
    tecla: [],
    colorBala: "red",
    colorBala2: "yellow",
    disparo : false,
    balasArray: new Array(),
    enemigosArray: new Array(),
    balasEnemigasArray : new Array()

}
let x = 100;
let y = 100;

window.onload = function () {
    game.canvas = document.getElementById("marco");
    if (game.canvas && game.canvas.getContext) {
        game.ctx = game.canvas.getContext("2d");
        if (game.ctx) {

            game.imagen = new Image();
            game.imagen.src = "../img/torre.fw.png"
            //Crear enemigo 
            game.imagenEnemigo = new Image();
            game.imagenEnemigo.src = "../img/invader.fw.png"
            game.imagenEnemigo.onload = function () {
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 10; j++) {
                        game.enemigosArray.push(new enemigos(
                            100 + 40 * j, 30 + 45 * i));
                    }
                }
            }

            caratula();
            game.canvas.addEventListener("click", seleccionar, false);
        }
    } else {
        alert("canvas no soportado");
    }
}

const animar = () => {
    requestAnimationFrame(animar);
    verificar();
    pintar();
    colision();
}

const colision = () => {
    let enemigo, bala;
    for (let i = 0; i < game.enemigosArray.length; i++) {
        for (let j = 0; j < game.balasArray.length; j++) {
            enemigo = game.enemigosArray[i];
            bala = game.balasArray[j];

            if (enemigo != null && bala != null) {
                if (
                    (bala.x > enemigo.x) &&
                    (bala.x < enemigo.x + enemigo.w) &&
                    (bala.y > enemigo.y) &&
                    (bala.y < enemigo.y + enemigo.w)
                ) {
                    
                    enemigo.vive = false;
                    game.enemigosArray[i] = null;
                    game.balasArray[j] = null;
                    game.disparo = false;
                }
 
              }
        }
    }  

    // proyectil enenigo 
    for(let j = 0; j < game.balasEnemigasArray.length; j++){
        let bala = game.balasEnemigasArray[j];
        if(bala != null){
            if(
                (bala.x > game.jugador.x) &&
                (bala.x < game.jugador.x + game.jugador.w) &&
                (bala.y > game.jugador.y) &&
                (bala.y < game.jugador.y + game.jugador.h)
            ){
                gameOver();
            }
        }



    }
}


const verificar = () => {
    if (game.tecla[KEY_RIGTH]) game.x += 10;
    if (game.tecla[KEY_LEFT]) game.x -= 10;
    if (game.tecla[BARRA]) {

    if (game.x > game.canvas.width - 10) game.x = game.canvas.width - 10;
    if (game.x < 0) game.x = 10;

        if(game.disparo == false){
            game.balasArray.push(new bala(game.jugador.x + 12, game.jugador.y - 3, 5));
            game.tecla[BARRA] = false;
            game.disparo = true;
        } 
    }
    

    if(Math.random() > 0.96){
       dispararEnemigo();
    }
};

const pintar = () => {
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    game.jugador.dibujar(game.x);

    //mover proyectil
    for (let i = 0; i < game.balasArray.length;i++) {
        if (game.balasArray[i] != null) {
            game.balasArray[i].dibujar();
            if (game.balasArray[i].y < 0) {
                game.disparo = false;
                game.balasArray[i] = null;
            }
        }
    }

    //Enemigos 
    for(let i = 0; i < game.balasEnemigasArray.length; i++){
        if(game.balasEnemigasArray[i] != null){
            game.balasEnemigasArray[i].disparar();
            if(game.balasEnemigasArray[i].y > game.canvas.height){
                game.balasEnemigasArray[i] = null;
            }
        }

    }

    for (let i = 0; i < game.enemigosArray.length; i++) {
        if(game.enemigosArray[i] != null){
            game.enemigosArray[i].dibujar();
        }
    }


}

function bala(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.dibujar = function () {
        // dibujar el proyectil 
        game.ctx.save();
        game.ctx.fillStyle = game.colorBala;
        game.ctx.fillRect(this.x, this.y, this.w, this.w);
        this.y = this.y - 4;
        game.ctx.restore();
    }

     this.disparar = function () {
        // dibujar el proyectil 
        game.ctx.save();
        game.ctx.fillStyle = game.colorBala2;
        game.ctx.fillRect(this.x, this.y, this.w, this.w);
        this.y = this.y + 6;
        game.ctx.restore();
    }


}

function jugador(x) {
    this.x = x;
    this.y = 450;
    this.w = 30;
    this.h = 15;
    this.dibujar = function (x) {
        this.x = x;
        game.ctx.drawImage(game.imagen, this.x, this.y, this.w, this.h);
    }
}

function enemigos(x, y) {
    this.x = x;
    this.y = y;
    this.w = 35;
    this.veces = 0;
    this.dx = 5;
    this.ciclos = 0;
    this.num = 14;
    this.figura = true;
    this.vive = true;
    this.dibujar = function () {

        if (this.ciclos > 30) {
            if (this.veces > this.num) {
                this.dx *= -1; //cambia de direccion
                this.veces = 0; // reiciamos el ciclo
                this.num = 28;
                this.y += 20;
                this.dx = (this.dx > 0)? this.dx++ : this.dx--;
            } else {
                this.x += this.dx;
            }
            this.veces++;
            this.ciclos = 0;
            this.figura = !this.figura;
        } else {
            this.ciclos++;
        }

        if (this.figura) {
            game.ctx.drawImage(game.imagenEnemigo, 0, 0, 40, 30, this.x, this.y, 35, 30);
        } else {
            game.ctx.drawImage(game.imagenEnemigo, 50, 0, 35, 30, this.x, this.y, 35, 30);
        }




    }
}

const caratula = () => {
    let imagen = new Image();
    imagen.src = "../img/cara.webp"
    imagen.onload = () => {
        game.ctx.drawImage(imagen, 0, 0);
    }
}

const seleccionar = (e) => {
    if (game.caratula) {
        inicio();
    }
}

const inicio = () => {
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height)
    game.caratula = false;

    game.jugador = new jugador(0);
    game.x = game.canvas.width / 2;
    game.jugador.dibujar(game.x)
    animar();

}

const dispararEnemigo=()=>{
    let ultimos = new Array();
    for(let i = game.enemigosArray.length-1; i > 0; i-- ){
        if(game.enemigosArray[i] != null){
            ultimos.push(i);
        }
        if(ultimos.length == 10) break
    }

    let disparoRandom = ultimos[Math.floor(Math.random()*10)];

    game.balasEnemigasArray.push(
        new bala(game.enemigosArray[disparoRandom].x + 
            game.enemigosArray[disparoRandom].w/2,
            game.enemigosArray[disparoRandom].y, 5
        )
    );


}

const gameOver = ()=>{
  alert("Termino el jeugo")
}

document.addEventListener("keydown", function (e) {
    game.teclaPulsada = e.key;
    game.tecla[e.key] = true;
    // alert("levantando la tecla " + game.tecla);

});

document.addEventListener("keyup", function (e) {
    game.tecla[e.key] = false;
    // alert(e.key )
});

window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) { window.setTomiout(callback, 17); }
})();

