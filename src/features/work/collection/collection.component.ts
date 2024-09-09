import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectInterface } from 'src/shared/model/project.model';
import { DataService } from '../../../shared/services/data.service';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  private dataService: DataService;
  public data: ProjectInterface[] = [];

  public skillOptions = ['python', 'php', 'laravel'];

  constructor(
    private router: Router,
  ) {
    this.dataService = inject(DataService);
  }

  open(data: ProjectInterface) {
    this.router.navigate(['projects/detail', data.title, data.id]);
  }

  ngOnInit(): void {
    this.data = this.dataService.getData();
  }
}
