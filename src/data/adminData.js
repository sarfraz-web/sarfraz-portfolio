/** @format */

import {
  GitHubLogo,
  CodeforcesLogo,
  LeetCodeLogo,
  LinkedInLogo,
  XLogo,
  DevToLogo,
  DiscordLogo,
  FacebookLogo,
  GmailLogo,
  KaggleLogo,
  MediumLogo,
  SlackLogo,
  StackOverFlowLogo,
  YTLogo,
} from "@/assets/images";

const adminName = "Mohammad Sarfraz";

const AllSocialMedia = [
  {
    name: "GitHub",
    logo: GitHubLogo,
    isEnable: true,
    url: "https://github.com/sarfraz-web",
  },
  {
    name: "Codeforces",
    logo: CodeforcesLogo,
    isEnable: false,
    url: "",
  },
  {
    name: "LeetCode",
    logo: LeetCodeLogo,
    isEnable: false,
    url: "",
  },
  {
    name: "LinkedIn",
    logo: LinkedInLogo,
    isEnable: true,
    url: "https://www.linkedin.com/in/sarfraz-tech/",
  },
  {
    name: "Twitter (X)",
    logo: XLogo,
    isEnable: false,
    url: "",
  },
  {
    name: "Dev.to",
    logo: DevToLogo,
    isEnable: false,
    url: "",
  },
  {
    name: "Discord",
    logo: DiscordLogo,
    isEnable: false,
    url: "https://discord.com/users/1154752660222791722",
  },
  {
    name: "Facebook",
    logo: FacebookLogo,
    isEnable: false,
    url: "",
  },
  {
    name: "Gmail",
    logo: GmailLogo,
    isEnable: true,
    url: "mailto:mdsarfraz4499@gmail.com",
  },
  {
    name: "Kaggle",
    logo: KaggleLogo,
    isEnable: false,
    url: "",
  },
  {
    name: "Medium",
    logo: MediumLogo,
    isEnable: false,
    url: "",
  },
  {
    name: "Slack",
    logo: SlackLogo,
    isEnable: false,
    url: "",
  },
  {
    name: "Stack Overflow",
    logo: StackOverFlowLogo,
    isEnable: false,
    url: "",
  },
  {
    name: "YouTube",
    logo: YTLogo,
    isEnable: false,
    url: "https://www.youtube.com/c/yourchannelname",
  },
];

const SocialLinks = {
  githubLink: "https://github.com/sarfraz-web",
  codeforcesLink: "",
  leetcodeLink: "",
  linkedInLink: "https://www.linkedin.com/in/sarfraz-tech/",
  twitterLink: "",
  devToLink: "",
  discordLink: "",
  facebookLink: "",
  gmailLink: "mailto:mdsarfraz4499@gmail.com",
  kaggleLink: "",
  mediumLink: "",
  slackLink: "",
  stackOverflowLink: "",
  youtubeLink: "",
};

const WhatIamDoingNow = {
  lastUpdate: "June 25, 2026",
  list: [
    "Pursuing M.Tech in Artificial Intelligence at Aligarh Muslim University",
    "Building backend systems and generative AI pipelines with FastAPI, PyTorch, and Transformers",
    "Turning AI research into production-ready tools",
    "Improving projects around RAG, real-time systems, and diffusion-based generation",
  ],
};

const ToolBox = {
  tagline: "Master Your Craft with the Right Gear",

  ToolList: {
    Technologies: [
      {
        name: "Programming Languages",
        list: ["Python", "JavaScript", "SQL"],
      },
      {
        name: "Frameworks",
        list: ["FastAPI", "Django", "React", "Flask"],
      },
      {
        name: "AI/ML Libraries",
        list: ["PyTorch", "Transformers", "Pandas", "NumPy", "FAISS"],
      },
      {
        name: "Database Technologies",
        list: ["MongoDB", "PostgreSQL", "SQL"],
      },
    ],

    Tools: [
      {
        name: "Version Control",
        list: ["Git", "GitHub"],
      },
      {
        name: "IDEs/Editors",
        list: ["VS Code", "PyCharm", "Jupyter Notebook"],
      },
      {
        name: "Design Tools",
        list: ["Canva"],
      },
      {
        name: "API & Testing",
        list: ["Postman", "OpenAI APIs", "WebSockets"],
      },
    ],

    Hardware: [
      {
        name: "Laptop/PC",
        list: ["Asus TUF Gaming F15"],
      },
      {
        name: "Development Boards",
        list: [],
      },
      {
        name: "Peripherals",
        list: ["Mechanical Keyboard"],
      },
      {
        name: "AI-Specific Hardware",
        list: [],
      },
    ],

    Platforms: [
      {
        name: "Cloud Platforms",
        list: ["Docker"],
      },
      {
        name: "Collaboration",
        list: ["GitHub", "Agile Development"],
      },
      {
        name: "Learning Platforms",
        list: ["Coursera", "Research Papers", "YouTube"],
      },
      {
        name: "Competitive Coding",
        list: ["Codeforces", "LeetCode"],
      },
    ],
  },
};

