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
    image: '/images/rpost.png',
    links: [
      { label: 'GitHub', href: 'https://github.com/bud/rpost' }
    ]
  },
  {
    id: 'voxquery',
    title: 'VoxQuery',
    subtitle: 'Real-Time Voice AI Interface',
    summary:
      'Created a hands-free voice assistant pipeline that converts live speech into AI-driven responses.',
    details:
      'Engineered an end-to-end voice interaction system that captures system audio, transcribes it using Whisper, and routes structured queries to Gemini for contextual responses. Designed a hotkey-triggered workflow to enable seamless real-time interaction, reducing friction between human input and AI reasoning.',
    stack: ['Python', 'Whisper API', 'Gemini API', 'Audio Processing'],
    outcomes: [
      'Delivered low-latency speech-to-AI pipeline for real-time workflows.',
      'Built automated audio capture and transcription system.',
      'Explored multimodal AI integration for natural interaction models.'
    ],
    image: '/images/voxquery.png',
    links: [
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
    image: '/images/poll-requested.png',
    links: [
      { label: 'GitHub', href: 'https://github.com/bud/poll-website' }
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
    stack: ['JavaScript', 'Node.js', 'Express', 'Database Storage'],
    outcomes: [
      'Implemented full upload-to-storage pipeline for user-managed media.',
      'Designed simple, scalable architecture for content hosting workflows.'
    ],
    image: '/images/picplace.png',
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
    stack: ['Game Engine', 'C#', 'Physics Systems', 'Audio Integration'],
    outcomes: [
      'Implemented custom movement and traversal mechanics across three levels.',
      'Integrated sound design and animation pipelines for immersive gameplay.',
      'Explored real-time input handling and game state architecture.'
    ],
    image: '/images/razz.png',
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
    image: '/images/8-bit-mario.png',
    links: [
      { label: 'GitHub', href: 'https://github.com/bud/8-bit-mario' }
    ]
  }
];
