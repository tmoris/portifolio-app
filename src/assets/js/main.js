(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollbar', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollbar = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  const navToggle = document.querySelector('.nav-menuToggle');
  const links = document.querySelectorAll('.navlist-item__link');

  navToggle.addEventListener('click', () => {
    document.body.classList.toggle('open');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('open');
    });
  });
  // animation
  links.forEach((link, index) => {
    const delay = index * 200;
    link.style.animationDelay = `${delay}ms`;
    link.classList.add("fade-in-top");
  });


  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollbar(window.location.hash)
      }
    }
  });

  /**
   * Intro type effect
   */
  let typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    typed = new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }
})()
/* form validation  */

const constraints = {
  name: {
    presence: {
      allowEmpty: false,
      message: "^Please enter your name",
    },
    length: {
      minimum: 3,
      message: "^Name must be at least 3 characters",
    },
  },
  email: {
    presence: {
      allowEmpty: false,
      message: "^Please enter your email",
    },
    email: {
      message: "^Please enter a valid email address",
    },
  },
  subject: {
    presence: {
      allowEmpty: false,
      message: "^Please enter a subject",
    },
    length: {
      minimum: 3,
      message: "^Subject must be at least 3 characters",
    },
  },
  message: {
    presence: {
      allowEmpty: false,
      message: "^Please enter a message",
    },
    length: {
      minimum: 10,
      message: "^Message must be at least 10 characters",
    },
  },
};

const form = document.getElementById('contact-form');
form.addEventListener('submit', function (event) {
 const formValues = {
   name: form.elements.name.value,
   email: form.elements.email.value,
   subject: form.elements.subject.value,
   message: form.elements.message.value,
 };


  const errors = validate(formValues, constraints);

  if (errors) {
    event.preventDefault();
    const errorMessage = Object
      .values(errors)
      .map(function (fieldValues) { return fieldValues.join(', ') })
      .join("\n");

    alert(errorMessage);
  }
}, false);