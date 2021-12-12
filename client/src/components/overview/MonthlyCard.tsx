interface Props {
  monthlyCost: number
}

function MonthlyCard({ monthlyCost }: Props) {
  return (
    <div className="bg-gray-200 rounded p-4 mt-6">
      <div className="mb-6">
        <h2 className="text-2xl text-gray-700">Monthly Cost</h2>
      </div>
      <div className="flex justify-end">
        <p className="text-4xl text-gray-500">{ monthlyCost.toFixed(2) }</p>
      </div>
    </div>
  )
}

export default MonthlyCard