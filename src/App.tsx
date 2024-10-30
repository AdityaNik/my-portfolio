import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import "./App.css";
import image from "./assets/my-image.jpg";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaReact,
  FaXTwitter,
} from "react-icons/fa6";
import {
  SiEthereum,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRust,
  SiSolana,
  SiSolidity,
  SiTypescript,
} from "react-icons/si";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { FiExternalLink } from "react-icons/fi";
import { experience, projects } from "./lib/utils";

function App() {
  return (
    <div className="font-mono">
      <div className="flex justify-between mx-32 my-8 text-xl">
        <div>dfsdf</div>
        <div className="flex gap-10">
          <div>about.</div>
          <div>projects.</div>
          <div>experience.</div>
        </div>
      </div>

      <div className="flex flex-col mt-24 items-center text-white">
        <div className="grid grid-flow-col gap-10 w-[850px]">
          <div className="border-white border-2 rounded-xl p-2 transition duration-300 ease-in-out transform hover:scale-105">
            <img className="h-[280px]" src={image} />
          </div>
          <div>
            <div className="flex items-baseline gap-4">
              <h1 className="scroll-m-20 text-3xl tracking-tight lg:text-4xl">
                Aditya Nikam
              </h1>
              <p>(he/him)</p>
            </div>
            <p className="leading-7 [&:not(:first-child)]:mb-4">
              full stack developer from india.
            </p>
            <p>
              I'm an engineer dedicated to building scalable websites and
              applications that make a meaningful impact.With a focus on user
              experience, design aesthetics, and developer satisfaction, I
              create interfaces and experiences that captivate users and align
              with brand identities. Let's collaborate to craft something
              extraordinary for the digital world.
            </p>
            <div className="flex gap-6 my-4">
              <FaGithub
                className="transition ease-in-out duration-200 transform hover:scale-125 hover:text-green-700"
                size={30}
              />
              <FaLinkedinIn
                className="transition ease-in-out duration-200 transform hover:scale-125 hover:text-green-700"
                size={30}
              />
              <FaXTwitter
                className="transition ease-in-out duration-200 transform hover:scale-125 hover:text-green-700"
                size={30}
              />
              <FaInstagram
                className="transition ease-in-out duration-200 transform hover:scale-125 hover:text-green-700"
                size={30}
              />
            </div>
          </div>
        </div>

        <div className="mt-20 mb-4 font-bold">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            cool teck stack I work with
          </h4>
        </div>

        <div className="flex gap-10 m-4 cursor-pointer">
          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiExpress
              size={40}
              className="transition ease-in-out duration-200 transform hover:scale-125"
            />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTypescript
              size={40}
              className="transition ease-in-out duration-200 transform hover:scale-125"
            />
          </a>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaReact
              size={40}
              className="transition ease-in-out duration-200 transform hover:scale-125"
            />
          </a>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiNextjsFill
              size={40}
              className="transition ease-in-out duration-200 transform hover:scale-125"
            />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTailwindCssFill
              size={40}
              className="transition ease-in-out duration-200 transform hover:scale-125"
            />
          </a>
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiMongodb
              size={40}
              className="transition ease-in-out duration-200 transform hover:scale-125"
            />
          </a>
          <a
            href="https://www.mysql.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiMysql
              size={40}
              className="transition ease-in-out duration-200 transform hover:scale-125"
            />
          </a>
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiPostgresql
              size={40}
              className="transition ease-in-out duration-200 transform hover:scale-125"
            />
          </a>
        </div>

        <div className="flex gap-10 mb-10 cursor-pointer">
          <a
            href="https://solana.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiSolana
              size={40}
              className="transition ease-in-out duration-200 transform hover:scale-125"
            />
          </a>
          <a
            href="https://ethereum.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiEthereum
              size={40}
              className="transition ease-in-out duration-200 transform hover:scale-125"
            />
          </a>
          <a
            href="https://soliditylang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiSolidity
              size={40}
              className="transition ease-in-out duration-200 transform hover:scale-125"
            />
          </a>
          <a
            href="https://www.rust-lang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiRust
              size={40}
              className="transition ease-in-out duration-200 transform hover:scale-125"
            />
          </a>
        </div>

        <div>
          <p>I try to keep this list updated</p>
        </div>
        <a
          href="https://drive.google.com/file/d/1-bFtBl2p_2eHyaYA6t-CsT4eG-hWFJxE/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="bg-green-600 hover:bg-green-600 m-4 transition ease-in-out transform duration-300 hover:scale-110"
            style={{ borderRadius: "8px" }}
            size={"lg"}
          >
            resume
            <FiExternalLink />
          </Button>
        </a>
        <div className="mt-10">
          <div>things i have worked on...</div>
          <div className="mb-20 mt-4">
            {projects.map((project) => {
              return (
                <div className="w-[960px] px-6 my-8 hover:border-l-4 hover:border-l-green-500 cursor-pointer">
                  <div className="flex gap-2 text-lg">
                    <h3 className="scroll-m-20 text-xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <button
                    className="bg-green-300 text-gray-800 px-4 text-sm"
                    style={{ borderRadius: "5px" }}
                  >
                    Completed
                  </button>
                  <div className="text-lg ">{project.description}</div>
                  <div className="flex gap-4">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.live_link}
                    >
                      <Button
                        variant={"link"}
                        style={{ borderRadius: "8px" }}
                        className=" text-green-400 text-lg"
                      >
                        checkout
                        <FiExternalLink />
                      </Button>
                    </a>
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant={"link"}
                        style={{ borderRadius: "8px" }}
                        className=" text-green-400 text-lg"
                      >
                        Github
                        <FiExternalLink />
                      </Button>
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.technologies?.map((tech) => {
                      return (
                        <button
                          className="bg-green-300 text-gray-800 px-4 text-sm"
                          style={{ borderRadius: "5px" }}
                        >
                          {tech}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div>experience till now...</div>
          <div className="mb-20 mt-4">
            {experience.map((exp, index) => {
              return (
                <div
                  key={index}
                  className="w-[960px] px-6 my-8 hover:border-l-4 hover:border-l-green-500 cursor-pointer"
                >
                  <div className="flex gap-2 text-lg">
                    <h3 className="scroll-m-20 text-xl font-bold tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="text-gray-300"> - {exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-300">{exp.location}</div>
                  <div className="text-sm text-gray-300 mb-2">
                    {exp.duration}
                  </div>
                  <div className="text-lg">
                    {exp.description.map((desc, i) => (
                      <p key={i}>• {desc}</p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {exp.technologies?.map((tech) => {
                      return (
                        <button
                          className="bg-green-300 text-gray-800 px-4 text-sm"
                          style={{ borderRadius: "5px" }}
                        >
                          {tech}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="my-10">
            <Card className="w-[850px] bg-zinc-800">
              <CardContent>
                <div className="flex justify-center m-4">
                  nikamditya@gmail.com
                </div>
                <div className="m-8">
                  <p>
                    I'm actively seeking new ventures and would welcome any
                    inquiries or hellos. Please don't hesitate to reach out via
                    the links. I'm excited to hear from you!
                  </p>
                </div>

                <div className="flex justify-center gap-6 size-100 mt-10">
                  <FaGithub size={30} />
                  <FaLinkedinIn size={30} />
                  <FaXTwitter size={30} />
                  <FaInstagram size={30} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
