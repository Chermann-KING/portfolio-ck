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
      name: "Louis-Marie Bourgeois",
      role: "Directeur des Systèmes d'Information",
      company: "Informatique Avancée",
      content:
        "Un développeur très compétent et passionné par son travail. Il a su s'intégrer rapidement à notre équipe et a apporté des idées novatrices.",
      rating: 4,
    },
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
