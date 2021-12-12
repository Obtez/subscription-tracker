import { Subscription } from "../../types/types";

function SubscriptionItem({subscription}: {subscription: Subscription}) {
  if (!subscription) return null;
  
  const { name, cost, intervalInMonths, status } = subscription;

  return (
    <li className="bg-gray-200 rounded px-4 py-2 mb-2">
      <div className="flex justify-between text-gray-700">
        <p>{ name }</p>
        <p>{cost} / { intervalInMonths } month(s)</p>
      </div>
    </li>
  )
}

export default SubscriptionItem