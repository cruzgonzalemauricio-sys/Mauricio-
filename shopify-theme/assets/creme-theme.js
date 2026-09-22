(function () {
  'use strict';

  // Sticky header
  var header = document.getElementById('site-header');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 24) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile menu
  var menuToggle = document.querySelector('[data-menu-toggle]');
  var mobileMenu = document.querySelector('[data-mobile-menu]');
  var bar1 = document.querySelector('[data-bar-1]');
  var bar2 = document.querySelector('[data-bar-2]');
  var bar3 = document.querySelector('[data-bar-3]');

  if (menuToggle && mobileMenu) {
    var closeMenu = function () {
      mobileMenu.classList.remove('is-open');
      [bar1, bar2, bar3].forEach(function (b) { if (b) b.classList.remove('is-open'); });
      document.body.style.overflow = '';
    };

    menuToggle.addEventListener('click', function () {
      var open = mobileMenu.classList.toggle('is-open');
      [bar1, bar2, bar3].forEach(function (b) { if (b) b.classList.toggle('is-open', open); });
      document.body.style.overflow = open ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // Scroll-reveal animations
  var revealEls = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // Keep cart count in sync after Shopify's ajax cart events, if the theme
  // later adds an ajax cart. No-op today, but the hook is here.
  document.addEventListener('cart:updated', function (event) {
    var countEl = document.querySelector('[data-cart-count]');
    if (countEl && event.detail && typeof event.detail.item_count !== 'undefined') {
      countEl.textContent = event.detail.item_count;
    }
  });

  // Product page: variant selection updates hidden id, price and image
  var variantsJsonEl = document.getElementById('ProductVariantsJson');
  var optionSelects = document.querySelectorAll('.creme-select');
  if (variantsJsonEl && optionSelects.length) {
    var variants = JSON.parse(variantsJsonEl.textContent);
    var variantIdInput = document.getElementById('ProductVariantId');
    var priceEl = document.getElementById('ProductPrice');
    var mainImage = document.getElementById('ProductMainImage');

    var formatMoney = function (cents) {
      return (cents / 100).toLocaleString(document.documentElement.lang || 'es', {
        style: 'currency',
        currency: (window.Shopify && Shopify.currency && Shopify.currency.active) || 'EUR',
      });
    };

    var findMatchingVariant = function () {
      var selected = Array.prototype.map.call(optionSelects, function (s) { return s.value; });
      return variants.filter(function (v) {
        return [v.option1, v.option2, v.option3]
          .slice(0, selected.length)
          .every(function (opt, i) { return opt === selected[i]; });
      })[0];
    };

    var onOptionChange = function () {
      var variant = findMatchingVariant();
      if (!variant) return;
      if (variantIdInput) variantIdInput.value = variant.id;
      if (priceEl) priceEl.textContent = formatMoney(variant.price);
      if (mainImage && variant.featured_image && variant.featured_image.src) {
        mainImage.src = variant.featured_image.src;
      }
    };

    optionSelects.forEach(function (select) {
      select.addEventListener('change', onOptionChange);
    });
  }

  // Product page: thumbnail click swaps the main image
  document.querySelectorAll('.creme-thumb').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      var mainImage = document.getElementById('ProductMainImage');
      var src = thumb.getAttribute('data-thumb-src');
      if (mainImage && src) mainImage.src = src;
    });
  });
})();
