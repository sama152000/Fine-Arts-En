import { Injectable } from '@angular/core';
import { NewsItem } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  getLatestNews(): NewsItem[] {
    return [
      {
        id: 1,
        title: 'Annual Student Exhibition Opens December 2024',
        summary: 'The Faculty showcases outstanding student works from all departments in a comprehensive exhibition featuring paintings, sculptures, and digital arts.',
        imageUrl: 'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        publishDate: new Date('2024-12-01'),
        author: 'Dr. Sarah Ahmed',
        category: 'news',
        readMoreUrl: '/news/1',
        featured: true
      },
      {
        id: 2,
        title: 'Faculty Receives Excellence Award in Arts Education',
        summary: 'Our faculty has been recognized by the Ministry of Higher Education for outstanding contributions to arts education and cultural preservation.',
        imageUrl: 'https://images.pexels.com/photos/1047540/pexels-photo-1047540.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        publishDate: new Date('2024-11-28'),
        author: 'Prof. Mohamed Hassan',
        category: 'achievement',
        readMoreUrl: '/news/2',
        featured: true
      },
      {
        id: 3,
        title: 'New Digital Arts Lab Now Open',
        summary: 'State-of-the-art digital arts laboratory equipped with latest technology opens for student use, enhancing graphic design and multimedia programs.',
        imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        publishDate: new Date('2024-11-25'),
        author: 'Dr. Amira Farouk',
        category: 'announcement',
        readMoreUrl: '/news/3',
        featured: false
      },
      {
        id: 4,
        title: 'International Art Workshop with Italian Masters',
        summary: 'Renowned Italian artists conduct exclusive workshops on traditional fresco painting techniques for advanced students.',
        imageUrl: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        publishDate: new Date('2024-11-20'),
        author: 'Dr. Marco Rossi',
        category: 'news',
        readMoreUrl: '/news/4',
        featured: false
      }
    ];
  }
}