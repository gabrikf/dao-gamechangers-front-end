import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import SideBar from "../components/SideBar";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { AuthProvider } from "../hooks/useAuth";

const NoLayout = ({ children }) => children;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const CurrentLayout = router.pathname.startsWith("/app") ? SideBar : NoLayout;
  console.log(pageProps);
  return (
    <AuthProvider>
      <CurrentLayout>
        <Component {...pageProps} />
      </CurrentLayout>
    </AuthProvider>
  );
}

export default MyApp;
