
$(document).ready(function() {

    $('.first_screen_svg').mouseenter(function() {
        setInterval(fade,3500);

        function fade() {

            $( ".cover" ).fadeOut(1000).css('z-index', 1000);
            $( ".project-animation" ).css('display', 'flex');
            $( ".red-text" ).delay(1000).fadeIn(1500);
            $( "#rus" ).delay(1500).fadeIn(1000);
            $( "#actual" ).delay(2000).fadeIn(1000);
            $( "#link-first" ).delay(2500).fadeTo(1000, 1);
            $( "#drop" ).delay(3000).fadeTo(1000, 1);
            $( "#link-second" ).delay(3500).fadeTo(1000, 1);
            $( "#link-third" ).delay(4000).fadeTo(1000, 1);
            $( "#link-fourth" ).delay(4500).fadeTo(1000, 1);
            $( ".slogun" ).delay(4500).fadeTo(1000, 1);
            $( ".chief" ).delay(5000).fadeIn(1000);
            $( ".email" ).delay(5000).fadeTo(1000, 1);
            $( ".consult" ).delay(5000).slideDown(1000);
        }
    });

    var menuItem = $("#rus");
    var menuItem2 = $("#actual");
    var menuImg = $("#ring");
    var notification = $(".center::after");
    var linksAll = $("#links-drop");
    var linkFirst = $("#link-first");
    var linkSecond = $("#link-second");
    var linkThird = $("#link-third");
    var linkFourth = $("#link-fourth");
    var logo = $("#Fill-1");
    var logo2 = $("#Group-4");
    var logo3 = $("#Group-10");
    var navbar = $("#navbar");



    function headerColor() {

        menuItem.css('color','black');
        menuItem2.css('color','black');
        menuImg.css('fill','black');
        linksAll.css('color','black');
        linkFirst.css('color','black');
        linkSecond.css('color','black');
        linkThird.css('color','black');
        linkFourth.css('color','black');
        logo.css('fill','black');
        logo2.css('fill','black');
        logo3.css('fill','black');
        notification.css('opacity','1');
        navbar.css('z-index','200');
    }

    function fadeMain() {
        $( ".text-block-header" ).slideDown(1000);
        $( ".text-block-paragraph" ).delay(2000).fadeIn(1000);
    }


    $(".arrow").click(function() {
            $( ".project-animation" ).css('display', 'none');
            $( ".cover-middle" ).slideDown(1000);
            $( ".cover-middle-next" ).delay(1000).slideDown(1000);
            $( "html" ).css('overflow-y', 'visible');
            $( ".main" ).delay(2000).slideDown(1000);
            setTimeout(fadeMain, 2000);
            setTimeout(headerColor, 2000);
        });

        // Check for click events on the navbar burger icon
        $(".navbar-burger").click(function() {

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");
        });


    $('.has-dropdown').each(function(){
        var $dropdown = $(this);

        $dropdown.click(function(){
            $(this).toggleClass('is-active');
        });

        $(document).on("click", function(event){
            if($dropdown !== event.target && !$dropdown.has(event.target).length){
                $dropdown.removeClass('is-active');
            }
        });
    });

    $('.consult-second-screen').mouseenter(function() {
    $( ".button-slide" ).show();
});

    $(".consult-second-screen").mouseleave(function(event ){
    event = event || window.event;
    var relTarg = event.relatedTarget || event.toElement
    if (relTarg.id !== 'btn-cons' && relTarg.id !== 'btn-slide' )
    {

        $( ".button-slide" ).hide();
    }
});

});
