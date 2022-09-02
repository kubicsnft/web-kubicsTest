import React from 'react';
import { useContext, useState } from "react"
import { langContext } from "../context/langContext"


const ToggleSwitch = () => {

    // Context
    const lang = useContext(langContext);

    // State checkbox
    const [isChecked, setIsChecked] = useState(false);

    //lang changue
    const handleOnChange = () => {
        setIsChecked(!isChecked);
       
        if (isChecked) {
            lang.establecerIdioma('en')
        } else {
            lang.establecerIdioma('sp')
        }

    };



    return (
        <div className='z-50 flex flex-row items-center p-3'>
            <div>EN</div>
            <label className="ml-1 mr-1 switch">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleOnChange} />
                <span className="slider"></span>
                <span className="barra"></span>
            </label>
            <div>SP</div>
        </div>
    );
}

export default ToggleSwitch;
