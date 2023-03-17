import React, { useEffect, useState } from 'react';

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const ready = (fn) => {
      if (document.readyState !== 'loading') {
        fn();
      } else {
        document.addEventListener('DOMContentLoaded', fn);
      }
    };

    ready(() => {
      const nav = document.getElementById('nav');
      const navMove = document.getElementById('navMove');
      const navButton = document.getElementById('navButton');
      const navMenuIcon = document.getElementsByClassName('navMenuIcon');
      const navLogo = document.getElementById('navLogo');

      const navMenuAbout = document.getElementsByClassName('navMenuAbout');
      const sectionAbout = document.getElementById('sectionAbout');

      const navMenuPortfolio = document.getElementById('navMenuPortfolio');
      const sectionPortfolio = document.getElementById('sectionPortfolio');

      const navMenuContact = document.getElementById('navMenuContact');
      const sectionContact = document.getElementById('sectionContact');

      // Hide or show icon menu navbar
      const hideNavMenuIcon = (menu) => {
        for (let index = 0; index < menu.length; index++) {
          if (menu[index].classList.contains('block')) {
            menu[index].classList.remove('block');
            menu[index].classList.add('hidden');
          } else {
            menu[index].classList.remove('hidden');
            menu[index].classList.add('block');
          }
        }
      };

      // Hide or show sidebar
      const hideSidebar = (sidebar) => {
        if (sidebar.classList.contains('invisible')) {
          sidebar.classList.remove('invisible', 'translate-x-full');
          sidebar.classList.add('translate-x-0');
        } else {
          sidebar.classList.add('translate-x-full');
          sidebar.classList.remove('translate-x-0');

          setTimeout(() => {
            sidebar.classList.add('invisible');
          }, 500);
        }
      };

      // Show sidebar event
      navButton.addEventListener('click', () => {
        hideNavMenuIcon(navMenuIcon);
        hideSidebar(navMove);
      });

      // Scroll to element event
      const scrollToView = (by, to) => {
        by.addEventListener('click', () => {
          // Check if the sidebar open.
          //if open then, close it
          if (navMove.classList.contains('translate-x-0')) {
            // Then change menu
            hideNavMenuIcon(navMenuIcon);
            //finally hide the sidebar
            hideSidebar(navMove);
          }

          to.scrollIntoView({
            behavior: 'smooth',
          });
        });
      };

      // Call scroll to view event
      for (let index = 0; index < navMenuAbout.length; index++) {
        scrollToView(navMenuAbout[index], sectionAbout);
      }
      scrollToView(navMenuPortfolio, sectionPortfolio);
      scrollToView(navMenuContact, sectionContact);

      //On scroll hide nav menu event
      window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;

        if (navMove.classList.contains('invisible')) {
          if (prevScrollPos > currentScrollPos) {
            if (!nav.classList.contains('translate-y-auto')) {
              nav.classList.add('translate-y-auto');
              nav.classList.remove('-translate-y-24');
            }
          } else {
            if (nav.classList.contains('translate-y-auto')) {
              nav.classList.remove('translate-y-auto');
              nav.classList.add('-translate-y-24');
            }
          }
        }
        setPrevScrollPos(currentScrollPos);
      };
    });
  });
}
