import { Subscription } from "../../types/types";
import SubscriptionItem from "./SubscriptionItem";

function SubscriptionList({ subscriptions }: { subscriptions: Subscription[] }) {
  return (
    <ul>
      {
        subscriptions.map(subscription => <SubscriptionItem key={subscription._id.toString()} subscription={subscription} />)
      }
    </ul>
  )
}

export default SubscriptionList;