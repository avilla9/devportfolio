import { Injectable } from "@angular/core";
import { ProjectInterface } from "../model/project.model";

@Injectable({providedIn: 'root'})
export class DataService {
  private data: ProjectInterface[] = [];

  constructor() { }

  getData() {
    this.data = [
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
        title: "consectetuer adipiscing elit.",
        summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum ",
        skills: ["Chinook Salmon", "Aardvark", "Raven", "Gecko", "Nubian Ibex", "Echidna"],
        media: ["https://picsum.photos/1700", "https://picsum.photos/1600/1000", "https://picsum.photos/1200/1500"]
      },
      {
        id: 2,
        title: "dolor sit amet elit.",
        summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum ",
        skills: ["Chinook Salmon", "Aardvark", "Raven", "Gecko", "Nubian Ibex", "Echidna"],
        media: ["https://picsum.photos/1500", "https://picsum.photos/600/900", "https://picsum.photos/1300"]
      }
    ];
    return this.data;
  }
}

