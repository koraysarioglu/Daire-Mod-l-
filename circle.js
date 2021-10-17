var yarıçap;
    function circleArea(yarıçap){
    var alan = Math.PI*yarıçap*yarıçap;
    console.log(alan);
    }

    function circleCircumference(yarıçap){
    var çevre = 2*Math.PI*yarıçap;
    console.log(çevre);
    }

    module.exports = {
        circleArea,
        circleCircumference
    }
