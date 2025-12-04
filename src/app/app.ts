import { Component, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./core/features/Faculty-of-Fine-Arts/Pages/shared/header/header.component";
import { FooterComponent } from "./core/features/Faculty-of-Fine-Arts/Pages/shared/footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [ButtonModule, CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected title = 'Faculty-of-Fine-Arts';
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
