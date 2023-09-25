AOS.init({ duration: 1000, offset: 50 });
AOS.refresh();


document.addEventListener('DOMContentLoaded', function () {
    var navbarToggle = document.querySelector('.navbar-toggler');
    var navbarToggleIcon = document.querySelector('#navbarToggleIcon');

    navbarToggle.addEventListener('click', function () {
        var isCollapsed = navbarToggle.getAttribute('aria-expanded') === 'true';

        navbarToggleIcon.src = isCollapsed ? './assets/icons/xmark-solid.svg' : './assets/icons/bars-solid.svg';

    });
});