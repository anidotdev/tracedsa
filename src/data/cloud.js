import lessonContent from '../content/cloud/01-what-actually-is-cloud/01-01-what-is-a-server.md?raw'

export const cloudChapters = [
  {
    number: '01',
    title: 'What Actually Is Cloud?',
    lessons: [
      {
        number: '01.1',
        slug: 'what-is-a-server',
        title: 'What Is a Server?',
        description: 'Start with the machine that actually does the work behind a service.',
        content: lessonContent,
      },
    ],
  },
]

export const cloudLessons = cloudChapters.flatMap((chapter) =>
  chapter.lessons.map((lesson) => ({
    ...lesson,
    chapterNumber: chapter.number,
    chapterTitle: chapter.title,
  })),
)
