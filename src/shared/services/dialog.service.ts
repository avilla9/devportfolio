import { ApplicationRef, ComponentRef, Inject, Injectable, Injector } from '@angular/core';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  openDialog(title: string): ComponentRef<DialogComponent> {
    const componentRef = this.appRef.bootstrap(DialogComponent, this.injector);
    componentRef.instance.title = title;
    return componentRef;
  }
}
