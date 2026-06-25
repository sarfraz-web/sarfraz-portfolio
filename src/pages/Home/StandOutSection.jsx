/** @format */

import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GitHubLogo, GmailLogo, LinkedInLogo } from "@/assets/images";
import { SocialLinks } from "@/data/adminData";
import { gridAboutMeBGImg } from "@/data/imgSupplier";

const StandOutSection = () => {
  return (
    <>
      {/* Grid Layout */}
      <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-6 gap-4 [&>*]:dark:border-white [&>*]:border-black ">
        {/* 1 - Learn More About me Card */}
        <Card className="bg-transparent   backdrop-blur-xl p-0 overflow-hidden sm:col-span-1 sm:h-80 h-60 col-span-2 cursor-pointer hover:scale-105 duration-700">
          <Link
            to="/about-me"
            className="relative h-full text-white hover:text-white"
          >
            <img
              src={gridAboutMeBGImg}
              alt="Profile"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
              <h2 className="text-lg font-semibold mb-2">
                Learn more about me
              </h2>
            </div>
          </Link>
        </Card>

        {/* 2 */}
        <div className="h-80 grid sm:col-span-3 grid-cols-1 col-span-2 sm:grid-cols-1 sm:gap-6 sm:mb-0 mb-4  ">
          {/* All Social Media Cards  */}
          <div className="h-40 grid sm:gap-6 gap-4 sm:grid-cols-4 grid-cols-2 col-span-1 [&>*]:dark:border-white [&>*]:border-black ">
            {/* GitHub Card */}
            <Card className="bg-transparent h-40 border-white p-6 flex justify-center items-center  cursor-pointer hover:scale-105 duration-700">
              <a
                target="_blank"
                rel="noreferrer"
                href={SocialLinks["githubLink"]}
                aria-label="Open GitHub profile"
              >
                <img
                  src={GitHubLogo}
                  alt="GitHub"
                  height="80px"
                  width="80px"
                  className=" rounded-full"
                />
              </a>
            </Card>

            {/* Email Card */}
            <Card className="bg-transparent h-40 border-white p-6 flex justify-center items-center cursor-pointer hover:scale-105 duration-700">
              <a href={SocialLinks["gmailLink"]} aria-label="Send email">
                <img
                  src={GmailLogo}
                  alt="Email"
                  height="80px"
                  width="80px"
                  className="rounded-full"
                />
              </a>
            </Card>

            {/* LinkedIn Card */}
            <Card className="bg-transparent h-40  border-white p-6 flex justify-center items-center cursor-pointer hover:scale-105 duration-700">
              <a
                target="_blank"
                rel="noreferrer"
                href={SocialLinks["linkedInLink"]}
                aria-label="Open LinkedIn profile"
              >
                <img
                  src={LinkedInLogo}
                  alt="LinkedIn"
                  height="80px"
                  width="80px"
                  className=" rounded-full"
                />
              </a>
            </Card>

            {/* Projects Card */}
            <Card className="bg-transparent h-40 border-white p-6 flex justify-center items-center cursor-pointer hover:scale-105 duration-700">
              <Link
                to="/projects"
                className="text-center dark:text-white text-black hover:text-orange-500 dark:hover:text-orange-500"
              >
                <span className="block text-3xl font-bold">AI</span>
                <span className="text-sm">Projects</span>
              </Link>
            </Card>
          </div>

          <div className="hidden sm:block h-40 sm:col-span-1 [&>*]:dark:border-white [&>*]:border-black">
            {/* Connections Card */}

            <Card className="bg-transparent border-white p-8  cursor-pointer hover:scale-105 duration-700">
              <Link
                className="dark:text-white text-black hover:text-orange-500 dark:hover:text-orange-500"
                to="/connect"
              >
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                  <p className="text-gray-400">
                    Reach me for AI, backend, and research-driven product work.
                  </p>
                </div>
              </Link>
            </Card>
          </div>
        </div>

        {/* 3 - Toolbox Card */}
        <Card className=" h-96 bg-transparent border-white p-6 sm:col-span-2 col-span-1 cursor-pointer hover:scale-105 duration-700">
          <Link
            to="/Four-Tier-Mastery"
            className="dark:text-white text-black hover:text-orange-500 dark:hover:text-orange-500"
          >
            <h2 className="text-2xl font-semibold mb-4">Toolbox</h2>
            <p className="text-gray-400 mb-6">
              FastAPI, PyTorch, Transformers, React, Docker, PostgreSQL, and
              the tools I use to build AI products.
            </p>
            <div>
              {/* Orbital Layout Placeholder */}
              <div className=" inset flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500/20  flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-blue-500/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-blue-500/40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Card>

        <div className="h-96 grid sm:grid-cols-1 sm:col-span-2 col-span-1 sm:gap-6 gap-4 [&>*]:dark:border-white [&>*]:border-black">
          {/* Writing Contributions */}
          <Card className="bg-transparent border-white backdrop-blur-xl p-6 cursor-pointer hover:scale-105 duration-700">
            <Link
              className="dark:text-white text-black hover:text-orange-500 dark:hover:text-orange-500"
              to="/experience"
            >
              <div className="text-center ">
                <h2 className="sm:text-2xl text-lg font-semibold mb-4">
                  Research & Writing
                </h2>
                <p className="text-gray-400">
                  Published work on hybrid transformer models for disaster tweet
                  classification.
                </p>
              </div>
            </Link>
          </Card>

          {/* Skills Card */}
          <Card className="bg-transparent border-white backdrop-blur-xl p-6  cursor-pointer hover:scale-105 duration-700">
            <Link
              className="dark:text-white text-black hover:text-orange-500 dark:hover:text-orange-500"
              to="/about-me"
            >
              <div className="text-center">
                <h2 className="sm:text-2xl text-lg font-semibold mb-4">
                  Skills
                </h2>
                <p className="text-gray-400">
                  Python, FastAPI, Django, React, PyTorch, RAG, NLP, and
                  real-time systems.
                </p>
              </div>
            </Link>
          </Card>
        </div>
      </div>
    </>
  );
};

export default StandOutSection;
