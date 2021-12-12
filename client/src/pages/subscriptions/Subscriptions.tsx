import { useState, useEffect } from 'react';
import axios from 'axios';
import SubscriptionList from '../../components/subscriptions/SubscriptionList';
import { Subscription } from '../../types/types';



function Subscriptions() { 
  const [data, setData] = useState<Subscription[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchSubscriptions = async () => {
    const response = await axios.get("http://localhost:8090/api/subscriptions")
    if (response.data) {
      setData(response.data)
    } else {
      console.log("Error");
    }
  }

   const updateData = () => {
    setIsLoading(true)
    setIsLoading(true)
    fetchSubscriptions().then(() => setIsLoading(false))
  }

  useEffect(() => {
    updateData()
  }, [])

  return (
    <div className="container">
      <h1 className="text-3xl text-gray-700">Your Subscriptions</h1>
      {isLoading ? <p>Loading...</p> : (
        <>
        { data.length > 0 ? <SubscriptionList subscriptions={data} updateData={updateData} /> : <p>No subscriptions found.</p> }
        </>
      )}
    </div>
  )
}

export default Subscriptions;