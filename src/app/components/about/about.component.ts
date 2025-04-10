// components/about/about.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  bio = `Armando Villanueva is a Software Engineer with more than six years of experience in frontend,
  backend, mobile development, project management, and team leadership. Possessing a deep
  understanding of programming languages like JavaScript, PHP, TypeScript, and Python, as well as
  proficiency in frameworks such as Angular, Laravel, Django, and React. His experience with Agile
  methodologies and a strong adherence to software engineering best practices ensure the delivery of
  high-quality products.`;

  contactInfo = [
    { icon: 'mail', value: 'armandojvilla9@gmail.com', link: 'mailto:armandojvilla9@gmail.com' },
    { icon: 'phone', value: 'Whatsapp', link: 'http://wa.me/584242141712' },
    { icon: 'code', value: 'GitHub', link: 'https://github.com/avilla9' },
    { icon: 'linkedin', value: 'LinkedIn', link: 'https://www.linkedin.com/in/armando-villanueva-711110167/' }
  ];
}
