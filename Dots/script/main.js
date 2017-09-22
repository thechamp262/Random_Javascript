let init = function  (){
    let setCanvas = function (){
        let canvas = document.getElementById('full_canvas'),
            c = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let circleArray = [];
        
        circle = new Circle();
        circle.intCircle(50,c);
       
        
        window.addEventListener('resize',function(){
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            //let circle = new Circle(0,0,10,2,2,c);
        });

    };
    setCanvas();
}();

