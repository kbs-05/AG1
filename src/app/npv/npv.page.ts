import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-npv',
  standalone:false,
  templateUrl: './npv.page.html',
  styleUrls: ['./npv.page.scss'],
})
export class NPVPage implements OnInit , AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('overlay');

    if (menuToggle && closeMenu && sidebar && overlay) {
      menuToggle.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
      });

      closeMenu.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      });

      overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      });

      document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', () => {
          sidebar.classList.remove('active');
          overlay.classList.remove('active');
        });
      });
    }
  }

}

