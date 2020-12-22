$(document).ready(function () {
    $(".play").on("click", function () {
        var val = $(this).attr("sound-val");
        $("." + val)[0].play();
    })

    var test = 100;
    var op1 = 0;
    var op2 = 0;
    var op3 = 0;
    var time = 0;

    setInterval(function () {

        time = time + 0.01

        if (time > 1) {
            op1 = op1 + 0.7
            $(".script_opacity1").css("opacity", op1 + '%')
        }
        if (op1 > 100) {
            op1 = 100
        }

        if (time > 3) {
            op2 = op2 + 0.7
            $(".script_opacity2").css("opacity", op2 + '%')
        }
        if (op2 > 100) {
            op2 = 100
        }

        if (time > 5) {
            op3 = op3 + 0.7
            $(".script_opacity3").css("opacity", op3 + '%')
        }
        if (op3 > 100) {
            op3 = 100
        }

        if (time > 8) {
            test = test - 0.7
            $(".script").css("opacity", test + '%')
        }
    }, 10)

})