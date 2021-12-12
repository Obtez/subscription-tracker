import { Subscription } from "../../types/types";

function SubscriptionItem({subscription}: {subscription: Subscription}) {
  if (!subscription) return null;
  
  const { name, cost, intervalInMonths, status } = subscription;

  return (
    <li className="bg-zinc-200">
      <p>{name} - {cost} / { intervalInMonths} month</p>
    </li>
  )
}

export default SubscriptionItem