import { Injectable } from '@angular/core';
import { ContactMessage, ContactInfo } from '../model/contact-message.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactInfo: ContactInfo = {
    phone: '+20 95 123 4567',
    email: 'contact@fineartslu.edu.eg',
    address: 'Faculty of Fine Arts, Luxor University, Luxor, Egypt',
    officeHours: 'Sunday - Thursday: 8:00 AM - 4:00 PM',
    mapUrl: 'https://maps.google.com'
  };

  getContactInfo(): ContactInfo {
    return this.contactInfo;
  }

  submitContactMessage(message: ContactMessage): boolean {
    // Simulate API call - in real implementation, this would send to backend
    console.log('Contact message submitted:', message);
    return true;
  }
}