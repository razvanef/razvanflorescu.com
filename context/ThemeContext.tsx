import { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

export interface IThemeContext {
    theme: string,
    setTheme: Dispatch<SetStateAction<string>>
}

export const ThemeContext = createContext<IThemeContext>({
    theme: (typeof window !== "undefined" && window.localStorage.getItem('theme')) || "light-mode",
    setTheme: () => { },
});