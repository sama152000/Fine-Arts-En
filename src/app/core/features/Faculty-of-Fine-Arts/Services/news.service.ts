import { Injectable } from '@angular/core';
import { NewsItem } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'Annual Student Exhibition Opens December 2024',
      summary: 'The Faculty showcases outstanding student works from all departments in a comprehensive exhibition featuring paintings, sculptures, and digital arts.',
      fullContent: `The Faculty of Fine Arts proudly announces the opening of its Annual Student Exhibition for December 2024. This comprehensive showcase features exceptional works from students across all departments, including traditional paintings, contemporary sculptures, digital arts, and innovative multimedia installations.

The exhibition represents months of dedicated work by our talented students under the guidance of our distinguished faculty members. Visitors will experience a diverse range of artistic expressions that demonstrate both technical mastery and creative innovation.

The exhibition includes special sections for:
- Traditional oil paintings and watercolors
- Contemporary sculpture installations
- Digital art and graphic design
- Photography collections
- Mixed media experimental works

This year's theme, "Bridging Heritage and Innovation," reflects our commitment to preserving traditional Egyptian artistic techniques while embracing contemporary global art movements. The exhibition serves as a platform for emerging artists to showcase their talent and gain recognition in the art community.

The opening ceremony will feature speeches from faculty leadership and renowned Egyptian artists, followed by guided tours of the exhibition spaces. Light refreshments will be served in the main gallery.`,
      imageUrl: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-12-01'),
      author: 'Dr. Sarah Ahmed',
      category: 'news',
      readMoreUrl: '/news-details/1',
      featured: true,
      relatedItems: [2, 5, 8]
    },
    {
      id: 2,
      title: 'Faculty Receives Excellence Award in Arts Education',
      summary: 'Our faculty has been recognized by the Ministry of Higher Education for outstanding contributions to arts education and cultural preservation.',
      fullContent: `The Faculty of Fine Arts at Luxor University has been honored with the prestigious Excellence Award in Arts Education by the Ministry of Higher Education and Scientific Research. This recognition celebrates our faculty's outstanding contributions to arts education and cultural preservation in Egypt.

The award acknowledges our comprehensive programs that successfully blend traditional Egyptian artistic heritage with modern educational methodologies. Our innovative curriculum has been recognized for its effectiveness in preparing students for careers in various artistic fields while maintaining strong connections to Egyptian cultural identity.

Key achievements that led to this recognition include:
- Development of unique programs combining traditional and contemporary art forms
- Successful partnerships with international art institutions
- Outstanding student achievements in national and international competitions
- Significant contributions to local cultural preservation projects
- High employment rates among graduates in creative industries

Prof. Mohamed Hassan, Dean of the Faculty, expressed his gratitude during the award ceremony: "This recognition reflects the dedication of our entire faculty community - students, staff, and administrators - who work tirelessly to advance arts education in Egypt."

The award comes with a grant for further development of our programs and facilities, which will be used to enhance our digital arts laboratories and establish new partnerships with leading art institutions worldwide.`,
      imageUrl: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-11-28'),
      author: 'Prof. Mohamed Hassan',
      category: 'news',
      readMoreUrl: '/news-details/2',
      featured: true,
      relatedItems: [1, 3, 9]
    },
    {
      id: 3,
      title: 'International Collaboration with Florence Art Academy',
      summary: 'New partnership program allows selected students to study Renaissance techniques in Italy while promoting cultural exchange.',
      fullContent: `The Faculty of Fine Arts has established an exciting new partnership with the prestigious Florence Art Academy, creating unprecedented opportunities for cultural and academic exchange between Egypt and Italy.

This collaboration, formalized through a comprehensive agreement signed by both institutions, will enable selected students from our faculty to spend a semester in Florence, studying traditional Renaissance techniques alongside contemporary approaches to fine arts education.

The program highlights include:
- Semester exchange opportunities for undergraduate and graduate students
- Joint workshops on traditional fresco and tempera painting techniques
- Collaborative research projects on art restoration and preservation
- Faculty exchange programs for academic staff
- Joint exhibitions showcasing works from both institutions

Dr. Isabella Rossi, Director of International Programs at Florence Art Academy, visited our campus last month to finalize the agreement details. "We are thrilled to partner with such a prestigious institution that shares our commitment to preserving artistic heritage while fostering innovation," she commented.

The first group of students will depart for Florence in September 2025, with the program expected to benefit approximately 20 students annually. Selection criteria include academic excellence, portfolio quality, and demonstrated interest in traditional artistic techniques.

This partnership represents our commitment to providing world-class educational opportunities while strengthening international cultural ties.`,
      imageUrl: 'https://images.pexels.com/photos/1672851/pexels-photo-1672851.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-11-25'),
      author: 'Dr. Amira Farouk',
      category: 'news',
      readMoreUrl: '/news-details/3',
      featured: false,
      relatedItems: [4, 6, 7]
    },
    {
      id: 4,
      title: 'Alumni Success: Major Exhibition in Cairo Opera House',
      summary: 'Three faculty alumni showcase their latest works in a joint exhibition at the prestigious Cairo Opera House galleries.',
      fullContent: `Three distinguished alumni of our Faculty of Fine Arts have achieved a remarkable milestone by securing a joint exhibition at the Cairo Opera House, one of Egypt's most prestigious cultural venues.

The alumni - Yasmin El-Sharif (Class of 2018), Ahmed Mansour (Class of 2019), and Nora Abdel-Rahman (Class of 2020) - will present "Echoes of the Nile," a collaborative exhibition exploring contemporary interpretations of Egyptian identity through various artistic mediums.

The exhibition features:
- Large-scale contemporary paintings by Yasmin El-Sharif
- Sculptural installations by Ahmed Mansour
- Digital art projections by Nora Abdel-Rahman
- Interactive multimedia experiences combining all three artists' work

"This exhibition represents the culmination of years of artistic development and exploration," said Yasmin El-Sharif. "Our time at the Faculty provided us with both the technical skills and conceptual framework to create meaningful contemporary art rooted in our cultural heritage."

The success of these alumni reflects the quality of education and mentorship provided by our faculty. Prof. Layla Kassem, who taught all three artists, will deliver the opening remarks at the exhibition launch.

The exhibition runs from January 15 to February 28, 2025, and has already garnered attention from major art collectors and critics in the region. Several pieces have been acquired by prominent Egyptian art collections.

This achievement further establishes our faculty's reputation for producing artists who make significant contributions to Egypt's contemporary art scene.`,
      imageUrl: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-11-20'),
      author: 'Dr. Marco Rossi',
      category: 'news',
      readMoreUrl: '/news-details/4',
      featured: false,
      relatedItems: [1, 3, 10]
    },
    {
      id: 5,
      title: 'New Research Center for Egyptian Art History Established',
      summary: 'Dedicated center focuses on preserving and studying ancient Egyptian artistic traditions and their contemporary relevance.',
      fullContent: `The Faculty of Fine Arts proudly announces the establishment of the Research Center for Egyptian Art History, a groundbreaking initiative dedicated to the comprehensive study and preservation of Egypt's rich artistic heritage.

Located in the newly renovated wing of our main building, the center houses state-of-the-art research facilities, a specialized library, and digital archives containing thousands of historical artworks and documents.

The center's mission encompasses:
- Systematic documentation of traditional Egyptian artistic techniques
- Research into the evolution of Egyptian art through different historical periods
- Study of contemporary applications of traditional methods
- Development of preservation techniques for historical artworks
- Training programs for art historians and conservators

Dr. Mahmoud El-Sayed, appointed as the center's first director, brings over 20 years of experience in Egyptian art history and conservation. "This center will serve as a bridge between our glorious artistic past and our dynamic future," he explained during the inauguration ceremony.

The center has already initiated several important projects, including a comprehensive catalog of Luxor's artistic heritage and a digital preservation project for ancient tomb paintings in collaboration with the Ministry of Tourism and Antiquities.

Research fellowships are now available for graduate students and visiting scholars interested in Egyptian art history. The center also plans to publish an annual journal dedicated to scholarly research in this field.

This initiative reinforces our faculty's position as a leading institution in both artistic education and cultural preservation.`,
      imageUrl: 'https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-11-15'),
      author: 'Dr. Mahmoud El-Sayed',
      category: 'news',
      readMoreUrl: '/news-details/5',
      featured: false,
      relatedItems: [2, 6, 8]
    },
    {
      id: 6,
      title: 'Faculty Hosts International Conference on Contemporary Islamic Art',
      summary: 'Scholars and artists from across the globe gather to discuss the evolution and future of Islamic artistic expression.',
      fullContent: `The Faculty of Fine Arts successfully hosted the International Conference on Contemporary Islamic Art, bringing together over 150 scholars, artists, and cultural experts from 25 countries to explore the dynamic evolution of Islamic artistic expression in the modern world.

The three-day conference featured keynote speeches, panel discussions, workshops, and exhibitions showcasing the diverse ways contemporary artists interpret and reimagine traditional Islamic artistic motifs and concepts.

Key conference highlights included:
- Presentations on geometric patterns in digital art
- Discussions on calligraphy's evolution in contemporary contexts
- Workshops on traditional Islamic architectural ornaments
- Exhibitions of contemporary Islamic art from various cultural contexts
- Networking sessions for international artistic collaboration

Prof. Aisha Mahmoud, conference chair, noted: "This gathering demonstrates the vital role that Islamic art continues to play in contemporary global culture while maintaining its spiritual and aesthetic integrity."

Distinguished speakers included Dr. Ahmed Al-Rashid from the Islamic Arts Museum Malaysia, Prof. Fatima Al-Zahra from Morocco's Hassan II University, and renowned artist Calligrapher Hassan Massoudy from Iraq.

The conference resulted in several collaborative agreements between participating institutions and the establishment of an international network for Islamic art research and exhibition.

Proceedings from the conference will be published in a special issue of the International Journal of Islamic Art, with our faculty serving as guest editors.

Plans are already underway for the next conference to be held in 2026, further cementing our faculty's role as a leading center for Islamic art scholarship.`,
      imageUrl: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-11-10'),
      author: 'Prof. Aisha Mahmoud',
      category: 'news',
      readMoreUrl: '/news-details/6',
      featured: false,
      relatedItems: [3, 5, 7]
    },
    {
      id: 7,
      title: 'Student Team Wins National Digital Art Competition',
      summary: 'Our multimedia design students secured first place in the nationwide competition with their innovative virtual reality art installation.',
      fullContent: `A team of students from our Multimedia Design Department has achieved outstanding success by winning first place in the National Digital Art Competition, organized by the Egyptian Ministry of Youth and Sports in collaboration with leading technology companies.

The winning project, titled "Journey Through Time," is an immersive virtual reality installation that takes users through different periods of Egyptian artistic history, from ancient pharaonic art to contemporary expressions.

Team members include:
- Maryam Hassan (Team Leader) - VR Development and Programming
- Omar Abdel-Aziz - 3D Modeling and Animation
- Farah Mostafa - Historical Research and Content Development
- Kareem El-Shenawy - Sound Design and Interactive Elements

The project impressed judges with its innovative use of technology to make Egyptian art history accessible and engaging for younger generations. Users can virtually walk through recreated ancient Egyptian workshops, witness the creation of famous artworks, and even try their hand at traditional techniques using VR controllers.

Dr. Hany Farouk, head of the Multimedia Design Department and project supervisor, expressed his pride: "This achievement demonstrates our students' ability to bridge traditional artistic knowledge with cutting-edge technology."

The competition featured over 80 entries from universities across Egypt, making this victory particularly significant. The winning team will receive a cash prize of 50,000 EGP and the opportunity to showcase their project at the Cairo Digital Arts Festival.

This success highlights our faculty's commitment to preparing students for the evolving landscape of digital creative industries while maintaining connections to our cultural heritage.`,
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-11-05'),
      author: 'Dr. Hany Farouk',
      category: 'news',
      readMoreUrl: '/news-details/7',
      featured: false,
      relatedItems: [4, 6, 9]
    },
    {
      id: 8,
      title: 'Faculty Gallery Renovation Completed',
      summary: 'The main gallery space has been transformed with new lighting, climate control, and interactive display systems.',
      fullContent: `After six months of careful planning and renovation, the Faculty of Fine Arts main gallery has reopened with dramatically improved facilities designed to showcase artworks in optimal conditions while providing visitors with an enhanced experience.

The renovation project, funded through a combination of university resources and alumni donations, has transformed the 800-square-meter space into a world-class exhibition venue that meets international museum standards.

Major improvements include:
- Advanced LED lighting system with adjustable color temperature and intensity
- Sophisticated climate control maintaining precise temperature and humidity levels
- Interactive digital displays providing detailed artwork information and artist biographies
- Improved accessibility features including wheelchair access and audio guides
- Flexible wall systems allowing for diverse exhibition configurations
- Enhanced security systems protecting valuable artworks

Architect Dina El-Sherif, who led the renovation project, explained: "Our goal was to create a space that honors both traditional and contemporary art while providing an inspiring environment for learning and appreciation."

The gallery's reopening exhibition, "Masters and Emerging Voices," features works spanning from faculty founders to current student projects, symbolizing the continuity of artistic excellence at our institution.

The renovated space will host monthly rotating exhibitions, annual student showcases, and special events for the broader Luxor community. Guided tours are available for schools and cultural organizations.

This upgrade significantly enhances our capacity to serve as a cultural hub for the region while providing our students with professional exhibition experience in a top-tier venue.`,
      imageUrl: 'https://images.pexels.com/photos/1037994/pexels-photo-1037994.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-11-01'),
      author: 'Dina El-Sherif',
      category: 'news',
      readMoreUrl: '/news-details/8',
      featured: false,
      relatedItems: [1, 5, 10]
    },
    {
      id: 10,
      title: 'New Scholarship Program for Underprivileged Students Launched',
      summary: 'Comprehensive support program provides full funding and mentorship for talented students from low-income families.',
      fullContent: `The Faculty of Fine Arts has launched the "Art Dreams" scholarship program, a comprehensive initiative designed to ensure that talented students from underprivileged backgrounds have access to quality arts education regardless of their financial circumstances.

The program, funded through partnerships with local businesses, alumni contributions, and international cultural organizations, provides full financial support including tuition, materials, accommodation, and living stipends for selected students.

Program benefits include:
- Complete coverage of tuition and academic fees
- Monthly stipend for living expenses
- Art supplies and equipment allowance
- Individual mentorship from faculty members
- Career guidance and internship opportunities
- Alumni network access for professional development

Selection criteria emphasize artistic potential and passion rather than existing technical skills, with special consideration given to students from rural areas and underserved communities throughout Upper Egypt.

Dr. Mona El-Kholi, program director, emphasized the initiative's importance: "This program ensures that artistic talent is nurtured regardless of economic background, enriching our academic community while providing life-changing opportunities."

The first cohort of 15 scholarship recipients began their studies this semester, representing diverse backgrounds from across the region. Early indicators suggest high engagement and exceptional progress among participants.

Beyond financial support, the program includes workshops on professional development, portfolio building, and exhibition opportunities specifically designed to prepare scholarship recipients for successful careers in the arts.

Plans are underway to expand the program to support 25 students annually by 2026, making it one of the most comprehensive art education scholarship programs in Egypt.`,
      imageUrl: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-10-25'),
      author: 'Dr. Mona El-Kholi',
      category: 'news',
      readMoreUrl: '/news-details/10',
      featured: false,
      relatedItems: [2, 8, 9]
    }
  ];

  getAllNews(): NewsItem[] {
    return this.newsItems;
  }

  getNewsById(id: number): NewsItem | undefined {
    return this.newsItems.find(news => news.id === id);
  }

  getFeaturedNews(): NewsItem[] {
    return this.newsItems.filter(news => news.featured);
  }

  getRelatedNews(currentId: number, relatedIds: number[]): NewsItem[] {
    return this.newsItems.filter(news => 
      relatedIds.includes(news.id) && news.id !== currentId
    );
  }
}