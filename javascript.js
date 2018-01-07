// MENU
// function to change the display value of the menu
function accordionMenu() {
    var menu = document.getElementById("toggled");
    var menuStyle = window.getComputedStyle(menu);
    var display = menuStyle.getPropertyValue('display');
    if (display === 'none') {

        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    };
};

// add event listener to menu button
var toggle = document.getElementById("menu-toggle");
toggle.addEventListener("click", accordionMenu, false);

//PORTFOLIO
var Portfolio = {
    sort: function (items) {
        items.show();
        $('.sectionwrapper').find('div.portfolio-item').not(items).fadeOut(0);
    },
    showAll: function (items) {
        items.fadeIn(500);
    },
    doSort: function () {
        $('a', '#portfolio-sort').on('click', function () {

            var $a = $(this);
            if (!$a.is('#all')) {

                var items = $('div[data-cat=' + $a.data('cat') + ']', '.sectionwrapper');

                Portfolio.sort(items);

            } else {

                Portfolio.showAll($('div.portfolio-item', '.sectionwrapper'));
            }

        });
    }
};

Portfolio.doSort();
