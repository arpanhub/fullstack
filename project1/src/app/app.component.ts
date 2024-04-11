import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArpanComponent } from './arpan/arpan.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ArpanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lovely professional University';
}

