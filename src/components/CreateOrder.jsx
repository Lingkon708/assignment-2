import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import chicken from "./assets/chicken.svg";
import submarine from "./assets/submarine.svg";
import hamburger from "./assets/hamburger.svg";
import Pizza from "./assets/pizza.svg";
import OrJuice from "./assets/orange-juice.png";
import ColdCoffe from "./assets/iced-coffee.png";
import { useState } from "react";

const formData = [
  {
    imageSrc: hamburger,
    productName: "Hamburger",
    price: 300,
  },
  {
    imageSrc: chicken,
    productName: "Chicken Nuggets",
    price: 300,
  },
  {
    imageSrc: submarine,
    productName: "Submarine Sandwich",
    price: 400,
  },
  {
    imageSrc: Pizza,
    productName: "Pizza slices",
    price: 100,
  },
  {
    imageSrc: OrJuice,
    productName: "Orange juice",
    price: 150,
  },
  {
    imageSrc: ColdCoffe,
    productName: "Cold Coffee",
    price: 100,
  },
];

export default function CreateOrder({
  handleClick,
  price,
  addedItems,
  onPlaceOrder,
}) {
  const [taskValue, setTask] = useState("");
  const handleChange = (e) => {
    let value = e.target.value;

    setTask(value);
  };

  return (
    <>
      <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
        <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
        <p className="text-gray-400 text-sm mb-4">
          Accurately fulfill customer orders based on a precise understanding of
          their requirements.
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Customer Name
          </label>
          <input
            type="text"
            name="customerName"
            value={taskValue.customerName}
            onChange={handleChange}
            className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Choose Items</label>
          <div className="items-container">
            {formData.map((Item) => (
              <div
                key={Item.productName}
                className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center mr-3">
                    <img
                      src={Item.imageSrc}
                      alt={Item.productName}
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{Item.productName}</h3>
                    <p className="text-xs text-gray-400">BDT {Item.price}</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                    onClick={() => handleClick(Item.productName, Item.price)}
                  >
                    {addedItems[Item.productName] ? (
                      <FaMinus color="red" />
                    ) : (
                      <FaPlus color="lightgreen" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
          onClick={() => onPlaceOrder(taskValue)}
        >
          Place Order BDT {price}
        </button>
      </div>
    </>
  );
}
