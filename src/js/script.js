// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert'

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap'



/* Tooltip */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


/* Scroll Trigger */
const scrollBn = document.querySelector(".banner_bottom");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset; 

  if (scrollHeight > 10) {
    scrollBn.classList.add("active");
  } else {
    scrollBn.classList.remove("active");
  }
});
