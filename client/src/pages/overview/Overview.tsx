import { useState, useEffect } from "react";
import axios from "axios";
import { Subscription } from "../../types/types";
import MonthlyCard from "../../components/overview/MonthlyCard";
import YearlyCard from "../../components/overview/YearlyCard";
import TopExpensiveCard from "../../components/overview/TopExpensiveCard";

function Overview() {
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

  const onlyActiveSubscriptions = data.filter(sub => sub.status !== "inactive")

  const calculateMonthlyCost = () => {
    if (onlyActiveSubscriptions.length > 0) {
      const cost = onlyActiveSubscriptions.reduce((acc, curr) => {
        return acc + (curr.cost / curr.intervalInMonths);
      }, 0)
      return cost
    }

    return 0
  }

  const monthlyCost = calculateMonthlyCost()


  const sortByCost = (a: Subscription, b: Subscription) => { 
    if (a.cost / a.intervalInMonths > b.cost / b.intervalInMonths) {
      return -1
    }
    if (a.cost / a.intervalInMonths < b.cost / b.intervalInMonths) {
      return 1
    }
    return 0
  }

  const topThree = onlyActiveSubscriptions.sort(sortByCost).slice(0, 3)

  return (
    <div>
      <h1 className="text-3xl text-gray-700">Overview</h1>
      <MonthlyCard monthlyCost={monthlyCost} />
      <YearlyCard monthlyCost={monthlyCost} />
      <TopExpensiveCard topThree={topThree} />
    </div>
  )
}

export default Overview;