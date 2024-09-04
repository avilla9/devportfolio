import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'panel-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLightMode = true; // Initial state

  constructor(@Inject(DOCUMENT) private document: Document) { }

  toggleTheme() {
    this.isLightMode = !this.isLightMode;
    this.updateBodyClass();
  }

  updateBodyClass() {
    if (this.isLightMode) {
      this.document.body.classList.add('light');
      this.document.body.classList.remove('dark'); // Remove potential dark class
    } else {
      this.document.body.classList.remove('light');
      this.document.body.classList.add('dark'); // Add dark class
    }
  }

  ngOnInit(): void {
    this.updateBodyClass();
  }
}
