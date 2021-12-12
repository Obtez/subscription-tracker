interface Props {
  deleteEntry: () => void
}

function SubscriptionOptions({deleteEntry}: Props) { 
  return (
    <div>
      <button type="button" onClick={deleteEntry}>Delete</button>
    </div>
  )
}

export default SubscriptionOptions