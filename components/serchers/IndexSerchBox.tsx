const IndexSerchBox = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-2xl font-bold text-gray-800 my-5">
        مقاله های مرتبط با برنامه نویسی
      </span>
      <span className="text-3xl font-bold text-blue-600">"دِ جی اِس"</span>
      <div className="mt-5 w-4/5  md:w-3/4 lg:w-96 flex items-center border-2 border-slate-100 bg-slate-100 pr-4 pl-2 py-2 rounded-xl">
        <input
          placeholder="دنبال چه موضوعی میگردی؟"
          className="w-full text-base bg-inherit"
        />
        <button
          type="button"
          className="px-2 py-2 mx-1 w-20 text-center border rounded-xl text-sm bg-blue-500 hover:bg-blue-700 text-slate-50"
        >
          بگرد
        </button>
      </div>
    </div>
  );
};
export default IndexSerchBox;
