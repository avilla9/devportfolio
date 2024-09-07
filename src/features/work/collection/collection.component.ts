import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  data: ProjectInterface[] = [
    {
      id: 0,
      title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum ",
      skills: ["Chinook Salmon", "Aardvark", "Raven", "Gecko", "Nubian Ibex", "Echidna"],
      media: ["https://picsum.photos/1600", "https://picsum.photos/1601/900", "https://picsum.photos/1200/800"]
    },
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum ",
      skills: ["Chinook Salmon", "Aardvark", "Raven", "Gecko", "Nubian Ibex", "Echidna"],
      media: ["https://picsum.photos/1700", "https://picsum.photos/1600/1000", "https://picsum.photos/1200/1500"]
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum ",
      skills: ["Chinook Salmon", "Aardvark", "Raven", "Gecko", "Nubian Ibex", "Echidna"],
      media: ["https://picsum.photos/1500", "https://picsum.photos/600/900", "https://picsum.photos/1300"]
    }
  ];

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
