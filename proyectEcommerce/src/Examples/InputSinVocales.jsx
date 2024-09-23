import React, {useState} from 'react'

const InputSinVocales = () => {

    const [inputValue, setInputValue] = useState("");

    const handleKeyPress = (e) => {
        const Key = e.Key.toLowerCase();
        const isVowel = "aeiou".includes(Key);

        if (isVowel) {
            e.preventDefault();
        }
    };


return (
    <div>
        <h1>inputSinVocales</h1>

        <input type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        />

        <p>Texto Ingresado: {inputValue}</p>
    </div>
)
}

export default InputSinVocales