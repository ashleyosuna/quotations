//"use client";

import Table from "@/app/ui/ProductTable";
import SearchBar from "@/app/ui/SearchBar";
import Link from "next/link";
//import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Inventory() {
  //   const searchParams = useSearchParams();
  //   const pathname = usePathname();
  //   const { replace } = useRouter();
  //   const handleSearch = async function (term: string) {
  //     const params = new URLSearchParams(searchParams);
  //     if (term) {
  //       params.set("query", term);
  //     } else {
  //       params.delete("query");
  //     }
  //     replace(`${pathname}?${params.toString()}`);
  //     return;
  //   };
  return (
    <>
      <h1 className="text-2xl font-bold mb-6 mt-12">Inventario</h1>
      <div className="flex flex-row gap-4">
        <div className="grow">
          <SearchBar />
        </div>
        <div className="grow-0 h-[40px] py-1.5">
          <Link
            href="/dashboard/inventory/new"
            className="place-self-center h-[40px] bg-pink-400 rounded-lg px-2 py-1.5 text-white font-bold hover:scale-110 transition"
          >
            Nuevo Producto
          </Link>
        </div>
      </div>
      <Table />
    </>
  );
}
