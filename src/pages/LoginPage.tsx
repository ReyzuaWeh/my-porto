import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        console.log("Login with:", username, password);
        window.location.href = "/";
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 md:p-8 p-4 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <div
                        className="shadow flex appearance-none items-center border rounded w-full text-gray-700 mb-3 leading-tight"
                    >
                        <input
                            className="w-full focus:outline-none focus:shadow-outline py-2 px-3 h-full"
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="pr-2 w-fit h-fit"
                        >
                            {showPassword ?
                                <FaEyeSlash size={20} />
                                :
                                <FaEye size={20} />
                            }
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleLogin}
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;