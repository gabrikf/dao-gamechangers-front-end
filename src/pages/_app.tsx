import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import SideBar from "../components/SideBar";
import "../styles/globals.css";
import { useRouter } from "next/router";

const NoLayout = ({ children }) => children;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const CurrentLayout = router.pathname.startsWith("/app") ? SideBar : NoLayout;

  return (
    <CurrentLayout>
      <Component {...pageProps} />
    </CurrentLayout>
  );
}

export default MyApp;
