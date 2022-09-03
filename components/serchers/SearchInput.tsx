import { useState } from "react";
import { useRouter } from "next/router";

const SearchInput = ({
  handleSearch,
  initValue,
}: {
  handleSearch?: (query: string) => void;
  initValue?: string;
}) => {
  const router = useRouter();
  const [searchValue, setSearcValue] = useState<string>(initValue || "");
  const hendleSearchPosition = (_: any, top = 210) => {
    window.scrollTo({
      top,
      left: 0,
      behavior: "smooth",
    });
  };
  const changeSearchValue = (text : string) => {
    setSearcValue(text);
  };
  return (
    <div
      id="searchInputBox"
      className="w-4/5 md:w-3/4 lg:w-96 flex items-center border-2 border-slate-100 bg-slate-100 pr-4 pl-2 py-2 rounded-xl"
    >
      <input
        placeholder="دنبال چه موضوعی میگردی؟"
        className="w-full text-base bg-inherit"
        onClick={hendleSearchPosition}
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=>changeSearchValue(e.target.value)}
        value={searchValue}
      />
      <button
        type="button"
        onClick={() => {
          handleSearch !== undefined
            ? router.push(`/search?q=${searchValue}`)
            : router.push(`/search?q=${searchValue}`);
        }}
        className="px-2 py-2 mx-1 w-20 text-center border rounded-xl text-sm bg-blue-500 hover:bg-blue-700 text-slate-50"
      >
        بگرد
      </button>
    </div>
  );
};
export default SearchInput;
