jQuery(document).ready(function ($) {
    const $sidebar = $("#sidebar");
    const $menuToggleBtn = $("#toggle-menu-btn");

    $menuToggleBtn.on('click', function () {
        $sidebar.trigger('menu:toggle');
        $menuToggleBtn.toggleClass('fa-times', 'fa-bars');
    });

    $sidebar.on('menu:toggle', function () {
        if ($menuToggleBtn.hasClass('fa-times')) {
            $sidebar.trigger('menu:close');
        } else {
            $sidebar.trigger('menu:open');
        }
    }).on('menu:open', function () {
        $sidebar.addClass('open-sidebar');
    }).on('menu:close', function () {
        $sidebar.removeClass('open-sidebar');
    });
});