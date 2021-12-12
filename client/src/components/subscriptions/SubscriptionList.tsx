import { Subscription } from "../../types/types";
import SubscriptionItem from "./SubscriptionItem";

interface Props {
  subscriptions: Subscription[];
  updateData: () => void;
}

function SubscriptionList({ subscriptions, updateData }: Props) {

  const sortByStatus = (a: Subscription, b: Subscription) => { 
    if (a.status === b.status) {
      return 0;
    }
    return a.status === "active" ? -1 : 1;
  }

  const sortedSubscriptions = subscriptions.sort(sortByStatus);

  return (
    <ul className="container pt-4">
      {
        sortedSubscriptions.map(subscription => <SubscriptionItem key={subscription._id.toString()} subscription={subscription} updateData={updateData} />)
      }
    </ul>
  )
}

export default SubscriptionList;