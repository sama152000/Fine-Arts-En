import { Injectable } from '@angular/core';
import { Unit } from '../model/unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  getUnits(): Unit[] {
    return [
      {
        id: 1,
        name: 'Digital Arts Center',
        description: 'A state-of-the-art facility dedicated to digital art creation, multimedia production, and technology-enhanced artistic education.',
        imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-desktop',
        establishedYear: 2010,
        vision: 'To be the leading center for digital arts education and innovation in Egypt and the Middle East.',
        mission: 'Providing cutting-edge digital art education, fostering creativity through technology, and preparing students for the digital age.',
        objectives: [
          'Provide advanced digital art education and training',
          'Support multimedia and interactive art projects',
          'Facilitate technology integration in artistic practices',
          'Offer professional development in digital arts',
          'Promote innovation in digital creative industries'
        ],
        headOfUnit: {
          name: 'Dr. Sarah El-Masry',
          title: 'Director of Digital Arts Center',
          academicRank: 'Associate Professor',
          specialization: 'Digital Media and Interactive Arts',
          email: 'sarah.elmasry@finearts.luxor.edu.eg',
          office: 'Digital Arts Center, Room 101',
          bio: 'Dr. Sarah El-Masry is a pioneer in digital arts education with extensive experience in multimedia production and interactive design.'
        },
        staffMembers: [
          {
            id: 1,
            name: 'Mr. Ahmed Farid',
            position: 'Senior Technical Specialist',
            specialization: '3D Modeling and Animation',
            division: 'Animation Lab',
            email: 'ahmed.farid@finearts.luxor.edu.eg',
            office: 'Room 103'
          },
          {
            id: 2,
            name: 'Ms. Dina Hassan',
            position: 'Digital Arts Instructor',
            specialization: 'Graphic Design and Web Development',
            division: 'Design Lab',
            email: 'dina.hassan@finearts.luxor.edu.eg',
            office: 'Room 105'
          },
          {
            id: 3,
            name: 'Mr. Tarek Mahmoud',
            position: 'Multimedia Coordinator',
            specialization: 'Video Production and Editing',
            division: 'Media Lab',
            email: 'tarek.mahmoud@finearts.luxor.edu.eg',
            office: 'Room 107'
          }
        ],
        divisions: ['Animation Lab', 'Design Lab', 'Media Lab', 'VR/AR Studio'],
        services: [
          'Digital art workshops and training',
          'Multimedia production services',
          'Equipment rental and technical support',
          'Software training and certification',
          'Digital portfolio development'
        ],
        facilities: [
          'High-end computer workstations',
          'Professional graphics tablets',
          '3D printing facilities',
          'Virtual reality equipment',
          'Professional video editing suites'
        ],
        programs: [
          'Certificate in Digital Arts',
          'Advanced 3D Modeling Course',
          'Web Design Bootcamp',
          'Video Production Workshop',
          'VR/AR Development Program'
        ]
      },
      {
        id: 2,
        name: 'Art Therapy Unit',
        description: 'Dedicated to exploring the therapeutic applications of art and providing training in art therapy techniques for healing and personal development.',
        imageUrl: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-heart',
        establishedYear: 2015,
        vision: 'To pioneer the integration of art therapy in healthcare and community wellness programs throughout Egypt.',
        mission: 'Advancing the field of art therapy through education, research, and community outreach programs.',
        objectives: [
          'Train qualified art therapy practitioners',
          'Conduct research in therapeutic art applications',
          'Provide community art therapy services',
          'Develop art therapy curricula and resources',
          'Promote awareness of art therapy benefits'
        ],
        headOfUnit: {
          name: 'Dr. Mona Abdel-Aziz',
          title: 'Director of Art Therapy Unit',
          academicRank: 'Professor',
          specialization: 'Art Therapy and Psychology',
          email: 'mona.abdelaziz@finearts.luxor.edu.eg',
          office: 'Art Therapy Unit, Room 201',
          bio: 'Dr. Mona Abdel-Aziz is a certified art therapist with over 15 years of experience in clinical practice and research.'
        },
        staffMembers: [
          {
            id: 4,
            name: 'Dr. Hala Mostafa',
            position: 'Senior Art Therapist',
            specialization: 'Child and Adolescent Art Therapy',
            division: 'Clinical Services',
            email: 'hala.mostafa@finearts.luxor.edu.eg',
            office: 'Room 203'
          },
          {
            id: 5,
            name: 'Ms. Eman Sayed',
            position: 'Art Therapy Coordinator',
            specialization: 'Group Therapy and Community Programs',
            division: 'Community Outreach',
            email: 'eman.sayed@finearts.luxor.edu.eg',
            office: 'Room 205'
          },
          {
            id: 6,
            name: 'Mr. Youssef Ibrahim',
            position: 'Research Assistant',
            specialization: 'Art Therapy Research',
            division: 'Research',
            email: 'youssef.ibrahim@finearts.luxor.edu.eg',
            office: 'Room 207'
          }
        ],
        divisions: ['Clinical Services', 'Community Outreach', 'Research', 'Training Programs'],
        services: [
          'Individual art therapy sessions',
          'Group therapy programs',
          'Community workshops',
          'Professional training courses',
          'Research and assessment services'
        ],
        facilities: [
          'Private therapy rooms',
          'Group activity spaces',
          'Art supplies and materials',
          'Sensory integration tools',
          'Documentation and assessment areas'
        ],
        programs: [
          'Art Therapy Certification Program',
          'Community Wellness Workshops',
          'Trauma-Informed Art Therapy',
          'Pediatric Art Therapy Specialization',
          'Research Methods in Art Therapy'
        ]
      },
      {
        id: 3,
        name: 'Cultural Heritage Preservation Center',
        description: 'Focused on preserving, documenting, and promoting Egyptian cultural heritage through artistic and technological means.',
        imageUrl: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-shield',
        establishedYear: 2008,
        vision: 'To be the premier center for cultural heritage preservation and promotion in Upper Egypt.',
        mission: 'Preserving Egyptian cultural heritage through documentation, restoration, and educational programs.',
        objectives: [
          'Document and preserve cultural artifacts',
          'Train specialists in heritage conservation',
          'Promote cultural awareness and appreciation',
          'Develop preservation technologies',
          'Collaborate with international heritage organizations'
        ],
        headOfUnit: {
          name: 'Prof. Dr. Mostafa El-Gindi',
          title: 'Director of Cultural Heritage Center',
          academicRank: 'Professor',
          specialization: 'Art Conservation and Heritage Studies',
          email: 'mostafa.elgindi@finearts.luxor.edu.eg',
          office: 'Heritage Center, Room 301',
          bio: 'Prof. Mostafa El-Gindi is an internationally recognized expert in art conservation with 25 years of experience.'
        },
        staffMembers: [
          {
            id: 7,
            name: 'Dr. Nevine Farouk',
            position: 'Senior Conservation Specialist',
            specialization: 'Painting and Manuscript Conservation',
            division: 'Conservation Lab',
            email: 'nevine.farouk@finearts.luxor.edu.eg',
            office: 'Room 303'
          },
          {
            id: 8,
            name: 'Mr. Mahmoud Saleh',
            position: 'Digital Documentation Specialist',
            specialization: '3D Scanning and Digital Archiving',
            division: 'Digital Documentation',
            email: 'mahmoud.saleh@finearts.luxor.edu.eg',
            office: 'Room 305'
          },
          {
            id: 9,
            name: 'Ms. Fatma Ali',
            position: 'Heritage Education Coordinator',
            specialization: 'Cultural Education and Outreach',
            division: 'Education and Outreach',
            email: 'fatma.ali@finearts.luxor.edu.eg',
            office: 'Room 307'
          }
        ],
        divisions: ['Conservation Lab', 'Digital Documentation', 'Education and Outreach', 'Research and Development'],
        services: [
          'Artifact conservation and restoration',
          'Digital documentation and archiving',
          'Heritage education programs',
          'Consultation services',
          'Training workshops'
        ],
        facilities: [
          'Professional conservation laboratory',
          '3D scanning equipment',
          'Climate-controlled storage',
          'Digital archiving systems',
          'Educational exhibition space'
        ],
        programs: [
          'Heritage Conservation Certificate',
          'Digital Documentation Workshop',
          'Cultural Tourism Guide Training',
          'Traditional Crafts Preservation',
          'Heritage Site Management Course'
        ]
      },
      {
        id: 4,
        name: 'Innovation and Entrepreneurship Hub',
        description: 'Supporting creative entrepreneurship and innovation in the arts, helping students and faculty develop business skills and launch creative ventures.',
        imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-lightbulb',
        establishedYear: 2018,
        vision: 'To foster a thriving ecosystem of creative entrepreneurs and innovative artistic enterprises.',
        mission: 'Empowering artists and designers to transform their creativity into sustainable business ventures.',
        objectives: [
          'Support creative business development',
          'Provide entrepreneurship training',
          'Facilitate access to funding and resources',
          'Create networking opportunities',
          'Promote innovation in creative industries'
        ],
        headOfUnit: {
          name: 'Dr. Rania El-Sherbiny',
          title: 'Director of Innovation Hub',
          academicRank: 'Associate Professor',
          specialization: 'Creative Industries and Business Development',
          email: 'rania.elsherbiny@finearts.luxor.edu.eg',
          office: 'Innovation Hub, Room 401',
          bio: 'Dr. Rania El-Sherbiny combines artistic expertise with business acumen, specializing in creative entrepreneurship.'
        },
        staffMembers: [
          {
            id: 10,
            name: 'Mr. Karim Nasser',
            position: 'Business Development Coordinator',
            specialization: 'Startup Incubation and Mentoring',
            division: 'Business Development',
            email: 'karim.nasser@finearts.luxor.edu.eg',
            office: 'Room 403'
          },
          {
            id: 11,
            name: 'Ms. Nour El-Din',
            position: 'Innovation Specialist',
            specialization: 'Design Thinking and Innovation',
            division: 'Innovation Lab',
            email: 'nour.eldin@finearts.luxor.edu.eg',
            office: 'Room 405'
          },
          {
            id: 12,
            name: 'Mr. Amr Hosny',
            position: 'Marketing and Communications Manager',
            specialization: 'Digital Marketing and Branding',
            division: 'Marketing Support',
            email: 'amr.hosny@finearts.luxor.edu.eg',
            office: 'Room 407'
          }
        ],
        divisions: ['Business Development', 'Innovation Lab', 'Marketing Support', 'Funding and Investment'],
        services: [
          'Business plan development',
          'Mentorship and coaching',
          'Funding application support',
          'Marketing and branding assistance',
          'Networking events and workshops'
        ],
        facilities: [
          'Co-working spaces',
          'Meeting and presentation rooms',
          'Prototyping equipment',
          'Digital marketing tools',
          'Event and workshop spaces'
        ],
        programs: [
          'Creative Entrepreneurship Bootcamp',
          'Business Plan Competition',
          'Investor Pitch Training',
          'Digital Marketing for Artists',
          'Intellectual Property Workshop'
        ]
      }
    ];
  }

  getUnitById(id: number): Unit | undefined {
    return this.getUnits().find(unit => unit.id === id);
  }
}