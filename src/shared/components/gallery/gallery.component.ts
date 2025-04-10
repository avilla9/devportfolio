import { Component, Input } from '@angular/core';
import { ProjectInterface } from 'src/shared/model/project.model';
import { DialogService } from 'src/shared/services/dialog.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  public open = false;
  public selectedImage = '';

  constructor(private dialogService: DialogService) { }
  @Input() data: ProjectInterface['media'] = [];

  zoom(image?: string) {
    if (image && this.selectedImage != image) {
      this.selectedImage = image;
      this.open = true;
    } else {
      this.open = !this.open;
    }
  }

  openDialog() {
    const dialogRef = this.dialogService.openDialog('My Dialog Title');

    dialogRef.instance.confirm.subscribe(() => {
      console.log('Dialog confirmed');
    });

    dialogRef.instance.close.subscribe(() => {
      console.log('Dialog closed');
    });
  }
}
