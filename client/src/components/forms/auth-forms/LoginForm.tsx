import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserLogin } from "../../../types/types";
import AuthService from "../../../services/auth.service";

const emptyUser: UserLogin = {
  email: "",
  password: ""
}

function LoginForm() {
  const [userData, setUserData] = useState<UserLogin>(emptyUser)

  let navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AuthService.login(userData.email, userData.password).then(response => {
      if (response.status === 201) {
        navigate("/profile", {state: response.data})
      } else {
        console.log("error");
      }
    })
  }

  return (
    <div className="container">
      <h1 className="text-center text-3xl text-gray-700 mb-6">Login</h1>
      <form className="w-full max-w-sm m-auto" onSubmit={handleSubmit}>
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

      <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" type="submit">Login</button>
      </form>

      <div className="block text-center mt-6 text-purple-700 hover:text-purple-500">
        <Link to="/register">No account yet? Register here.</Link>
      </div>
    </div>
  )
}

export default LoginForm