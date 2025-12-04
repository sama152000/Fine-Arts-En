import { Injectable } from '@angular/core';
import { AboutFaculty } from '../model/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  getAboutFaculty(): AboutFaculty {
    return {
      title: 'About the Faculty of Fine Arts',
      description: 'The Faculty of Fine Arts at Luxor University is one of the most prominent academic institutions dedicated to nurturing artistic creativity, developing talent, and offering distinguished educational programs in painting, sculpture, design, and graphic arts.',
      highlights: [
        'Distinguished faculty with international recognition',
        'State-of-the-art studios and workshops',
        'Regular exhibitions and cultural events',
        'Strong industry partnerships and internship programs',
        'Comprehensive curriculum combining theory and practice'
      ],
      vision: 'To be a leading institution in fine arts education, fostering creativity and artistic excellence while preserving cultural heritage.',
      mission: 'Providing comprehensive artistic education that prepares creative professionals capable of contributing to society through innovative artistic expression.',
      imageUrl: './assets/about.jpg',
      establishedYear: 1995
    };
  }
}