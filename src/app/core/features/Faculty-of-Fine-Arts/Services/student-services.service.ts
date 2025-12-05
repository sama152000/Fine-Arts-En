import { Injectable } from '@angular/core';
import { StudentService } from '../model/student-service.model';

@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {

  getStudentServices(): StudentService[] {
    return [
      {
        id: 1,
        name: 'Academic Registration Office',
        description: 'Handles all student registration processes, course enrollment, academic records, and graduation requirements for the Faculty of Fine Arts.',
        imageUrl: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-file-edit',
        establishedYear: 1995,
        vision: 'To provide efficient, transparent, and student-centered academic registration services.',
        mission: 'Ensuring smooth academic processes and maintaining accurate student records throughout their educational journey.',
        objectives: [
          'Streamline student registration processes',
          'Maintain accurate academic records',
          'Provide timely graduation clearance',
          'Support academic planning and scheduling',
          'Ensure compliance with university regulations'
        ],
        headOfService: {
          name: 'Ms. Amal Mahmoud',
          title: 'Director of Academic Registration',
          position: 'Administrative Director',
          specialization: 'Academic Administration and Student Records',
          email: 'amal.mahmoud@finearts.luxor.edu.eg',
          office: 'Registration Office, Room 101',
          bio: 'Ms. Amal Mahmoud has over 15 years of experience in academic administration and student services.'
        },
        staffMembers: [
          {
            id: 1,
            name: 'Mr. Hassan Ahmed',
            position: 'Registration Coordinator',
            specialization: 'Course Registration and Scheduling',
            division: 'Registration Services',
            email: 'hassan.ahmed@finearts.luxor.edu.eg',
            office: 'Room 103'
          },
          {
            id: 2,
            name: 'Ms. Mervat Saleh',
            position: 'Records Specialist',
            specialization: 'Academic Records and Transcripts',
            division: 'Records Management',
            email: 'mervat.saleh@finearts.luxor.edu.eg',
            office: 'Room 105'
          },
          {
            id: 3,
            name: 'Mr. Omar Farouk',
            position: 'Graduation Coordinator',
            specialization: 'Graduation Requirements and Clearance',
            division: 'Graduation Services',
            email: 'omar.farouk@finearts.luxor.edu.eg',
            office: 'Room 107'
          }
        ],
        divisions: ['Registration Services', 'Records Management', 'Graduation Services', 'Academic Planning'],
        services: [
          'Course registration and enrollment',
          'Academic transcript issuance',
          'Graduation requirement verification',
          'Schedule planning assistance',
          'Academic record maintenance'
        ],
        procedures: [
          'Submit registration form with required documents',
          'Meet with academic advisor for course selection',
          'Complete online registration process',
          'Pay required fees and obtain clearance',
          'Receive confirmation and class schedule'
        ],
        requirements: [
          'Valid student ID',
          'Academic advisor approval',
          'Financial clearance',
          'Prerequisite course completion',
          'Good academic standing'
        ],
        workingHours: 'Sunday to Thursday: 9:00 AM - 3:00 PM',
        location: 'Ground Floor, Administration Building'
      },
      {
        id: 2,
        name: 'Student Financial Aid Office',
        description: 'Provides financial assistance, scholarship information, and payment plan options to support students in their educational pursuits.',
        imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-dollar',
        establishedYear: 1998,
        vision: 'To ensure that financial constraints do not prevent talented students from pursuing their artistic education.',
        mission: 'Providing comprehensive financial support services to help students achieve their academic goals.',
        objectives: [
          'Provide accessible financial aid information',
          'Process scholarship and grant applications',
          'Offer flexible payment plan options',
          'Support students in financial need',
          'Promote financial literacy among students'
        ],
        headOfService: {
          name: 'Mr. Khaled El-Sayed',
          title: 'Director of Financial Aid',
          position: 'Financial Services Director',
          specialization: 'Financial Aid and Student Support',
          email: 'khaled.elsayed@finearts.luxor.edu.eg',
          office: 'Financial Aid Office, Room 201',
          bio: 'Mr. Khaled El-Sayed has extensive experience in financial aid administration and student support services.'
        },
        staffMembers: [
          {
            id: 4,
            name: 'Ms. Nadia Hassan',
            position: 'Scholarship Coordinator',
            specialization: 'Scholarship Programs and Awards',
            division: 'Scholarship Services',
            email: 'nadia.hassan@finearts.luxor.edu.eg',
            office: 'Room 203'
          },
          {
            id: 5,
            name: 'Mr. Ahmed Mostafa',
            position: 'Financial Counselor',
            specialization: 'Financial Planning and Counseling',
            division: 'Financial Counseling',
            email: 'ahmed.mostafa@finearts.luxor.edu.eg',
            office: 'Room 205'
          },
          {
            id: 6,
            name: 'Ms. Fatma Ibrahim',
            position: 'Payment Processing Specialist',
            specialization: 'Payment Plans and Processing',
            division: 'Payment Services',
            email: 'fatma.ibrahim@finearts.luxor.edu.eg',
            office: 'Room 207'
          }
        ],
        divisions: ['Scholarship Services', 'Financial Counseling', 'Payment Services', 'Emergency Aid'],
        services: [
          'Scholarship application processing',
          'Financial aid counseling',
          'Payment plan arrangements',
          'Emergency financial assistance',
          'Financial literacy workshops'
        ],
        procedures: [
          'Complete financial aid application',
          'Submit required financial documentation',
          'Meet with financial aid counselor',
          'Review available aid options',
          'Accept aid package and complete requirements'
        ],
        requirements: [
          'Completed FAFSA or equivalent form',
          'Academic transcripts',
          'Financial documentation',
          'Proof of enrollment',
          'Satisfactory academic progress'
        ],
        workingHours: 'Sunday to Thursday: 8:30 AM - 3:30 PM',
        location: 'Second Floor, Administration Building'
      },
      {
        id: 3,
        name: 'Career Services Center',
        description: 'Assists students and graduates in career planning, job placement, internship opportunities, and professional development in the arts.',
        imageUrl: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-briefcase',
        establishedYear: 2005,
        vision: 'To bridge the gap between artistic education and professional success in creative industries.',
        mission: 'Empowering students and graduates to build successful careers in the arts through comprehensive career services.',
        objectives: [
          'Provide career guidance and counseling',
          'Facilitate internship and job placements',
          'Develop industry partnerships',
          'Offer professional development workshops',
          'Support alumni career advancement'
        ],
        headOfService: {
          name: 'Dr. Layla Abdel-Rahman',
          title: 'Director of Career Services',
          position: 'Career Development Director',
          specialization: 'Career Counseling and Professional Development',
          email: 'layla.abdelrahman@finearts.luxor.edu.eg',
          office: 'Career Services Center, Room 301',
          bio: 'Dr. Layla Abdel-Rahman specializes in career development and has helped hundreds of art students launch successful careers.'
        },
        staffMembers: [
          {
            id: 7,
            name: 'Mr. Tarek Nasser',
            position: 'Career Counselor',
            specialization: 'Career Planning and Guidance',
            division: 'Career Counseling',
            email: 'tarek.nasser@finearts.luxor.edu.eg',
            office: 'Room 303'
          },
          {
            id: 8,
            name: 'Ms. Dina Farouk',
            position: 'Internship Coordinator',
            specialization: 'Internship Programs and Placements',
            division: 'Internship Services',
            email: 'dina.farouk@finearts.luxor.edu.eg',
            office: 'Room 305'
          },
          {
            id: 9,
            name: 'Mr. Youssef Ali',
            position: 'Industry Relations Manager',
            specialization: 'Employer Relations and Partnerships',
            division: 'Industry Relations',
            email: 'youssef.ali@finearts.luxor.edu.eg',
            office: 'Room 307'
          }
        ],
        divisions: ['Career Counseling', 'Internship Services', 'Industry Relations', 'Alumni Services'],
        services: [
          'Career counseling and planning',
          'Resume and portfolio development',
          'Interview preparation',
          'Job and internship placement',
          'Professional networking events'
        ],
        procedures: [
          'Schedule career counseling appointment',
          'Complete career assessment and planning',
          'Develop professional portfolio and resume',
          'Apply for internships and job opportunities',
          'Participate in networking and professional events'
        ],
        requirements: [
          'Current student or alumni status',
          'Completed career assessment',
          'Updated portfolio and resume',
          'Professional references',
          'Commitment to career development process'
        ],
        workingHours: 'Sunday to Thursday: 9:00 AM - 4:00 PM',
        location: 'Third Floor, Student Services Building'
      },
      {
        id: 4,
        name: 'Student Counseling and Support Services',
        description: 'Provides psychological counseling, academic support, and personal development services to ensure student well-being and success.',
        imageUrl: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-heart',
        establishedYear: 2010,
        vision: 'To create a supportive environment where every student can thrive academically, personally, and creatively.',
        mission: 'Providing comprehensive counseling and support services to promote student mental health and academic success.',
        objectives: [
          'Provide professional counseling services',
          'Support student mental health and well-being',
          'Offer academic support and tutoring',
          'Facilitate peer support programs',
          'Promote personal development and resilience'
        ],
        headOfService: {
          name: 'Dr. Mona El-Shazly',
          title: 'Director of Counseling Services',
          position: 'Clinical Director',
          specialization: 'Clinical Psychology and Student Counseling',
          email: 'mona.elshazly@finearts.luxor.edu.eg',
          office: 'Counseling Center, Room 401',
          bio: 'Dr. Mona El-Shazly is a licensed clinical psychologist with expertise in student mental health and counseling.'
        },
        staffMembers: [
          {
            id: 10,
            name: 'Dr. Hala Mahmoud',
            position: 'Clinical Psychologist',
            specialization: 'Individual and Group Therapy',
            division: 'Clinical Services',
            email: 'hala.mahmoud@finearts.luxor.edu.eg',
            office: 'Room 403'
          },
          {
            id: 11,
            name: 'Ms. Eman Saleh',
            position: 'Academic Support Coordinator',
            specialization: 'Academic Coaching and Tutoring',
            division: 'Academic Support',
            email: 'eman.saleh@finearts.luxor.edu.eg',
            office: 'Room 405'
          },
          {
            id: 12,
            name: 'Mr. Mahmoud Hassan',
            position: 'Peer Support Coordinator',
            specialization: 'Peer Mentoring and Support Groups',
            division: 'Peer Support',
            email: 'mahmoud.hassan@finearts.luxor.edu.eg',
            office: 'Room 407'
          }
        ],
        divisions: ['Clinical Services', 'Academic Support', 'Peer Support', 'Crisis Intervention'],
        services: [
          'Individual counseling sessions',
          'Group therapy and support groups',
          'Academic coaching and tutoring',
          'Crisis intervention services',
          'Mental health workshops and programs'
        ],
        procedures: [
          'Contact counseling center for appointment',
          'Complete intake assessment',
          'Meet with assigned counselor',
          'Develop treatment or support plan',
          'Participate in ongoing sessions and programs'
        ],
        requirements: [
          'Current student enrollment',
          'Completed intake forms',
          'Commitment to counseling process',
          'Respect for confidentiality',
          'Willingness to engage in treatment'
        ],
        workingHours: 'Sunday to Thursday: 8:00 AM - 4:00 PM (Emergency services available 24/7)',
        location: 'Fourth Floor, Student Services Building'
      },
      {
        id: 5,
        name: 'International Student Services',
        description: 'Supports international students with visa requirements, cultural adaptation, and academic integration into the Faculty of Fine Arts community.',
        imageUrl: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-globe',
        establishedYear: 2012,
        vision: 'To create an inclusive and supportive environment for international students pursuing fine arts education.',
        mission: 'Facilitating the successful integration of international students into academic and cultural life at the faculty.',
        objectives: [
          'Assist with visa and immigration processes',
          'Provide cultural orientation and adaptation support',
          'Facilitate academic integration',
          'Promote cross-cultural understanding',
          'Support international student organizations'
        ],
        headOfService: {
          name: 'Ms. Yasmin El-Khouly',
          title: 'Director of International Student Services',
          position: 'International Programs Director',
          specialization: 'International Education and Cross-Cultural Communication',
          email: 'yasmin.elkhouly@finearts.luxor.edu.eg',
          office: 'International Services Office, Room 501',
          bio: 'Ms. Yasmin El-Khouly has extensive experience in international education and cross-cultural program management.'
        },
        staffMembers: [
          {
            id: 13,
            name: 'Mr. Ahmed El-Naggar',
            position: 'Immigration Advisor',
            specialization: 'Visa and Immigration Services',
            division: 'Immigration Services',
            email: 'ahmed.elnaggar@finearts.luxor.edu.eg',
            office: 'Room 503'
          },
          {
            id: 14,
            name: 'Ms. Rania Hosny',
            position: 'Cultural Integration Coordinator',
            specialization: 'Cultural Orientation and Adaptation',
            division: 'Cultural Services',
            email: 'rania.hosny@finearts.luxor.edu.eg',
            office: 'Room 505'
          },
          {
            id: 15,
            name: 'Mr. Omar El-Masry',
            position: 'Academic Integration Specialist',
            specialization: 'Academic Support and Integration',
            division: 'Academic Integration',
            email: 'omar.elmasry@finearts.luxor.edu.eg',
            office: 'Room 507'
          }
        ],
        divisions: ['Immigration Services', 'Cultural Services', 'Academic Integration', 'Student Organizations'],
        services: [
          'Visa and immigration assistance',
          'Cultural orientation programs',
          'Academic integration support',
          'Housing and accommodation assistance',
          'International student events and activities'
        ],
        procedures: [
          'Submit application for international student services',
          'Attend mandatory orientation session',
          'Complete immigration documentation',
          'Participate in cultural integration programs',
          'Maintain regular contact with advisor'
        ],
        requirements: [
          'Valid student visa',
          'Proof of enrollment',
          'Passport and immigration documents',
          'Health insurance coverage',
          'Completed orientation program'
        ],
        workingHours: 'Sunday to Thursday: 9:00 AM - 3:00 PM',
        location: 'Fifth Floor, International Programs Building'
      }
    ];
  }

  getStudentServiceById(id: number): StudentService | undefined {
    return this.getStudentServices().find(service => service.id === id);
  }
}