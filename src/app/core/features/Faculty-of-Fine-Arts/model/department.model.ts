export interface Department {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  icon?: string;
  studentCount?: number;
  programsOffered?: string[];
  detailsUrl: string;
}