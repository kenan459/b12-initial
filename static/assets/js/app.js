var prevScrollPos = window.pageYOffset
var nav = document.querySelector('.b12-nav')

if (nav) {
  // Adjust mobile navigation bar and menu styles on menu button click 
  var mobileMenuButton = document.querySelector('.js-toggle-mobile-nav')
  var documentBody = document.querySelector('body')
  mobileMenuButton.onclick = function() {
    var mobileNav = document.querySelector('.b12-nav')
    if (!mobileNav.classList.contains('is-visible')) {
        mobileMenuButton.classList.add('active')
        mobileNav.classList.add('is-visible')
        documentBody.style.overflow = 'hidden'
    } else {
        mobileMenuButton.classList.remove('active')
        mobileNav.classList.remove('is-visible')
        documentBody.style.overflow = 'auto'
        closeAllMegaMenuItems()
    }
  }

  // Mega menu
  var megaMenuToggles = document.querySelectorAll('.js-mega-menu-toggle');

  function toggleMegaMenu(e, item) {
    e.preventDefault();

    var id = item.getAttribute('href').substring(1)
    var megamenu = document.getElementById(id)

    if (!megamenu.classList.contains('is-visible')) {
      closeAllMegaMenuItems(item)
      toggleItemClass(item, megamenu, true)
    } else {
      toggleItemClass(item, megamenu, false)
    }
  }

  megaMenuToggles.forEach(function(item) {
    item.addEventListener('click', function(e) {
      toggleMegaMenu(e, item);
    });

    mq('(min-width: 768px)', function (match) {
      if (match) {
        item.addEventListener('mouseover', function() {
          var id = item.getAttribute('href').substring(1)
          var megamenu = document.getElementById(id)

          closeAllMegaMenuItems(item)
          toggleItemClass(item, megamenu, true)
        })
      }
    })
  });

  function closeAllMegaMenuItems(visibleElement) {
    var filtered = Array.from(megaMenuToggles).filter(function(item) {
      return item !== visibleElement
    })

    filtered.forEach(function(item) {
      var id = item.getAttribute('href').substring(1)
      var megamenu = document.getElementById(id)

      toggleItemClass(item, megamenu, false)

      megamenu.addEventListener('mouseleave', function() {
        toggleItemClass(item, megamenu, false)
      })
    })
  }

  function toggleItemClass(toggle, megamenu, open) {
    if (open) {
      toggle.classList.add('is-visible')
      megamenu.classList.add('is-visible')
    } else {
      toggle.classList.remove('is-visible')
      megamenu.classList.remove('is-visible')
    }
  }

  var navItems = document.querySelectorAll('.b12-nav__list-item-link');

  navItems.forEach(function(item) {
    if (!item.classList.contains('js-mega-menu-toggle')) {
      item.addEventListener('mouseover', closeAllMegaMenuItems)
    }
  })
}


// Anouncement banner for future use
// To display the banner on all pages add {% include banner.html %} line inside the body tag of index.html in _layouts, industry_pages.html, and landing-page.html

var body = document.querySelector('body')
var nav = document.querySelector('.b12-nav')
var aBanner = document.querySelector('.announcement-banner');
var bannerCloseBtn = document.querySelector('.announcement-banner__close');
var megaMenus = document.querySelectorAll('.b12-nav__secondary-menu');

if (aBanner) {
  window.onload = function() {
    var bannerHeight = aBanner.offsetHeight;
    body.style.paddingTop = bannerHeight + 'px';
    nav.style.top = bannerHeight + 'px';
  
    // position Mega Menus correctly on mobile
    mq('(max-width: 768px)', function (match) {
      if (match) {
        megaMenus.forEach(function(item) {
          item.style.top = (bannerHeight + 80) + 'px';
        })
      }
    })
  }

  bannerCloseBtn.addEventListener('click', function() {
    aBanner.style.visibility = 'hidden';
    body.style.paddingTop = 0 + 'px';
    nav.style.top = 0 + 'px';
  
    mq('(max-width: 768px)', function (match) {
      if (match) {
        megaMenus.forEach(function(item) {
          item.style.top = 80 + 'px';
        })
      }
    })
  });
}

// Dropdown menu component
var dropdownCategoryItems = document.querySelectorAll('.category-dropdown-menu__item:not(.active)');
var dropdownCategoryToggles = document.querySelectorAll('.js-dropdown-menu-toggle');

dropdownCategoryToggles.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    var dropdownCategoryItem = item.closest('.category-dropdown-menu__item');
    var categorySubmenu = item.nextElementSibling;
    var filtered = Array.from(dropdownCategoryItems).filter(function(tagCategoryItem) {
      return tagCategoryItem !== dropdownCategoryItem;
    });
    var itemIsHidden = !dropdownCategoryItem.classList.contains('is-active') && !categorySubmenu.classList.contains('is-visible');

    if (itemIsHidden) {
      dropdownCategoryItem.classList.add('is-active');
      categorySubmenu.classList.add('is-visible');

      filtered.forEach(function(filteredItem) {
        var submenu = filteredItem.querySelector('.category-dropdown-submenu__wrapper');

        if (submenu) {
          filteredItem.classList.remove('is-active');
          submenu.classList.remove('is-visible');
        }
      })
    } else {
      dropdownCategoryItem.classList.remove('is-active');
      categorySubmenu.classList.remove('is-visible');
    }
  })
})

