
  import { Injectable } from '@angular/core';
import { AboutSection, FacultyInfo, AdministrativePosition ,AboutFaculty} from '../model/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private facultyInfo: FacultyInfo = {
    vision: "The Faculty of Fine Arts strives to become one of the distinguished governmental faculties in disseminating education, culture, scientific research, and knowledge sources, while continuously affirming its role in community service and contributing to the development of civil society through the adoption and reinforcement of high-quality global standards.",
    
    mission: "The Faculty of Fine Arts seeks to emphasize the societal and civil role of educational institutions by spreading refined artistic culture in the local community, thereby raising the level of aesthetic appreciation to the required standard and improving the aesthetic environment of society—an improvement that positively reflects on individual performance across most human activities. The faculty stresses the importance of intellectual and cultural diversity in enriching the artistic and cultural movement on both regional and international levels, which in turn has a positive impact on human experience.",
    
    objectives: [
      "To provide the best educational opportunities and research facilities for students and faculty members at a quality level that aligns with regional and international standards.",
      "To create an educational environment based on scientific research and freedom of artistic creativity, encouraging students to exert their utmost effort in learning and stimulating their creative energies to discover their full potential and artistic skills.",
      "To prepare graduates with technical, intellectual, and cultural expertise that enables them to adapt to changing circumstances.",
      "To activate the role of art and beauty in contributing to the improvement of human resources within the cultural and visual environment of Egyptian society, particularly in Luxor Governorate."
    ],
    
    history: `The presidential decree to establish the Faculty of Fine Arts in Luxor was issued on 22 May 1996, and studies officially began in the academic year 1996/1997. Luxor was chosen as the faculty's location due to its rich ancient civilizational heritage, representing one of the most important schools of sculpture, painting, and architecture throughout history—both ancient and modern.

    It is the city of Thebes, which the Greek poet Homer called "the hundred-gated city" because of its many towering architectural monuments and grand gates. Later, the Arabs named it "Al-Uqṣur" (Luxor), meaning "the city of palaces," amazed by its magnificent and uniquely beautiful structures. Luxor was the capital of the Egyptian state between approximately 2100 and 750 BC.

    Thus, the faculty was established to continue studying and researching its deep cultural roots, drawing inspiration from authentic Egyptian civilization—a major source of global modernism in the visual arts since the last quarter of the 19th century until the present day. The faculty aspires to become a leading cultural center both locally and internationally.

    The duration of study to obtain a Bachelor's degree is five years: a preparatory year for the Architecture major, a preparatory year for the Decoration major, and a common preparatory year for the majors of Painting, Graphics, and Sculpture. After the preparatory year, students choose their specific specialization according to the curriculum and the full academic year system.`,
    
    establishedYear: 1996,
    
    deansWord: `Welcome to the Faculty of Fine Arts at Luxor University, where artistic heritage meets contemporary innovation. As Dean, I am proud to lead an institution that stands at the crossroads of Egypt's magnificent cultural legacy and the vibrant future of artistic expression.

    Our faculty, established in the heart of ancient Thebes, draws inspiration from one of humanity's greatest artistic civilizations. We are committed to nurturing the next generation of artists, designers, and cultural leaders who will carry forward this legacy while embracing the challenges and opportunities of the modern world.

    Through our comprehensive programs in Painting, Sculpture, Graphics, and Decoration, we provide students with the technical skills, creative vision, and critical thinking abilities necessary to excel in today's dynamic artistic landscape. Our distinguished faculty members, state-of-the-art facilities, and strong industry partnerships ensure that our graduates are well-prepared for successful careers in the arts.

    We invite you to explore the rich opportunities available at our faculty and to join us in celebrating and advancing the artistic traditions that make Egypt a beacon of cultural excellence worldwide.`,
    
    strategicPlan: `The Faculty of Fine Arts Strategic Plan 2023-2028 outlines our commitment to excellence in artistic education, research, and community engagement. Our strategic initiatives focus on:

    Academic Excellence: Continuously updating curricula to reflect contemporary artistic practices while preserving traditional techniques and cultural heritage.

    Research & Innovation: Promoting interdisciplinary research that explores the intersection of art, technology, and society, with particular emphasis on digital arts and cultural preservation.

    Community Engagement: Strengthening our ties with local and international cultural institutions, museums, and art organizations to provide students with real-world experience and professional networking opportunities.

    International Collaboration: Expanding exchange programs and partnerships with renowned art institutions worldwide to enhance global perspectives and cross-cultural understanding.

    Infrastructure Development: Investing in modern facilities, digital laboratories, and sustainable practices that support innovative teaching and learning methodologies.

    Cultural Preservation: Leading efforts to document, preserve, and interpret Egypt's rich artistic heritage for future generations through digital archives and educational programs.`,
    
    administrativeStructure: [
      {
        id: 1,
        title: "Dean of the Faculty",
        name: "Prof. Dr. Ahmed Mohyi Hamza",
        academicRank: "Professor",
        email: "dean@fine.arts.edu.eg",
        office: "Administration Building, Room 101",
        responsibilities: [
          "Overall faculty leadership and strategic planning",
          "Academic quality assurance and program development",
          "External relations and partnership development",
          "Budget oversight and resource allocation"
        ]
      },
      {
        id: 2,
        title: "Vice Dean for Education and Student Affairs",
        name: "Prof. Dr. Waleed Mohamed Abdullah",
        academicRank: "Professor",
        email: "vd.education@fine.arts.edu.eg",
        office: "Administration Building, Room 102",
        responsibilities: [
          "Undergraduate program oversight and curriculum development",
          "Student admissions and academic advising",
          "Student activities and extracurricular programs",
          "Quality assurance in teaching and learning"
        ]
      },
      {
        id: 3,
        title: "Vice Dean for Postgraduate Studies and Research",
        name: "Assoc. Prof. Dr. Mahmoud Mostafa Allam",
        academicRank: "Associate Professor",
        email: "vd.research@fine.arts.edu.eg",
        office: "Administration Building, Room 103",
        responsibilities: [
          "Graduate program development and oversight",
          "Research initiatives and funding coordination",
          "International collaboration and exchange programs",
          "Academic conference and publication support"
        ]
      },
      {
        id: 4,
        title: "Vice Dean for Community Service and Environmental Development",
        name: "Assoc. Prof. Dr. Ahmed Hamdi Abdel-Hares",
        academicRank: "Associate Professor",
        email: "vd.community@fine.arts.edu.eg",
        office: "Administration Building, Room 104",
        responsibilities: [
          "Community outreach and cultural programs",
          "Environmental sustainability initiatives",
          "Public art projects and exhibitions",
          "Industry partnerships and professional development"
        ]
      }
    ]
  };

  private aboutSections: AboutSection[] = [
    {
      id: 'vision',
      title: 'Vision',
      content: this.facultyInfo.vision,
      order: 1,
      icon: 'pi pi-eye',
      imageUrl: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg'
    },
    {
      id: 'mission',
      title: 'Mission',
      content: this.facultyInfo.mission,
      order: 2,
      icon: 'pi pi-compass',
      imageUrl: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg'
    },
    {
      id: 'objectives',
      title: 'Objectives',
      content: this.facultyInfo.objectives.map((obj, index) => `${index + 1}. ${obj}`).join('\n\n'),
      order: 3,
      icon: 'pi pi-flag',
      imageUrl: 'https://images.pexels.com/photos/1181609/pexels-photo-1181609.jpeg'
    },
    {
      id: 'history',
      title: 'Faculty History',
      content: this.facultyInfo.history,
      order: 4,
      icon: 'pi pi-history',
      imageUrl: 'https://images.pexels.com/photos/1181721/pexels-photo-1181721.jpeg'
    },
    {
      id: 'deans-word',
      title: "Dean's Word",
      content: this.facultyInfo.deansWord,
      order: 5,
      icon: 'pi pi-user',
      imageUrl: 'https://images.pexels.com/photos/1181730/pexels-photo-1181730.jpeg'
    },
    {
      id: 'strategic-plan',
      title: 'Strategic Plan',
      content: this.facultyInfo.strategicPlan,
      order: 6,
      icon: 'pi pi-chart-line',
      imageUrl: 'https://images.pexels.com/photos/1181724/pexels-photo-1181724.jpeg'
    },
    {
      id: 'administrative-structure',
      title: 'Administrative Structure',
      content: 'Our administrative structure ensures effective governance and support for all faculty activities.',
      order: 7,
      icon: 'pi pi-sitemap',
      imageUrl: 'https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg'
    }
  ];

  getAboutSections(): AboutSection[] {
    return this.aboutSections.sort((a, b) => a.order - b.order);
  }

  getAboutSectionById(id: string): AboutSection | undefined {
    return this.aboutSections.find(section => section.id === id);
  }

  getFacultyInfo(): FacultyInfo {
    return this.facultyInfo;
  }

  getAdministrativeStructure(): AdministrativePosition[] {
    return this.facultyInfo.administrativeStructure;
  }

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
  }}
