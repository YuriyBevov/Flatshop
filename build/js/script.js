/**
 * @file представление модального окна
 * @author Yuriy Bevov
 */

'use strict';

(function () {
  var menuBtn = document.querySelector('.main-nav__toggle');
  var menu = document.querySelector('.main-nav__list');
  var registrationMenu = document.querySelector('.modal-registration');
  var registrationBtn = document.querySelector('.main-nav__link--registration');
  var registrationCloseBtn = document.querySelector('.modal-registration__closeBtn');

  var onClickHandler = function (evt) {
    evt.preventDefault();
    menu.classList.toggle('main-nav__list--closed');
    registrationBtn.addEventListener('click', openRegMenu);
  };

  var openRegMenu = function (evt) {
    evt.preventDefault();
    menu.classList.add('main-nav__list--closed');
    registrationMenu.classList.remove('modal--closed');
  };

  var closeRegMenu = function (evt) {
    evt.preventDefault();
    registrationMenu.classList.add('modal--closed');
    registrationBtn.removeEventListener('click', openRegMenu);
  };

  menuBtn.addEventListener('click', onClickHandler);
  registrationCloseBtn.addEventListener('click', closeRegMenu);
})();
