import { useState, ChangeEvent, FormEvent } from "react";
import { NewSubscription, Subscription } from "../../../types/types";

interface Props {
  subscription: Subscription;
  updateEntry: (data: Subscription) => void;
}

function EditForm({ subscription, updateEntry }: Props) {
  const [data, setData] = useState<Subscription >(subscription)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    updateEntry(data)
  }

  return (
    <div className="container py-4 ">
        <h1 className="text-3xl text-gray-700 text-center">Editing { data.name }</h1>
        <form className="w-full max-w-sm m-auto" onSubmit={handleSubmit}>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">Name</label>
              </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                name="name"
                id="name"
                value={data.name}
                onChange={handleChange}
                required
              />
            </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="cost">Cost</label>
              </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="number"
                name="cost"
                id="cost"
                value={data.cost}
                onChange={handleChange}
                required
              />
            </div>
            </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="intervalInMonths">Interval in Months</label>
            </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="number"
              name="intervalInMonths"
              id="intervalInMonths"
              value={data.intervalInMonths}
              onChange={handleChange}
              required
            />
          </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="status">Status</label>
            </div>
              <div className="md:w-2/3">
                <select className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                name="status" 
                id="status" 
                value={data.status} 
                onChange={handleChange}>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                  <option value="expiring">expiring</option>
                  <option value="watching">watching</option>
                </select>
              </div>
      

          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" type="submit">Save</button>
              </div>
          </div>
        </form>
    </div>
  )
}

export default EditForm