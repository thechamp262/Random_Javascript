var init = function(){
    var c = document.getElementById('canv');
    var btn = document.getElementById('btn');
    var cd = c.getContext('2d');
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    //
     window.addEventListener('resize',
        function(event){
             c.width = window.innerWidth;
             c.height = window.innerHeight;
             grabSquare();
        });
    
   var grabSquare = function(){
       var square = new Square;
        var s = square.squareArrayBuild(300,cd);
       } ;
       grabSquare();
    
};
init();

