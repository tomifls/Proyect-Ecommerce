import { useState } from "react";
import ThemeContext from "./ThemeContext";


const ThemeProvider = ({Children}) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return(
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {Children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider