$(function() {

  'use strict';

    $('.js-menu-toggle').mouseenter(function () {
        test()
    }).mouseleave(function () {
        test()
    });

    function test() {
        var $this = $(this);

        if ($('body').hasClass('show-sidebar')) {
            $('body').removeClass('show-sidebar');
            $this.removeClass('active');
        } else {
            $('body').addClass('show-sidebar');
            $this.addClass('active');
        }

        try {
            e.preventDefault();

        } catch (e) {

        }
    }
});