import { SubscriptionStatus } from "../../types/types"

type StatusColor = "bg-green" | "bg-fuchsia" | "bg-amber" | "bg-gray";

interface Props {
  isOpen: boolean;
  deleteEntry: () => void;
  openEditModal: () => void;
  statusColor: StatusColor;
}

function SubscriptionOptions({ isOpen, deleteEntry, openEditModal, statusColor }: Props) { 
  if(!isOpen) return null

  return (
    <div className="flex justify-end gap-4 mt-2">
      <button className={`${statusColor}-400 text-white py-1 px-2 rounded`} type="button" onClick={openEditModal}>Edit</button>
      <button className={`${statusColor}-400 text-white py-1 px-2 rounded`} type="button" onClick={deleteEntry}>Delete</button>
    </div>
  )
}

export default SubscriptionOptions