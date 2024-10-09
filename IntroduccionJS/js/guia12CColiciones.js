const game = {
    ctx: null,
    canvas : null,
    radio : 10,
    bolax : 300,
    bolay:300,
    colorBola : "red",
    dx: 4,
    dy: -4,
    limiteD : 0,
    limiteI : 0, 
    limiteA: 0, 
    limiteAbajo: 0
}
window.onload = function () {
     
   

    game.canvas = document.getElementById("marco");

    if (game.canvas && game.canvas.getContext) {
         game.ctx = game.canvas.getContext("2d");
        if (game.ctx) {
        
          inicio();
           game.ctx.arc(game.bolax, game.bolay ,game.radio,0,2*Math.PI,true);
           mueve();
           setInterval(mueve,60);

        }

    }

}
const mueve = ()=>{
    game.ctx.clearRect(0,0, game.canvas.width, game.canvas.height);
   verificar();
   game.bolax += game.dx;
   game.bolay += game.dy;
    game.ctx.beginPath();
    game.ctx.arc(game.bolax, game.bolay ,game.radio,0,2*Math.PI,true);
    game.ctx.fill();
}

const inicio = ()=>{
     
    game.ctx.lineWidth = game.radio;
    game.ctx.fillStyle = game.colorBola;


    game.limiteD = game.canvas.width - game.radio;
    game.limiteI = game.radio;
    game.limiteAbajo = game.canvas.height - game.radio;
    game.limiteA =  game.radio;

}

const verificar = ()=>{

    let bolaX = game.bolax + game.dx;
    let bolaY = game.bolay + game.dy;
    if(bolaX > game.limiteD){
        game.dx *= -1;
        bolax = game.limiteD;
    }
    if(bolaX < game.limiteI){
        game.dx *= -1;
        bolaX = game.limiteI;
    }

    if(bolaY > game.limiteAbajo){
        game.dy *= -1;
        bolaY = game.limiteAbajo;
    }
    if(bolaY < game.limiteA){
        game.dy *= -1;
        bolaY = game.limiteA;
    }

    game.bolax = bolaX;
    game.bolay = bolaY;
}