const MyHobbies = [
  // {
  //   name: "Playing Games 🎮",
  //   message:
  //     "Because who doesn't want to save the world, level up, and be a hero... all from the comfort of my couch? 😜",
  // },

  // {
  //   name: "Watching Anime & Movies 🍿",
  //   message:
  //     "Watching epic battles and heartwarming stories, one season at a time... 😁 💥",
  // },

  // {
  //   name: "Going to the Gym 🏋️‍♂️",
  //   message:
  //     "Training for the day when my character’s strength stat finally maxes out. 💪",
  // },

  // {
  //   name: "Running 🏃‍♂️",
  //   message: "Chasing after that 'just one more level' feeling. 🏃‍♂️💨",
  // },

  // {
  //   name: "Stargazing ✨",
  //   message:
  //     "Waiting for aliens to invade and just wishing my life had a cool soundtrack. 🌌",
  // },

  // {
  //   name: "Reading 📚",
  //   message:
  //     "Feeding my brain with knowledge... and occasionally diving into a good fantasy novel. 📖🧙‍♂️",
  // },

  // {
  //   name: "Investing 📈",
  //   message:
  //     "Trying to turn my coins into EPIC loot—except it’s real life, so no respawns. 💰",
  // },
];

const FourTierMasteryData = {
  2024: [
    {
      name: "Primary", // Don't Change this,
      which: "AI/ML Developer 🤖💡",
      desc: [
        "This is where I spend most of my time building real-world AI systems with PyTorch, Transformers, NLP, RAG, and generative AI.",
        "I care about converting research ideas into useful, reliable applications.",
      ],
      skillTags: [
        "Machine Learning",
        "Deep Learning",
        "Natural Language Processing (NLP)",
        "LLMs",
        "SLMs",
        "RAG",
        "NER",
        "Generative AI",
        "PyTorch",
        "Transformers",
        "Model Deployment",
      ],
    },
    {
      name: "Secondary", // Don't Change this,
      which: "Backend & Full-Stack Developer 💻🔧",
      desc: [
        "I build scalable backend systems with FastAPI and Django, then connect them to clean React interfaces when the product needs a complete experience.",
      ],
      skillTags: [
        "React",
        "HTML5",
        "CSS3",
        "JavaScript",
        "FastAPI",
        "Django",
        "Flask",
        "APIs",
        "RESTful API",
        "WebSockets",
        "Version Control",
        "Git",
        "GitHub",
        "State Management",
        "Redux",
        "Context API",
      ],
    },
    {
      name: "Third", // Don't Change this,
      which: "Research-Oriented Builder 🧩💪",
      desc: [
        "I like studying model behavior, evaluation metrics, and architecture choices, then turning those lessons into practical AI products.",
      ],
      skillTags: ["BERT", "RoBERTa", "Focal Loss", "Model Evaluation"],
    },
    {
      name: "Fourth", // Don't Change this,
      which: "Problem Solver & Collaborator 🎯",
      desc: [
        "I value clear communication, team collaboration, and shipping useful software through disciplined, iterative development.",
      ],
      skillTags: ["Problem Solving", "Communication", "Team Collaboration", "Agile"],
    },
  ],
};

export {
  AllSocialMedia,
  WhatIamDoingNow,
  ToolBox,
  MyHobbies,
  SocialLinks,
  adminName,
  FourTierMasteryData,
};
