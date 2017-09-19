var init = function(){
    var c = document.getElementById('canv');
    var btn = document.getElementById('btn');
    var cd = c.getContext('2d');
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    //(ele,h,w,g,r,b,x,y,dx,dy,o)
            
    var r = [];
    var square;
    var amount = 1;     
    for(i=0;i<amount;i++){
        var w = (Math.floor(Math.random() * (100-5+1) + 5));
        var dx;
        var dy;
        if(w > 60){
            console.log('above 60');
            dx =(Math.floor( Math.random() * ((3-1+1)+1)));
            dy = (Math.floor( Math.random() * ((3-1+1)+1)));
        }else if(w<60 && w > 35){
            console.log('above 35');
            dx =(Math.floor( Math.random() * ((15-10+1)+10)));
            dy =(Math.floor( Math.random() * ((15-10+1)+10)));
        }else{
            console.log('below 35')
            dx =(Math.floor( Math.random() * ((50-40+1)+40)));
            dy =(Math.floor( Math.random() * ((50-40+1)+40)));
        }
        r.push(new Square(cd,100,w,(Math.floor( Math.random() * 255)),
        (Math.floor( Math.random() * 255)),(Math.floor( Math.random() * 255)),(Math.floor(Math.random() * window.innerWidth)),
        (Math.floor(Math.random()*window.innerHeight)),dx,dy,0.6)
        );
    }
    for(i=0;i<r.length;i++){
         square = r[i];
         square.createSquare();
    }
    //console.log(r);

    if(r.length > 800){
        r = square.removeSquare(r,r.length);
    }
    r = square.animateSquare(r);
};
init();

