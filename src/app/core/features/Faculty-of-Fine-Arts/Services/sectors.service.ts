import { Injectable } from '@angular/core';
import { Sector } from '../model/sector.model';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {

  getSectors(): Sector[] {
    return [
      {
        id: 1,
        name: 'Academic Affairs Sector',
        description: 'Responsible for overseeing all academic programs, curriculum development, and educational quality assurance within the Faculty of Fine Arts.',
        imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-book',
        establishedYear: 1995,
        vision: 'To be a leading academic sector that ensures excellence in fine arts education and promotes innovative teaching methodologies.',
        mission: 'Providing comprehensive academic oversight, developing cutting-edge curricula, and maintaining the highest standards of artistic education.',
        objectives: [
          'Develop and update academic curricula to meet international standards',
          'Ensure quality assurance in all educational programs',
          'Coordinate academic activities across all departments',
          'Promote research and scholarly activities',
          'Foster collaboration with international academic institutions'
        ],
        headOfSector: {
          name: 'Prof. Dr. Ahmed Hassan',
          title: 'Vice Dean for Academic Affairs',
          academicRank: 'Professor',
          specialization: 'Art Education and Curriculum Development',
          email: 'ahmed.hassan@finearts.luxor.edu.eg',
          office: 'Academic Affairs Building, Room 201',
          bio: 'Prof. Ahmed Hassan has over 20 years of experience in art education and curriculum development. He has published numerous research papers on innovative teaching methods in fine arts.'
        },
        staffMembers: [
          {
            id: 1,
            name: 'Dr. Fatima Al-Zahra',
            academicRank: 'Associate Professor',
            specialization: 'Educational Psychology',
            division: 'Academic Planning',
            email: 'fatima.alzahra@finearts.luxor.edu.eg',
            office: 'Room 203'
          },
          {
            id: 2,
            name: 'Dr. Mohamed Saleh',
            academicRank: 'Assistant Professor',
            specialization: 'Quality Assurance',
            division: 'Quality Control',
            email: 'mohamed.saleh@finearts.luxor.edu.eg',
            office: 'Room 205'
          },
          {
            id: 3,
            name: 'Ms. Nadia Ibrahim',
            academicRank: 'Lecturer',
            specialization: 'Academic Administration',
            division: 'Academic Planning',
            email: 'nadia.ibrahim@finearts.luxor.edu.eg',
            office: 'Room 207'
          }
        ],
        divisions: ['Academic Planning', 'Quality Control', 'Curriculum Development', 'Research Coordination'],
        services: [
          'Academic program development',
          'Quality assurance monitoring',
          'Faculty development programs',
          'Research coordination',
          'International collaboration'
        ],
        activities: [
          'Annual curriculum review meetings',
          'Faculty training workshops',
          'Academic quality audits',
          'Research symposiums',
          'International exchange programs'
        ]
      },
      {
        id: 2,
        name: 'Student Affairs Sector',
        description: 'Dedicated to supporting student life, welfare, and extracurricular activities to ensure a comprehensive educational experience.',
        imageUrl: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-users',
        establishedYear: 1996,
        vision: 'To create a supportive and enriching environment that fosters student growth, creativity, and personal development.',
        mission: 'Supporting students throughout their academic journey by providing comprehensive services, activities, and guidance.',
        objectives: [
          'Provide comprehensive student support services',
          'Organize cultural and artistic activities',
          'Support student clubs and organizations',
          'Facilitate student welfare programs',
          'Promote student leadership development'
        ],
        headOfSector: {
          name: 'Dr. Amira Farouk',
          title: 'Vice Dean for Student Affairs',
          academicRank: 'Associate Professor',
          specialization: 'Student Psychology and Counseling',
          email: 'amira.farouk@finearts.luxor.edu.eg',
          office: 'Student Affairs Building, Room 101',
          bio: 'Dr. Amira Farouk specializes in student psychology and has been instrumental in developing comprehensive student support programs.'
        },
        staffMembers: [
          {
            id: 4,
            name: 'Mr. Omar Mahmoud',
            academicRank: 'Lecturer',
            specialization: 'Student Activities',
            division: 'Activities Coordination',
            email: 'omar.mahmoud@finearts.luxor.edu.eg',
            office: 'Room 103'
          },
          {
            id: 5,
            name: 'Ms. Layla Ahmed',
            academicRank: 'Assistant Lecturer',
            specialization: 'Student Counseling',
            division: 'Student Support',
            email: 'layla.ahmed@finearts.luxor.edu.eg',
            office: 'Room 105'
          },
          {
            id: 6,
            name: 'Mr. Khaled Nasser',
            academicRank: 'Lecturer',
            specialization: 'Student Organizations',
            division: 'Student Clubs',
            email: 'khaled.nasser@finearts.luxor.edu.eg',
            office: 'Room 107'
          }
        ],
        divisions: ['Activities Coordination', 'Student Support', 'Student Clubs', 'Welfare Services'],
        services: [
          'Student counseling and guidance',
          'Cultural and artistic events',
          'Student club coordination',
          'Welfare and support programs',
          'Leadership development'
        ],
        activities: [
          'Annual art festival',
          'Student exhibitions',
          'Cultural exchange programs',
          'Leadership workshops',
          'Community service projects'
        ]
      },
      {
        id: 3,
        name: 'Research and Graduate Studies Sector',
        description: 'Focuses on advancing research initiatives, supporting graduate programs, and fostering innovation in fine arts education.',
        imageUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-search',
        establishedYear: 2000,
        vision: 'To establish the faculty as a leading research center in fine arts and creative studies in the region.',
        mission: 'Promoting excellence in research, supporting graduate education, and fostering innovation in artistic practices.',
        objectives: [
          'Develop and support research programs in fine arts',
          'Oversee graduate degree programs',
          'Facilitate research collaborations',
          'Promote publication of scholarly work',
          'Support innovative artistic research projects'
        ],
        headOfSector: {
          name: 'Prof. Dr. Mahmoud El-Sharif',
          title: 'Vice Dean for Research and Graduate Studies',
          academicRank: 'Professor',
          specialization: 'Art History and Research Methodology',
          email: 'mahmoud.elsharif@finearts.luxor.edu.eg',
          office: 'Research Building, Room 301',
          bio: 'Prof. Mahmoud El-Sharif is a renowned art historian with extensive experience in research methodology and graduate supervision.'
        },
        staffMembers: [
          {
            id: 7,
            name: 'Dr. Yasmin Abdel-Rahman',
            academicRank: 'Associate Professor',
            specialization: 'Research Methodology',
            division: 'Research Coordination',
            email: 'yasmin.abdelrahman@finearts.luxor.edu.eg',
            office: 'Room 303'
          },
          {
            id: 8,
            name: 'Dr. Hassan Ali',
            academicRank: 'Assistant Professor',
            specialization: 'Graduate Studies',
            division: 'Graduate Programs',
            email: 'hassan.ali@finearts.luxor.edu.eg',
            office: 'Room 305'
          },
          {
            id: 9,
            name: 'Ms. Rania Mostafa',
            academicRank: 'Lecturer',
            specialization: 'Research Administration',
            division: 'Research Support',
            email: 'rania.mostafa@finearts.luxor.edu.eg',
            office: 'Room 307'
          }
        ],
        divisions: ['Research Coordination', 'Graduate Programs', 'Research Support', 'Publication Services'],
        services: [
          'Research project coordination',
          'Graduate program administration',
          'Research funding support',
          'Publication assistance',
          'Conference organization'
        ],
        activities: [
          'Annual research conference',
          'Graduate thesis defenses',
          'Research methodology workshops',
          'International research collaborations',
          'Scholarly publication initiatives'
        ]
      }
    ];
  }

  getSectorById(id: number): Sector | undefined {
    return this.getSectors().find(sector => sector.id === id);
  }
}