import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [class]="baseClasses + ' ' + (styleType() === 'primary' ? primaryClasses : secondaryClasses) + ' ' + additionalClasses()"
      [disabled]="disabled()"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiButtonComponent {
  styleType = input<'primary' | 'secondary'>('primary');
  additionalClasses = input<string>('');
  disabled = input<boolean>(false);

  baseClasses = 'px-6 py-3 rounded-md text-sm font-semibold tracking-wide uppercase transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950';
  primaryClasses = 'bg-[#00ffaa] text-black shadow-lg shadow-[#00ffaa]/20 hover:scale-105 hover:shadow-xl hover:shadow-[#00ffaa]/40 focus:ring-[#00ffaa]';
  secondaryClasses = 'border border-gray-800 text-[#00ffaa] hover:border-[#00ffaa] hover:bg-[#00ffaa]/10 focus:ring-[#00ffaa]';
}
