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
      name: "Laetitia MAKITA NGADI",
      role: "Founder & CEO",
      company: "Semen Africa Consulting",
      content: [
        "Un professionnel alliant expertise technique et pédagogie. Son approche proactive garantit des livrables toujours en temps et en heure, tout en veillant à ce que le client comprenne parfaitement chaque étape du développement.",
        "Rigoureux, innovant et impliqué, il transforme les idées en solutions digitales performantes, tout en assurant un accompagnement clair et structuré. Un véritable atout pour une équipe.",
      ],
      rating: 5,
    },
    {
      name: "Daniella Wells Diallo",
      role: "CEO",
      company: "Dellplace Entreprise",
      content: [
        "I had the pleasure of working with Hermann on my business project, and I couldn't be more satisfied with the experience. He built the website for my company and working with him was truly a delight.",
        "Hermann is prompt, attentive, and incredibly skilled. He listened carefully to my needs and delivered exactly what I envisioned, even going above and beyond my expectations.",
        "Despite the many requests I sent his way, he remained patient, responsive, and professional throughout. He's truly talented at what he does, and I 100% recommend his services!",
      ],
      rating: 5,
    },
  ],
};
