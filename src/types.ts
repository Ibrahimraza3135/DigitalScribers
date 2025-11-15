export interface Service {
  id: number;
  title: string;
  description: string;
  action: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}
