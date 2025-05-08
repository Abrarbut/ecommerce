import { useState } from "react";
import { Link } from "react-router-dom";
import register from "../assets/register.webp";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( "user registered", name, email, password);
    }

    return (
        <div className="flex">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 ">
                <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
                    <div className="flex justify-center mb-6">
                        <h2 className="text-xl font-medium">
                            E-Commerce
                        </h2>
                    </div>
                    <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
                    <p className="text-center mb-6">
                        Enter your details to register
                    </p>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Name
                            <input type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-2 border rounded"
                                placeholder="Enter your name"
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Email
                            <input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border rounded"
                                placeholder="Enter your email"
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Password
                            <input type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border rounded"
                                placeholder="Enter your password"
                            />
                        </label>
                    </div>
                    <button type="submit" className="w-full p-2 bg-black text-white rounded-md hover:bg-gray-700">
                        Register
                    </button>
                    <p className="text-center mt-4">
                        Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-700">Sign in</Link>
                    </p>
                </form>
            </div>
            <div className="w-full md:w-1/2 flex-col justify-center items-center p-8 md:p-12">
                <div className="h-full flex flex-col justify-center items-center">
                    <img 
                        src={register} 
                        alt="register" 
                        className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}
export default Register;
