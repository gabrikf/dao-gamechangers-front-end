import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineSchool } from "react-icons/md";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <section className="w-screen flex flex-col items-center bg-gradient-to-b from-gray-100 to-white">
      <div className="w-full px-4 py-20 mx-auto text-left md:text-center md:w-3/4 lg:w-2/4">
        <p className="mb-2 text-base font-semibold text-indigo-600">
          Start your free trial now
        </p>
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight md:text-4xl md:mb-6 md:leading-tight">
          Sign up for a free account to organize your customer feedback.
        </h2>
        <div className="flex md:flex-row flex-col md:justify-center gap-6 md:gap-10">
          <Link href="/login">
            <a className="flex md:w-36 items-center justify-center px-2 py-2 font-medium tracking-wide text-indigo-800 capitalize transition-colors duration-200 transform bg-indigo-100 rounded-md hover:bg-indigo-500  hover:text-white focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
              <AiOutlineHome />
              <span className="mx-1">Login</span>
            </a>
          </Link>
          <Link href="/register">
            <a className="flex md:w-36  items-center justify-center px-2 py-2 font-medium tracking-wide text-white  capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
              <MdOutlineSchool />
              <span className="mx-1">Regsiter</span>
            </a>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center md:gap-44 gap-28">
        <FaTwitter color="#327EFF" size={36} />

        <FaInstagram color="#E66D55" size={36} />

        <FaGithub color="#7D3FFF" size={36} />
        <FaLinkedin color="#327EFF" size={36} />
      </div>
    </section>
  );
}
