import { Injectable } from '@angular/core';
import { Statistic } from '../model/statistics.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  getStatistics(): Statistic[] {
    return [
      {
        id: 1,
        label: 'Enrolled Students',
        value: 1567,
        icon: 'pi pi-users',
        suffix: '+',
        description: 'Active students across all programs'
      },
      {
        id: 2,
        label: 'Academic Departments',
        value: 6,
        icon: 'pi pi-building',
        description: 'Specialized departments and programs'
      },
      {
        id: 3,
        label: 'Annual Exhibitions',
        value: 24,
        icon: 'pi pi-image',
        suffix: '+',
        description: 'Student and faculty exhibitions yearly'
      },
      {
        id: 4,
        label: 'Faculty Members',
        value: 48,
        icon: 'pi pi-user',
        description: 'Experienced professors and instructors'
      },
      {
        id: 5,
        label: 'Art Studios',
        value: 15,
        icon: 'pi pi-home',
        description: 'Professional art studios and workshops'
      },
      {
        id: 6,
        label: 'Years of Excellence',
        value: 29,
        icon: 'pi pi-star',
        description: 'Serving the arts community since 1995'
      },
      {
        id: 7,
        label: 'Alumni Success',
        value: 2300,
        icon: 'pi pi-trophy',
        suffix: '+',
        description: 'Successful graduates in various fields'
      },
      {
        id: 8,
        label: 'International Partners',
        value: 12,
        icon: 'pi pi-globe',
        description: 'Collaborations with global institutions'
      }
    ];
  }
}