import React from 'react';
import {useNavigate} from "react-router-dom";
import {registerPath} from "../constants/routes";

const Home = () => {
    const navigate = useNavigate();
    const onBtnClick = (e) => {
        e.preventDefault();
        navigate(registerPath)
    }

    return (
        <div className="relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <div className="text-center px-4">
                <h1 className="text-black text-6xl font-bold">Hello, everyone!</h1>
                <button className="bg-button w-full max-w-[500px] mx-auto text-white rounded py-4 mt-16" type="button"
                        onClick={onBtnClick}>
                    Back to Registration
                </button>
            </div>
        </div>
    );
};

export default Home;