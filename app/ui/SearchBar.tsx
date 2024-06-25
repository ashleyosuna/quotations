import { categories } from "../lib/categories";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar({}) {
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
    <div className="mb-4 flex flex-row gap-4">
      {/* <form className="flex flex-row gap-4"> */}
      <span className="relative h-[40px] w-3/4 grow">
        <label className="absolute top-[-10px] bg-white left-4 z-10 px-1">
          Buscar
        </label>
        <input
          className="border-2 rounded-xl pl-2 py-1.5 w-full"
          //   onChange={(e) => handleSearchFunction(e.target.value)}
          //   defaultValue={.get("query")?.toString()}
        ></input>
      </span>
      <select className="border-2 rounded-lg px-2">
        <option value="">Categoría</option>
        {categories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      {/* </form> */}
    </div>
  );
}
