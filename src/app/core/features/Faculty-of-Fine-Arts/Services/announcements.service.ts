import { Injectable } from '@angular/core';
import { AnnouncementItem } from '../model/announcement.model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {
  private announcements: AnnouncementItem[] = [
    {
      id: 1,
      title: 'New Digital Arts Lab Now Open for All Students',
      summary: 'State-of-the-art digital arts laboratory equipped with latest technology opens for student use, enhancing graphic design and multimedia programs.',
      fullContent: `The Faculty of Fine Arts is proud to announce the opening of our new state-of-the-art Digital Arts Laboratory, representing a significant investment in cutting-edge technology to support our students' creative endeavors.

The facility features 30 high-performance workstations equipped with industry-standard software and hardware, providing students with access to professional-level tools for digital creation.

Laboratory specifications:
- 30 high-performance workstations with dual monitors
- Latest versions of Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere Pro)
- 3D software including Blender, Maya, and ZBrush
- Professional graphics tablets and styluses
- High-resolution scanners and professional printers
- Virtual reality development stations
- Audio recording and editing equipment

Operating hours:
- Monday to Friday: 8:00 AM - 10:00 PM
- Saturday: 9:00 AM - 6:00 PM
- Sunday: 12:00 PM - 8:00 PM

Access requirements:
- All enrolled students receive basic access with their ID cards
- Extended hours available for final-year project students
- Workshop certification required for advanced equipment usage
- Supervision available during all operating hours

The laboratory is designed to support coursework across multiple departments while also providing space for independent creative projects and research.

Training sessions are scheduled weekly to help students maximize their use of available resources. Sign-up sheets are available at the main office.

This facility represents our commitment to preparing students for careers in the rapidly evolving digital creative industries.`,
      imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-12-05'),
      author: 'Facilities Management',
      category: 'announcement',
      readMoreUrl: '/news-details/1',
      featured: true,
      relatedItems: [2, 3, 4]
    },
    {
      id: 2,
      title: 'Spring 2025 Course Registration Opens January 10th',
      summary: 'Online registration system will be available for all continuing students with priority scheduling for final-year students.',
      fullContent: `The Spring 2025 semester course registration period will commence on January 10th, 2025, at 8:00 AM through our online student portal system.

Important registration information:

Registration Schedule:
- Final-year students: January 10-12, 2025
- Third-year students: January 13-15, 2025
- Second-year students: January 16-18, 2025
- First-year students: January 19-21, 2025
- Late registration (with penalty fee): January 22-25, 2025

Required documents:
- Completed academic advising form (signed by assigned advisor)
- Proof of payment for semester fees
- Medical clearance certificate
- Updated emergency contact information

New courses available:
- Digital Sculpture and 3D Printing (ART 485)
- Contemporary Middle Eastern Art (ART 455)
- Art Entrepreneurship and Gallery Management (ART 465)
- Environmental Art and Sustainability (ART 475)
- Advanced Animation Techniques (ART 495)

Prerequisites must be satisfied before enrollment in advanced courses. Students with questions about prerequisites should consult with their academic advisors before registration begins.

Technical support for the online system:
- Help desk available in the main office during business hours
- Online tutorial videos available on the student portal
- Phone support: (095) 123-4567, extension 100
- Email support: registration@fineartslu.edu.eg

Payment options:
- Online payment through student portal
- Bank transfer to designated university accounts
- In-person payment at the finance office
- Installment plans available for qualified students

Students experiencing financial difficulties should contact the Financial Aid Office before the registration deadline to explore available assistance programs.`,
      imageUrl: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-12-01'),
      author: 'Registrar Office',
      category: 'announcement',
      readMoreUrl: '/news-details/2',
      featured: true,
      relatedItems: [1, 3, 5]
    },
    {
      id: 3,
      title: 'Library Extended Hours During Exam Period',
      summary: 'The faculty library will maintain extended operating hours throughout the examination period to support student study needs.',
      fullContent: `The Faculty of Fine Arts Library will extend its operating hours during the examination period (January 15 - February 15, 2025) to provide additional study space and research support for students.

Extended hours schedule:
- Monday through Thursday: 7:00 AM - 12:00 AM (midnight)
- Friday: 7:00 AM - 10:00 PM
- Saturday: 8:00 AM - 10:00 PM
- Sunday: 10:00 AM - 10:00 PM

Additional services during exam period:
- Quiet study areas with reserved seating
- Extended computer lab access
- Research assistance from librarian staff
- Group study rooms (advance booking required)
- Extended borrowing periods for reference materials
- Free printing allowance increased to 50 pages per student

Special collections access:
- Art history reference materials
- Thesis and dissertation archives
- Digital database subscriptions
- Interlibrary loan services
- Rare book collection (supervised access)

Study support services:
- Tutoring sessions in main subject areas
- Writing assistance for research papers
- Citation and bibliography formatting help
- Stress management resources
- Light refreshment vending machines

Safety and security measures:
- Enhanced security presence during late hours
- Well-lit pathways to and from library
- Emergency contact stations throughout facility
- Secure storage for personal belongings

Students must present valid ID cards for after-hours access. Overnight sleeping is not permitted in the facility.

The library staff encourages early preparation and utilization of available resources to maximize academic success during the examination period.

For questions about specific services or to make group study room reservations, contact the library at library@fineartslu.edu.eg or visit the information desk.`,
      imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-11-28'),
      author: 'Library Administration',
      category: 'announcement',
      readMoreUrl: '/news-details/3',
      featured: false,
      relatedItems: [2, 4, 5]
    },
    {
      id: 4,
      title: 'Student Health Services Vaccination Campaign',
      summary: 'Free vaccination services available for all faculty members and students as part of the university health initiative.',
      fullContent: `The University Health Services, in cooperation with the Ministry of Health, announces a comprehensive vaccination campaign for all faculty members, staff, and students.

Available vaccines:
- COVID-19 booster shots (Pfizer and AstraZeneca)
- Seasonal influenza vaccine
- Hepatitis B vaccine (for high-risk individuals)
- Tetanus-diphtheria booster

Vaccination schedule:
- Week 1 (January 8-12): Faculty and staff
- Week 2 (January 15-19): Final-year and graduate students
- Week 3 (January 22-26): Undergraduate students (all years)
- Week 4 (January 29-February 2): Make-up sessions and second doses

Location and times:
- Main campus health clinic
- Daily sessions: 9:00 AM - 3:00 PM
- Special evening sessions: 5:00 PM - 7:00 PM (Tuesdays and Thursdays)

Required documentation:
- Valid university ID card
- Previous vaccination records (if available)
- Medical insurance information
- Completed health screening form

Pre-screening requirements:
- No fever or cold symptoms on vaccination day
- No recent exposure to communicable diseases
- Consultation required for individuals with chronic health conditions
- Pregnancy consultation required for female participants

Health monitoring:
- 15-minute observation period required after vaccination
- Follow-up health check scheduled for sensitive individuals
- Emergency medical response available on-site
- Contact information provided for post-vaccination concerns

This campaign is part of the university's commitment to maintaining a healthy learning environment and supporting the broader community health initiatives.

Students with questions about specific vaccines or medical concerns should consult with health services staff before their scheduled appointment.

Registration is encouraged but not required. Walk-in services available during designated hours.`,
      imageUrl: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-11-25'),
      author: 'Health Services',
      category: 'announcement',
      readMoreUrl: '/news-details/4',
      featured: false,
      relatedItems: [1, 3, 5]
    },
    {
      id: 5,
      title: 'Campus Security Updates and New Identification Requirements',
      summary: 'Enhanced security measures implemented across campus with updated identification procedures for all personnel and visitors.',
      fullContent: `The Faculty of Fine Arts announces updated security protocols designed to enhance campus safety while maintaining the welcoming environment essential to our academic community.

New security measures effective January 1, 2025:

Identification requirements:
- All faculty, staff, and students must carry valid university ID cards at all times
- Visitor registration required at main entrance
- Temporary passes issued for approved guests and service personnel
- After-hours access requires advance authorization

Facility access changes:
- Electronic key card system installed for main buildings
- Studio spaces require department-specific access codes
- Equipment storage areas limited to authorized users only
- Emergency exits clearly marked and monitored

Enhanced security features:
- Improved lighting throughout campus walkways
- Additional security cameras in common areas
- Emergency call boxes installed at strategic locations
- Regular security patrols during evening hours

Visitor procedures:
- All visitors must check in at the main office
- Escort requirement for visitors accessing studio areas
- Advance notification required for large groups or events
- Visitor log maintained for security records

Emergency protocols:
- Updated emergency contact information required from all community members
- Emergency communication system tested monthly
- Evacuation procedures posted in all buildings
- First aid stations clearly marked and regularly maintained

Student safety initiatives:
- Campus safety escort service available during evening hours
- Self-defense workshops offered monthly
- Anonymous safety concern reporting system
- Regular safety awareness presentations

These measures are implemented in response to university-wide security assessments and recommendations from local authorities.

Community cooperation is essential for maintaining a secure learning environment while preserving the collaborative spirit that defines our faculty.

Questions about security procedures should be directed to the Campus Safety Office at safety@fineartslu.edu.eg or by calling extension 911.`,
      imageUrl: 'https://images.pexels.com/photos/8112182/pexels-photo-8112182.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      publishDate: new Date('2024-11-20'),
      author: 'Campus Safety Office',
      category: 'announcement',
      readMoreUrl: '/news-details/5',
      featured: false,
      relatedItems: [1, 2, 4]
    }
  ];

  getAllAnnouncements(): AnnouncementItem[] {
    return this.announcements;
  }

  getAnnouncementById(id: number): AnnouncementItem | undefined {
    return this.announcements.find(announcement => announcement.id === id);
  }

  getFeaturedAnnouncements(): AnnouncementItem[] {
    return this.announcements.filter(announcement => announcement.featured);
  }

  getRelatedAnnouncements(currentId: number, relatedIds: number[]): AnnouncementItem[] {
    return this.announcements.filter(announcement => 
      relatedIds.includes(announcement.id) && announcement.id !== currentId
    );
  }
}