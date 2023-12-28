$(document).ready(function () {
    $("#answer_1").hide();
    $("#answer_2").hide();
    $("#answer_3").hide();
    $("#answer_4").hide();

    var default_image = $(".button_1").css("background-image");
    var plus = "./assets/images/icon-plus.svg"
    var min = "./assets/images/icon-minus.svg"

    $(".answer-button").each(function (index) {
        $(this).on("click", function () {
            switch (index) {
                case 0:
                    $("#answer_1").slideToggle();
                    change_image("1");
                    break;
                case 1:
                    $("#answer_2").slideToggle();
                    change_image("2");
                    break;
                case 2:
                    $("#answer_3").slideToggle();
                    change_image("3");
                    break;
                case 3:
                    $("#answer_4").slideToggle();
                    change_image("4");
                    break;
                default:
                    console.log("No Content");
                    break
            }
        });
    });
    function change_image(index) {
        if ($(".button_" + index).css("background-image") === default_image) {
            $('.button_' + index).css('background-image', 'url(' + min + ')');
        }
        else {
            $('.button_' + index).css('background-image', 'url(' + plus + ')');
        }
    }
});



