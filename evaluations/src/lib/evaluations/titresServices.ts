import type { EvaluationForm } from './types'

export const titresServicesCourseGroups: NonNullable<EvaluationForm['courseGroups']> = [
  {
    label: 'Outils numériques',
    options: [
      'Identité numérique et démarches administratives',
      'Messageries électroniques',
      'Internet, navigation et recherches en ligne',
      'Découverte de ChatGPT',
    ],
  },
  {
    label: 'Techniques et prévention',
    options: [
      'Techniques de nettoyage et sécurité',
      'Ergonomie et prévention des TMS',
      'Produits chimiques et sécurité',
      'Sécurité sur le lieu de travail - Prévention et protection',
      'Techniques de repassage professionnel',
    ],
  },
  {
    label: 'Bien-être et savoir-faire',
    options: [
      'Communication professionnelle',
      'Motivation et gestion de stress',
      'Organisation du travail',
      'Assertivité professionnelle',
      'Déontologie professionnelle',
    ],
  },
]

export const titresServicesEval: EvaluationForm = {
  slug: 'titres-services',
  title: 'Questionnaire de satisfaction – Titres-Services',
  shortTitle: 'Titres-Services',
  description:
    'Formulaire unique pour tous les modules Titres Services. Choisissez la formation suivie, puis donnez votre avis.',
  intro:
    'Votre avis est important pour améliorer nos formations. Cochez la réponse qui correspond le mieux à votre avis.',
  kind: 'course-eval',
  badgeLabel: 'Titres Services',
  heroImage: '/assets/services/perfectionnement/office.jpg',
  heroImageAlt: 'Formations Titres Services',
  courseGroups: titresServicesCourseGroups,
  courseTitlePrompt: 'Nom de la formation',
  asksTrainingDate: true,
  questions: [
    {
      id: 'module',
      type: 'likert-group',
      prompt: '',
      scale: ['Aucun avis', 'Pas satisfait', 'Satisfait', 'Très satisfait'],
      items: [
        { id: 'attentes', prompt: 'La formation a répondu à mes attentes.' },
        { id: 'utile-travail', prompt: 'Ce que j’ai appris est utile pour mon travail.' },
        { id: 'explications', prompt: 'Les explications étaient faciles à comprendre.' },
        { id: 'exemples', prompt: 'Les exemples et les exercices m’ont aidé à apprendre.' },
        { id: 'utilisation', prompt: 'Je pourrai utiliser ce que j’ai appris dans mon travail.' },
        { id: 'questions', prompt: 'Le formateur a bien répondu à mes questions.' },
        {
          id: 'supports',
          prompt: 'Les supports pédagogiques et le matériel étaient adaptés.',
        },
        {
          id: 'clients',
          prompt: 'La formation m’aidera à mieux travailler chez les clients.',
        },
        {
          id: 'securite',
          prompt:
            'La formation m’a donné des conseils pour travailler plus facilement et en toute sécurité.',
        },
      ],
    },
    {
      id: 'remarques',
      type: 'textarea',
      prompt: 'Avez-vous des remarques ou des suggestions à ajouter ?',
      optional: true,
    },
  ],
}
