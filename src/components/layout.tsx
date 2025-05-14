import { ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="transition-all py-10 relative flex items-center justify-center text-white bg-primary">
      {children}
    </main>
  );
}
