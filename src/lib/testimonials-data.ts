export interface TestimonialsData {
  testimonials: {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    image?: string;
  }[];
}

export const TestimonialsData: TestimonialsData = {
  testimonials: [
    {
      name: "Jean Dupont",
      role: "Directeur Technique",
      company: "Tech Solutions",
      content:
        "Un développeur exceptionnel qui a apporté une contribution significative à notre équipe. Son expertise technique et sa capacité à résoudre des problèmes complexes sont impressionnantes.",
      rating: 5,
    },
    {
      name: "Marie Martin",
      role: "Product Owner",
      company: "Digital Innovation",
      content:
        "Une collaboration très professionnelle et efficace. Les livrables étaient toujours de haute qualité et respectaient les délais.",
      rating: 5,
    },
    {
      name: "Pierre Dubois",
      role: "Lead Developer",
      company: "Web Agency",
      content:
        "Une expertise technique remarquable et une excellente capacité d'adaptation. Un vrai atout pour n'importe quelle équipe de développement.",
      rating: 4,
    },
  ],
};
