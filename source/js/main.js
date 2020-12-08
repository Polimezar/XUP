'use strict';

(function () {
  // Открытие/закрытие меню
  var navToggle = document.querySelector('.header__toggle');
  var navMain = document.querySelector('.nav');

  navMain.classList.remove('nav--no-js');
  navToggle.classList.remove('header__toggle--no-js');

  navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('header__toggle--close');
    navMain.classList.toggle('nav--open');
  });

  // Обработчик клика для открытия/закрытия блока
  var addTabsClickToggle = function (button, activeClass) {
    button.addEventListener('click', function () {
      button.classList.toggle(activeClass);
    });
  };

  var researches = document.querySelector('.researches');

  if (researches) {
    researches.classList.remove('researches--nojs');
    var researchesButtons = researches.querySelectorAll('.researches button');
    for (var i = 0; i < researchesButtons.length; i++) {
      addTabsClickToggle(researchesButtons[i], 'researches__button--active');
    }
  }
})();
