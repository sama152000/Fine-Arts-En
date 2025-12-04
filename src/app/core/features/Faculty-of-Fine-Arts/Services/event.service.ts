import { Injectable } from '@angular/core';
import { Event } from '../model/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  getUpcomingEvents(): Event[] {
    return [
      {
        id: 1,
        title: 'Contemporary Art Exhibition 2025',
        description: 'Featuring works by final-year students showcasing contemporary artistic expressions and innovative techniques across all mediums.',
        imageUrl: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        eventDate: new Date('2025-01-15'),
        startTime: '10:00 AM',
        endTime: '6:00 PM',
        location: 'Main Exhibition Hall - Faculty of Fine Arts',
        category: 'exhibition',
        registrationUrl: '/events/register/1',
        featured: true
      },
      {
        id: 2,
        title: 'Digital Arts Workshop Series',
        description: 'Three-day intensive workshop covering advanced digital painting, 3D modeling, and animation techniques led by industry professionals.',
        imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        eventDate: new Date('2025-01-20'),
        startTime: '9:00 AM',
        endTime: '4:00 PM',
        location: 'Digital Arts Lab - Building A',
        category: 'workshop',
        registrationUrl: '/events/register/2',
        featured: true
      },
      {
        id: 3,
        title: 'Art Therapy and Community Engagement Seminar',
        description: 'Exploring the role of art in healing and community development with guest speakers from international art therapy organizations.',
        imageUrl: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        eventDate: new Date('2025-01-25'),
        startTime: '2:00 PM',
        endTime: '5:00 PM',
        location: 'Conference Hall - Faculty of Fine Arts',
        category: 'seminar',
        registrationUrl: '/events/register/3',
        featured: false
      },
      {
        id: 4,
        title: 'Sculpture Symposium 2025',
        description: 'International symposium bringing together renowned sculptors and academics to discuss contemporary sculpture practices and cultural preservation.',
        imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        eventDate: new Date('2025-02-01'),
        startTime: '9:00 AM',
        endTime: '6:00 PM',
        location: 'Main Auditorium - Luxor University',
        category: 'conference',
        registrationUrl: '/events/register/4',
        featured: true
      }
    ];
  }
}