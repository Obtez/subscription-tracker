import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Subscriptions from "../pages/subscriptions/Subscriptions";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
       <Routes>
        <Route path="/" element={<Subscriptions />} />
      </Routes>
    </Layout>
     
    </BrowserRouter>
  )
}

export default Router