import { SiReact, SiGraphql, SiGithub, SiLinkedin } from "react-icons/si";
import { MdClose } from "react-icons/md";
import CharacterList from "../characterlist";

export const Home = () => {
  return (
    <div className="max-w-[1440px] m-auto">
      <main className="flex flex-col w-full h-full font-normal tracking-tight text-center text-gray-800 bg-gray-100 text-1xl">
        <div className="flex flex-row pt-2 pb-2 pl-2 pr-2 text-sm text-white bg-gradient-to-r from-indigo-600 to-purple-900">
          <div>
            <span>
              Hello 👋🏼, this is a {<SiReact className="inline-block" />} +{" "}
              {<SiGraphql className="inline-block" />} example, made by{" "}
              <a href="" className="opacity-[1]  font-bold">
                abisekh subedi
              </a>
              .
            </span>{" "}
            <span className="inline-block mt-2">
              An awesome front-end developer who can write custom functional,
              accessible &amp; perfomant UI with react.
            </span>
          </div>
          <MdClose fill="white" className="-translate-y-2 cursor-pointer " />
        </div>
        {/* <Search /> */}
        <section className="flex ">
          <CharacterList />
        </section>
      </main>
      <footer className="flex flex-row justify-center gap-3 pt-6 pb-6">
        <a
          href="https://github.com/abisekhsubedi"
          className="flex items-center justify-center gap-1 underline"
        >
          {" "}
          <SiGithub className="inline-block w-4 h-4" /> <span>Github</span>
        </a>
        <a
          href="https://linkedin.com/in/abisekh"
          className="flex items-center justify-center gap-1 underline"
        >
          {" "}
          <SiLinkedin className="inline-block w-4 h-4" /> <span>LinkedIn</span>
        </a>
      </footer>
    </div>
  );
};
