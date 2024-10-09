const game = {
    ctx: null,
    canvas : null,
    radio : 10,
    bolax : 50,
    bolay:100,
    colorBola : "red",
    disX: 30
}
window.onload = function () {
     
   

    game.canvas = document.getElementById("marco");

    if (game.canvas && game.canvas.getContext) {
         game.ctx = game.canvas.getContext("2d");
        if (game.ctx) {
        
           game.ctx.lineWidth = game.radio;
           game.ctx.fillStyle = game.colorBola;
           game.ctx.arc(game.bolax, game.bolay ,game.radio,0,2*Math.PI,true);
           mueve();
           setInterval(mueve,60);

        }

    }

}
const mueve = ()=>{
    borrar();
    game.bolax += game.disX;
    game.ctx.beginPath();
    game.ctx.arc(game.bolax, game.bolay ,game.radio,0,2*Math.PI,true);
    game.ctx.fill();
}

const borrar = ()=>{
    game.ctx.clearRect(0,0, game.canvas.width, game.canvas.height);
    if(game.bolax - game.radio >  game.canvas.width){
        game.bolax =- game.radio 
    }
}