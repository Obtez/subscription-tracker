import { Subscription } from "../../types/types";
import EditForm from "../forms/edit-form/EditForm";

interface Props {
  subscription: Subscription;
  closeEditModal: () => void;
  showModal: boolean;
}

function EditModal({subscription, closeEditModal, showModal}: Props) {
  if(!showModal) return null

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="flex justify-end p-4">
        <button type="button" onClick={closeEditModal}>X</button>
      </div>
      <div className="">
        <EditForm subscription={subscription} />
      </div>
    </div>
  )
}

export default EditModal