// gitprofile.config.js

const config = {
  github: {
    username: 'edray28', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'edray28',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    stackoverflow: '', // format: userid/username
    website: 'https://charming-liger-3527e0.netlify.app/',
    phone: '',
    email: 'edraytuyor@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1smZ00y-WiV_BIZ-2qUVVLtKcxwqgblne/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Bootstrap',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
  ],
   certifications: [
    {
      name: 'Introduction to Packet Tracer',
      body: 'Cisco Networking Academy introduction to Packet Tracer Badge',
      year: 'Feb 2024',
      link: 'https://drive.google.com/file/d/11ZEQaZG4F0FQ5mSfw9JDf2SrVskqlfRC/view?usp=sharing'
    },
     
    {
      name: 'Introduction to Cybersecurity',
      body: 'Cisco Networking Academy Introduction to Cybersecurity Badge',
      year: 'Dec 2023',
      link: 'https://drive.google.com/file/d/1QNrREX5GDqK_LyapkcWZMqaFRAJheE_u/view?usp=sharing'
    },

     {
      name: 'Computer Hardware Basics',
      body: 'Cisco Networking Academy Computer Hardware Basics Badge',
      year: 'Dec 2023',
      link: 'https://drive.google.com/file/d/1uVicqwdga8T80nxmwud-NY6sKIUGFrw6/view?usp=sharing'
    },
     
     {
      name: 'Foundever WCC Site IT Internship',
      body: 'Foundever WCC Site IT 486 Hours of Internship',
      year: 'June 2023',
      link: 'https://drive.google.com/file/d/10LeHCtBqOIxEkXuSdShnBKNWg7ovTD14/view?usp=sharing'
    },
    {
      name: 'SAP Business One - Certificate of Completion',
      body: 'SAP Advance (Implementation & Support)',
      year: 'June 2022',
      link: 'https://drive.google.com/file/d/1PlFkgyJ1enZ9hA0cDaXPYMkO43Yp2Yvs/view?usp=sharing'
    },
    {
      name: 'Course Certificate',
      body: 'Cloud Basics: Development and Basic Concepts',
      year: 'March 2022',
      link: 'https://drive.google.com/file/d/13xcInST1PCCVVUqUoECrZx_N6X5KuBjR/view?usp=sharing'
    },
    {
      name: 'DevFest 2022 Participation',
      body: 'Breaking the Barriers to Dive into the Future, with the topic User Interface and User Experience Design',
      year: 'March 2022',
      link: 'https://drive.google.com/file/d/10wSIxqhDbdJGUQSOtLCreVkSQWNqbkVo/view?usp=sharing'
    },
    {
      name: 'Alliance of Leading Programmers through Heuristic Adaptation (Alpha)',
      body: 'A Certificate of Recognition given to members of Alpha in STI College Ortigas Cainta',
      year: 'June 2021',
      link: 'https://drive.google.com/file/d/1c9Xjy9zEvgMwadUuwQStUT8cwb6XkZz2/view?usp=sharing'
    },
    {
      name: 'DevFest 2022 Participation',
      body: 'Breaking the Barriers to Dive into the Future, with the topic Blockchain Technology',
      year: 'March 2022',
      link: 'https://drive.google.com/file/d/1r8s66X_xLooielp9xlACapDIBQADgzqq/view?usp=sharing'
    },
    {
      name: 'DevFest 2022 Participation',
      body: 'Breaking the Barriers to Dive into the Future, with the topic Artificial Intelligence',
      year: 'March 2022',
      link: 'https://drive.google.com/file/d/18PTTgSLGqTqFU6_bUOMVDEMuQhCoFhEA/view?usp=sharing'
    },
    {
      name: 'SAP Business One - Certificate of Completion',
      body: 'SAP BASIC (Logistics and Financials)',
      year: 'March 2021',
      link: 'https://drive.google.com/file/d/176SHA202Mqj9lLMVIC1qvivNksmMgGFT/view?usp=sharing'
    },
    {
      name: 'Think Big! At Ideathon - Certificate of Participation',
      body: 'IDEAL (INNOVATIVE IDEAS THAT WILL PROVIDE OTHERS AN ENHANCED AND ACCURATE LEARNING)',
      year: 'October 2019',
      link: 'https://drive.google.com/file/d/1rrEVQhynStmdN1OuEsGhI2iFjiL6V-IZ/view?usp=sharing'
    },
  ], 
  education: [
    {
      institution: 'STI College Ortigas Cainta',
      degree: 'Bachelor of Science in Information Technology (BSIT)',
      from: '2019',
      to: '2023',
    },
    {
      institution: 'STI College Ortigas Cainta',
      degree: 'Mobile App and Web Development (MAWD)',
      from: '2017',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
 /* externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  */
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
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
      'procyon',
    ],

    // Custom theme
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
};

export default config;
