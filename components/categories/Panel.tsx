import HoverBtn from "../../components/buttons/HoverBtn";
import { ViewGridIcon } from "@heroicons/react/solid";

const CategoriesPanel = ()=>{
    return(
        <div className="flex justify-center my-24">
        <div className="w-full md:w-3/4">
          <div className="flex justify-center items-center gap-2 ">
            <ViewGridIcon className="w-9 text-slate-600 animate-wiggle" />
            <span className="text-2xl text-slate-800">
              موج سواری روی تکنولوژی{" "}
            </span>
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-4/5 lg:w-2/3 flex justify-center flex-wrap mt-5 gap-4">
              <HoverBtn href="/category/js" className="text-orange-500 bg-orange-50 border-orange-500 hover:bg-orange-500">
                جاوااسکریپت
              </HoverBtn>

              <HoverBtn href="/category/react" className="text-blue-500 bg-blue-50 border-blue-500 hover:bg-blue-500">
                ری اکت
              </HoverBtn>

              <HoverBtn href="/category/react" className="text-red-500 bg-red-50 border-red-500 hover:bg-red-500">
                لاراول
              </HoverBtn>
              <HoverBtn href="/category/public" className="text-green-500 bg-green-50 border-green-500 hover:bg-green-500">
                ویو
              </HoverBtn>
              <HoverBtn href="/category/public" className="text-gray-500 bg-gray-50 border-gray-500 hover:bg-gray-500">
                عمومی
              </HoverBtn>
            </div>
          </div>
        </div>
      </div>
    )
}
export default CategoriesPanel;