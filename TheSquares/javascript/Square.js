var Square = function(){
    var element;
    var m = {
        x: undefined,
        y: undefined
    };
    window.addEventListener('mousemove', 
            function(event){
            //(ele,h,w,x,y,dx,dy,color)
            m.x = event.x;
            m.y = event.y;
        });
    this.squareArrayBuild = function (amount,cd){
        element = cd;
        var a = amount;
        var color = [
            '#024959',
            '#037E8C',
            '#FFFFFA',
            '#F24C27',
            '#40858A',
            '#D8C00F'
        ];
        //(h,w,x,y,dx,dy,color)
        var r = [];
        for(i=0;i<a;i++){
            var w = (Math.floor( Math.random() * ((100-1+1)+1)));
            var dx;
            var dy;
            
            if(w > 60){
               // console.log('above 60');
                dx =(Math.floor( Math.random() * ((3-1+1)+1)));
                dy = (Math.floor( Math.random() * ((3-1+1)+1)));
            }else if(w<60 && w > 35){
                //console.log('above 35');
                dx =(Math.floor( Math.random() * ((15-10+1)+10)));
                dy =(Math.floor( Math.random() * ((15-10+1)+10)));
            }else{
                //console.log('below 35');
                dx =(Math.floor( Math.random() * ((3-1+1)+1)));
                dy = (Math.floor( Math.random() * ((3-1+1)+1)));
            }
             //square = r[i];
             console.log(a);
            var y = (Math.floor(Math.random()*window.innerHeight));
            var x = (Math.floor(Math.random() * window.innerWidth));
            var c = color[Math.floor(Math.random()*(6-0)+0)];
            
             r.push({
                 h : w,
                 w : w,
                 x: x,
                 y: y,
                 dx: dx,
                 dy: dy,
                 c: c
             });
             createSquare(100,w,x,y,dx,dy,c);
        }        
        this.animateSquare(r);
    };
    var createSquare = function (h,w,x,y,dx,dy,c){
        
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy =dy;
        this.h = h;
        this.w = w;
        this.c = c;
       
//        if(m.y - this.y < 10 && m.y - this.y > -10){
//             this.y = -this.y; 
//             //this.w++;
//        }
        element.fillStyle = this.c;
        element.fillRect(this.x,this.y,this.w,this.w);
    }; //(h,w,x,y,dx,dy,color)
    var editSquare = function (a){
        element.clearRect(0,0,innerWidth,innerHeight);
        var arr = a;
        for(i=0;i<arr.length;i++){
            if(arr[i]['x'] > innerWidth || arr[i]['x'] < 0){
                arr[i]['dx'] = -arr[i]['dx']; 
            }
             if(arr[i]['y'] > innerHeight || arr[i]['y'] < 0){
                arr[i]['dy'] = -arr[i]['dy']; 
            }
            arr[i]['x'] += arr[i]['dx'];
            arr[i]["y"] += arr[i]['dy']; 
            createSquare(arr[i]['h'],arr[i]['w'],arr[i]['x'],arr[i]['y'],arr[i]['dx'],arr[i]['dy'],arr[i]['c']);
            }
    };
    this.removeSquare = function (a,amount){
        
        var arr = a;
        var amt = amount;
        for(i=0;i<Math.floor(amt/2);i++){
            if(Math.floor(amt/2) > 2){
            arr.pop();
            }
        };
        return arr;
    };
    this.animateSquare = function(a){
        var  arr = a;
        var ani = function(){
            requestAnimationFrame(ani);
            for(i=0;i<arr.length;i++){
               editSquare(arr);
            } 
            return arr;
        };
         return ani();
         
    };
};
