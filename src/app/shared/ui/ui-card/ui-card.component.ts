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
  baseClasses = 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 rounded-xl shadow-2xl p-6 md:p-8';
}