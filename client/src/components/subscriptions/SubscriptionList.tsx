import { Subscription } from "../../types/types";
import SubscriptionItem from "./SubscriptionItem";

interface Props {
  subscriptions: Subscription[];
  updateData: () => void;
}

function SubscriptionList({ subscriptions, updateData }: Props) {
  return (
    <ul className="container pt-4">
      {
        subscriptions.map(subscription => <SubscriptionItem key={subscription._id.toString()} subscription={subscription} updateData={updateData} />)
      }
    </ul>
  )
}

export default SubscriptionList;