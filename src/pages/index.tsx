import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineSchool } from "react-icons/md";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const { handleSetLogin } = useAuth();
  return (
    <>
      <section className="w-screen flex flex-col items-center bg-gradient-to-b from-gray-100 to-white">
        <div className="w-full px-4 py-20 mx-auto text-left md:text-center md:w-3/4 lg:w-2/4">
          <p className="mb-2 text-base font-semibold text-indigo-600">
            We are here to help you!
          </p>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight md:text-4xl md:mb-6 md:leading-tight">
            It`s time to change the game! We are GameChangers
          </h2>
          <div className="flex md:flex-row flex-col md:justify-center gap-6 md:gap-10">
            <Link href="/app">
              <a className="flex md:w-56 items-center justify-center px-2 py-2 font-medium tracking-wide text-indigo-800 capitalize transition-colors duration-200 transform bg-indigo-100 rounded-md hover:bg-indigo-500  hover:text-white focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
                <AiOutlineHome />
                <span onClick={handleSetLogin} className="mx-1">
                  Login With MetaMask
                </span>
              </a>
            </Link>
            <Link href="/app">
              <a className="flex md:w-56  items-center justify-center px-2 py-2 font-medium tracking-wide text-white  capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
                <MdOutlineSchool />
                <span className="mx-1">Continue Without Login</span>
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="grid  grid-cols-1 gap-20 px-4 py-24 mx-auto max-w-7xl lg:px-16 xl:px-24 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-12 h-12 mb-4 text-indigo-600"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">
            About GameChangers
          </h3>
          <p className="text-base leading-relaxed text-gray-600">
            We are a DAO - a Decentralized Autonomous Organization - serving as
            a community driven investment fund in NFT games, aiming to create
            lasting prosperity to our community through education and
            Play-to-Earn games
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-12 h-12 mb-4 text-indigo-600"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          <h3 className="mb-3 mt-6 text-lg font-medium leading-tight text-gray-900">
            Be an investor and change the game!
          </h3>
          <p className="text-base leading-relaxed text-gray-600">
            We connect investors with nft game players, enabling
            <p>
              <span className="mr-2">👉🏽</span> Playing without investments -
              need financial risk for players
            </p>
            <p>
              <span className="mr-2">👉🏽</span>Money pooling with community
              members for co-investing in NFT assets
            </p>
            <p>
              <span className="mr-2">👉🏽</span>Participate in the success of the
              DAO investment fund
            </p>
            <p>
              <span className="mr-2">👉🏽</span>Learn about blockchain, crypto,
              finance and investments
            </p>
          </p>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-12 h-12 mb-4 text-indigo-600"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
            />
          </svg>
          <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900">
            What are NFTs?
          </h3>
          <p className="text-base leading-relaxed text-gray-600">
            Non-fungible tokens have grown from a technical curiosity to a
            multi-billon dollar industry. They`re changing the lives of millions
            worldwide, and defining the future of the Virtual Economy.
          </p>

          <p className="text-base mt-2 leading-relaxed text-gray-600">
            NFTs are digital assets registered on the blockchain, assigning
            scarcity and ownership to what as once easily copied. Scarcity and
            Ownership are the foundations of what enables digital assets to
            acreu value, transforming the art and gaming industry forever.
          </p>
        </div>
      </section>
      <section className="w-screen p-10 md:p-20">
        <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center md:gap-44 gap-28">
          <a
            target="_blank"
            href="https://mobile.twitter.com/defiluna"
            rel="noreferrer"
          >
            <FaTwitter color="#327EFF" size={36} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/gchangers_/"
            rel="noreferrer"
          >
            <FaInstagram color="#E66D55" size={36} />
          </a>
          <a target="_blank" href="https://github.com/gabrikf" rel="noreferrer">
            <FaGithub color="#7D3FFF" size={36} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/andr%C3%A9-caetano-luna-22b88636/"
            rel="noreferrer"
          >
            <FaLinkedin color="#327EFF" size={36} />
          </a>
        </div>
      </section>
    </>
  );
}
