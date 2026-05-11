export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  cardImage: string;
  icon?: string;
  category: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  galleryImages: string[];
  included: string[];
  benefits: string[];
  serviceAreas: {
    regions: string[];
    cities: string[];
    paragraph: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServiceSlugs: string[];
  ctaLabel: string;
}

const serviceAreas = {
  regions: ['Estrie', 'Montérégie', 'Grand Montréal', 'Centre-du-Québec'],
  cities: [
    'Sherbrooke',
    'Magog',
    'Granby',
    'Montréal',
    'Longueuil',
    'Brossard',
    'Drummondville',
    'Saint-Hyacinthe',
    'Laval',
    'Terrebonne',
    'Repentigny',
    'Blainville',
  ],
};

export const SERVICES: ServiceDetail[] = [
  {
    slug: 'lavage-de-vitres-residentiel',
    title: 'Lavage de vitres résidentiel',
    shortDescription:
      'Un nettoyage impeccable de vos vitres à domicile, pour un résultat clair, lumineux et sans traces.',
    heroImage: '/assets/images/lavagedevitre.webp',
    cardImage: '/assets/images/lavagedevitre.webp',
    icon: '⌂',
    category: 'Vitres',
    aboutTitle: 'Des vitres propres, sans compromis sur le soin apporté à votre maison.',
    aboutParagraphs: [
      "Notre service résidentiel est pensé pour offrir un résultat net, durable et soigné, autant à l'intérieur qu'à l'extérieur.",
      'Chaque intervention est adaptée au type de fenestration, aux cadrages et aux besoins réels de votre propriété.',
    ],
    galleryImages: ['/assets/images/lavagedevitre.webp', '/assets/images/goutiere.webp', '/assets/images/pression.webp'],
    included: ['Lavage intérieur et extérieur', 'Cadrages lavés en profondeur', 'Finition sans traces', 'Service ponctuel ou récurrent'],
    benefits: ['Maison plus lumineuse', 'Résultat professionnel', 'Gain de temps', 'Entretien simplifié'],
    serviceAreas: {
      ...serviceAreas,
      paragraph:
        'O’Splash accompagne les propriétaires résidentiels dans plusieurs secteurs du sud du Québec, avec une approche flexible selon la fréquence et la saison.',
    },
    faqs: [
      {
        question: 'Faut-il être à la maison pendant le lavage ?',
        answer: "Pour un lavage extérieur seulement, ce n'est pas toujours nécessaire. Pour l'intérieur, une présence ou un accès planifié est requis.",
      },
      {
        question: 'Nettoyez-vous les moustiquaires ?',
        answer: 'Oui, le nettoyage des moustiquaires peut être ajouté selon le type de service demandé.',
      },
      {
        question: 'À quelle fréquence laver les vitres ?',
        answer: 'Deux à trois fois par année convient à la majorité des résidences, selon l’exposition, les arbres et la circulation autour de la maison.',
      },
      {
        question: 'Le lavage laisse-t-il des traces ?',
        answer: 'Notre méthode vise une finition claire et sans traces, avec une attention particulière aux cadrages et aux coins.',
      },
    ],
    relatedServiceSlugs: ['nettoyage-de-gouttieres', 'blanchiment-de-gouttieres', 'lavage-a-pression'],
    ctaLabel: 'Demander une soumission gratuite',
  },
  {
    slug: 'lavage-de-vitres-commercial',
    title: 'Lavage de vitres commercial',
    shortDescription:
      'Solutions professionnelles pour commerces, bureaux et immeubles, avec un service adapté à vos horaires.',
    heroImage: '/assets/images/lavagedevitre.webp',
    cardImage: '/assets/images/lavagedevitre.webp',
    icon: '▦',
    category: 'Commercial',
    aboutTitle: 'Une image plus nette pour vos espaces commerciaux.',
    aboutParagraphs: [
      'Des vitrines propres influencent directement la perception de votre commerce, de vos bureaux ou de votre immeuble.',
      'Nous planifions les interventions avec discrétion et rigueur, selon vos horaires et le niveau de fréquentation de vos lieux.',
    ],
    galleryImages: ['/assets/images/lavagedevitre.webp', '/assets/images/pression.webp', '/assets/images/goutiere.webp'],
    included: [
      'Grandes surfaces vitrées',
      'Vitrines de commerces',
      'Cadrages lavés en profondeur',
      'Entretien régulier disponible',
      'Horaires flexibles',
    ],
    benefits: [
      'Image professionnelle pour votre entreprise',
      'Contrats d’entretien régulier disponibles',
      "Intervention possible en dehors des heures d'ouverture",
      'Équipement adapté aux grandes hauteurs',
    ],
    serviceAreas: {
      ...serviceAreas,
      paragraph:
        'Nos services commerciaux couvrent les principaux secteurs d’affaires régionaux, avec des horaires adaptés aux réalités des commerces et immeubles.',
    },
    faqs: [
      {
        question: 'Offrez-vous des contrats récurrents ?',
        answer: 'Oui, nous pouvons planifier un entretien mensuel, saisonnier ou sur mesure selon votre achalandage.',
      },
      {
        question: 'Pouvez-vous intervenir avant les heures d’ouverture ?',
        answer: 'Oui, les horaires peuvent être adaptés pour limiter les interruptions de vos opérations.',
      },
      {
        question: 'Travaillez-vous sur les vitrines de rue ?',
        answer: 'Oui, les vitrines commerciales font partie des demandes les plus courantes pour ce service.',
      },
      {
        question: 'Le service inclut-il les cadrages ?',
        answer: 'Oui, les cadrages peuvent être inclus pour une finition plus uniforme et professionnelle.',
      },
    ],
    relatedServiceSlugs: ['lavage-a-pression', 'nettoyage-de-gouttieres', 'lavage-de-vitres-residentiel'],
    ctaLabel: 'Demander une soumission gratuite',
  },
  {
    slug: 'nettoyage-de-gouttieres',
    title: 'Nettoyage de gouttières',
    shortDescription:
      'Retrait des débris, inspection et nettoyage complet pour protéger votre propriété contre les infiltrations et les dégâts d’eau.',
    heroImage: '/assets/images/goutiere.webp',
    cardImage: '/assets/images/goutiere.webp',
    icon: '⌁',
    category: 'Gouttières',
    aboutTitle: 'Un entretien essentiel pour prévenir les problèmes d’eau.',
    aboutParagraphs: [
      'Les gouttières obstruées peuvent causer des débordements, des infiltrations et une usure prématurée de certaines composantes de la maison.',
      'Notre intervention retire les débris accumulés et permet de vérifier si l’écoulement se fait correctement.',
    ],
    galleryImages: ['/assets/images/goutiere.webp', '/assets/images/lavagedevitre.webp', '/assets/images/pression.webp'],
    included: ['Retrait des feuilles et débris', 'Inspection visuelle', 'Vérification de l’écoulement', 'Nettoyage sécuritaire'],
    benefits: [
      'Prévention des dégâts d’eau',
      'Protection de la toiture',
      'Moins de risques d’infiltration',
      'Entretien saisonnier simplifié',
    ],
    serviceAreas: {
      ...serviceAreas,
      paragraph:
        'Nous desservons plusieurs villes pour les nettoyages saisonniers de gouttières, particulièrement au printemps et à l’automne.',
    },
    faqs: [
      {
        question: 'Quand faut-il nettoyer ses gouttières ?',
        answer: 'Le printemps et l’automne sont les périodes les plus importantes, surtout si votre terrain compte plusieurs arbres.',
      },
      {
        question: 'Vérifiez-vous l’écoulement ?',
        answer: 'Oui, une vérification visuelle de l’écoulement fait partie de l’intervention.',
      },
      {
        question: 'Le service est-il sécuritaire pour la toiture ?',
        answer: 'Nous adaptons la méthode de travail à la propriété afin de limiter les risques et d’éviter les manipulations inutiles.',
      },
      {
        question: 'Pouvez-vous combiner avec le lavage de vitres ?',
        answer: 'Oui, c’est souvent une combinaison pratique lors d’un entretien extérieur saisonnier.',
      },
    ],
    relatedServiceSlugs: ['blanchiment-de-gouttieres', 'lavage-de-vitres-residentiel', 'lavage-a-pression'],
    ctaLabel: 'Demander une soumission gratuite',
  },
  {
    slug: 'blanchiment-de-gouttieres',
    title: 'Blanchiment de gouttières',
    shortDescription:
      'Redonnez l’éclat d’origine à vos gouttières grâce à un nettoyage extérieur spécialisé.',
    heroImage: '/assets/images/goutiere.webp',
    cardImage: '/assets/images/goutiere.webp',
    icon: '◌',
    category: 'Gouttières',
    aboutTitle: 'Une finition extérieure plus propre et plus uniforme.',
    aboutParagraphs: [
      'Le blanchiment de gouttières cible les traces noires et saletés incrustées visibles sur la surface extérieure.',
      'Ce service complète très bien un lavage de vitres ou un entretien extérieur lorsque l’apparence de la façade compte autant que la propreté.',
    ],
    galleryImages: ['/assets/images/goutiere.webp', '/assets/images/lavagedevitre.webp', '/assets/images/pression.webp'],
    included: [
      'Nettoyage extérieur des gouttières',
      'Traitement des marques noires',
      'Finition propre et uniforme',
      'Service complémentaire au nettoyage régulier',
    ],
    benefits: [
      'Améliore l’apparence de la maison',
      'Redonne de la valeur visuelle à la façade',
      'Complète parfaitement un lavage de vitres',
      'Résultat visible rapidement',
    ],
    serviceAreas: {
      ...serviceAreas,
      paragraph:
        'Le blanchiment de gouttières est disponible dans nos principaux secteurs de service et peut être combiné à d’autres interventions extérieures.',
    },
    faqs: [
      {
        question: 'Est-ce différent du nettoyage de gouttières ?',
        answer: 'Oui. Le nettoyage retire les débris à l’intérieur; le blanchiment traite surtout l’apparence extérieure visible.',
      },
      {
        question: 'Est-ce que toutes les marques disparaissent ?',
        answer: 'La majorité des traces s’atténuent fortement, mais le résultat dépend de l’âge, du matériau et de l’état initial.',
      },
      {
        question: 'Peut-on combiner ce service avec un lavage de vitres ?',
        answer: 'Oui, c’est une combinaison recommandée pour améliorer l’apparence générale de la façade.',
      },
      {
        question: 'Le produit utilisé abîme-t-il la peinture ?',
        answer: 'La méthode est adaptée aux surfaces courantes, avec une approche prudente selon l’état du revêtement.',
      },
    ],
    relatedServiceSlugs: ['nettoyage-de-gouttieres', 'lavage-de-vitres-residentiel', 'lavage-a-pression'],
    ctaLabel: 'Demander une soumission gratuite',
  },
  {
    slug: 'lavage-a-pression',
    title: 'Lavage à pression',
    shortDescription:
      'Redonnez vie à vos surfaces extérieures : terrasses, entrées, revêtements, pavés, escaliers et plus encore.',
    heroImage: '/assets/images/pression.webp',
    cardImage: '/assets/images/pression.webp',
    icon: '◒',
    category: 'Surfaces extérieures',
    aboutTitle: 'Un nettoyage extérieur puissant, appliqué avec la bonne pression.',
    aboutParagraphs: [
      'Le lavage à pression permet de retirer la saleté accumulée, les dépôts et les traces visibles sur plusieurs surfaces extérieures.',
      'Nous ajustons l’approche selon le matériau afin de viser un résultat propre sans agressivité inutile.',
    ],
    galleryImages: ['/assets/images/pression.webp', '/assets/images/lavagedevitre.webp', '/assets/images/goutiere.webp'],
    included: [
      'Nettoyage de surfaces extérieures',
      'Adaptation de la pression selon le matériau',
      'Élimination de saleté accumulée',
      'Service résidentiel et commercial',
    ],
    benefits: ['Surfaces plus propres', 'Apparence extérieure améliorée', 'Entretien préventif', 'Résultat rapide et visible'],
    serviceAreas: {
      ...serviceAreas,
      paragraph:
        'Nos interventions de lavage à pression sont offertes dans plusieurs secteurs résidentiels et commerciaux selon l’accès, la surface et la saison.',
    },
    faqs: [
      {
        question: 'Toutes les surfaces peuvent-elles être lavées à pression ?',
        answer: 'Non. Certaines surfaces demandent une pression réduite ou une méthode différente. Nous adaptons l’approche au matériau.',
      },
      {
        question: 'Nettoyez-vous les entrées et pavés ?',
        answer: 'Oui, les entrées, pavés, escaliers et terrasses font partie des surfaces courantes.',
      },
      {
        question: 'Le résultat est-il visible rapidement ?',
        answer: 'Oui, le lavage à pression produit généralement un changement visible dès l’intervention.',
      },
      {
        question: 'Offrez-vous ce service aux commerces ?',
        answer: 'Oui, le service peut être adapté aux besoins résidentiels et commerciaux.',
      },
    ],
    relatedServiceSlugs: ['lavage-de-vitres-residentiel', 'nettoyage-de-gouttieres', 'blanchiment-de-gouttieres'],
    ctaLabel: 'Demander une soumission gratuite',
  },
];

export function getServiceBySlug(slug: string | null): ServiceDetail | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getRelatedServices(service: ServiceDetail): ServiceDetail[] {
  return service.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((related): related is ServiceDetail => Boolean(related));
}
