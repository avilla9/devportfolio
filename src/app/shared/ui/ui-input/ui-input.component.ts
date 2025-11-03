import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="w-full">
      <label [for]="id()" class="block text-sm font-medium text-gray-300 mb-1">{{ label() }}</label>
      <input
        [id]="id()"
        [type]="type()"
        [formControl]="control()"
        class="block w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md shadow-sm focus:border-[#00ffaa] focus:ring-[#00ffaa] sm:text-sm"
        [placeholder]="placeholder()"
      />
      <!-- TODO: Add error handling display -->
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiInputComponent {
  control = input.required<any>(); // FormControl
  label = input.required<string>();
  id = input(crypto.randomUUID());
  type = input<string>('text');
  placeholder = input<string>('');
}
