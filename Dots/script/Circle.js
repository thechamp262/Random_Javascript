let Circle = function (){
  let circleArray = [],c;
  //console.log(x,y,radius,dx,dy,canvas);
  
    this.intCircle = function(amount,canvas){
        this.a = amount;
        c = canvas;
        //createCircle = function (xa,ya,radius,dxx,dyy,canvas);
        for(let i = 0; i < this.a ; i++){
            let x = Math.random() * window.innerWidth;
            let y = Math.random() * window.innerHeight;
            let r = Math.floor(Math.random() * 100);
            let dx = .1;
            let dy = .1;
            circleArray.push({
                x: x,
                y: y,
                r: r,
                dx:dx,
                dy:dy
            });
            animateCircle();
        };
      
  };
  let createCircle = function (r,x,y){
      
      c.beginPath();
      c.arc(x,y,r,0,Math.PI * 2,false);
      c.fillStyle = '#fff';
      c.fill();
  };
  
  let editCircle = function(){
      c.clearRect(0,0,innerWidth,innerHeight);
      for(let i = 0; i < circleArray.length ; i++){
         // console.log(circleArray);
      if(circleArray[i]['x'] + circleArray[i]['r'] > 
         window.innerWidth || circleArray[i]['x'] - circleArray[i]['r'] < 0){
         circleArray[i]['dx'] = -circleArray[i]['dx'];
      }
      if(circleArray[i]['y'] + circleArray[i]['r'] > 
         window.innerHeight || circleArray[i]['y'] - circleArray[i]['r'] < 0){
          circleArray[i]['dy'] = -circleArray[i]['dy'];
      }
      circleArray[i]['x'] += circleArray[i]['dx'];
      circleArray[i]['y'] += circleArray[i]['dy'];
      createCircle(circleArray[i]['r'],circleArray[i]['x'],circleArray[i]['y']);
    }
      
  };
  let animateCircle = function(){
      this.a = circleArray;
        requestAnimationFrame(animateCircle);
      
        for(let i =0; i< this.a.length; i++){
            editCircle();
        }
  };
};

