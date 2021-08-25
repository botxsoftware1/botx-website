$(document).ready(function () {

    $('.dismiss, .overlay').on('click', function () {
        $('.sidebar').addClass('notActive');
        $('.sidebar').removeClass('active');
    });

    $('.menu_text, .vector label').on('click', function (e) {
        e.preventDefault();
        $('.sidebar').addClass('active');
        $('.sidebar').removeClass('notActive');
    });

    var typed = new Typed(".typing", {
        strings: ["to be the change", "for you to be the change", "to be the future"],
        typeSpeed: 100,
        backSpeed: 30,
        loop: true
    });
});
