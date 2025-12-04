import { Injectable } from '@angular/core';
import { Department, DepartmentTab } from '../model/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: Department[] = [
    {
      id: 1,
      name: "Decoration Department",
      nameAr: "قسم الديكور",
      description: "The Decoration Department focuses on developing creative and technical skills in interior architecture and theatrical design, preparing students to become innovative designers capable of transforming spaces into artistic experiences.",
      vision: "To become a leading department in decoration arts, recognized regionally and internationally for excellence in education, research, and professional practice in interior architecture and theatrical design.",
      mission: "To provide high-quality educational and research services in line with international standards, preparing graduates capable of competing locally and globally as cultured and artistically distinguished designers in the fields of Interior Architecture and Theatrical Decoration.",
      objectives: [
        "Develop creative and technical competencies in interior design and theatrical decoration",
        "Foster understanding of cultural and historical contexts in design practice",
        "Promote sustainable design principles and environmental consciousness",
        "Encourage innovation in the application of traditional and contemporary design methods",
        "Build strong industry partnerships for practical training and employment opportunities"
      ],
      imageUrl: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      icon: "pi pi-home",
      studentCount: 245,
      programsOffered: ["Bachelor of Interior Architecture", "Bachelor of Theatrical Design"],
      divisions: ["Interior Architecture", "Expressive Arts (Scenography & Theatrical Design)"],
      headOfDepartment: {
        name: "Assoc. Prof. Dr. Dalia Saleh Abdel Wahab Farah",
        title: "Head of Decoration Department",
        academicRank: "Associate Professor",
        specialization: "Expressive Arts",
        email: "d.farah@fine.arts.edu.eg",
        office: "Building A, Room 201",
        bio: "Dr. Dalia Farah is a renowned expert in theatrical design and scenography with over 15 years of academic experience."
      },
      staffMembers: [
        { id: 1, name: "Assoc. Prof. Dr. Dalia Saleh Farah", specialization: "Expressive Arts", academicRank: "Associate Professor", division: "Theatrical Design" },
        { id: 2, name: "Assoc. Prof. Dr. Amr Abdel Aati Mohamed", specialization: "Interior Architecture", academicRank: "Associate Professor", division: "Interior Architecture" },
        { id: 3, name: "Assoc. Prof. Dr. Qershi Saadi Ahmed", specialization: "Expressive Arts", academicRank: "Associate Professor", division: "Theatrical Design" },
        { id: 4, name: "Dr. Rasha Gaber Ayyoub Wassef", specialization: "Interior Architecture", academicRank: "Lecturer", division: "Interior Architecture" },
        { id: 5, name: "Dr. Aliaa Maher Mohamed Hamdan", specialization: "Expressive Arts", academicRank: "Lecturer", division: "Theatrical Design" },
        { id: 6, name: "Dr. Tharwat Abdel Latif Awad", specialization: "Expressive Arts", academicRank: "Lecturer", division: "Theatrical Design" },
        { id: 7, name: "Dr. Mahmoud Abdel Hamid Mahmoud", specialization: "Interior Architecture", academicRank: "Lecturer", division: "Interior Architecture" },
        { id: 8, name: "Dr. Jihad Mohamed Hamed Shreet", specialization: "Interior Architecture", academicRank: "Lecturer", division: "Interior Architecture" },
        { id: 9, name: "Dr. Aliaa Kamel Abdel Nasser", specialization: "Interior Architecture", academicRank: "Lecturer", division: "Interior Architecture" },
        { id: 10, name: "Dr. Mohamed Younes Fikry Amer", specialization: "Interior Architecture", academicRank: "Lecturer", division: "Interior Architecture" },
        { id: 11, name: "Dr. Mona Saad Mohamed Mahmoud", specialization: "Expressive Arts", academicRank: "Lecturer", division: "Theatrical Design" },
        { id: 12, name: "Dr. Maram Mahmoud Thabet", specialization: "Interior Architecture", academicRank: "Lecturer", division: "Interior Architecture" },
        { id: 13, name: "Asst. Lect. Maha Abdel Sattar Abbas", specialization: "Interior Architecture", academicRank: "Assistant Lecturer", division: "Interior Architecture" },
        { id: 14, name: "Asst. Lect. Mohamed Awad Yaqoub", specialization: "Interior Architecture", academicRank: "Assistant Lecturer", division: "Interior Architecture" },
        { id: 15, name: "Asst. Lect. Abdullah Al-Bakri Dargham", specialization: "Interior Architecture", academicRank: "Assistant Lecturer", division: "Interior Architecture" },
        { id: 16, name: "Asst. Lect. Shabaan Mohamed Khodary", specialization: "Interior Architecture", academicRank: "Assistant Lecturer", division: "Interior Architecture" },
        { id: 17, name: "Demonstrator Karim Abdel Salam Bakry", specialization: "Expressive Arts", academicRank: "Demonstrator", division: "Theatrical Design" },
        { id: 18, name: "Demonstrator Abanoub Adel Shenouda", specialization: "Interior Architecture", academicRank: "Demonstrator", division: "Interior Architecture" },
        { id: 19, name: "Demonstrator Germine Gergis Nassim", specialization: "Expressive Arts", academicRank: "Demonstrator", division: "Theatrical Design" },
        { id: 20, name: "Demonstrator Nada Alaa Sayed", specialization: "Interior Architecture", academicRank: "Demonstrator", division: "Interior Architecture" },
        { id: 21, name: "Demonstrator Ahmed Antar Mahmoud", specialization: "Expressive Arts", academicRank: "Demonstrator", division: "Theatrical Design" },
        { id: 22, name: "Demonstrator Mirna Badawi Sayed", specialization: "Interior Architecture", academicRank: "Demonstrator", division: "Interior Architecture" }
      ],
      establishedYear: 1996,
      detailsUrl: "/departments/1"
    },
    {
      id: 2,
      name: "Graphics Department",
      nameAr: "قسم الجرافيك",
      description: "The Graphics Department specializes in visual communication, graphic design, and digital media, preparing students to become innovative designers in the modern digital landscape.",
      vision: "To be a leading center for graphic design education that produces creative professionals capable of addressing contemporary visual communication challenges through innovative design solutions.",
      mission: "As one of the main departments of the faculty, it is responsible for graduating highly talented students with distinguished graphic and design abilities, reinforced through rigorous academic programs that blend traditional artistic principles with cutting-edge digital technologies.",
      objectives: [
        "Develop advanced skills in graphic design, typography, and visual communication",
        "Master digital design tools and emerging technologies in media production",
        "Understand brand identity development and marketing communication strategies",
        "Explore traditional and contemporary approaches to book arts and animation",
        "Foster critical thinking in visual problem-solving and creative expression"
      ],
      imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      icon: "pi pi-image",
      studentCount: 312,
      programsOffered: ["Bachelor of Graphic Design", "Bachelor of Animation & Book Arts"],
      divisions: ["Print Design (Graphic Design & Advertising)", "Animation and Book Arts"],
      headOfDepartment: {
        name: "Prof. Dr. Ahmed Mohyi Hamza",
        title: "Head of Graphics Department",
        academicRank: "Professor",
        specialization: "Print Design",
        email: "a.hamza@fine.arts.edu.eg",
        office: "Building B, Room 301",
        bio: "Prof. Ahmed Hamza is a distinguished expert in graphic design and visual communication with extensive experience in both academic and professional practice."
      },
      staffMembers: [
        { id: 1, name: "Prof. Emeritus Saleh Mohamed Abdel Moeaty", specialization: "Animation & Book Arts", academicRank: "Emeritus Professor", division: "Animation and Book Arts" },
        { id: 2, name: "Prof. Dr. Ahmed Mohyi Hamza", specialization: "Print Design", academicRank: "Professor", division: "Print Design (Graphic Design & Advertising)" },
        { id: 3, name: "Assoc. Prof. Dr. Waleed Mohamed Abdullah", specialization: "Animation & Book Arts", academicRank: "Associate Professor", division: "Animation and Book Arts" },
        { id: 4, name: "Assoc. Prof. Dr. Ahmed Hassan Mahmoud", specialization: "Animation & Book Arts", academicRank: "Associate Professor", division: "Animation and Book Arts" },
        { id: 5, name: "Assoc. Prof. Dr. Mahmoud Mostafa Allam", specialization: "Animation & Book Arts", academicRank: "Associate Professor", division: "Animation and Book Arts" },
        { id: 6, name: "Assoc. Prof. Dr. Wafaa Abdel Maqsoud Younes", specialization: "Print Design", academicRank: "Associate Professor", division: "Print Design (Graphic Design & Advertising)" },
        { id: 7, name: "Assoc. Prof. Dr. Ahmed Gamal Eid", specialization: "Animation & Book Arts", academicRank: "Associate Professor", division: "Animation and Book Arts" },
        { id: 8, name: "Assoc. Prof. Dr. Ahmed Hamdi Abdel Hares", specialization: "Print Design", academicRank: "Associate Professor", division: "Print Design (Graphic Design & Advertising)" },
        { id: 9, name: "Dr. Samah Mohamed Abdel Hamid", specialization: "Print Design", academicRank: "Lecturer", division: "Print Design (Graphic Design & Advertising)" },
        { id: 10, name: "Dr. Ahmed Mohamed Samir", specialization: "Animation & Book Arts", academicRank: "Lecturer", division: "Animation and Book Arts" },
        { id: 11, name: "Dr. Doaa Ahmed El-Sawy", specialization: "Print Design", academicRank: "Lecturer", division: "Print Design (Graphic Design & Advertising)" },
        { id: 12, name: "Dr. Reham Mohyi El-Din", specialization: "Animation & Book Arts", academicRank: "Lecturer", division: "Animation and Book Arts" },
        { id: 13, name: "Dr. Ahmed El-Dawy Hassan", specialization: "Animation & Book Arts", academicRank: "Lecturer", division: "Animation and Book Arts" },
        { id: 14, name: "Dr. Jihad Ahmed Mohamed", specialization: "Print Design", academicRank: "Lecturer", division: "Print Design (Graphic Design & Advertising)" },
        { id: 15, name: "Dr. Waleed Mohamed Abdel Sattar", specialization: "Animation & Book Arts", academicRank: "Lecturer", division: "Animation and Book Arts" },
        { id: 16, name: "Dr. El-Shaimaa El-Sayed Baghdadi", specialization: "Print Design", academicRank: "Lecturer", division: "Print Design (Graphic Design & Advertising)" },
        { id: 17, name: "Dr. Ahmed Saber Abdel Zaher", specialization: "Print Design", academicRank: "Lecturer", division: "Print Design (Graphic Design & Advertising)" },
        { id: 18, name: "Dr. Rehab Mohamed El-Tayeb", specialization: "Print Design", academicRank: "Lecturer", division: "Print Design (Graphic Design & Advertising)" },
        { id: 19, name: "Asst. Lect. Fayza Abu El-Hassan", specialization: "Print Design", academicRank: "Assistant Lecturer", division: "Print Design (Graphic Design & Advertising)" },
        { id: 20, name: "Asst. Lect. Taha Fathy Aql", specialization: "Print Design", academicRank: "Assistant Lecturer", division: "Print Design (Graphic Design & Advertising)" },
        { id: 21, name: "Asst. Lect. Samar Mohamed Abbas", specialization: "Animation & Book Arts", academicRank: "Assistant Lecturer", division: "Animation and Book Arts" },
        { id: 22, name: "Asst. Lect. Ali Gamal Ali", specialization: "Animation & Book Arts", academicRank: "Assistant Lecturer", division: "Animation and Book Arts" },
        { id: 23, name: "Asst. Lect. Amani Othman Abdel Basset", specialization: "Print Design", academicRank: "Assistant Lecturer", division: "Print Design (Graphic Design & Advertising)" },
        { id: 24, name: "Asst. Lect. Israa Saleh Abdel Moeaty", specialization: "Animation & Book Arts", academicRank: "Assistant Lecturer", division: "Animation and Book Arts" },
        { id: 25, name: "Asst. Lect. Mohamed Gamal Ismail", specialization: "Print Design", academicRank: "Assistant Lecturer", division: "Print Design (Graphic Design & Advertising)" },
        { id: 26, name: "Demonstrator Ali Ahmed Radwan", specialization: "Animation & Book Arts", academicRank: "Demonstrator", division: "Animation and Book Arts" },
        { id: 27, name: "Demonstrator Israa Mansour Youssef", specialization: "Print Design", academicRank: "Demonstrator", division: "Print Design (Graphic Design & Advertising)" },
        { id: 28, name: "Demonstrator Abanoub Adel Kamel", specialization: "Animation & Book Arts", academicRank: "Demonstrator", division: "Animation and Book Arts" },
        { id: 29, name: "Demonstrator Shaimaa Shazly Hassanein", specialization: "Animation & Book Arts", academicRank: "Demonstrator", division: "Animation and Book Arts" },
        { id: 30, name: "Demonstrator Margo Awad Sobhy", specialization: "Print Design", academicRank: "Demonstrator", division: "Print Design (Graphic Design & Advertising)" }
      ],
      establishedYear: 1996,
      detailsUrl: "/departments/2"
    },
    {
      id: 3,
      name: "Painting Department",
      nameAr: "قسم التصوير",
      description: "The Painting Department focuses on developing artistic expression through traditional and contemporary painting techniques, fostering creative vision and technical mastery.",
      vision: "To become a distinguished center for painting arts that nurtures creative talents and contributes to the preservation and development of Egyptian artistic heritage while embracing contemporary artistic movements.",
      mission: "To provide academic education and research in painting that meets international quality standards, producing graduates who are academically skilled and creatively distinguished in the art of painting, capable of contributing to cultural and artistic development in Egypt and the region.",
      objectives: [
        "Master traditional and contemporary painting techniques and materials",
        "Develop personal artistic vision and creative expression",
        "Understand art history and its influence on contemporary practice",
        "Explore mural painting techniques for architectural integration",
        "Foster critical analysis and appreciation of visual arts"
      ],
      imageUrl: "https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg",
      icon: "pi pi-palette",
      studentCount: 198,
      programsOffered: ["Bachelor of Painting", "Bachelor of Mural Painting"],
      divisions: ["Painting", "Mural Painting"],
      headOfDepartment: {
        name: "Assoc. Prof. Dr. Marwa Ezzat Abdel Hamid",
        title: "Head of Painting Department",
        academicRank: "Associate Professor",
        specialization: "Painting",
        email: "m.ezzat@fine.arts.edu.eg",
        office: "Building C, Room 201",
        bio: "Dr. Marwa Ezzat is an accomplished painter and educator with extensive experience in contemporary painting techniques and artistic pedagogy."
      },
      staffMembers: [
        { id: 1, name: "Assoc. Prof. Dr. Ali Sayed Abdo", specialization: "Painting", academicRank: "Associate Professor", division: "Painting" },
        { id: 2, name: "Assoc. Prof. Dr. Marwa Ezzat Abdel Hamid", specialization: "Painting", academicRank: "Associate Professor", division: "Painting" },
        { id: 3, name: "Assoc. Prof. Dr. Manal Mohamed Mubarak", specialization: "Mural Painting", academicRank: "Associate Professor", division: "Mural Painting" },
        { id: 4, name: "Dr. Alaa Abu El-Hamd Abdel Sattar", specialization: "Painting", academicRank: "Lecturer", division: "Painting" },
        { id: 5, name: "Dr. Abdel Rahim Hakem Hassan", specialization: "Mural Painting", academicRank: "Lecturer", division: "Mural Painting" },
        { id: 6, name: "Dr. Mahmoud Mohamed Abdel Hafiz", specialization: "Painting", academicRank: "Lecturer", division: "Painting" },
        { id: 7, name: "Dr. Samir Abdel Razek El-Shaarawy", specialization: "Mural Painting", academicRank: "Lecturer", division: "Mural Painting" },
        { id: 8, name: "Dr. Alaa Ahmed Awad", specialization: "Mural Painting", academicRank: "Lecturer", division: "Mural Painting" },
        { id: 9, name: "Asst. Lect. Mahmoud Mohamed Suleiman", specialization: "Mural Painting", academicRank: "Assistant Lecturer", division: "Mural Painting" },
        { id: 10, name: "Asst. Lect. Shaza Khaled Mousa", specialization: "Painting", academicRank: "Assistant Lecturer", division: "Painting" },
        { id: 11, name: "Asst. Lect. Aliaa El-Tayeb Mohamed", specialization: "Painting", academicRank: "Assistant Lecturer", division: "Painting" },
        { id: 12, name: "Asst. Lect. Ahmed Abdel Fattah Youssef", specialization: "Painting", academicRank: "Assistant Lecturer", division: "Painting" },
        { id: 13, name: "Demonstrator Hala Mohamed Refai", specialization: "Painting", academicRank: "Demonstrator", division: "Painting" },
        { id: 14, name: "Demonstrator Saria Fathy Fouly", specialization: "Painting", academicRank: "Demonstrator", division: "Painting" },
        { id: 15, name: "Demonstrator Saleh Mohamed Senousy", specialization: "Painting", academicRank: "Demonstrator", division: "Painting" },
        { id: 16, name: "Demonstrator Yasmin Ali Mahmoud", specialization: "Mural Painting", academicRank: "Demonstrator", division: "Mural Painting" },
        { id: 17, name: "Demonstrator Nagi Ahmed Hussein", specialization: "Painting", academicRank: "Demonstrator", division: "Painting" },
        { id: 18, name: "Demonstrator Mostafa Seif El-Nasr", specialization: "Painting", academicRank: "Demonstrator", division: "Painting" },
        { id: 19, name: "Demonstrator Philopateer Halim Ghattas", specialization: "Painting", academicRank: "Demonstrator", division: "Painting" },
        { id: 20, name: "Demonstrator Veronica Samh Gergis", specialization: "Mural Painting", academicRank: "Demonstrator", division: "Mural Painting" },
        { id: 21, name: "Demonstrator Mony Hassan Badran", specialization: "Mural Painting", academicRank: "Demonstrator", division: "Mural Painting" }
      ],
      establishedYear: 1996,
      detailsUrl: "/departments/3"
    },
    {
      id: 4,
      name: "Sculpture Department", 
      nameAr: "قسم النحت",
      description: "The Sculpture Department develops three-dimensional artistic expression through traditional and contemporary sculptural techniques, preparing students to create impactful works for cultural and public spaces.",
      vision: "To establish itself as a premier center for sculptural arts education, producing innovative sculptors who contribute to Egypt's rich sculptural tradition while embracing contemporary artistic expressions and technologies.",
      mission: "To graduate distinguished and creative sculptors with specific qualities by producing sculptural artworks for national, cultural, social, investment, and tourism institutions, and by participating in local and international art exhibitions that showcase Egyptian sculptural excellence.",
      objectives: [
        "Master traditional and contemporary sculpture techniques and materials",
        "Develop skills in environmental and public art installations", 
        "Understand the relationship between sculpture and architectural spaces",
        "Explore relief sculpture and medal-making techniques",
        "Foster appreciation for sculptural heritage and contemporary innovations"
      ],
      imageUrl: "https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg",
      icon: "pi pi-th-large", 
      studentCount: 156,
      programsOffered: ["Bachelor of Sculpture", "Bachelor of Relief & Medal Arts"],
      divisions: ["Free-standing and Environmental Sculpture", "Medals and Relief Sculpture"],
      headOfDepartment: {
        name: "Prof. Dr. Hisham Tahami Idris El-Maadawy",
        title: "Head of Sculpture Department", 
        academicRank: "Professor",
        specialization: "Medals & Relief Sculpture",
        email: "h.tahami@fine.arts.edu.eg",
        office: "Building D, Room 101",
        bio: "Prof. Hisham El-Maadawy is a renowned sculptor specializing in medal arts and relief sculpture with international recognition for his contributions to Egyptian sculptural arts."
      },
      staffMembers: [
        { id: 1, name: "Prof. Dr. Hisham Tahami El-Maadawy", specialization: "Medals & Relief Sculpture", academicRank: "Professor", division: "Medals & Relief Sculpture" },
        { id: 2, name: "Assoc. Prof. Dr. Youssef Mahmoud Ibrahim", specialization: "Medals & Relief Sculpture", academicRank: "Associate Professor", division: "Medals & Relief Sculpture" },
        { id: 3, name: "Assoc. Prof. Dr. Ramadan Abdel Motamed", specialization: "Free-standing & Environmental", academicRank: "Associate Professor", division: "Free-standing & Environmental" },
        { id: 4, name: "Assoc. Prof. Dr. Esmat Mohamed Sadiq", specialization: "Medals & Relief Sculpture", academicRank: "Associate Professor", division: "Medals & Relief Sculpture" },
        { id: 5, name: "Assoc. Prof. Dr. Salah Shabaan Hassanein", specialization: "Medals & Relief Sculpture", academicRank: "Associate Professor", division: "Medals & Relief Sculpture" },
        { id: 6, name: "Assoc. Prof. Dr. Haitham Amer Mahmoud", specialization: "Free-standing & Environmental", academicRank: "Associate Professor", division: "Free-standing & Environmental" },
        { id: 7, name: "Dr. Ibrahim Mohamed Mansour", specialization: "Free-standing & Environmental", academicRank: "Lecturer", division: "Free-standing & Environmental" },
        { id: 8, name: "Dr. Salwa Sayed El-Taher", specialization: "Medals & Relief Sculpture", academicRank: "Lecturer", division: "Medals & Relief Sculpture" },
        { id: 9, name: "Dr. Sara Mansour Mahmoud", specialization: "Free-standing & Environmental", academicRank: "Lecturer", division: "Free-standing & Environmental" },
        { id: 10, name: "Dr. Rahma Mahmoud Ahmed", specialization: "Medals & Relief Sculpture", academicRank: "Lecturer", division: "Medals & Relief Sculpture" },
        { id: 11, name: "Asst. Lect. Asmaa Ateeto Meskin", specialization: "Medals & Relief Sculpture", academicRank: "Assistant Lecturer", division: "Medals & Relief Sculpture" },
        { id: 12, name: "Asst. Lect. Hamed Mohamed Hamed", specialization: "Free-standing & Environmental", academicRank: "Assistant Lecturer", division: "Free-standing & Environmental" },
        { id: 13, name: "Demonstrator Asmaa Ahmed Ibrahim", specialization: "Free-standing & Environmental", academicRank: "Demonstrator", division: "Free-standing & Environmental" },
        { id: 14, name: "Demonstrator Ghada Ayman El-Bastawisy", specialization: "Medals & Relief Sculpture", academicRank: "Demonstrator", division: "Medals & Relief Sculpture" },
        { id: 15, name: "Demonstrator Al-Zahraa Mohamed Naguib", specialization: "Free-standing & Environmental", academicRank: "Demonstrator", division: "Free-standing & Environmental" },
        { id: 16, name: "Demonstrator Mohamed Saeed Hassan", specialization: "Free-standing & Environmental", academicRank: "Demonstrator", division: "Free-standing & Environmental" }
      ],
      establishedYear: 1996,
      detailsUrl: "/departments/4"
    }
  ];

  getDepartmentTabs(): DepartmentTab[] {
    return [
      { id: 'overview', label: 'Overview', icon: 'pi pi-info-circle', active: true },
      { id: 'vision-mission', label: 'Vision & Mission', icon: 'pi pi-eye', active: false },
      { id: 'head', label: 'Head of Department', icon: 'pi pi-user', active: false },
      { id: 'staff', label: 'Staff Members', icon: 'pi pi-users', active: false }
    ];
  }

  getDepartments(): Department[] {
    return this.departments.map(dept => ({
      ...dept,
      detailsUrl: `/departments/${dept.id}`
    }));
  }

  getDepartmentById(id: number): Department | undefined {
    return this.departments.find(dept => dept.id === id);
  }

  getDepartmentByName(name: string): Department | undefined {
    return this.departments.find(dept => 
      dept.name.toLowerCase().includes(name.toLowerCase())
    );
  }
}