import { useState } from "react";
import axios from "axios";
import { Subscription } from "../../types/types";
import SubscriptionOptions from "./SubscriptionOptions";
import EditModal from "./EditModal";

interface Props {
  subscription: Subscription;
  updateData: () => void;
}

function SubscriptionItem({ subscription, updateData }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)

  if (!subscription) return null;
  
  const { _id, name, cost, intervalInMonths, status } = subscription;

  const statusColor = () => {
    switch (status) {
      case "active":
        return "bg-green"

      case "inactive":
        return "bg-gray"

      case "expiring":
        return "bg-amber"

      case "watching":
        return "bg-fuchsia"
    }
  }

  const deleteEntry = async () => {
    await axios.delete(`http://localhost:8090/api/subscriptions/${_id}`)
    updateData()
  }

  const updateEntry = async (data: Subscription) => {
    await axios.put(`http://localhost:8090/api/subscriptions/${_id}`, data)
    updateData()
    closeEditModal()
  }

  const openOptionsDrawer = () => {
    setIsOpen(!isOpen)
  }

  const openEditModal = () => {
    setShowModal(true)
  }

  const closeEditModal = () => {
    setShowModal(false)
  }

  return (
    <li className={`${statusColor()}-200 rounded px-4 py-2 mb-2 cursor-pointer`} onClick={openOptionsDrawer}>
      <div className="flex justify-between text-gray-700">
        <p>{ name }</p>
        <p>{cost} / { intervalInMonths } month(s)</p>
      </div>

      <SubscriptionOptions isOpen={isOpen} deleteEntry={deleteEntry} openEditModal={openEditModal} statusColor={statusColor()} />
      <EditModal subscription={subscription} closeEditModal={closeEditModal} showModal={showModal} updateEntry={updateEntry} />
    </li>
  )
}

export default SubscriptionItem