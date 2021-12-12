import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import NewSubscription from "../pages/new-subscription/NewSubscription";
import Subscriptions from "../pages/subscriptions/Subscriptions";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
       <Routes>
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/new-subscription" element={<NewSubscription />} />
      </Routes>
    </Layout>
     
    </BrowserRouter>
  )
}

export default Router