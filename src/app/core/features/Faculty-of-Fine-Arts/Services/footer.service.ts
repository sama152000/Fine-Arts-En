import { Injectable } from '@angular/core';
import { FooterData } from '../model/footer.model';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  getFooterData(): FooterData {
    return {
      logo: '/assets/logo.png',
      description: 'The Faculty of Fine Arts at Luxor University aims to provide distinguished artistic education and prepare creative generations in various fields of fine arts.',
      sections: [
        {
          title: 'Important Links',
          links: [
            { label: 'Home', url: '/' },
            { label: 'About the Faculty', url: '/about' },
            { label: 'Academic Departments', url: '/departments' },
            { label: 'Faculty Members', url: '/faculty' },

            { label: 'Contact Us', url: '/contact' }
          ]
        },
        {
          title: 'Student Services',
          links: [
            { label: 'Student Results', url: '/results' },
            { label: 'Class Schedules', url: '/schedules' },
            { label: 'Research Projects', url: '/research' },
            { label: 'Digital Library', url: '/library' },
          
          ]
        }
      ],
      contactInfo: {
        address: 'Luxor University – Faculty of Fine Arts, Luxor, Egypt',
        phone: '+20 95 237 1234',
        email: 'info@finearts.luxor.edu.eg',
        workingHours: 'Sunday to Thursday – 9:00 AM to 3:00 PM'
      },
      socialLinks: [
        { platform: 'Facebook', url: 'https://facebook.com/fineartsluxor', icon: 'fab fa-facebook-f' },
        { platform: 'Instagram', url: 'https://instagram.com/fineartsluxor', icon: 'fab fa-instagram' },
        { platform: 'YouTube', url: 'https://youtube.com/fineartsluxor', icon: 'fab fa-youtube' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/school/fineartsluxor', icon: 'fab fa-linkedin-in' }
      ],
      copyrightText: '© 2025 Faculty of Fine Arts – Luxor University. All rights reserved.'
    };
  }
}