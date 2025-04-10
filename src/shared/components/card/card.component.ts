import { Component, Input, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectInterface } from 'src/shared/model/project.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  @Input() data: ProjectInterface[] = [];

  constructor(private router: Router) { }

  open(project: ProjectInterface) {
    this.router.navigate(['projects/detail', project.title, project.id]);
  }

  ngOnInit(): void { }
}
