import type { EvaluationForm } from './types'

export const formationEval: EvaluationForm = {
  slug: 'formation',
  title: 'Évaluation de formation général',
  shortTitle: 'Formation général',
  description:
    'Donnez votre avis sur le contenu, le formateur et l’organisation d’une formation.',
  intro:
    'Afin d’améliorer la qualité de nos formations, nous vous serions reconnaissants de prendre quelques minutes pour répondre à ce questionnaire. Cela nous permettra d’adapter au mieux nos programmes à vos attentes.\n\nVotre avis nous intéresse. Merci de votre collaboration.',
  kind: 'course-eval',
  badgeLabel: 'Général',
  heroImage: '/assets/services/perfectionnement/office.jpg',
  heroImageAlt: 'Évaluation de formation général',
  courseTitlePrompt: 'Intitulé de la formation',
  questions: [
    {
      id: 'formation',
      type: 'likert-group',
      prompt: 'Votre formation',
      scale: ['Pas d’avis', 'Pas satisfait', 'Satisfait', 'Très satisfait'],
      items: [
        { id: 'attentes', prompt: 'La formation a répondu à mes attentes.' },
        { id: 'programme', prompt: 'La formation a respecté le programme annoncé.' },
        { id: 'echange', prompt: 'J’ai pu échanger facilement avec les autres participants.' },
        {
          id: 'equilibre',
          prompt: 'Il y avait un bon équilibre entre les explications et les exercices.',
        },
        { id: 'documents', prompt: 'Les documents reçus pendant la formation étaient utiles.' },
        { id: 'exemples', prompt: 'Les exemples et les exercices m’ont aidé à comprendre.' },
        { id: 'utilisation', prompt: 'Je pourrai utiliser ce que j’ai appris.' },
        { id: 'questions', prompt: 'Le formateur a répondu à mes questions.' },
        { id: 'maitrise', prompt: 'Le formateur connaissait bien son sujet.' },
        { id: 'outils', prompt: 'Les outils utilisés pendant la formation étaient adaptés.' },
        { id: 'salle', prompt: 'La salle était adaptée à la formation.' },
        { id: 'recommandation', prompt: 'Je recommande cette formation à d’autres personnes.' },
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
