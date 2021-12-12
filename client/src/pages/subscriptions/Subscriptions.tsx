import { useState, useEffect } from 'react';
import axios from 'axios';
import SubscriptionList from '../../components/subscriptions/SubscriptionList';
import { Subscription } from '../../types/types';



function Subscriptions() { 
  const [data, setData] = useState<Subscription[]>([])

  const fetchSubscriptions = async () => {
    const response = await axios.get("http://localhost:8090/api/subscriptions")
    if (response.data) {
      setData(response.data)
    } else {
      console.log("Error");
    }
  }

  useEffect(() => {
    fetchSubscriptions()
  }, [])

  return (
    <div>
      <h1>Your Subscriptions</h1>
      {data.length > 0 ? <SubscriptionList subscriptions={data} /> : <p>No subscriptions found.</p>}
    </div>
  )
}

export default Subscriptions;