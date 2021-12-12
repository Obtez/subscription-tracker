import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { UserLogin } from "../../../types/types";

const emptyUser: UserLogin = {
  email: "",
  password: ""
}

function LoginForm() {
  const [userData, setUserData] = useState<UserLogin>(emptyUser)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(userData)
  }

  return (
    <div className="container">
      <h1 className="text-center text-3xl text-gray-700 mb-6">Login</h1>
      <form className="w-full max-w-sm m-auto" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
            <label className="block text-gray-500 font-bold mb-1" htmlFor="email">Email</label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
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