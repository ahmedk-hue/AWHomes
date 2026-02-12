import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  colSpan?: number; // For Bento Grid layout
  link: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  role?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}