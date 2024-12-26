// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'smartjoker0117',
  },

  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: ['smartjoker0117/gitprofile', 'smartjoker0117/pandora'],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: `Chewy Platform`,
          description: `Contributed to the development and maintenance of Chewy Platform projects including Internal UI Library, Customer Service Dashboard, and so on.`,
          imageUrl:
            'https://imgcdn.stablediffusionweb.com/2024/9/7/051ae04d-1d62-46d9-91ce-f66ea7e12aa6.jpg',
          link: 'https://www.chewy.com',
        },
        {
          title: `HealthMine HRA`,
          description: `Updated HealthMine's Health Risk Assessment (HRA) project improving COVID-19-related data handling and user experience during the pandemic.`,
          imageUrl:
            'https://thumbs.dreamstime.com/b/health-risk-assessment-concept-icon-health-risk-assessment-concept-icon-patient-diagnostics-checkup-disease-family-doctor-213638838.jpg',
          link: 'https://www.healthmine.com/digital-hra',
        },
        {
          title: `Popcorn and Chill`,
          description: `Users can see which movies are popular currently, search and enjoy movies based on their ratings, title, actor, or other details by simple one click.`,
          imageUrl:
            'https://pics.craiyon.com/2024-01-26/I_Mm_hWZQUuC7f8F4PautQ.webp',
          link: 'https://github.com/smartjoker0117/popcorn-and-chill',
        },
        {
          title: `News App - React Native`,
          description: `Responsive mobile app where users can browse today's news with a smart and responsive interface - Personal project using React Native`,
          imageUrl:
            'https://static.vecteezy.com/system/resources/previews/016/817/592/non_2x/phone-live-news-icon-outline-smart-online-vector.jpg',
          link: 'https://github.com/smartjoker0117/react-native-news-app',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Jarrod Henry',
    description:
      'Jarrod Henry | Senior Software Engineer | Full Stack | 10+ Years | JavaScript | TypeScript | React | Node.js | Java | Python | C# | .NET | Irving, Texas, United States | Remote',
    imageURL:
      'file:///D:/Devel/Portfolio/smartjoker0117.github.io/public/logo.png',
  },
  social: {
    linkedin: 'jarrod-henry-link',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '+1 (404) 448-1373',
    email: 'jarrod.henry.pro@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1GVsduu1nSKirqhrKAQRoeypwyS6FCzTG/view?usp=drive_link',
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Node.js',
    'Java',
    'Python',
    'C#',
    'RESTful API',
    'GraphQL',
    'FastAPI',
    'MongoDB',
    'MySQL',
    'SQL Server',
    'PostgreSQL',
    'AWS',
    'Azure',
    'GCP',
    'Git',
    'Docker',
    'Kubernetes',
  ],
  experiences: [
    {
      company: 'Chewy',
      position: 'Senior Software Engineer',
      from: 'Jan 2021',
      to: 'Oct 2024',
      companyLink: 'https://www.chewy.com/',
    },
    {
      company: 'Insight Global',
      position: 'Full Stack Engineer',
      from: 'Jan 2016',
      to: 'Dec 2020',
      companyLink: 'https://insightglobal.com/',
    },
    {
      company: 'Citadel',
      position: 'Full Stack Developer',
      from: 'Jun 2014',
      to: 'Dec 2015',
      companyLink: 'https://www.citadel.com/',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'Southern Methodist University',
      degree: `Bachelor's Degree in Computer Science`,
      from: '2010',
      to: '2014',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'smartjoker', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    // id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    // id: '',
    // snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'night',

    disableSwitch: false,

    respectPrefersColorScheme: false,

    displayAvatarRing: true,

    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