var tagLists = document.querySelectorAll('.category-dropdown-submenu__wrapper');

tagLists.forEach(function(item) {
  item.addEventListener('mouseout', function(e) {
    item.classList.remove('is-visible');
    item.closest('.category-dropdown-submenu__item').classList.remove('is-active');
  })
});

// filter card items with dropdown
var dropdownTags = document.querySelectorAll('.category-dropdown-submenu__item');
var cardItems = document.querySelectorAll('.card');
var dropdownResetAll = document.querySelector('.dropdown-menu-reset-toggle');

dropdownTags.forEach(function(tagItem) {
  if (tagItem.dataset.isFilter) {
    tagItem.addEventListener('click', function(e) {
      e.preventDefault();

      document.getElementById('searchbar').value = '';
      document.querySelector('.--zero-search-result').style = '';

      var thisElement = e.target;
      tag = thisElement.closest('.category-dropdown-submenu__item').dataset.tag;
      dropdownResetAll.classList.remove('active');
  
      cardItems.forEach(function(cardItem) {
        cardItem.style = '';
        cardItem.classList.remove('active');
  
        var activeCards = document.querySelectorAll('.card[data-tag~="' + tag + '"]');
        activeCards.forEach(function(item) {
          item.classList.add('active');
        });
      })
    })
  }
});

if (cardItems.length > 0 && dropdownResetAll) {
  dropdownResetAll.addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.add('active');
  
    cardItems.forEach(function(cardItem) {
      cardItem.classList.add('active');
    })
  });
}

// Manually launch Salesforce chat
var chatButtons = document.querySelectorAll('.launch-chat');
chatButtons.forEach(function(chatButton) {
  if (chatButton && window.embedded_svc) {
    chatButton.addEventListener('click', function(e) {
      e.preventDefault();

      window.embedded_svc.bootstrapEmbeddedService();
    });
  }
});

