import { MenuIcon } from "@heroicons/react/solid";
import Link from "next/link";

const HeaderComponent = () => {
  return (
    <header className="w-full flex justify-center bg-white text-gray-800 font-md py-5 border-b-2 sticky top-0 z-30">
      <div className="w-full  lg:w-3/4">
        <div className="flex justify-between  px-5">
          <div className="flex items-center">
            {/* <Image src={} /> */}
            <nav className="px-3 items-center hidden md:flex">
              <Link href="/">
                <a className="px-2 py-1 mx-2 text-slate-800 hover:text-blue-600 font-bold">
                  خانه
                </a>
              </Link>
              <Link href="/services">
                <a className="px-2 py-1 mx-2 hover:text-blue-600 font-bold">
                  خدمات
                </a>
              </Link>
              <Link href="/pricing">
                <a className="px-2 py-1 mx-2 hover:text-blue-600 font-bold">
                  هزینه ها
                </a>
              </Link>
              <Link href="/contact-us">
                <a className="px-2 py-1 mx-2 hover:text-blue-600 font-bold">
                  ارتباط بیشتر
                </a>
              </Link>
              <Link href="/about-us">
                <a className="px-2 py-1 mx-2 hover:text-blue-600 font-bold">
                  اطلاعات
                </a>
              </Link>
            </nav>
            <MenuIcon className=" md:hidden w-10 h-10" />
          </div>
          <div className="flex">
            {/* <Link href="/start">
              <a>
                <div className="px-3 py-2 mx-1 w-20 text-center border rounded-xl text-sm bg-blue-500 hover:bg-blue-700 text-slate-50">
                  شروع
                </div>
              </a>
            </Link> */}
            <Link href="/start">
              <a>
                <div className="px-3 py-2 mx-1 w-20 text-center border rounded-xl text-sm text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-slate-50">
                  ورود
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderComponent;
