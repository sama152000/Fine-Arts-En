import { Injectable } from '@angular/core';
import { Department } from '../model/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  getDepartments(): Department[] {
    return [
      {
        id: 1,
        name: 'Graphic Design Department',
        description: 'Modern digital design combining creativity with technology. Students learn visual communication, branding, and multimedia design using industry-standard software.',
        imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-palette',
        studentCount: 320,
        programsOffered: ['Bachelor in Graphic Design', 'Diploma in Digital Arts'],
        detailsUrl: '/departments/graphic-design'
      },
      {
        id: 2,
        name: 'Painting Department',
        description: 'Classical and contemporary painting techniques. Students explore various media including oil, acrylic, watercolor, and mixed media while developing their unique artistic voice.',
        imageUrl: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-image',
        studentCount: 280,
        programsOffered: ['Bachelor in Fine Arts - Painting', 'Master in Painting'],
        detailsUrl: '/departments/painting'
      },
      {
        id: 3,
        name: 'Sculpture Department',
        description: 'Three-dimensional art creation using traditional and modern materials. Students work with clay, stone, metal, and contemporary materials to express artistic concepts.',
        imageUrl: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-box',
        studentCount: 180,
        programsOffered: ['Bachelor in Sculpture', 'Certificate in Ceramic Arts'],
        detailsUrl: '/departments/sculpture'
      },
      {
        id: 4,
        name: 'Photography Department',
        description: 'Professional photography covering portraits, landscapes, commercial, and artistic photography. Students master both traditional and digital photography techniques.',
        imageUrl: 'https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-camera',
        studentCount: 220,
        programsOffered: ['Bachelor in Photography', 'Diploma in Commercial Photography'],
        detailsUrl: '/departments/photography'
      },
      {
        id: 5,
        name: 'Interior Design Department',
        description: 'Creative space design focusing on functionality and aesthetics. Students learn space planning, color theory, furniture design, and sustainable design practices.',
        imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-home',
        studentCount: 195,
        programsOffered: ['Bachelor in Interior Design', 'Certificate in Space Planning'],
        detailsUrl: '/departments/interior-design'
      },
      {
        id: 6,
        name: 'Art History Department',
        description: 'Comprehensive study of art movements, cultural heritage, and artistic criticism. Students develop expertise in art research, curation, and cultural preservation.',
        imageUrl: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-book',
        studentCount: 150,
        programsOffered: ['Bachelor in Art History', 'Master in Cultural Heritage'],
        detailsUrl: '/departments/art-history'
      }
    ];
  }
}