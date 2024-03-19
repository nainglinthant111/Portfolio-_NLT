import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { ClientComponent } from "./client/client.component";
import { ContactComponent } from "./contact/contact.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { ServiceComponent } from "./service/service.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, HomeComponent, AboutComponent, ServiceComponent, ClientComponent, ContactComponent]
})
export class AppComponent {
  title = 'portfolio';

}
