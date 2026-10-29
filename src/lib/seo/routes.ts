import type { MetadataRoute } from 'next'

import type { PageSeo } from '@/lib/seo/pageMetadata'

export type IndexedRoute = PageSeo & {
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
  priority: number
}

const siteDescription =
  "À Bruxelles, Espace Forma accompagne l'école de devoirs, les formations titres-services et l'inclusion numérique. Anciennement Espace Cultures et Développement (ECD)."

export const pageSeo = {
  home: {
    title: 'École de devoirs, titres-services et inclusion numérique à Bruxelles',
    description: siteDescription,
    path: '/',
    changeFrequency: 'weekly',
    priority: 1,
  },
  aPropos: {
    title: "À propos d'Espace Forma à Bruxelles",
    description:
      "Espace Forma (EF), anciennement Espace Cultures et Développement (ECD), agit à Bruxelles pour l'éducation, le numérique et l'insertion sociale.",
    path: '/a-propos',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  quiSommesNous: {
    title: 'Qui sommes-nous',
    description:
      "Espace Forma renforce l'autonomie et la participation dans les quartiers bruxellois : jeunes, adultes, seniors et professionnels des titres-services.",
    path: '/a-propos/qui-sommes-nous',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  ecoleDeDevoirsAbout: {
    title: 'Opérateur en école de devoirs à Bruxelles',
    description:
      "Espace Forma est reconnu par l'ONE comme opérateur de l'École de Devoirs Notre-Dame-Aux-Neiges, dans le quartier du Congrès à Bruxelles.",
    path: '/a-propos/ecole-de-devoirs',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  economieSociale: {
    title: 'Entreprise sociale et démocratique à Bruxelles',
    description:
      "Espace Forma est agréée comme Entreprise Sociale et Démocratique (ESD) pour l'insertion et l'emploi durable des publics éloignés du marché du travail.",
    path: '/a-propos/economie-sociale',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  epn: {
    title: 'Espace public numérique mobile à Bruxelles',
    description:
      "Espace Forma est un opérateur d'inclusion numérique labellisé en Région bruxelloise, détenteur du label fédéral Connectoo.",
    path: '/a-propos/epn',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  formationTitresServicesAbout: {
    title: 'Opérateur de formation titres-services',
    description:
      'Espace Forma est un opérateur de formation agréé dans le secteur des titres-services à Bruxelles, en Wallonie et par le fonds Form TS.',
    path: '/a-propos/formation-titres-services',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  formationsTitresServices: {
    title: 'Formations titres-services à Bruxelles',
    description:
      'Formations pour les travailleurs, encadrants et équipes administratives des titres-services : compétences numériques, bien-être au travail et prévention des risques.',
    path: '/nos-services/formations-titres-services',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  initiationInformatique: {
    title: 'Initiation en informatique à Bruxelles',
    description:
      "Initiation aux outils numériques essentiels pour les jeunes, les adultes et les seniors, adaptée aux besoins de chacun par Espace Forma à Bruxelles.",
    path: '/nos-services/initiation-informatique',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  maintenanceDepannage: {
    title: 'Maintenance et dépannage informatiques à Bruxelles',
    description:
      'Maintenance et dépannage informatiques pour ordinateurs, tablettes et smartphones : diagnostic, réparation et remise en service de vos équipements.',
    path: '/nos-services/maintenance-depannage-informatiques',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  perfectionnementInformatique: {
    title: 'Perfectionnement en informatique à Bruxelles',
    description:
      'Perfectionnement informatique à Bruxelles : bureautique, outils collaboratifs et usages professionnels pour gagner en autonomie au travail.',
    path: '/nos-services/perfectionnement-informatique',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  autreFormation: {
    title: 'Formation en ergonomie en maison de repos',
    description:
      'Formation à la prévention des troubles musculo-squelettiques pour les professionnels des maisons de repos : postures, transferts et gestes du quotidien.',
    path: '/nos-services/autre-formation',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  inclusionNumerique: {
    title: 'Inclusion numérique à Bruxelles',
    description:
      'Ateliers et permanences numériques mobiles à Bruxelles, au plus près des habitants : jeunes, adultes, seniors et personnes en parcours Alpha ou FLE.',
    path: '/inclusion-numerique',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  jeunesConnectes: {
    title: 'Jeunes connectés : stages numériques à Bruxelles',
    description:
      'Stages et ateliers pour les 6-18 ans à Bruxelles : informatique, programmation, robotique et création numérique, dans un parcours ludique.',
    path: '/inclusion-numerique/jeunes-connectes',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  alphaFle: {
    title: 'Alpha, FLE et numérique à Bruxelles',
    description:
      "Le numérique intégré aux parcours Alpha et FLE à Bruxelles, pour accéder aux démarches en ligne malgré le double obstacle de la langue et de l'outil.",
    path: '/inclusion-numerique/alpha-fle-numerique',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  emploiNumerique: {
    title: 'Emploi et numérique à Bruxelles',
    description:
      "Ateliers informatiques à Bruxelles pour les personnes en recherche d'emploi ou en activation sociale : candidatures, CV et démarches en ligne.",
    path: '/inclusion-numerique/emploi-numerique',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  seniorsDigital: {
    title: 'Connectés & Autonomes – Inclusion numérique des seniors',
    description:
      "La Loterie Nationale soutient le projet d'inclusion numérique des seniors à Bruxelles, mis en œuvre d'avril 2026 à mars 2027.",
    path: '/inclusion-numerique/seniors-digital',
    changeFrequency: 'weekly',
    priority: 0.7,
  },
  titresServices: {
    title: 'Catalogue de formations titres-services à Bruxelles',
    description:
      'Formations pratiques pour les entreprises de titres-services : outils numériques, organisation du travail, communication, sécurité et bien-être des équipes.',
    path: '/titres-services',
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  ecoleDevoirs: {
    title: 'École de devoirs Notre-Dame-Aux-Neiges à Bruxelles',
    description:
      "École de devoirs Notre-Dame-Aux-Neiges à Bruxelles : soutien scolaire, activités et coéducation avec les familles, opérée par Espace Forma.",
    path: '/ecole-devoirs',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  contact: {
    title: 'Contact à Bruxelles',
    description:
      'Contactez Espace Forma, Rue du Gouvernement Provisoire 34A, 1000 Bruxelles. Téléphone +32 2 425 65 85, du lundi au vendredi de 8h à 16h.',
    path: '/contact',
    changeFrequency: 'yearly',
    priority: 0.7,
  },
  mentionsLegales: {
    title: 'Mentions légales',
    description: 'Mentions légales d’Espace Forma (EF) asbl, anciennement Espace Cultures et Développement.',
    path: '/mentions-legales',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  politiqueConfidentialite: {
    title: 'Politique de confidentialité',
    description:
      'Politique de confidentialité et protection des données personnelles d’Espace Forma (EF) asbl.',
    path: '/politique-de-confidentialite',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  politiqueCookies: {
    title: 'Politique de cookies',
    description:
      'Politique de cookies et informations sur l’utilisation des cookies et technologies similaires sur espaceforma.be.',
    path: '/politique-de-cookies',
    changeFrequency: 'yearly',
    priority: 0.3,
  },
} as const satisfies Record<string, IndexedRoute>

export const noindexPageSeo = {
  seniorsDigitalOld: {
    title: 'Seniors & le digital – Accompagnement numérique',
    description:
      'Accompagnement numérique adapté et accessible pour les seniors : utiliser les outils du quotidien en sécurité, à son rythme.',
    path: '/inclusion-numerique/seniors-digital-old',
  },
  inclusionNumeriqueTest: {
    title: 'Espace Public Numérique Mobile',
    description:
      "Page de travail de l'Espace Public Numérique Mobile. Ce contenu n'est pas destiné à l'indexation.",
    path: '/inclusion-numerique/test',
  },
} as const satisfies Record<string, PageSeo>

export const sitemapStaticRoutes: IndexedRoute[] = [
  pageSeo.home,
  pageSeo.aPropos,
  pageSeo.quiSommesNous,
  pageSeo.ecoleDeDevoirsAbout,
  pageSeo.economieSociale,
  pageSeo.epn,
  pageSeo.formationTitresServicesAbout,
  pageSeo.formationsTitresServices,
  pageSeo.initiationInformatique,
  pageSeo.maintenanceDepannage,
  pageSeo.perfectionnementInformatique,
  pageSeo.autreFormation,
  pageSeo.inclusionNumerique,
  pageSeo.jeunesConnectes,
  pageSeo.alphaFle,
  pageSeo.emploiNumerique,
  pageSeo.seniorsDigital,
  pageSeo.titresServices,
  pageSeo.ecoleDevoirs,
  pageSeo.contact,
  pageSeo.mentionsLegales,
  pageSeo.politiqueConfidentialite,
  pageSeo.politiqueCookies,
]
