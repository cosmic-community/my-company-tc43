// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    short_description?: string;
    details?: string;
    icon?: string;
    featured_image?: CosmicImage;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name?: string;
    job_title?: string;
    bio?: string;
    photo?: CosmicImage;
    email?: string;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    title?: string;
    client_name?: string;
    summary?: string;
    content?: string;
    results?: string;
    related_service?: Service;
    featured_image?: CosmicImage;
    gallery?: CosmicImage[];
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote?: string;
    client_name?: string;
    company?: string;
    role?: string;
    rating?: number;
    photo?: CosmicImage;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Simple error helper for Cosmic SDK
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}