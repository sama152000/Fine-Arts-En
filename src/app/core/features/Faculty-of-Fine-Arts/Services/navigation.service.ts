import { Injectable } from '@angular/core';
import { MenuItem, SocialLink, LanguageOption } from '../model/navigation.model';
import { Department } from '../model/department.model';
import { AboutSection } from '../model/about.model';
import { DepartmentService } from './department.service';
import { AboutService } from './about.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  
  constructor(
    private departmentService: DepartmentService,
    private aboutService: AboutService
  ) {}

  getMainMenuItems(): MenuItem[] {
    return [
      { label: 'Home', url: '/', active: true },
      { 
        label: 'About the Faculty', 
        url: '/about',
        dropdownItems: this.getAboutDropdownItems()
      },
      { 
        label: 'Departments', 
        url: '/departments',
        dropdownItems: this.getDepartmentDropdownItems()
      },
      { label: 'Sectors', url: '/sectors' },
      { label: 'Units & Centers', url: '/units' },
            { label: 'News', url: '/news-list' },

      { label: 'Student Services', url: '/student-services' },
      { label: 'Contact Us', url: '/contact' }
    ];
  }

  private getDepartmentDropdownItems() {
    const departments = this.departmentService.getDepartments();
    return departments.map(dept => ({
      label: dept.name,
      url: `/departments/${dept.id}`,
      icon: dept.icon
    }));
  }

  private getAboutDropdownItems() {
    const sections = this.aboutService.getAboutSections();
    return sections.map(section => ({
      label: section.title,
      url: `/about/${section.id}`,
      icon: section.icon
    }));
  }
}