import { Subscription } from "../../types/types";

function SubscriptionItem({subscription}: {subscription: Subscription}) {
  if (!subscription) return null;
  
  const { name, cost, intervalInMonths, status } = subscription;

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



  return (
    <li className={`${statusColor()} rounded px-4 py-2 mb-2`}>
      <div className="flex justify-between text-gray-700">
        <p>{ name }</p>
        <p>{cost} / { intervalInMonths } month(s)</p>
      </div>
    </li>
  )
}

export default SubscriptionItem