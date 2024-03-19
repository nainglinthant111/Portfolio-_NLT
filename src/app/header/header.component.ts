import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AboutComponent } from "../about/about.component";
import { ClientComponent } from "../client/client.component";
import { ContactComponent } from "../contact/contact.component";
import { HomeComponent } from "../home/home.component";
import { ServiceComponent } from "../service/service.component";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterLink, HomeComponent, AboutComponent, ServiceComponent, ClientComponent, ContactComponent]
})
export class HeaderComponent implements OnInit {
  deviceHeight: number = 0;
  currentScroll: number = 0;
  home: boolean = false;
  about: boolean = false;
  service: boolean = false;
  client: boolean = false;
  contact: boolean = false;

  constructor(private router: Router) { }
  getDeviceHeight(): void {
    this.deviceHeight = window.innerHeight;
  }
  ngOnInit(): void {
    this.onWindowScroll();
    this.getDeviceHeight()
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (this.currentScroll < this.deviceHeight) {
      this.router.navigateByUrl('home');
      this.clear("home");
    } else if (this.currentScroll < this.deviceHeight * 2) {
      this.router.navigateByUrl('about');
      this.clear("about");
    } else if (this.currentScroll < this.deviceHeight * 3) {
      this.router.navigateByUrl('service');
      this.clear("service");
    } else if (this.currentScroll < this.deviceHeight * 4) {
      this.router.navigateByUrl('client');
      this.clear("client");
    } else {
      this.router.navigateByUrl('contact');
      this.clear("contact");
    }
  }

  OnClick(id: string) {
    let scrollToPosition: number;

    switch (id) {
      case "home":
        scrollToPosition = 0;
        this.clear("home");
        break;
      case "about":
        scrollToPosition = 700;
        this.clear("about");
        break;
      case "service":
        scrollToPosition = 1400;
        this.clear("service");
        break;
      case "client":
        scrollToPosition = 2090;
        this.clear("client");
        break;
      case "contact":
        scrollToPosition = 2790;
        this.clear("contact");
        break;
      default:
        scrollToPosition = 0;
        this.clear("home");
    }

    // Scroll to the calculated position
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });
  }
  clear(data: string) {
    this.home = false;
    this.about = false;
    this.service = false;
    this.client = false;
    this.contact = false;
    switch (data) {
      case "home":
        this.home = true;
        break;
      case "about":
        this.about = true;
        break;
      case "service":
        this.service = true;
        break;
      case "client":
        this.client = true;
        break;
      case "contact":
        this.contact = true;
        break;
      default:
    }
  }
}