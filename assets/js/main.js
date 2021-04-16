$(document).ready(function () {
    //El dom se cargó.
    console.log('El DOM SE CARGÓ');

    //Medida de carusel
    console.log($('#carusel').height())

    //cambio de color nav
    $(window).on('scroll', function () {
        if ($('#carusel').height() - 50 < $(window).scrollTop()) {
            $('nav').css('background-color', 'black')
        } else {
            $('nav').css('background-color', 'transparent')
        }
    });

    //Scroll smooth
    $(document).on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 850, 'linear');
    });

    //Alert el correo se ha enviado!
    $("#suscribete").click(function () {
        alert("Gracias por suscribirte")
    });

    //popover
    $('[data-toggle="popover"]').popover();











});