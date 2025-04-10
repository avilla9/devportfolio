import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectInterface } from 'src/shared/model/project.model';
import { DataService } from 'src/shared/services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  private dataService: DataService;
  public data: ProjectInterface = <ProjectInterface>{};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.dataService = inject(DataService);
  }

  ngOnInit(): void {
    this.dataService.getData().filter(project => {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      console.log(id, project.id);
      if (project.id === id) this.data = project;
    });
    if (!this.data) {
      this.router.navigate(['projects']);
    }
  }
}
