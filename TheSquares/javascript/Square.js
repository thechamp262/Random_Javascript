var Square = function(ele,h,w,g,r,b,x,y,dx,dy,o){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy =dy;
    this.h = h;
    this.w = w;
    this.r = r;
    this.g = g;
    this.b = b;
    this.o = o;
    var element = ele;
    
    this.createSquare = function (){
        
        element.fillStyle = "rgba("+this.r+","+this.g+","+this.b+","+this.o+")";
        element.fillRect(this.x,this.y,this.w,this.w);
        //console.log(this.x, this.y,this.dx,this.dy,this.h,this.w,this.o,this.r,this.g,this.b,ele);
    };
    this.editSquare = function (a){
        element.clearRect(0,0,innerWidth,innerHeight);
        var arr = a;
        for(i=0;i<arr.length;i++){
            element.fillStyle = "rgba("+arr[i]['r']+","+arr[i]['g']+","+arr[i]['b']+","+arr[i]['o']+")";
            element.fillRect(arr[i]['x'],arr[i]['y'],arr[i]['w'],arr[i]['w']);
        }
        return arr;
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
        var arr = a,
        ani = function(){
            element.clearRect(0,0,innerWidth,innerHeight);
            requestAnimationFrame(ani);
            for(i=0;i<arr.length;i++){
                if(arr[i]['x'] > innerWidth || arr[i]['x'] < 0){
                    arr[i]['dx'] = -arr[i]['dx']; 
                }
                 if(arr[i]['y'] > innerHeight || arr[i]['y'] < 0){
                    arr[i]['dy'] = -arr[i]['dy']; 
                }
                arr[i]['x'] += arr[i]['dx'];
                arr[i]["y"] += arr[i]['dy'];
            }
            for(i=0;i<arr.length;i++){
                element.fillStyle = "rgba("+arr[i]['r']+","+arr[i]['g']+","+arr[i]['b']+","+arr[i]['o']+")";
                element.fillRect(arr[i]['x'],arr[i]['y'],arr[i]['w'],arr[i]['w']);
            }
            return arr;
        };
         return ani();
         
    };
};
