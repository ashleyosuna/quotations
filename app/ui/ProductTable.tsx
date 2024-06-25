import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { getProducts } from "../utils/products";

const dummyProducts = [
  {
    description: "Cuaderno con 100 hojas de raya",
    marca: "Norma",
    category: "cuadernos",
    unit: "PZA",
    price: 55.5,
    discount: 15,
  },
  {
    description: "Paquete de 500 hojas",
    marca: "Bond",
    category: "papel",
    unit: "PZA",
    price: 625,
    discount: 0,
  },
  {
    description: "Cartulina blanca",
    marca: "",
    category: "papel",
    unit: "PZA",
    price: 5,
    discount: 15,
  },
  {
    description: "Pliego de foamy con diamantina",
    marca: "",
    category: "papel",
    unit: "PZA",
    price: 25,
    discount: 15,
  },
  {
    description: "Caja de lápices de colores",
    marca: "Crayola",
    category: "colores",
    unit: "CJA",
    price: 67.5,
    discount: 15,
  },
];

export default async function Table() {
  const products = await getProducts();
  return (
    <div className="border-2 rounded-lg p-4">
      <table className="w-full">
        <thead className="py-1">
          <tr className="">
            <th className="py-2">Producto</th>
            <th className="max-md:hidden">Marca</th>
            <th className="max-md:hidden">Categoría</th>
            <th className="max-md:hidden">Unidad</th>
            <th>Precio</th>
            <th>Dto.</th>
            <th>Discounted Price</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => {
            return (
              <tr
                key={`product_${index}`}
                className="border-t-2 odd:bg-gray-100"
              >
                <td className="py-2 pl-2">{product.description}</td>
                <td className="text-center max-md:hidden">{product.brand}</td>
                <td className="text-center max-md:hidden">
                  {product.category}
                </td>
                <td className="text-center max-md:hidden">{product.unit}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right">{product.discount}%</td>
                <td className="text-right">
                  ${product.price * (1 - product.discount / 100)}
                </td>
                <td className="flex flex-row justify-center">
                  <Link href={`/dashboard/inventory/edit`}>
                    <PencilSquareIcon className="size-[30px]" />
                  </Link>
                  <Link href={`/dashboard/inventory/delete`}>
                    <TrashIcon className="size-[30px]" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
