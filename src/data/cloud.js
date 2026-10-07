import { getCloudContent } from '../content/cloud/content'

export const cloudChapters = [
  {
    number: '01',
    title: 'What Actually Is Cloud?',
    lessons: [
      {
        number: '01.1',
        slug: 'what-is-a-server',
        title: 'What Is a Server?',
        description:
          'Start with the machine that actually does the work behind a service.',
        contentFile: '01-01-what-is-a-server.md',
      },
      {
        number: '01.2',
        slug: 'what-is-a-data-center',
        title: 'What Is a Data Center?',
        description:
          'Understand where physical servers live and what keeps them running.',
        contentFile: '01-02-what-is-a-data-center.md',
      },
      {
        number: '01.3',
        slug: 'what-is-cloud-computing',
        title: 'What Is Cloud Computing?',
        description:
          'Understand what cloud computing actually means and why infrastructure can be consumed as a service.',
        contentFile: '01-03-what-is-cloud-computing.md',
      },
      {
        number: '01.4',
        slug: 'why-does-the-cloud-exist',
        title: 'Why Does the Cloud Exist?',
        description:
          'Understand the infrastructure problems that made cloud computing useful.',
        contentFile: '01-04-why-does-the-cloud-exist.md',
      },
      {
        number: '01.5',
        slug: 'physical-servers-vs-virtual-machines',
        title: 'Physical Servers vs Virtual Machines',
        description:
          'Understand how physical servers can provide multiple isolated virtual environments.',
        contentFile: '01-05-physical-servers-vs-virtual-machines.md',
      },
      {
        number: '01.6',
        slug: 'virtualization',
        title: 'Virtualization',
        description:
          'Learn how virtualization creates software-defined environments on physical hardware.',
        contentFile: '01-06-virtualization.md',
      },
      {
        number: '01.7',
        slug: 'what-is-a-virtual-machine',
        title: 'What Is a Virtual Machine?',
        description:
          'Break down what a VM contains and how it behaves like a computer.',
        contentFile: '01-07-what-is-a-virtual-machine.md',
      },
      {
        number: '01.8',
        slug: 'what-is-a-vps',
        title: 'What Is a VPS?',
        description:
          'Understand what a virtual private server is and where it fits into cloud infrastructure.',
        contentFile: '01-08-what-is-a-vps.md',
      },
      {
        number: '01.9',
        slug: 'cloud-service-providers',
        title: 'Cloud Service Providers',
        description:
          'Understand what AWS, Azure, Google Cloud, Oracle Cloud, and similar providers actually provide.',
        contentFile: '01-09-cloud-service-providers.md',
      },
      {
        number: '01.10',
        slug: 'on-premise-vs-cloud',
        title: 'On-Premise vs Cloud',
        description:
          'Compare owning and operating infrastructure yourself with consuming infrastructure from a cloud provider.',
        contentFile: '01-10-on-premise-vs-cloud.md',
      },
      {
        number: '01.11',
        slug: 'iaas-paas-saas',
        title: 'IaaS, PaaS & SaaS',
        description:
          'Understand the different levels of cloud abstraction and responsibility.',
        contentFile: '01-11-iaas-paas-saas.md',
      },
      {
        number: '01.12',
        slug: 'putting-it-all-together',
        title: 'Putting It All Together',
        description:
          'Connect the concepts from physical servers and data centers to cloud services and application deployment.',
        contentFile: '01-12-putting-it-all-together.md',
      },
    ],
  },
]

export const cloudLessons = cloudChapters.flatMap((chapter) =>
  chapter.lessons.map((lesson) => ({
    ...lesson,
    content: getCloudContent(lesson.contentFile),
    chapterNumber: chapter.number,
    chapterTitle: chapter.title,
  }))
)
