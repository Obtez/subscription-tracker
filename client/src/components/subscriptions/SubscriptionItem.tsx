import axios from "axios";
import { Subscription } from "../../types/types";
import SubscriptionOptions from "./SubscriptionOptions";

interface Props {
  subscription: Subscription;
  updateData: () => void;
}

function SubscriptionItem({ subscription, updateData }: Props) {
  if (!subscription) return null;
  
  const { _id, name, cost, intervalInMonths, status } = subscription;

  const statusColor = () => {
    switch (status) {
      case "active":
        return "bg-green-200"

      case "inactive":
        return "bg-gray-200"

      case "expiring":
        return "bg-amber-200"

      case "watching":
        return "bg-fuchsia-200"
    }
  }

  const deleteEntry = async () => {
    await axios.delete(`http://localhost:8090/api/subscriptions/${_id}`)
    updateData()
  }



  return (
    <li className={`${statusColor()} rounded px-4 py-2 mb-2`}>
      <div className="flex justify-between text-gray-700">
        <p>{ name }</p>
        <p>{cost} / { intervalInMonths } month(s)</p>
      </div>
        <SubscriptionOptions deleteEntry={deleteEntry} />
    </li>
  )
}

export default SubscriptionItem