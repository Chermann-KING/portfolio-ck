export interface TestimonialsData {
  testimonials: {
    name: string;
    role: string;
    company: string;
    content: string[];
    rating: number;
    image?: string;
  }[];
}

export const TestimonialsData: TestimonialsData = {
  testimonials: [
    {
      name: "Landry Ndong Aboghé",
      role: "Co-founder",
      company: "CompanyViene",
      content: [
        "Hermann est une ressource de qualité exceptionnelle,  connu initialement pour ses talents et compétences de Designer, il a su très rapidement s'appuyer sur ses qualités de perfectionniste pour s'adapter au secteur du développement applicatif à travers l'apprentissage de plusieurs langages de codage.",
        "Il a su imprimer aupres de nos collaborateurs des standards de qualités très relevées et qui nous permettent de gagner énormément en crédibilité!",
      ],
      rating: 4,
    },
    {
      name: "Germain Ndouanis",
      role: "Founder",
      company: "NRL SOLUTIONS",
      content: [
        "I wholeheartedly recommend Hermann MOUSSAVOU for the role of Full Stack and App Developer. ",
        "He possesses a deep understanding of both web and mobile app development and is skilled in a variety of technologies.",
        "Hermann is not just a talented individual; he’s also a fantastic team player who is committed to delivering high-quality work.",
        "He would undoubtedly be a tremendous asset to your team or any related project.",
      ],
      rating: 5,
    },
    {
      name: "Marie Martin",
      role: "Product Owner",
      company: "Digital Innovation",
      content: [
        "Une collaboration très professionnelle et efficace. Les livrables étaient toujours de haute qualité et respectaient les délais.",
      ],
      rating: 5,
    },
    {
      name: "Pierre Dubois",
      role: "Lead Developer",
      company: "Web Agency",
      content: [
        "Une expertise technique remarquable et une excellente capacité d'adaptation. Un vrai atout pour n'importe quelle équipe de développement.",
      ],
      rating: 4,
    },
  ],
};
