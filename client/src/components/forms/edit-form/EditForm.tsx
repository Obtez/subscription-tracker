import { useState, ChangeEvent, FormEvent } from "react";
import { NewSubscription, Subscription } from "../../../types/types";

interface Props {
  subscription: Subscription
}

const emptySubscription: NewSubscription = {
  name: "",
  cost: 0,
  intervalInMonths: 0,
  status: "active"
}

function EditForm({ subscription }: Props) {
  const [data, setData] = useState<Subscription | NewSubscription>(subscription)

  const { name, cost, intervalInMonths, status } = subscription;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setData(emptySubscription)
  }

  return (
    <div className="container">
      <form>
        <h2>Editing { name }</h2>
      </form>
    </div>
  )
}

export default EditForm