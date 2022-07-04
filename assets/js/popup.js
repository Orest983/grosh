(function () {
  'use strict';

  const html = document.querySelector('html');
  const popup = document.querySelector('.popup');
  const closeBtn = document.querySelectorAll('.js-popup__close');
  const openBtn = document.querySelectorAll('.js-popup__open');

  const actions = {
    close: function () {
      html.classList.remove('popup-active');
      popup.classList.remove('active');
    },
    open: function () {
      html.classList.add('popup-active');
      popup.classList.add('active');
    }
  };

  closeBtn.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      actions.close();
    });
  });

  openBtn.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      actions.open();
    });
  });

  window.grosh.popup = {
    actions: actions
  }
})();

