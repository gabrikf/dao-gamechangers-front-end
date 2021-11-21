import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
import { AiOutlineGoogle } from "react-icons/ai";

export default function Home() {
  return (
    <section className="bg-indigo-100 h-screen">
      <div className="px-0 py-20 mx-auto max-w-7xl sm:px-4">
        <div className="w-full px-4 pt-5 pb-6 mx-auto mt-8 mb-6 bg-white rounded-none shadow-xl sm:rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 sm:px-6">
          <h1 className="mb-4 text-lg font-semibold text-left text-gray-900">
            Log in to your account
          </h1>
          <form className="mb-8 space-y-4">
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Your Email
              </span>
              <input
                className="form-input w-full outline-none"
                type="email"
                placeholder="Ex. james@bond.com"
                inputMode="email"
                required
              />
            </label>
            <label className="block">
              <span className="block mb-1 text-xs font-medium text-gray-700">
                Your Password
              </span>
              <input
                className="form-input w-full h-full outline-none"
                type="password"
                placeholder="••••••••"
                required
              />
            </label>
            <Link href="./app">
              <a
                type="submit"
                className="flex  w-full items-center justify-center px-2 py-2 font-medium tracking-wide text-indigo-100  capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80"
              >
                Login
              </a>
            </Link>
          </form>
          <div className="space-y-8">
            <div
              className="text-center border-b border-gray-200"
              style={{ lineHeight: `0px` }}
            >
              <span
                className="p-2 text-xs font-semibold tracking-wide text-gray-600 uppercase bg-white"
                style={{ lineHeight: `0px` }}
              >
                Or
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {" "}
              <Link href="/app/education">
                <a className="flex  items-center justify-center px-2 py-2 font-medium tracking-wide text-inddigo-800  hover:text-white capitalize transition-colors duration-200 transform bg-indigo-100 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
                  <AiOutlineGoogle />
                  <span className="mx-1">Google</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2 fixed bottom-0 inset-x-2/4">
        <Link href="/">Voltar</Link>
      </div>
    </section>
  );
}
