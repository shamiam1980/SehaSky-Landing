// HTML BOILERPLATE

// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () { };
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());


/* __________________________________________________________________________________________________________ */


// Place any jQuery/helper plugins in here
$(document).ready(function () {

  // VENDOR

  // Horizontal Scrolling JS Plugin Init
  // $('section').horizon();

  // FullPage.js Plugin Init
  // $('#fullpage').fullpage({
  //   //options here
  //   autoScrolling: true,
  //   scrollHorizontally: true,
  //   continuousHorizontal: true
  // });

  // //methods
  // $.fn.fullpage.setAllowScrolling(true);

  // PagPiling.js Plugin Init
  $('#pagepiling').pagepiling({
    direction: 'vertical',
    navigation: false,
    sectionsColor: ['#FFF', '#FFF04B', '#EEE', '#07BEB8', '#EEE']
  });


  // Anime.js Init [ Section-1 Moving waves ]
  anime({
    targets: '.section-1 .wave-1 path',
    d: [
      'M-2,468.451169 C-2,468.451169 252.334287,673.993002 573.411472,523.524647 C894.488657,373.056293 1101,542.009898 1198,488.147432 L1198,1 L-2,1 C-2,312.634113 -2,468.451169 -2,468.451169 Z',
      'M-2,468.451169 C-2,468.451169 349.117562,347.188698 538.784664,409.698879 C728.451765,472.209061 1101,542.009898 1198,488.147432 L1198,1 L-2,1 C-2,312.634113 -2,468.451169 -2,468.451169 Z'
    ],
    duration: 10000,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
  });

  anime({
    targets: '.section-1 .wave-2 path',
    d: [
      'M-2,498.44993 C-2,498.44993 246.658598,729.597061 618,531.680364 C989.341402,333.763666 1055.667,611.414642 1198,498.44993 L1198,0 L-2,0 C-2,332.299954 -2,498.44993 -2,498.44993 Z',
      'M-2,498.44993 C-2,498.44993 131.917312,347.531383 482.379519,506.601288 C832.841726,665.671193 1015.06558,314.245395 1196,385.541768 L1198,0 L-2,0 C-2,332.299954 -2,498.44993 -2,498.44993 Z',
      'M-2,498.44993 C-2,498.44993 267.537793,372.610458 618,531.680364 C968.462207,690.750269 1055.667,611.414642 1198,498.44993 L1198,0 L-2,0 C-2,332.299954 -2,498.44993 -2,498.44993 Z'
    ],
    duration: 80000,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
  });

  // Tree Animation [ Section-1 Moving clouds behind tree ]

  var treePoly = $('#tree > polygon'),
    cloudPoly1 = $('#cloud1 > polygon'),
    cloudPoly2 = $('#cloud2 > polygon'),
    shadows = $('#tree > ellipse'),
    text = $('.happy-coding span');

  var textStaggerFrom = {
    y: 100,
    transformOrigin: 'center center',
    autoAlpha: 0
  }

  var textStaggerTo = {
    autoAlpha: 1,
    y: 0,
    ease: Back.easeInOut,
  }

  var polyStaggerFrom = {
    scale: 0,
    opacity: 0,
    transformOrigin: 'center center'
  }

  var polyStaggerTo = {
    scale: 1,
    opacity: 1,
    ease: Elastic.easeInOut
  }

  var polyDuration = 1.5,
    cloudPolyDuration = .8,
    stagger = .05;

  var tree = new TimelineMax({
    yoyo: true
  });

  var clouds = new TimelineMax({
    delay: 1.5,
    yoyo: true
  });

  var cloudTween = TweenMax.to(cloudPoly1, 20, {
    x: 200,
    repeat: -1,
    yoyo: true,
    ease: Power0.easeInOut,
    rotation: 0.01
  });
  var cloudTween2 = TweenMax.fromTo(cloudPoly2, 18, {
    x: -200,
    repeat: -1,
    yoyo: true,
    ease: Power0.easeInOut,
    rotation: 0.01
  },
    {
      x: 200,
      repeat: -1,
      yoyo: true,
      ease: Power0.easeInOut,
      rotation: 0.01
    })

  var controller = new ScrollMagic.Controller({
    // addIndicators: true,
    tweenChanges: true
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: '.scene',
    offset: 0,
    triggerHook: '0.1', // Scroll Trigger Point
    duration: 0
  }).setTween([cloudTween, cloudTween2, tree, clouds])
    .addTo(controller);

  // cloud timeline
  clouds.staggerFromTo(cloudPoly1,
    cloudPolyDuration,
    { autoAlpha: 0 },
    { autoAlpha: 1 },
    stagger,
    0)
    .staggerFromTo(cloudPoly2,
      cloudPolyDuration,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      stagger,
      0.3);

  // tree timeline
  tree
    .add('label1')
    .staggerFromTo(treePoly,
      polyDuration,
      polyStaggerFrom,
      polyStaggerTo,
      stagger,
      'label1'
    )
    .fromTo(shadows, .3, { autoAlpha: 0 }, { autoAlpha: 1 }, 'label1+=1')
    .staggerFromTo(text, 1, textStaggerFrom, textStaggerTo, .2, 'label1+=2');





  // SECTION ( 4 ) -- Path Slider Plugin
  // Function to get a path (string) similar to sin function. Can accept following options that you can use for customization:
  // - width: Width to draw the path
  // - height: Height to draw the path
  // - addWidth: Additional width to overflow actual width
  // - controlSep: Bigger values of this parameter will add more curvature, and vice versa
  // - curves: Number of curves (iterations) to draw

  function getSinPath(options) {
    var _options = options || {};
    var _width = _options.width || window.innerWidth;
    var _height = _options.height || window.innerHeight;
    var _addWidth = _options.addWidth || 100;
    var _controlSep = _options.controlSep || 50;
    var _curves = _options.curves || 2;

    var x = - _addWidth;
    var y = _height / 2;
    var amplitudeX = (_width + _addWidth * 2) / _curves;     // X distance among curve points
    var amplitudeY = _height / 3;                            // Y distance between points and control points

    var path = [];
    path.push('M', x, y);
    var alternateY = true;
    var controlY;
    for (var i = 0; i < _curves; i++) {
      controlY = alternateY ? y - amplitudeY : y + amplitudeY;
      if (i === 0) {
        path.push('C', x + (amplitudeX / 2 - _controlSep), controlY);
      } else {
        path.push('S');
      }
      path.push(x + (amplitudeX / 2 + _controlSep), controlY);
      path.push(x + amplitudeX, y);
      x += amplitudeX;
      alternateY = !alternateY;
    }

    return path.join(' ');
  }

  (function () {

    // Creating SVG and path elements and insert to DOM

    var svgNS = 'http://www.w3.org/2000/svg';
    var svgEl = document.createElementNS(svgNS, 'svg');
    var pathSlider = document.getElementById('path-slider');

    // MYCODE -- Add class to svg to use it properly in CSS
    svgEl.setAttribute('class', 'path-slider__svgpath');

    var pathEl = document.createElementNS(svgNS, 'path');
    // The `getSinPath` function return the `path` in String format
    pathEl.setAttribute('d', getSinPath());
    pathEl.setAttribute('class', 'path-slider__path');

    svgEl.appendChild(pathEl);
    pathSlider.appendChild(svgEl);


    // Changing `background-image`
    // Firstly, saving the computed `background` of each item, as these are defined in CSS
    // When item is selected, the `background` is set accordingly

    var items = document.querySelectorAll('.path-slider__item');
    var images = [];
    for (var j = 0; j < items.length; j++) {
      images.push(getComputedStyle(items[j].querySelector('.item__circle')).getPropertyValue('background-image'));
    }

    var imgAnimation;
    var lastIndex;
    var setImage = function (index) {
      if (imgAnimation) {
        imgAnimation.pause();
        sliderContainer.style['background-image'] = images[lastIndex];
        sliderContainerBackground.style['opacity'] = 0;
      }
      lastIndex = index;
      sliderContainerBackground.style['background-image'] = images[index];

      imgAnimation = anime({
        targets: sliderContainerBackground,
        opacity: 1,
        easing: 'linear'
      });

    };

    // Adding the extra element needed to fade the images smoothly
    // Also set the image for the initial current item (the first one)

    var sliderContainer = document.querySelector('.path-slider');
    var sliderContainerBackground = document.createElement('div');
    sliderContainerBackground.setAttribute('class', 'path-slider__background');
    setImage(0);
    sliderContainer.appendChild(sliderContainerBackground);

    // Initializing the slider

    var options = {
      startLength: 'center',
      paddingSeparation: 100,
      easing: 'easeOutCubic',
      begin: function (params) {
        // Item get selected, then set the `background` accordingly
        if (params.selected) {
          setImage(params.index);
        }
      }
    };

    var slider = new PathSlider(pathEl, '.path-slider__item', options);

    // Regenerate the SVG `path` and update items position on `resize` event (responsive behavior)

    window.addEventListener('resize', function () {
      pathEl.setAttribute('d', getSinPath());
      slider.updatePositions();
    });

  })();

  // SECTION ( 5 ) -- Contact Form

  // var textarea = document.querySelector('textarea');

  // textarea.addEventListener('keydown', autosize);

  // function autosize() {
  //   var el = this;
  //   setTimeout(function () {
  //     el.style.cssText = 'height:auto; padding:0';
  //     // for box-sizing other than "content-box" use:
  //     // el.style.cssText = '-moz-box-sizing:content-box';
  //     el.style.cssText = 'height:' + el.scrollHeight + 'px';
  //   }, 0);
  // }

  // // Generated by CoffeeScript 1.4.0
  // (function () {
  //   var $;

  //   $ = window.jQuery || window.Zepto || window.$;

  //   $.fn.fancySelect = function (opts) {
  //     var isiOS, settings;
  //     if (opts == null) {
  //       opts = {};
  //     }
  //     settings = $.extend({
  //       forceiOS: false,
  //       includeBlank: false,
  //       optionTemplate: function (optionEl) {
  //         return optionEl.text();
  //       },
  //       triggerTemplate: function (optionEl) {
  //         return optionEl.text();
  //       }
  //     }, opts);
  //     isiOS = !!navigator.userAgent.match(/iP(hone|od|ad)/i);
  //     return this.each(function () {
  //       var copyOptionsToList, disabled, options, sel, trigger, updateTriggerText, wrapper, fancy;
  //       sel = $(this);
  //       if (sel.hasClass('fancified') || sel[0].tagName !== 'SELECT') {
  //         return;
  //       }
  //       sel.addClass('fancified');
  //       sel.css({
  //         width: 1,
  //         height: 1,
  //         display: 'block',
  //         position: 'absolute',
  //         top: 0,
  //         left: 0,
  //         opacity: 0
  //       });
  //       sel.wrap('<div class="fancy-select">');
  //       wrapper = sel.parent();
  //       if (sel.data('class')) {
  //         wrapper.addClass(sel.data('class'));
  //       }
  //       wrapper.append('<div class="trigger">');
  //       if (!(isiOS && !settings.forceiOS)) {
  //         wrapper.append('<ul class="options">');
  //       }

  //       fancy = wrapper;

  //       trigger = wrapper.find('.trigger');
  //       options = wrapper.find('.options');
  //       disabled = sel.prop('disabled');
  //       if (disabled) {
  //         wrapper.addClass('disabled');
  //       }
  //       updateTriggerText = function () {
  //         var triggerHtml;
  //         triggerHtml = settings.triggerTemplate(sel.find(':selected'));
  //         return trigger.html(triggerHtml);
  //       };
  //       sel.on('blur.fs', function () {
  //         if (trigger.hasClass('open')) {
  //           return setTimeout(function () {
  //             return trigger.trigger('close.fs');
  //           }, 120);
  //         }
  //       });
  //       trigger.on('close.fs', function () {
  //         trigger.removeClass('open');
  //         fancy.removeClass('open');
  //         return options.removeClass('open');
  //       });
  //       trigger.on('click.fs', function () {
  //         var offParent, parent;
  //         if (!disabled) {
  //           trigger.toggleClass('open');
  //           fancy.toggleClass('open');
  //           if (isiOS && !settings.forceiOS) {
  //             if (trigger.hasClass('open')) {
  //               return sel.focus();
  //             }
  //           } else {
  //             if (trigger.hasClass('open')) {
  //               parent = trigger.parent();
  //               offParent = parent.offsetParent();
  //               if ((parent.offset().top + parent.outerHeight() + options.outerHeight() + 20) > $(window).height() + $(window).scrollTop()) {
  //                 options.addClass('overflowing');
  //               } else {
  //                 options.removeClass('overflowing');
  //               }
  //             }
  //             options.toggleClass('open');
  //             if (!isiOS) {
  //               return sel.focus();
  //             }
  //           }
  //         }
  //       });
  //       sel.on('enable', function () {
  //         sel.prop('disabled', false);
  //         wrapper.removeClass('disabled');
  //         disabled = false;
  //         return copyOptionsToList();
  //       });
  //       sel.on('disable', function () {
  //         sel.prop('disabled', true);
  //         wrapper.addClass('disabled');
  //         return disabled = true;
  //       });
  //       sel.on('change.fs', function (e) {
  //         if (e.originalEvent && e.originalEvent.isTrusted) {
  //           return e.stopPropagation();
  //         } else {
  //           return updateTriggerText();
  //         }
  //       });
  //       sel.on('keydown', function (e) {
  //         var hovered, newHovered, w;
  //         w = e.which;
  //         hovered = options.find('.hover');
  //         hovered.removeClass('hover');
  //         if (!options.hasClass('open')) {
  //           if (w === 13 || w === 32 || w === 38 || w === 40) {
  //             e.preventDefault();
  //             return trigger.trigger('click.fs');
  //           }
  //         } else {
  //           if (w === 38) {
  //             e.preventDefault();
  //             if (hovered.length && hovered.index() > 0) {
  //               hovered.prev().addClass('hover');
  //             } else {
  //               options.find('li:last-child').addClass('hover');
  //             }
  //           } else if (w === 40) {
  //             e.preventDefault();
  //             if (hovered.length && hovered.index() < options.find('li').length - 1) {
  //               hovered.next().addClass('hover');
  //             } else {
  //               options.find('li:first-child').addClass('hover');
  //             }
  //           } else if (w === 27) {
  //             e.preventDefault();
  //             trigger.trigger('click.fs');
  //           } else if (w === 13 || w === 32) {
  //             e.preventDefault();
  //             hovered.trigger('mousedown.fs');
  //           } else if (w === 9) {
  //             if (trigger.hasClass('open')) {
  //               trigger.trigger('close.fs');
  //             }
  //           }
  //           newHovered = options.find('.hover');
  //           if (newHovered.length) {
  //             options.scrollTop(0);
  //             return options.scrollTop(newHovered.position().top - 12);
  //           }
  //         }
  //       });
  //       options.on('mousedown.fs', 'li', function (e) {
  //         var clicked;
  //         clicked = $(this);
  //         sel.val(clicked.data('raw-value'));
  //         if (!isiOS) {
  //           sel.trigger('blur.fs').trigger('focus.fs');
  //         }
  //         options.find('.selected').removeClass('selected');
  //         clicked.addClass('selected');
  //         trigger.addClass('selected');
  //         fancy.addClass('selected');
  //         return sel.val(clicked.data('raw-value')).trigger('change.fs').trigger('blur.fs').trigger('focus.fs');
  //       });
  //       options.on('mouseenter.fs', 'li', function () {
  //         var hovered, nowHovered;
  //         nowHovered = $(this);
  //         hovered = options.find('.hover');
  //         hovered.removeClass('hover');
  //         return nowHovered.addClass('hover');
  //       });
  //       options.on('mouseleave.fs', 'li', function () {
  //         return options.find('.hover').removeClass('hover');
  //       });
  //       copyOptionsToList = function () {
  //         var selOpts;
  //         updateTriggerText();
  //         if (isiOS && !settings.forceiOS) {
  //           return;
  //         }
  //         selOpts = sel.find('option');
  //         return sel.find('option').each(function (i, opt) {
  //           var optHtml;
  //           opt = $(opt);
  //           if (!opt.prop('disabled') && (opt.val() || settings.includeBlank)) {
  //             optHtml = settings.optionTemplate(opt);
  //             if (opt.prop('selected')) {
  //               return options.append("<li data-raw-value=\"" + (opt.val()) + "\" class=\"selected\">" + optHtml + "</li>");
  //             } else {
  //               return options.append("<li data-raw-value=\"" + (opt.val()) + "\">" + optHtml + "</li>");
  //             }
  //           }
  //         });
  //       };
  //       sel.on('update.fs', function () {
  //         wrapper.find('.options').empty();
  //         return copyOptionsToList();
  //       });
  //       return copyOptionsToList();
  //     });
  //   };

  // }).call(this);

  // $('.select-field').fancySelect();

  /* __________________________________________________________________________________________________________ */

  // CUSTOM

  // GENERAL

  // Jump to next Section on arrow click
  $(".arrow-down").click(function () {
    $.fn.pagepiling.moveSectionDown();
  });

  // Jump to first Section on last arrow click
  $(".arrow-up").click(function () {
    $.fn.pagepiling.moveTo(1);
  });

  // SECTION ( 1 )

  // Preloader
  $('.section').css('visibility', 'hidden');
  setTimeout(function () {
    $('.section').css('visibility', 'visible');
    $('.preloader').hide();
  }, 2000);

  // Simple SehaSky logo animation
  setTimeout(function () {
    $('.section-1 .right .logo').animate({ right: 0 }, 800);
  }, 2200);


  // Jump to Section-2 on Know More link click
  // $(".know-more_link").click(function () {
  //   $.fn.pagepiling.moveSectionDown();
  // });

  // SECTION ( 3 ) 
  // Neumorphic click effect on click ( Not used now as you must remove hover effect in CSS + Clicks lead to nothing )
  $('.services-card__wrapper').click(function () {
    $(this).addClass('services-card__wrapper-clicked');
    setTimeout(function () {
      $('.services-card__wrapper').removeClass('services-card__wrapper-clicked');
    }, 300);
  });

  // SECTION ( 4 )
  // Switch between Arabic and English text on hover
  // $('.path-slider__ara-text').mouseenter(function () {
  //   $(this).hide();
  //   $('.path-slider__eng-text').show();
  // });

  // $('.path-slider__eng-text').mouseenter(function () {
  //   $(this).hide();
  //   $('.path-slider__eng-text').show();
  // });

  // $('.path-slider__eng-text').mouseleave(function () {
  //   $(this).hide();
  //   $('.path-slider__eng-text').show();
  // });

  // SECTION ( 5 )

  // Redirect to UNA on clicking submit button
  $('.section-5 .submit-button').click(function () {
    document.location = "https://sehasky.com/main/index.php"
  })


























































































}); // jQuery document ready closing braces
