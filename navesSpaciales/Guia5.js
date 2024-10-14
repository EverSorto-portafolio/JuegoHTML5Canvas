
const  KEY_ENTER = 13;
const  KEY_LEFT = "ArrowLeft";
const  KEY_UP = 38;
const  KEY_RIGTH = "ArrowRight";
const  BARRA = " ";


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
            //Crear enemigo 
            game.imagenEnemigo = new Image();
            game.imagenEnemigo.src = "../img/invader.fw.png"
            game.imagenEnemigo.onload = function(){
                for(let i = 0; i< 5; i++){
                    for(let j = 0; j< 10; j++){
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

const animar = ()=>{
    requestAnimationFrame(animar);
    verificar();
    pintar();
}

const verificar = () =>{
    if(game.tecla[ KEY_RIGTH]) game.x +=10;
    if(game.tecla[ KEY_LEFT])  game.x -=10;
    if(game.tecla[BARRA]){
        game.balasArray.push(new bala( game.jugador.x+12, game.jugador.y -3, 5));
        game.tecla[BARRA]= false;
    }
    if(game.x > game.canvas.width- 10 ) game.x = game.canvas.width -10;
    if(game.x <0 ) game.x =10;
};

const pintar = ()=>{
    game.ctx.clearRect(0,0, game.canvas.width, game.canvas.height);
    game.jugador.dibujar(game.x);

    //mover proyectil
    for(let i = 0; 
        i< game.balasArray.length;
        i++
    ){
        if(game.balasArray[i]!= null){
            game.balasArray[i].dibujar();
            if(game.balasArray[i].y<0){
                game.balasArray[i] = null;
            }
        }
    }
    
    //Enemigos 

    for(let i = 0; i < game.enemigosArray.length; i++ ){
        game.enemigosArray[i].dibujar();
    }


}

function bala(x,y,w){
    this.x = x;
    this.y = y;
    this.w = w; 
    this.dibujar = function(){
        // dibujar el proyectil 
        game.ctx.save();
        game.ctx.fillStyle =  game.colorBala;
        game.ctx.fillRect(this.x,this.y,this.w,this.w);
        this.y = this.y -4; 
        game.ctx.restore();
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
        game.ctx.drawImage(
            game.imagenEnemigo, 0,0,40,30,
             this.x, this.y, 35,30 );
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
   // alert(e.key )
});

window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) { window.setTomiout(callback, 17); }
})();

 