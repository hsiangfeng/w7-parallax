
$(document).ready(() => {
  setTimeout(() => {
    $('#navbar').addClass('active');
    $('#header').addClass('active');
  }, 800);

  const gearIO = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio >= 0.5) {
      $('#gear').addClass('active');
    }

    if (entries[0].intersectionRatio >= 0.9) {
      $('.gear__content__title').removeClass('activeStripped');
      $('.gear__content__subtitle').removeClass('activeStripped');
    }
  }, {
    threshold: [0.5, 0.9],
  });
  gearIO.observe($('#gear')[0]);

  const strippedIO = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio >= 0.14) {
      $('.gear__content__title').addClass('activeStripped');
      $('.gear__content__subtitle').addClass('activeStripped');

      $('#stripped').addClass('active');
    }

    if (entries[0].intersectionRatio >= 0.9) {
      $('.stripped__content__title').removeClass('activeStripped');
      $('.stripped__content__subtitle').removeClass('activeStripped');
    }
  }, {
    threshold: [0.14, 0.9],
  });
  strippedIO.observe($('#stripped')[0]);

  const collectionIO = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio >= 0.15) {
      $('.stripped__content__title').addClass('activeStripped');
      $('.stripped__content__subtitle').addClass('activeStripped');
    }

    if(entries[0].intersectionRatio >= 0.25) {
      $('.collection__main h4').addClass('active');
      $('.collection__main p').addClass('active');
    }
  }, {
    threshold: [0.15, 0.25],
  });
  collectionIO.observe($('#collection')[0]);

  const fixieIO = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio >= 0.7) {
      $('.fixie__card').addClass('active');
    }
  }, {
    threshold: [0.7],
  });
  fixieIO.observe($('#fixie')[0]);

  const footerIO = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio >= 0.9) {
      $('#footer').addClass('active');
    }
  }, {
    threshold: [0.9],
  });
  footerIO.observe($('#footer')[0]);

  $(window).scroll(function() {
    const scrollPos = $(this).scrollTop();
    const windowHeight = $(window).height();
    const gearbg = $('.gear__read-bg').offset().top;
    if((scrollPos + windowHeight / 2) >= gearbg) {
      $('.gear__read-bg').css('background-position', `-${parseInt(scrollPos / 6)}px center`);
    }

    const stripped = $('#stripped').offset().top;
    if((scrollPos + windowHeight / 2) >= stripped) {
      $('.stripped__read-bg').css('background-position', `-${parseInt(scrollPos / 6)}px center`);
    }

    const collection = $('.collection__bg').offset().top;
    if(collection >= scrollPos || collection <= scrollPos) {
      $('.collection__bg').css('background-position', `center -${parseInt(scrollPos / 5)}px`);
    }
  });
});