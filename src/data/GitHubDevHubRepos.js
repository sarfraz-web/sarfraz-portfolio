const allReposNames = [
  {
    name: "BackdropAI",
    desc: "AI tool for text-over-image generation with dynamic styling using React, FastAPI, and diffusion-based models.",
    repoLink: "https://github.com/sarfraz-web",
  },
  {
    name: "Pingo",
    desc: "Real-time internet speed testing platform using WebSockets and Node.js for bandwidth simulation and latency monitoring.",
    repoLink: "https://github.com/sarfraz-web",
  },
  {
    name: "Cover Letter Generator",
    desc: "RAG-based AI tool that creates personalized, ATS-friendly cover letters from resume data and job descriptions.",
    repoLink: "https://github.com/sarfraz-web",
  },
  {
    name: "Hybrid Transformer Disaster Tweet Classifier",
    desc: "Published BERT + RoBERTa research model for disaster tweet classification with 92.3% accuracy and 93.1% F1-score.",
    repoLink: "https://github.com/sarfraz-web",
  },
];

const topRepos = [allReposNames[0], allReposNames[2]];

const typeWiseArrangedRepo = [
  {
    typeName: "Featured Work",
    listOf: topRepos,
  },
  {
    typeName: "All Work",
    listOf: allReposNames,
  },
];

export { allReposNames, typeWiseArrangedRepo };
