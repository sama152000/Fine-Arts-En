import { Injectable } from '@angular/core';
import { EventItem } from '../model/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private events: EventItem[] = [
    {
      id: 1,
      title: 'Contemporary Art Exhibition 2025',
      summary: 'Featuring works by final-year students showcasing contemporary artistic expressions and innovative techniques across all mediums.',
      fullContent: `The Contemporary Art Exhibition 2025 represents the culmination of our final-year students' academic journey, showcasing the diverse range of artistic expressions and innovative techniques they have mastered throughout their studies.

This annual exhibition serves as both a celebration of student achievement and a preview of the next generation of Egyptian artists who will contribute to the country's rich cultural landscape.

Exhibition highlights include:
- Over 100 artworks across painting, sculpture, digital media, and mixed media
- Live demonstrations of artistic techniques
- Artist talks by participating students
- Panel discussions on contemporary art trends
- Networking opportunities with art professionals and collectors

The exhibition space has been specially designed to accommodate the diverse range of works, with dedicated areas for different mediums and interactive installations that invite visitor participation.

Special recognition will be given to outstanding works in various categories, with awards presented by distinguished jury members from Egypt's art community.

Visitors will have the opportunity to purchase selected artworks, with proceeds supporting student scholarship programs and facility improvements.

The exhibition represents our commitment to providing students with professional exposure and real-world experience in presenting their work to the public.`,
      imageUrl: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-12-10'),
      eventDate: new Date('2025-01-15'),
      startTime: '10:00 AM',
      endTime: '6:00 PM',
      location: 'Main Exhibition Hall - Faculty of Fine Arts',
      author: 'Exhibition Committee',
      category: 'event',
      readMoreUrl: '/news-details/1',
      featured: true,
      relatedItems: [2, 4, 5]
    },
    {
      id: 2,
      title: 'Digital Arts Workshop Series',
      summary: 'Three-day intensive workshop covering advanced digital painting, 3D modeling, and animation techniques led by industry professionals.',
      fullContent: `The Digital Arts Workshop Series offers an intensive three-day program designed to advance students' skills in cutting-edge digital art technologies and techniques.

Led by industry professionals from leading animation studios and digital art companies, this workshop provides hands-on experience with the latest software and workflows used in professional settings.

Workshop curriculum includes:
- Advanced digital painting techniques in Photoshop and Procreate
- 3D modeling and texturing using Blender and Maya
- Character animation and rigging fundamentals
- Motion graphics and visual effects creation
- Portfolio development for digital art careers

Day 1: Digital Painting Mastery
- Advanced brush techniques and custom brush creation
- Light, shadow, and atmospheric perspective in digital media
- Color theory application in digital environments
- Speed painting exercises and professional workflows

Day 2: 3D Modeling and Animation
- Polygon modeling techniques for characters and environments
- UV mapping and texture painting
- Basic rigging and animation principles
- Rendering techniques for photorealistic results

Day 3: Portfolio and Career Development
- Building a professional digital art portfolio
- Industry networking and career opportunities
- Freelance vs. studio employment considerations
- Final project presentations and feedback sessions

Participants will complete hands-on projects throughout the workshop, culminating in a portfolio piece that demonstrates newly acquired skills.

Limited spaces available - registration required.`,
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-12-05'),
      eventDate: new Date('2025-01-20'),
      startTime: '9:00 AM',
      endTime: '4:00 PM',
      location: 'Digital Arts Lab - Building A',
      author: 'Dr. Hany Farouk',
      category: 'event',
      readMoreUrl: '/news-details/2',
      featured: true,
      relatedItems: [1, 3, 4]
    },
    {
      id: 3,
      title: 'Art Therapy and Community Engagement Seminar',
      summary: 'Exploring the role of art in healing and community development with guest speakers from international art therapy organizations.',
      fullContent: `This comprehensive seminar explores the powerful intersection of art and healing, examining how creative expression can serve as a tool for individual therapy and community development.

International experts in art therapy will share their experiences and research findings, providing insights into this growing field and its applications in various cultural contexts.

Seminar program includes:
- Keynote presentation: "Art as Universal Language of Healing"
- Case studies from art therapy programs in conflict zones
- Workshop: Basic art therapy techniques for educators
- Panel discussion: Community art projects and social change
- Networking session with practicing art therapists

Featured speakers:
- Dr. Maria Rodriguez, Art Therapy Institute, Barcelona
- Prof. James Wilson, UCLA Art and Healing Center
- Dr. Amina Hassan, Cairo Child Psychology Center
- Ahmed El-Sayed, Community Art Coordinator, Alexandria

The seminar is designed for students, educators, healthcare professionals, and community workers interested in understanding how artistic practices can contribute to mental health, social cohesion, and community development.

Participants will receive certificates of attendance and access to resource materials for implementing art therapy techniques in their own work.

Special focus on culturally sensitive approaches to art therapy that respect Egyptian and Middle Eastern traditions while incorporating international best practices.

Registration includes access to all sessions, materials packet, and light refreshments.`,
      imageUrl: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-12-01'),
      eventDate: new Date('2025-01-25'),
      startTime: '2:00 PM',
      endTime: '5:00 PM',
      location: 'Conference Hall - Faculty of Fine Arts',
      author: 'Dr. Amina Hassan',
      category: 'event',
      readMoreUrl: '/news-details/3',
      featured: false,
      relatedItems: [1, 2, 5]
    },
    {
      id: 4,
      title: 'Sculpture Symposium 2025',
      summary: 'International symposium bringing together renowned sculptors and academics to discuss contemporary sculpture practices and cultural preservation.',
      fullContent: `The Sculpture Symposium 2025 brings together internationally renowned sculptors, academics, and cultural preservationists to explore the evolving landscape of contemporary sculpture and its role in preserving cultural heritage.

This prestigious event features live sculpting demonstrations, academic presentations, and collaborative discussions on the future of sculptural arts in a globalized world.

Symposium highlights:
- Live sculpting demonstrations by master artists
- Academic papers on contemporary sculpture theory
- Workshops on traditional and modern sculpting techniques
- Exhibitions of participating artists' works
- Cultural preservation project presentations

Confirmed participants:
- Hassan Hajjaj (Morocco) - Contemporary Sculpture and Cultural Identity
- Dr. Elena Korka (Greece) - Archaeological Sculpture Preservation
- Prof. Roberto Sanchez (Mexico) - Public Sculpture and Community Engagement
- Fatma Al-Rashid (UAE) - Islamic Geometric Sculpture

Day 1: Contemporary Practices
- Opening ceremony and keynote presentations
- Panel: "Sculpture in the Digital Age"
- Live demonstrations: Bronze casting techniques
- Workshop: 3D printing in sculptural practice

Day 2: Cultural Heritage and Preservation
- Case studies in sculpture restoration
- Traditional techniques workshop: Stone carving
- Community engagement through public sculpture
- Collaborative planning session for preservation projects

The symposium concludes with the announcement of a new international collaborative project focused on documenting and preserving traditional sculpting techniques from the Mediterranean region.

Participants will have access to all sessions, workshop materials, and exclusive networking opportunities with leading figures in contemporary sculpture.`,
      imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-11-28'),
      eventDate: new Date('2025-02-01'),
      startTime: '9:00 AM',
      endTime: '6:00 PM',
      location: 'Main Auditorium - Luxor University',
      author: 'Prof. Hassan El-Masry',
      category: 'event',
      readMoreUrl: '/news-details/4',
      featured: true,
      relatedItems: [1, 3, 5]
    },
    {
      id: 5,
      title: 'Annual Faculty Art Fair',
      summary: 'Three-day marketplace featuring student works, faculty pieces, and local artisan crafts open to the public.',
      fullContent: `The Annual Faculty Art Fair transforms our campus into a vibrant marketplace celebrating the diverse artistic talents within our community and the broader Luxor region.

This three-day event provides students and faculty with opportunities to showcase and sell their works while connecting with art enthusiasts from across Egypt and international visitors to Luxor.

Fair features include:
- Student art booths with original paintings, sculptures, and crafts
- Faculty exhibition space featuring professional works
- Local artisan village showcasing traditional Luxor crafts
- Live art demonstrations throughout each day
- Art supply vendors and specialty tool makers
- Food court featuring local Luxor cuisine

Special activities:
- Children's art workshop area with supervised activities
- Portrait sketching stations for visitors
- Traditional pottery wheel demonstrations
- Jewelry making workshops using ancient Egyptian techniques
- Calligraphy sessions in Arabic and English

The fair serves multiple purposes: providing students with real-world sales experience, generating income for emerging artists, showcasing the quality of education at our faculty, and strengthening connections with the local artistic community.

Unique to this year's fair is the "Heritage Corner," where master craftspeople will demonstrate traditional techniques used in creating artifacts similar to those found in Luxor's historical sites.

Live entertainment includes traditional Egyptian music performances and poetry readings, creating a festive atmosphere that celebrates both contemporary creativity and cultural heritage.

Entry is free for the general public, with special guided tours available for school groups and cultural organizations.`,
      imageUrl: 'https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-11-25'),
      eventDate: new Date('2025-02-15'),
      startTime: '10:00 AM',
      endTime: '8:00 PM',
      location: 'Faculty Courtyard and Main Buildings',
      author: 'Student Activities Committee',
      category: 'event',
      readMoreUrl: '/news-details/5',
      featured: true,
      relatedItems: [1, 2, 4]
    }
  ];

  getAllEvents(): EventItem[] {
    return this.events;
  }

  getEventById(id: number): EventItem | undefined {
    return this.events.find(event => event.id === id);
  }

  getFeaturedEvents(): EventItem[] {
    return this.events.filter(event => event.featured);
  }

  getUpcomingEvents(): EventItem[] {
    const now = new Date();
    return this.events.filter(event => event.eventDate >= now);
  }

  getRelatedEvents(currentId: number, relatedIds: number[]): EventItem[] {
    return this.events.filter(event => 
      relatedIds.includes(event.id) && event.id !== currentId
    );
  }
}