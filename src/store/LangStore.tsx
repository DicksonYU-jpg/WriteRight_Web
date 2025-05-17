import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LangStore {
  lang: "en" | "cn";
  toggleLang: () => void;
  setLang: (lang: "en" | "cn") => void;
}

const useLangStore = create<LangStore>()(
  persist(
    (set, get) => ({
      lang: typeof window !== "undefined" ? "cn" : "en", // Default language
      toggleLang: () => {
        const newLang = get().lang === "en" ? "cn" : "en"; // Correctly toggles language
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("cn", newLang === "cn");
        }
        set({ lang: newLang });
      },
      setLang: (lang: "en" | "cn") => {
        if (typeof document !== "undefined") {
          document.documentElement.classList.toggle("cn", lang === "cn");
        }
        set({ lang });
      },
    }),
    {
      name: "app-lang",
      onRehydrateStorage: () => (state) => {
        if (state?.lang === "cn") {
          document.documentElement.classList.add("cn");
        } else {
          document.documentElement.classList.remove("cn");
        }
      },
    }
  )
);

export default useLangStore;