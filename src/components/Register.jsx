import React from 'react';
import Email from "../assets/icons/Email";
import Input from "./Input";
import Lock from "../assets/icons/Lock";
import UserIcon from "../assets/icons/UserIcon";

const Register = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [error, setError] = React.useState('');


    return (
        <div
            className="max-w-[500px] relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white px-8 py-12 rounded">
            <div className="mb-12 text-center">
                <h1 className="text-3xl font-bold mb-2">Welcome!</h1>
                <h2 className="text-gray-400 text-xl">Please enter your account here</h2>
            </div>
            <form>
                <div className="flex flex-col gap-6">
                    <Input
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        type="email"
                    >
                        <Email />
                    </Input>
                    <Input
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password"
                    >
                        <Lock />
                    </Input>
                    <Input
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        type="text"
                    >
                        <UserIcon />
                    </Input>
                </div>
                <button className="bg-button w-full text-center text-white rounded py-4 mt-16">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;