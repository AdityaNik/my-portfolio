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
import { MdMail } from "react-icons/md";

function App() {
  return (
    <div className="font-mono">
      <div className="flex justify-between lg:mx-32 md:mx-32 mx-10 my-8 lg:text-xl md:text-xl">
        <div className="hidden md:block">dfsdf</div>
        <div className="flex lg:gap-10 md:gap-10 gap-4">
          <a href="#about" className="cursor-pointer hover:text-green-500">
            about.
          </a>
          <a href="#projects" className="cursor-pointer hover:text-green-500">
            projects.
          </a>
          <a href="#experience" className="cursor-pointer hover:text-green-500">
            experience.
          </a>
        </div>
      </div>

      <div id="about" className="flex flex-col mt-24 items-center text-white">
        <div className="lg:w-[900px] flex flex-col lg:flex-row justify-center gap-10">
          <div className="flex justify-center lg:justify-start lg:w-[900px] mx-10 lg:m-0 border-white border-2 rounded-xl p-2 transition duration-300 ease-in-out transform hover:scale-105">
            <img className="w-full h-full" src={image} />
          </div>
          <div className="flex justify-center flex-col mx-4 lg:m-0">
            <div className="flex text-center items-baseline gap-4">
              <h1 className="text-3xl  lg:text-4xl text-center lg:text-left">
                Aditya Nikam
              </h1>
              <p>(he/him)</p>
            </div>
            <p className="mb-2 text-sm lg:text-lg text-center lg:text-left">
              full stack developer from india.
            </p>
            <p className="text-center lg:text-left">
              I am a dedicated engineer specializing in building robust,
              scalable web and mobile applications that drive impactful results.
              With a strong focus on enhancing user experience, incorporating
              sleek design aesthetics, and prioritizing developer efficiency, I
              bring applications to life from concept through deployment. Let's
              collaborate to craft exceptional digital solutions that truly make
              a difference.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 my-4">
              <a
                href="https://github.com/AdityaNik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="transition ease-in-out duration-200 transform hover:scale-125 hover:text-green-700 cursor-pointer"
                  size={30}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-nikam-7342aa234/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn
                  className="transition ease-in-out duration-200 transform hover:scale-125 hover:text-green-700 cursor-pointer"
                  size={30}
                />
              </a>
              <a
                href="https://x.com/Adinik_tw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter
                  className="transition ease-in-out duration-200 transform hover:scale-125 hover:text-green-700 cursor-pointer"
                  size={30}
                />
              </a>
              <a
                href="https://www.instagram.com/adi_nikam_04/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="transition ease-in-out duration-200 transform hover:scale-125 hover:text-green-700 cursor-pointer"
                  size={30}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-10 text-center mt-20 mb-4 font-bold">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            cool teck stack I work with
          </h4>
        </div>

        <div className="mx-10 flex flex-wrap gap-10 m-4 cursor-pointer">
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

        <div className="mx-10 flex flex-wrap gap-10 m-4 cursor-pointer">
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

        <div className="mt-4">
          <p className="text-sm lg:text-lg">I try to keep this list updated</p>
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
        <div id="projects" className="mt-20">
          <div className="text-center lg:text-start">
            things i have worked on...
          </div>
          <div className="mb-20 mt-4">
            {projects.map((project) => {
              return (
                <div className="lg:w-[960px] px-6 my-8 hover:border-l-4 hover:border-l-green-500 cursor-pointer">
                  <div className="flex gap-2 text-lg">
                    <h3 className="scroll-m-20 text-xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <button
                    className="bg-green-300 text-gray-800 px-4 text-sm my-2"
                    style={{ borderRadius: "5px" }}
                  >
                    Completed
                  </button>
                  <div className="text-md lg:text-lg">
                    {project.description}
                  </div>
                  <div className="flex gap-4">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.live_link}
                    >
                      <Button
                        variant={"link"}
                        style={{ borderRadius: "8px" }}
                        className=" text-green-400 text-md lg:text-lg"
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
                        className=" text-green-400 text-md lg:text-lg"
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

        <div id="experience">
          <div className="text-center lg:text-start">
            experience till now...
          </div>
          <div className="mb-20 mt-4">
            {experience.map((exp, index) => {
              return (
                <div
                  key={index}
                  className="lg:w-[960px] px-6 my-8 hover:border-l-4 hover:border-l-green-500 cursor-pointer"
                >
                  <div className="flex gap-2 text-lg">
                    <h3 className="scroll-m-20 text-md lg:text-xl font-bold tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="text-gray-300 text-sm"> - {exp.company}</p>
                  </div>
                  <div className="text-sm text-gray-300 mt-2">
                    {exp.location}
                  </div>
                  <div className="text-sm text-gray-300 mb-2">
                    {exp.duration}
                  </div>
                  <div className="text-md lg:text-lg">
                    {exp.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-4">
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
          <div className="m-4 lg:m-10">
            <Card className="lg:w-[850px] bg-zinc-800">
              <CardContent>
                <div className="flex my-4 justify-center gap-4">
                  <div className="bg-green-500 text-neutral-800 rounded-full h-8 w-8 flex items-center justify-center">
                    <MdMail />
                  </div>
                  <a
                    href="mailto:nikamditya@gmail.com"
                    className="text-white hover:underline mt-[0.22rem] text-center"
                  >
                    nikamditya@gmail.com
                  </a>
                </div>
                <div className="text-center">
                  <p>
                    I'm actively seeking new ventures and would welcome any
                    inquiries or hellos. Please don't hesitate to reach out via
                    the links. I'm excited to hear from you!
                  </p>
                </div>

                <div className="flex justify-center gap-6 size-100 mt-10">
                  <a
                    href="https://github.com/AdityaNik"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      className="transition ease-in-out duration-200 transform hover:scale-125 hover:text-green-700 cursor-pointer"
                      size={30}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aditya-nikam-7342aa234/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn
                      className="transition ease-in-out duration-200 transform hover:scale-125 hover:text-green-700 cursor-pointer"
                      size={30}
                    />
                  </a>
                  <a
                    href="https://x.com/Adinik_tw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter
                      className="transition ease-in-out duration-200 transform hover:scale-125 hover:text-green-700 cursor-pointer"
                      size={30}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/adi_nikam_04/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram
                      className="transition ease-in-out duration-200 transform hover:scale-125 hover:text-green-700 cursor-pointer"
                      size={30}
                    />
                  </a>
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
