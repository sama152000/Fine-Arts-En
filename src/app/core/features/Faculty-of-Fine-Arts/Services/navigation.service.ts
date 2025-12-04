import { Injectable } from '@angular/core';
import { MenuItem, SocialLink, LanguageOption } from '../model/navigation.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  
  getMainMenuItems(): MenuItem[] {
    return [
      { label: 'Home', url: '/', active: true },
      { label: 'About the Faculty', url: '/about' },
      { label: 'Departments', url: '/departments' },
      { label: 'Sectors', url: '/staff' },
      { label: 'Units & Centers', url: '/units-centers' },
      { label: 'Student Services', url: '/student-services' },
      { label: 'Contact Us', url: '/contact' }
    ];
  }

  getSocialLinks(): SocialLink[] {
    return [
      { 
        platform: 'Facebook', 
        url: 'https://facebook.com/fineartsluxor', 
        icon: 'fab fa-facebook-f',
        color: '#1877f2'
      },
      { 
        platform: 'Instagram', 
        url: 'https://instagram.com/fineartsluxor', 
        icon: 'fab fa-instagram',
        color: '#E4405F'
      },
      { 
        platform: 'YouTube', 
        url: 'https://youtube.com/fineartsluxor', 
        icon: 'fab fa-youtube',
        color: '#FF0000'
      },
      { 
        platform: 'LinkedIn', 
        url: 'https://linkedin.com/school/fineartsluxor', 
        icon: 'fab fa-linkedin-in',
        color: '#0077b5'
      }
    ];
  }

  getLanguageOptions(): LanguageOption[] {
    return [
      { code: 'en', label: 'English', flag: '🇺🇸' },
      { code: 'ar', label: 'العربية', flag: '🇪🇬' }
    ];
  }
}