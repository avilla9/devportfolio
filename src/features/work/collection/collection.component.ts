import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  data: ProjectInterface[] = [];

  public skillOptions = ['python', 'php', 'laravel'];

  constructor(private router: Router) { }

  open(name: string) {
    this.router.navigate(['projects/details/', name]);
  }

  ngOnInit(): void { }
}

export interface ProjectInterface {
  id: number,
  title: string,
  summary: string,
  description: string,
  skills: string[],
  media: string[],
}
