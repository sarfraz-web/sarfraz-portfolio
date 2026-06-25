/** @format */

const projects = [
  {
    id: 0,
    title: "BackdropAI",
    description:
      "An AI tool for text-over-image generation with dynamic styling, designed to help creators produce fast visual content. Built with React, FastAPI, and diffusion-based models.",
    tags: ["React", "FastAPI", "Python", "Stable Diffusion", "Generative AI"],
    githubLink: "https://github.com/sarfraz-web",
    demoLink: "",
    features: [
      {
        feat: "Generates styled image compositions from text prompts for creator-focused content workflows.",
      },
      {
        feat: "Combines a React interface with FastAPI services and diffusion-based generation.",
      },
    ],
  },
  {
    id: 1,
    title: "Pingo",
    description:
      "A real-time internet speed testing platform using WebSockets and Node.js for bandwidth simulation, latency monitoring, and responsive network feedback.",
    tags: ["Node.js", "WebSockets", "JavaScript", "Real-Time Systems"],
    githubLink: "https://github.com/sarfraz-web",
    demoLink: "",
    features: [
      {
        feat: "Uses WebSockets for live bandwidth simulation and latency updates.",
      },
      {
        feat: "Built to give users clear, real-time network performance feedback.",
      },
    ],
  },
  {
    id: 2,
    title: "Cover Letter Generator",
    description:
      "An AI tool that generates personalized, ATS-friendly cover letters from resume data and job descriptions using RAG with FAISS, MiniLM embeddings, GPT-3.5, and a clean Gradio interface.",
    tags: ["Python", "RAG", "FAISS", "MiniLM", "GPT-3.5", "Gradio"],
    githubLink: "https://github.com/sarfraz-web",
    demoLink: "",
    features: [
      {
        feat: "Retrieves relevant resume context with FAISS and MiniLM embeddings.",
      },
      {
        feat: "Uses GPT-3.5 to draft tailored, ATS-friendly cover letters from job descriptions.",
      },
      {
        feat: "Provides a simple Gradio interface for quick document generation.",
      },
    ],
  },
  {
    id: 3,
    title: "Hybrid Transformer Disaster Tweet Classifier",
    description:
      "A research-driven NLP model for disaster tweet classification using BERT and RoBERTa. The dual-encoder transformer approach achieved 92.3% accuracy and 93.1% F1-score.",
    tags: ["BERT", "RoBERTa", "NLP", "PyTorch", "Transformers", "Research"],
    githubLink: "https://github.com/sarfraz-web",
    demoLink: "",
    features: [
      {
        feat: "Built a dual-encoder transformer model with enhanced context representation.",
      },
      {
        feat: "Used mean-pooled feature fusion and focal loss to improve imbalanced classification performance.",
      },
      {
        feat: "Published in ITEGAM-JETIA with 92.3% accuracy and 93.1% F1-score.",
      },
    ],
  },
];

const topFiveProjects = [projects[0], projects[1], projects[2]];
const researchProjects = [projects[3]];

const typesOfProjects = [
  {
    typeName: "Featured AI Projects",
    listOf: topFiveProjects,
  },
  {
    typeName: "Research Work",
    listOf: researchProjects,
  },
  {
    typeName: "All Projects",
    listOf: projects,
  },
];

export { projects, topFiveProjects, typesOfProjects };
