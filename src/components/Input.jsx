import React from 'react';
import Eye from "../assets/icons/Eye";
import EyeSlashed from "../assets/icons/EyeSlashed";

const Input = ({ children, type, name, placeholder, onChange, value }) => {
    const [isShown, setIsShown] = React.useState(false);

    const showPassword = (e) => {
        e.preventDefault();
        setIsShown(!isShown);
    }

    const actualInputType =
        type === 'password' && isShown ? 'text' : type;

    return (
        <label className="flex gap-2 bg-input rounded-md px-4 py-3 relative">
            {children}
            <input
                type={actualInputType}
                name={name}
                className="outline-none bg-transparent placeholder:text-black focus:placeholder:text-gray-400"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            {type === 'password' && (
                <button className="absolute right-3" onClick={showPassword}>
                    {isShown ?  <EyeSlashed /> : <Eye />}
                </button>
            )}
        </label>
    );
};

export default Input;