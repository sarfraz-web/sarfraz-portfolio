/** @format */

import { LeetCodeLogo, GitHubLogo, CodeforcesLogo } from "@/assets/images";

const AllBadges = [
  // Add coding-platform badges here when you want them visible on the site.
];

const AllHackathons = [
  {
    name: "AI Research Build",
    description:
      "Built and evaluated a hybrid transformer model for disaster tweet classification using BERT and RoBERTa.",
    technology: ["BERT", "RoBERTa", "NLP", "PyTorch"],
  },
  {
    name: "Generative AI Product Work",
    description:
      "Created AI tools around image generation and personalized cover-letter generation with RAG.",
    technology: ["RAG", "FastAPI", "Stable Diffusion", "OpenAI APIs"],
  },
];

const PlatFormIUse = [
  {
    name: "LeetCode",
    logo: LeetCodeLogo,
    link: "",
  },
  {
    name: "GitHub",
    logo: GitHubLogo,
    link: "https://github.com/sarfraz-web",
  },
  {
    name: "Codeforce",
    logo: CodeforcesLogo,
    link: "",
  },
];

const CompetitionNames = [
  // {
  //   name: "Leetcode Weekly 100",
  //   platform: "LeetCode",
  //   rank: "1",
  //   prize: "10,000",
  //   link: ""
  // },
  // {
  //   name: "Leetcode Weekly 100",
  //   platform: "LeetCode",
  //   rank: null,
  //   prize: null,
  //   link: ""
  // },
  // {
  //   name: "Leetcode Weekly 100",
  //   platform: "LeetCode",
  //   rank: "101",
  //   prize: "Laptop",
  //   link: ""
  // },
];

export { AllBadges, AllHackathons, PlatFormIUse, CompetitionNames };
