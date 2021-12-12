interface Props {
  monthlyCost: number;
}

function YearlyCard({ monthlyCost }: Props) {
  const yearlyCost = monthlyCost * 12;

  return (
  <div className="bg-gray-200 rounded p-4 mt-6">
    <div className="mb-6">
      <h2 className="text-2xl text-gray-700">Yearly Cost</h2>
    </div>
    <div className="flex justify-end">
      <p className="text-4xl text-gray-500">{ yearlyCost.toFixed(2) }</p>
    </div>
  </div>
  )
} 

export default YearlyCard;