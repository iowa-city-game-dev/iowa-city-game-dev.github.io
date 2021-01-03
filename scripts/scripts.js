/**
 * Initialize the event listener for toggling the navigation menu.
 */
function initializeNavigationMenuToggle() {
  document.querySelector('.menu-toggle')
      .addEventListener('click', toggleNavigationMenu);
}

/**
 * Toggle the navigation menu.
 */
function toggleNavigationMenu() {
  const toggleOnClass = 'toggle-on';

  const menuToggle = document.querySelector('.menu-toggle');
  if (!menuToggle.classList.contains(toggleOnClass)) {
    menuToggle.classList.add(toggleOnClass);
    menuToggle.setAttribute('aria-expanded', true);
  } else {
    menuToggle.classList.remove(toggleOnClass);
    menuToggle.setAttribute('aria-expanded', false);
  }

  const menu = document.querySelector('.menu');
  if (!menu.classList.contains(toggleOnClass)) {
    menu.classList.add(toggleOnClass);
  } else {
    menu.classList.remove(toggleOnClass);
  }
}

initializeNavigationMenuToggle();
