let canvas, ctx; 

window.onload = init; 

function init(){

    canvas = document.querySelector('#myCanvas'); 

    ctx = canvas.getContext('2d'); 
  
    ctx.fillStyle ='#721919'; 
    ctx.fillRect(10, 10, 100, 100);   
    ctx.fillStyle = '#f1f1f1';
    ctx.clearRect(40, 40, 70, 70);

    ctx.strokeStyle ='#898989';
    ctx.strokeRect (40, 40, 100, 100);
    ctx.lineWidth = .5;
    ctx.strokeStyle = '#333333';
    ctx.strokeRect (40, 40, 70, 70);
    ctx.fillStyle = '#a30a0a';
    ctx.fillRect(40, 40, 70, 70);

    ctx.lineWidth = '6';
    ctx.fillStyle = 'rgb(241, 241, 241, .7)';
    ctx.font = '14px Georgia';
    ctx.fillText('Canvas', 48, 70);

    

}