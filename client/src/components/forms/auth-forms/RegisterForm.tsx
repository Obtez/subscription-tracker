import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserRegister } from "../../../types/types";

const emptyUser: UserRegister = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

function RegisterForm() {
  const [userData, setUserData] = useState<UserRegister>(emptyUser)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response = await axios.post("http://localhost:8090/api/auth/register", userData);
  }

  return (
    <div className="container">
      <h1 className="text-center text-3xl text-gray-700 mb-6">Register</h1>
      <form className="w-full max-w-sm m-auto" onSubmit={handleSubmit}>

        <div className="md:flex md:items-center mb-6">
            <label className="block text-gray-500 font-bold mb-1" htmlFor="userName">Username</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            name="userName"
            id="userName"
            value={userData.userName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="md:flex md:items-center mb-6">
            <label className="block text-gray-500 font-bold mb-1" htmlFor="email">Email</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="email"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="md:flex md:items-center mb-6">
          <label className="block text-gray-500 font-bold mb-1" htmlFor="password">Password</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleChange}
            required />
        </div>

      <div className="md:flex md:items-center mb-6">
        <label className="block text-gray-500 font-bold mb-1" htmlFor="confirmPassword">Confirm Password</label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange}
          required />
      </div>

      <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" type="submit">Login</button>
      </form>

      <div className="block text-center mt-6 text-purple-700 hover:text-purple-500">
        <Link to="/login">Already have an account? Login here.</Link>
      </div>
    </div>
  )
}

export default RegisterForm