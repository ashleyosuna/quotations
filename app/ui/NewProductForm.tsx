import { createProduct } from "../utils/products";
import { categories } from "../lib/categories";

export default function NewProductForm() {
  return (
    <div>
      <form action={createProduct} className="flex flex-col gap-4 p-6">
        <span className="grid grid-cols-6">
          <label className="col-span-2 py-1">Descripción:</label>
          <input
            type="text"
            name="description"
            className="col-span-4 border-2 rounded-md px-2 py-1"
          ></input>
        </span>
        <span className="grid grid-cols-6">
          <label className="col-span-2 py-1">Marca:</label>
          <input
            type="text"
            name="brand"
            className="col-span-4 border-2 rounded-md px-2 py-1"
          ></input>
        </span>
        <span className="grid grid-cols-6">
          <label className="col-span-2 py-1">Categoría:</label>
          <select
            name="category"
            className="col-span-4 border-2 rounded-md px-2 py-1"
          >
            {categories.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </span>
        <span className="grid grid-cols-6">
          <label className="col-span-2 py-1">Unidad:</label>
          <input
            type="text"
            name="unit"
            className="col-span-4 border-2 rounded-md px-2 py-1"
          ></input>
        </span>
        <span className="grid grid-cols-6">
          <label className="col-span-2 py-1">Precio:</label>
          <input
            type="number"
            name="price"
            className="col-span-4 border-2 rounded-md px-2 py-1"
          ></input>
        </span>
        <span className="grid grid-cols-6">
          <label className="col-span-2 py-1">Descuento de temporada:</label>
          <input
            type="number"
            name="discount"
            className="col-span-4 border-2 rounded-md px-2 py-1"
          ></input>
        </span>
        <button className="self-center w-fit rounded-lg bg-pink-400 hover:scale-110 transition px-4 py-1 text-white font-bold">
          Crear
        </button>
      </form>
    </div>
  );
}
