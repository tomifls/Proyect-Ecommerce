import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext/ThemeContext';

const ChildComponent = () => {
        const {isDarkMode, toggleTheme} = useContext(ThemeContext);

    console.log(isDarkMode);
    
    return (
    <div style={{
        background: isDarkMode ? 'black' : 'white', 
        color: isDarkMode ? 'white' : 'black',
        }}
    >
        <button onClick={toggleTheme}>Toggle Dark Mode</button>
    </div>
  );
};

export default ChildComponent