import { Injectable } from '@angular/core';
import { HeroContent } from '../model/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroContent(): HeroContent {
    return {
      autoplay: true,
      autoplayInterval: 5000,
      slides: [
        {
          id: 1,
          imageUrl: './assets/slide1.png',
          title: 'Faculty of Fine Arts – Luxor University',
          subtitle: 'Creativity That Shapes the Future',
          description: 'We provide an educational environment that blends creativity, heritage, and modern art sciences, preparing artists capable of shaping a better visual society.',
          ctaText: 'Learn More',
          ctaUrl: '/about',
          active: true
        },
        {
          id: 2,
          imageUrl: './assets/slide2.png',
          title: 'Inspiring Artistic Excellence',
          subtitle: 'Where Tradition Meets Innovation',
          description: 'Our programs combine classical artistic techniques with contemporary digital arts, fostering creativity and technical mastery in every student.',
          ctaText: 'Explore Programs',
          ctaUrl: '/departments',
          active: false
        },
        {
          id: 3,
          imageUrl: './assets/slide3.jpg',
          title: 'Exhibitions & Cultural Events',
          subtitle: 'Showcasing Student Creativity',
          description: 'Regular exhibitions, workshops, and cultural events provide platforms for students to display their artistic achievements and connect with the art community.',
          ctaText: 'View Events',
          ctaUrl: '/events',
          active: false
        }
      ]
    };
  }
}