export type Project = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  details: string;
  stack: string[];
  outcomes: string[];
  image: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: 'rpost',
    title: 'RPOST',
    subtitle: 'Campus Social Platform',
    summary:
      'Built a centralized social platform for RPI students to share updates, message peers, and access campus events.',
    details:
      'Developed a full-stack web application designed to unify campus communication, social interaction, and event discovery. Implemented core social features including posting, messaging, and engagement tools while integrating Firebase for secure media storage and MySQL-backed data persistence. Added AI-powered capabilities using OpenAI and Bing APIs to enhance content discovery and provide an interactive chatbot experience.',
    stack: ['PHP', 'JavaScript', 'HTML/CSS', 'MySQL', 'Firebase', 'OpenAI API', 'Bing API'],
    outcomes: [
      'Enabled real-time student interaction through a purpose-built campus platform.',
      'Implemented secure media storage with role-based access controls.',
      'Delivered AI-driven search and chatbot features to improve information access.'
    ],
    image: '/images/rpost.svg',
    links: [
      { label: 'GitHub', href: 'https://github.com/bud/rpost' }
    ]
  },
  {
    id: 'vask',
    title: 'Vask',
    subtitle: 'Voice-to-Action AI Framework',
    summary:
      'Built a voice-to-action framework connecting voice, LLM reasoning, and tools for business workflows.',
    details:
      'Designed a modular voice-to-action system that turns natural language, spoken or typed, into automated business actions. Features multi-provider LLM support (Gemini, Claude, OpenAI), a YAML-driven workflow engine with conditional branching and approval gates, and a plugin system for Slack, Google Workspace, and SQL databases. Deployable as a REST API, CLI, or MCP server with RBAC authentication and audit logging.',
    stack: ['Python', 'Whisper API', 'Gemini API', 'Claude API', 'OpenAI API', 'Docker', 'MCP'],
    outcomes: [
      'Delivered multi-provider voice-to-action pipeline for business automation.',
      'Built plugin system integrating Slack, Google Workspace, and SQL databases.',
      'Implemented YAML workflow engine with conditional branching and human approval gates.'
    ],
    image: '/images/vask.svg',
    links: [
      { label: 'GitHub', href: 'https://github.com/bud/vask' }
    ]
  },
  {
    id: 'poll-requested',
    title: 'Poll Requested',
    subtitle: 'Campus Polling Platform',
    summary:
      'Designed a secure polling platform using RPI authentication to prevent duplicate voting and enable campus feedback.',
    details:
      'Built a web-based polling system tailored for academic environments, allowing verified RPI users to create and participate in polls without external accounts. Implemented authentication-backed voting constraints, Azure deployment, and MySQL persistence to ensure secure, single-response participation. Addressed CORS and infrastructure challenges while transitioning from local development to cloud hosting.',
    stack: ['PHP', 'JavaScript', 'HTML/CSS', 'MySQL', 'Azure'],
    outcomes: [
      'Delivered authentication-gated polling to prevent vote duplication.',
      'Deployed scalable cloud-hosted system for campus-wide usage.',
      'Solved cross-origin and deployment challenges in production environment.'
    ],
    image: '/images/poll-requested.svg',
    links: [
      { label: 'GitHub', href: 'https://github.com/bud/poll-requested' }
    ]
  },
  {
    id: 'picplace',
    title: 'PicPlace',
    subtitle: 'Image Hosting Web App',
    summary:
      'Built a lightweight image-sharing platform focused on upload, storage, and retrieval workflows.',
    details:
      'Created a web-based image hosting application that allows users to upload and manage content through a streamlined interface, emphasizing backend integration, storage handling, and user-driven content workflows.',
    stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    outcomes: [
      'Implemented full upload-to-storage pipeline for user-managed media.',
      'Designed simple, scalable architecture for content hosting workflows.'
    ],
    image: '/images/picplace.svg',
    links: [
      { label: 'GitHub', href: 'https://github.com/bud/picplace' }
    ]
  },
  {
    id: 'razz',
    title: 'Razz',
    subtitle: '2D Platformer Engine',
    summary:
      'Built a retro-style side-scrolling platformer focused on responsive mechanics and gameplay systems.',
    details:
      'Developed a multi-level 2D platformer implementing physics-based movement, dash mechanics, grappling traversal, and collision systems. Designed animation states, sound integration, and gameplay timing to create a polished arcade-style experience inspired by classic 8-bit titles.',
    stack: ['Unity', 'C#', 'Physics Systems', 'Audio Integration'],
    outcomes: [
      'Implemented custom movement and traversal mechanics across three levels.',
      'Integrated sound design and animation pipelines for immersive gameplay.',
      'Explored real-time input handling and game state architecture.'
    ],
    image: '/images/razz.svg',
    links: [
      { label: 'Play', href: 'https://arulh.itch.io/razz' }
    ]
  },
  {
    id: '8bit-mario',
    title: '8-Bit Mario',
    subtitle: 'Java Platformer (Greenfoot)',
    summary:
      'Built a Mario-style platformer to learn Java and object-oriented game development using Greenfoot.',
    details:
      'Developed a retro-inspired platformer as an introduction to Java and the Greenfoot framework, implementing character movement, enemy interactions, collision detection, and win-state logic. The project focused on object-oriented design, event-driven gameplay, and building foundational game mechanics such as jumping, attacking, and level progression.',
    stack: ['Java', 'Greenfoot', 'OOP', 'Collision Systems'],
    outcomes: [
      'Applied object-oriented programming to interactive game design.',
      'Implemented player controls, enemy behavior, and win conditions.',
      'Built foundational understanding of Java through hands-on development.'
    ],
    image: '/images/8-bit-mario.svg',
    links: [
      { label: 'GitHub', href: 'https://github.com/bud/8-bit-mario' }
    ]
  }
];
