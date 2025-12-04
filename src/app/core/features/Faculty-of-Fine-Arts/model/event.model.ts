export interface Event {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  eventDate: Date;
  startTime: string;
  endTime?: string;
  location: string;
  category: 'exhibition' | 'workshop' | 'seminar' | 'conference';
  registrationUrl?: string;
  featured?: boolean;
}