$(function() {
    // mobile footer nav
    $('.js-mobile-toggle-footer-nav').on('click', function(e) {
      var $this = $(this),
          $parent = $this.closest('.footer__nav'),
          $nav = $parent.find('.footer__nav-list');
  
      if (!$parent.hasClass('is-nav-visible')) {
        $nav.slideDown('fast', function() {
          $parent.addClass('is-nav-visible');
        });
      } else {
        $nav.slideUp('fast', function() {
          $parent.removeClass('is-nav-visible');
        });
      }
    });
  
    // GDPR
  
    // Gets GDPR cookie value.
    // Regex from https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#Example_2_Get_a_sample_cookie_named_test2
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)gdpr\s*\=\s*([^;]*).*$)|^.*$/, '$1');
  
    if (cookieValue !== 'agreed') {
      $('.gdpr').fadeIn('fast')
    }
  
    $('.js-gdpr-agree').click(function(e) {
      e.preventDefault();
  
      document.cookie = 'gdpr=agreed; path=/'
      $('.gdpr').fadeOut('fast');
    });
  
    var sliderArrowLeft = '<button type="button" class="slick-prev"><svg width="10" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M9 1L1 9l8 8" stroke="#623CDC" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/></svg></button>';
    var sliderArrowRight = '<button type="button" class="slick-next"><svg width="10" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l8 8-8 8" stroke="#623CDC" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
  
    if ($('.js-testimonials-slider').length) {
      $('.js-testimonials-slider').slick({
        infinite: true,
        appendArrows: '.js-testimonials-slider',
        prevArrow: sliderArrowLeft,
        nextArrow: sliderArrowRight,
        dots: true
      });
    }
  
    if ($('.js-featured-slider').length) {
      var $slider = $('.js-featured-slider'),
          appendDotsTo = '.featured-slider';
  
      $slider.on('init', function(slick) {
        var $firstDot = $(slick.target).find('.slick-dots li:first');
        $firstDot.removeClass('slick-active');
        setTimeout(function() {
          $firstDot.addClass('slick-active');
        }, 1000);
      });
  
      if ($slider.hasClass('js-append-dots')) {
        appendDotsTo = '.slider-dots-container';
      }
  
      $slider.slick({
        infinite: true,
        appendArrows: $slider,
        appendDots: appendDotsTo,
        prevArrow: sliderArrowLeft,
        nextArrow: sliderArrowRight,
        dots: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        autoplay: true,
        autoplaySpeed: 6000,
        lazyLoad: 'progressive'
      });
    }

    if ($('.js-reviews-slider').length) {
      var $slider = $('.js-reviews-slider'),
          appendDotsTo = '.reviews-slider';
  
      $slider.on('init', function(slick) {
        var $firstDot = $(slick.target).find('.slick-dots li:first');
        $firstDot.removeClass('slick-active');
        setTimeout(function() {
          $firstDot.addClass('slick-active');
        }, 1000);
      });
  
      if ($slider.hasClass('js-append-dots')) {
        appendDotsTo = '.slider-dots-container';
      }
  
      $slider.slick({
        centerMode: true,
        centerPadding: '25%',
        infinite: true,
        appendArrows: $slider,
        appendDots: appendDotsTo,
        prevArrow: sliderArrowLeft,
        nextArrow: sliderArrowRight,
        dots: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        autoplay: true,
        autoplaySpeed: 6000,
        lazyLoad: 'progressive',
        responsive: [
          {
            breakpoint: 480,
            settings: {
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1
            }
          }
        ]
      });
    }
  
    // Image slider
    if ($('.js-img-slider').length) {
      var $slider = $('.js-img-slider');
  
      $slider.on('init', function(slick) {
        var $firstDot = $(slick.target).find('.slick-dots li:first');
        $firstDot.removeClass('slick-active');
        setTimeout(function() {
          $firstDot.addClass('slick-active');
        }, 1000);
      });
  
      $slider.slick({
        infinite: true,
        appendArrows: '.img-slider',
        prevArrow: sliderArrowLeft,
        nextArrow: sliderArrowRight,
        dots: true,
        pauseOnHover: false,
        pauseOnDotsHover: true,
        autoplay: true,
        autoplaySpeed: 6000,
        lazyLoad: 'progressive'
      });
    }
  
    // scroll to
    $('.js-scroll-to').on('click', function(e) {
      e.preventDefault();
  
      var $this = $(this),
          whereTo = $this.data('to') || 'next',
          $elem = $('#' + whereTo);
  
      if (whereTo == 'next') {
        $elem = $this.closest('.section').next('.section');
      } else if (whereTo == 'self') {
        $elem = $this.closest('.section');
      }
  
      scrollToElem($elem);
  
      function scrollToElem($elem) {
        $('html, body').animate({
          scrollTop: ($elem.offset().top - 50) + 'px'
        }, 800);
      }
    });

    // faq
    $('.js-toggle-faq-item').on('click', function(e) {
      var $this = $(this),
          $parent = $this.parent(),
          $answer = $this.next();
  
      if (!$parent.hasClass('is-answer-visible')) {
        $answer.slideDown('fast', function() {
          $parent.addClass('is-answer-visible');
        });
      } else {
        $answer.slideUp('fast', function() {
          $parent.removeClass('is-answer-visible');
        });
      }
    });
  
    // get started button with email input
    $('.get-started-form').on('submit', function(e) {
      e.preventDefault();
  
      var signupUrl = 'https://b12.io/signup';
      var email = $(this).find('input').val();
      if (email) {
        signupUrl = signupUrl + '?email=' + encodeURIComponent(email);
      }
      window.location = signupUrl;
    });
  
    // Show alt text in html for posts in resource center
    if ($('.post__body img').length) {
      $('.post__body img').each(function() {
        var $this = $(this),
            altText = $this.attr('alt').trim();
  
        if (altText.length) {
          $('<p class="img-alt-text">' + altText + '</p>').insertAfter($this);
        }
      });
    }
  
    // Gallery grid
    var $grid = $('.js-grid'),
        $gridTags = $('.js-grid-tags a'),
        $gridTagsDescription = $('.js-grid-tags-descriptions');
  
    $gridTags.on('click', function(e) {
      e.preventDefault();
  
      var $this = $(this),
          tag = $this.data('tag')
  
      $this.addClass('active').siblings().removeClass('active');
      if (tag == '*') {
        $gridTagsDescription.children().removeClass('active');
      } else {
        $gridTagsDescription.find('[data-tag="' + tag + '"]').addClass('active').siblings().removeClass('active');
      }
  
      $grid.find('.gallery-items__item').removeClass('active');
      $grid.find('.gallery-items__item[data-tag~="' + tag + '"]').addClass('active');
    });
  
    // support for closing tooltip on touch devices when clicking back on question mark
    mq('(max-width: 992px)', function (match) {
      activateTooltips('.pricing', '.pricing__feature-help');
      activateTooltips('.add-on', '.add-on__feature-help');
    });
  
    function activateTooltips(parent, tooltip) {
      $(parent).on('touchstart', tooltip, function(e) {
        e.stopImmediatePropagation();
  
        var $this = $(this);
  
        $this.parent().siblings().find(tooltip).removeClass('is-tooltip-visible');
  
        if (!$this.hasClass('is-tooltip-visible')) {
          $this.addClass('is-tooltip-visible');
        } else {
          $this.removeClass('is-tooltip-visible');
        }
      });
  
      $(parent).on('touchstart', function() {
        $(tooltip).removeClass('is-tooltip-visible');
      })
    }
  });

  function mq(query, callback, usePolyfill) {
    var host = {};
    var isMatchMediaSupported = !!(window && window.matchMedia) && !usePolyfill;

    if (isMatchMediaSupported) {
      var res = window.matchMedia(query);

      callback.apply(host, [res.matches, res.media]);

      res.addListener(function (changed) {
        callback.apply(host, [changed.matches, changed.media]);
      });
    }
  }
