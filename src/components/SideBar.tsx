import { Fragment, useState } from "react";
import { ethers } from "ethers";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  CalendarIcon,
  UploadIcon,
  HomeIcon,
  LockClosedIcon,
  MenuAlt2Icon,
  XIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { api } from "../services/api";
import { createClient } from "@supabase/supabase-js";
import { useAuth } from "../hooks/useAuth";
import { IoLogoGameControllerA, IoLogoGameControllerB } from "react-icons/io";
import { RiChatPollLine } from "react-icons/ri";
import { GiComputing } from "react-icons/gi";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

declare let window: Window &
  typeof globalThis & {
    ethereum: any;
  };

const navigationConfig = [
  { name: "Dashboard", href: "/app", icon: HomeIcon, current: false },
  {
    name: "Education",
    href: "/app/education",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Exchange",
    href: "/app/exchange",
    icon: UploadIcon,
    current: false,
  },
  {
    name: "Live Playing",
    href: "/app/livePlaying",
    icon: IoLogoGameControllerA,
    current: false,
  },
  {
    name: "New Players",
    href: "/app/newPlayers",
    icon: IoLogoGameControllerB,
    current: false,
  },
  {
    name: "Polls",
    href: "/app/polls",
    icon: RiChatPollLine,
    current: false,
  },
  {
    name: "Developers",
    href: "/app/developers",
    icon: GiComputing,
    current: false,
  },
];
const userNavigation = [
  { name: "Ver Perfil", href: "#" },
  { name: "Configurações", href: "#" },
  { name: "Deslogar", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SideBar({ children }) {
  const router = useRouter();
  const [loginState, setLoginState] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigation = navigationConfig.map((nav) => {
    return {
      ...nav,
      current: router.pathname.startsWith(nav.href),
    };
  });
  const { handleSetLogin, handleLogout, user } = useAuth();

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex justify-center flex items-center px-4">
                <Link href={"/"}>
                  <img
                    className="object-cover w-20 h-20 rounded-full dark:border-indigo-400"
                    alt="Testimonial avatar"
                    src="/images/logo1.jpg"
                  />
                </Link>
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-4 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
            <div className="flex items-center cursor-pointer justify-center">
              <Link href={"/"}>
                <img
                  className="object-cover w-20 h-20 rounded-full dark:border-indigo-400"
                  alt="Testimonial avatar"
                  src="/images/logo1.jpg"
                />
              </Link>
              {/* <Link href={"/"}>
                <a className="text-2xl font-bold">Game changers 🚀</a>
              </Link> */}
            </div>
            <div className="mt-5 flex-grow flex flex-col">
              <nav className="flex-1 px-2 bg-white space-y-1">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex"></div>
            <div className="ml-4 flex items-center md:ml-6">
              {/* <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button> */}
              <p
                className={
                  loginState === "connected" ? "text-green-600" : "text-red-600"
                }
              >
                {loginState}
              </p>

              {user ? (
                <button
                  onClick={handleLogout}
                  className="flex m-2 items-center justify-center px-2 py-2 f tracking-wide text-indigo-100 capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-100  hover:text-indigo-800 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80"
                >
                  <span className="mx-1">Logout </span>
                </button>
              ) : (
                <button
                  onClick={handleSetLogin}
                  className="flex m-2 items-center justify-center px-2 py-2 f tracking-wide text-indigo-100 capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-100  hover:text-indigo-800 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80"
                >
                  <span className="mx-1">Login </span>
                </button>
              )}

              <a
                href="https://app.ubeswap.org/#/swap?inputCurrency=0xb33a6af8a3ad22be594ec129ab5183b87b9c04cf"
                target="_blank"
                className="flex m-2 items-center justify-center px-2 py-2 font-medium tracking-wide text-indigo-100 capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-100  hover:text-indigo-800 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80"
                rel="noreferrer"
              >
                <span className="mx-1">Buy Token</span>
              </a>
              {/* Profile dropdown */}
              <Menu as="div" className="ml-3 relative">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Open user menu</span>
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6 h-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
