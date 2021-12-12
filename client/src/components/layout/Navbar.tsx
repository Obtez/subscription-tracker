import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between px-4 py-2 text-gray-700 font-semibold">
      <Link className="hover:text-gray-500" to="/">Home</Link>
      <Link className="hover:text-gray-500" to="/subscriptions">Subscriptions</Link>
      <Link className="hover:text-gray-500" to="/new-subscription">New Subscription</Link>
    </nav>
  )
}

export default Navbar