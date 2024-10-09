
const  KEY_ENTER = 13;
const  KEY_LEFT = "ArrowLeft";
const  KEY_UP = 38;
const  KEY_RIGTH = "ArrowRight";
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
           
            game.imagen = new  Image();
            game.imagen.src = "../img/torre.fw.png"
            caratula();
            game.canvas.addEventListener("click", seleccionar, false);
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
    if(game.tecla[ KEY_RIGTH]) game.x +=10;
    if(game.tecla[ KEY_LEFT])  game.x -=10;
};

const pintar = ()=>{
    game.ctx.clearRect(0,0, game.canvas.width, game.canvas.height);
    game.jugador.dibujar(game.x);
    
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

    game.jugador = new jugador(0);
    game.x =  game.canvas.width/2;
    game.jugador.dibujar(game.x)
    animar();

}

document.addEventListener("keydown", function(e){
    game.teclaPulsada = e.key;
    game.tecla[e.key] = true;
   // alert("levantando la tecla " + game.tecla);
    
});

document.addEventListener("keyup", function(e){
   
    game.tecla[e.key] = false;
});

window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) { window.setTomiout(callback, 17); }
})();

