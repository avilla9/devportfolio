import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrl: './svg.component.scss'
})
export class SvgComponent implements OnInit {

  link: string = '';

  @Input() size: any;
  @Input() name: string = '';
  @Input() dropShadow: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.link = `/assets/icons/${this.name}.svg`;
    // #${this.name}
  }
}
