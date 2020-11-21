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

// Modal
function openModal(state) {
    // TODO Ahmad : State is whether login or register - open tab according to this value
    document.getElementById('modal').classList.add('active-modal');
}
function closeModal(state) {
    document.getElementById('modal').classList.remove('active-modal');
}