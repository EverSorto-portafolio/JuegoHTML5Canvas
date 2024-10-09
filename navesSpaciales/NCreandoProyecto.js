
const  KEY_ENTER = 13;
const  KEY_LEFT = 37;
const  KEY_UP = 38;
const  KEY_RIGTH = 39;
const  BARRA = 32;


game = {
    canvas : null,
    ctx: null, 
    imagen : null, 
    caratula : true, 
    imagenEnemigo: null,
    teclaPulsada: null, 
    tecla:[],
    colorBala: "red", 
    balasArray : new Array(),
    enemigosArray: new Array()

}
let x = 100; 
let y = 100;

window.onload = function () {
    game.canvas = document.getElementById("marco");
    if (game.canvas && game.canvas.getContext) {
        game.ctx = game.canvas.getContext("2d");
        if (game.ctx) {
           // alert("Dentro del canvas");
            caratula();
            //animar();

        }
    } else {
        alert("canvas no soportado");
    }
}

const animar = ()=>{
    requestAnimationFrame(animar);
    verificar();
    pintar();
}

const verificar = () =>{
    x  += 2;
    if(x > game.canvas.width) x = 0;
};

const pintar = ()=>{
    game.ctx.clearRect(0,0, game.canvas.width, game.canvas.height);
    game.ctx.fillStyle = "red";
    game.ctx.beginPath();
    game.ctx.arc(x,y,5,0,2*Math.PI);
    game.ctx.fill();
}

function bala(x,y,w){
    this.x = x;
    this.y = y;
    this.w = w;
    this.dibujar = function(){

    }
    
}

function jugador(x){
this.x = x;
this.y = 450;
this.dibujar = function(x)
    {
      this.x = x;
      game.ctx.drawImage(game.imagen, this.x, this.y, 30,15);   
    }
}

function enemigos(x,y){
    this.x = x; 
    this.y = y;
    this.w = 35;
    this.veces = 0; 
    this.dx = 5;
    this.ciclos = 0;
    this.num = 14;
    this.figura = true;
    this.vive = true;
    this.dibujar = function(){    
    }
}

const caratula = ()=>{
    let imagen = new Image();
    imagen.src = "../img/cara.webp"
    alert("dentro de la imagen")
    imagen.onload = ()=>{
        game.ctx.drawImage(imagen, 0,0);
    }
}

const seleccionar = (e)=>{
    if(game.caratula){
        inicio();
    }
}

const  inicio = ()=>{
    game.ctx.clearRect(0,0,game.canvas.width, game.canvas.height)
    game.caratula = false;
}



window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) { window.setTomiout(callback, 17); }
})();

