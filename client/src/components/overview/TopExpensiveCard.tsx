import { Subscription } from "../../types/types"

interface Props {
  topThree: Subscription[];
}

function TopExpensiveCard({topThree}: Props) {
  return (
   <div className="bg-gray-200 rounded p-4 mt-6">
    <div className="mb-6">
      <h2 className="text-2xl text-gray-700">Most Expensive</h2>
    </div>
      <div className="flex">
        <ul className="w-full">
          {topThree.map((subscription: Subscription) => (
            <li className="text-lg text-gray-700 mb-1 flex justify-between" key={subscription._id.toString()}>
              <p>{ subscription.name }</p>
              <p><span className="font-semibold">{ subscription.cost / subscription.intervalInMonths }</span> <span className="text-sm">/ month</span></p>
            </li>
          ))}
        </ul>
    </div>
  </div>
  )
}

export default TopExpensiveCard