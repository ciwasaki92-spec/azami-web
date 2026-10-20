/* スマホのメニュー開閉 */
(function () {
  'use strict';
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('global-nav');
  if (!toggle || !nav) return;
  var pc = window.matchMedia('(min-width: 768px)');

  function setNav(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('is-nav-open', open);
    // 開いている間は後ろのページを操作できないようにする
    document.querySelectorAll('main, .footer, .skip-link').forEach(function (el) { el.inert = open; });
    if (open) nav.querySelector('a').focus();
  }

  toggle.addEventListener('click', function () {
    setNav(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { if (!pc.matches) setNav(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setNav(false); toggle.focus(); }
  });
  pc.addEventListener('change', function (e) { if (e.matches) setNav(false); });
})();
