import Image from "../../containers/Image";
import FakeIcon from "../../../public/images/fake-news.png";
const FooterComponent = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-100 to-white  flex justify-center">
      <div className="w-full lg:w-3/4  py-5 px-5 grid grid-cols-5">
        <div className="col-span-5 lg:col-span-3">
          <div className="text-center text-base text-gray-800 lg:text-right mt-5">
            کلیه حقوق مجموعه برای توسعه دهندگان و اسپانسرها محفوظ است
          </div>

          <div className="text-center text-sm text-gray-800 lg:text-right mt-5 flex justify-center lg:justify-start gap-5">
            <div className="w-16">
              <Image src={FakeIcon} />
            </div>
            <div className="w-16">
              <Image src={FakeIcon} />
            </div>
            <div className="w-16">
              <Image src={FakeIcon} />
            </div>
          </div>

          <div className="text-center text-base text-gray-800 lg:text-right mt-5">
            توسعه داده شده با
            <span className="text-red-600 mx-1 animate-pulse">❤</span>
            توسط
            <a
              href="https://ansarmirzayi.ir"
              className="text-blue-500 hover:text-blue-800 mx-1"
            >
              @DevAnsar
            </a>
          </div>
        </div>
        <div className="col-span-5 lg:col-span-2">
          <div className="flex flex-col mt-5">
            <div className="text-gray-700 text-base mb-2 text-center lg:text-right">
              میخواهید از آخرین مقالات با خبر شوید؟
            </div>
            <div className="mb-2 flex justify-center lg:justify-start">
              <input
                placeholder="آدرس ایمیل خود را وارد کنید..."
                className="px-3 py-2 ml-1 border-2 rounded-xl text-sm bg-slate-200  text-gray-700 border-gray-300 focus:ring-gray-300 focus:border-gray-400 text-center"
              />
              <a className="px-3 py-2 mx-1  text-center border rounded-xl text-sm bg-blue-500 hover:bg-blue-700 text-slate-50 hover:cursor-pointer">
                وصل شدن
              </a>
            </div>
            <div className="text-gray-400 text-sm text-center lg:text-right">
              ما همواره سعی میکنیم بهترین و به روزترین مقالات آموزشی را در زمینه
              برنامه نویسی و طراحی را در اختیار علاقه مندان و متخصصان قراردهیم.
              برای دریافت آخرین مقالات منتشر شده ایمیل خود را ثبت کنید
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
