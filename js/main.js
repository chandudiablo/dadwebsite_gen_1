$(document).ready(function(){

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        var scrollDest = ($target.offset().top + 2);
        if($(window).scrollTop() === scrollDest)
        {
            scrollDest = 0;
        }
        $('html, body').stop().animate({
            'scrollTop': scrollDest
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    $(document).on("click", "#close-x", function () {
        $("#privacy-policy").toggleClass("dis-none");
    });

    $(document).on("click", "#privacy-policy-link", function () {
        $("#privacy-policy").toggleClass("dis-none");
    });

    $(document).on("click", "#close-x-enquire-dialog", function () {
        $("#enquire-now-dialog").toggleClass("dis-none");
    });

    $(document).on("click", ".enquire-button", function () {
        $("#enquire-now-dialog").toggleClass("dis-none");
    });
    $(document).on("click", "#enquire-fixed", function () {
        $("#enquire-now-dialog").toggleClass("dis-none");
    });

    $(document).on("click", "section.newspapers-section div.dailies .expand-collapse-row", function () {
        var arrow =$(this).children(".arrow-div").eq(0);
        var content = $(this).siblings(".content").eq(0);
        if(arrow.hasClass("expanded-arrow")) {
            arrow.removeClass("expanded-arrow");
            arrow.addClass("collapsed-arrow");
            content.addClass("visuallyhidden");
            setTimeout(function () {
                content.addClass("dis-none");
            }, 500);
        }
        else
        {
            arrow.addClass("expanded-arrow");
            arrow.removeClass("collapsed-arrow");
            content.removeClass("dis-none");

            setTimeout(function () {
                content.removeClass("visuallyhidden");
            }, 200);
        }
    });

    $(document).on("click", "section.newspapers-section .collapse-all", function () {
        var arrowdiv = $("section.newspapers-section div.dailies .arrow-div");
        var contentdiv = $("section.newspapers-section div.dailies .content")
        arrowdiv.removeClass("expanded-arrow");
        arrowdiv.addClass("collapsed-arrow");
        contentdiv.addClass("visuallyhidden");
        contentdiv.addClass("dis-none");
    });

    $(document).on("click", "#contact-us-nav", function () {
        $("#enquire-now-dialog").toggleClass("dis-none");
    });


});