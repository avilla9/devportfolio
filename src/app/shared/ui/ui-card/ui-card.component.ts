import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ui-card',
  standalone: true,
  template: `
    <div [class]="baseClasses + ' ' + additionalClasses()">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiCardComponent {
  additionalClasses = input<string>('');
  baseClasses = 'bg-gray-900/70 backdrop-blur-md border border-gray-800/50 rounded-xl shadow-2xl p-6 md:p-8';
}
