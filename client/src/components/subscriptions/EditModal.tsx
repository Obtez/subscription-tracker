import { Subscription } from "../../types/types";
import EditForm from "../forms/edit-form/EditForm";

interface Props {
  subscription: Subscription;
  closeEditModal: () => void;
  showModal: boolean;
  updateEntry: (data: Subscription) => void;
}

function EditModal({subscription, closeEditModal, showModal, updateEntry}: Props) {
  if(!showModal) return null

  return (
    <div className="flex fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="bg-gray-50 rounded m-auto w-full">
        <div className="flex justify-end p-4">
          <button type="button" onClick={closeEditModal}>X</button>
        </div>
        <div>
          <EditForm subscription={subscription} updateEntry={updateEntry} />
        </div>
      </div>
    </div>
  )
}

export default EditModal