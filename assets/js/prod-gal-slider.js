(function () {
  'use strict';

  const dotSelector = '.prod-gal__slider-dots-item';
  const dots = document.querySelectorAll(dotSelector);

  const thumbSelector = '.prod-gal__thumb-item';
  const thumbs = document.querySelectorAll(thumbSelector);


  const s = tns({
    container: '.js-prod-gal-slider',
    center: true,
    items: 3,
    autoplay: false,
    autoplayButtonOutput: false,
    controls: false,
    mouseDrag: true,
    navPosition: 'bottom',
    loop: true,
    slideBy: 'page',
    fixedWidth: 180,
    responsive: {
      400: {
        fixedWidth: 220,
        gutter: 0,
      },
      768: {
        fixedWidth: false
      },
      1024: {
        items: 1
      }
    }
  });

  const t = tns({
    container: '.js-prod-gal-thumb',
    items: 5,
    loop: false,
    axis: 'vertical',
    mouseDrag: true,
    autoplayButtonOutput: false,
    controls: false,
  });

  function removeActive() {
    dots.forEach(function (el) {
      el.classList.remove('active');
    });
    thumbs.forEach(function (el) {
      el.classList.remove('active');
    });
  }

  dots.forEach(function (el, i) {
    el.addEventListener('click', function () {
      s.goTo(i);
    });
  });

  thumbs.forEach(function (el, i) {
    el.addEventListener('click', function () {
      s.goTo(i);
    });
  });

  s.events.on('transitionStart', function () {
    const i = s.getInfo();
    const curDot = document.querySelector(`${dotSelector}[data-num="${i.displayIndex - 1}"]`);
    const curThumb = document.querySelector(`${thumbSelector}[data-num="${i.displayIndex - 1}"]`);
    t.goTo(i.displayIndex - 1);
    removeActive();
    curDot.classList.add('active');
    curThumb.classList.add('active');
  });

})();