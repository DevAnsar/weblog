import SearchInput from "./SearchInput";

const IndexSerchBox = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold text-gray-800 my-5">
        مقاله های مرتبط با برنامه نویسی
      </span>
      <span className="text-3xl font-bold text-blue-600">"دِ جی اِس"</span>
      <div className="w-full flex justify-center mt-5">
        <SearchInput />
      </div>
    </div>
  );
};
export default IndexSerchBox;
