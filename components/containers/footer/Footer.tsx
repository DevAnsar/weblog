const FooterComponent = () => {
  return (
    <footer className="bg-slate-50 py-5 px-5 grid grid-cols-5">
      <div className="col-span-3">
        کلیه حقوق مجموعه برای انصار میرزایی محفوظ است
      </div>
      <div className="col-span-2">
        <div className="flex flex-col">
          <div className="text-gray-700 text-base mb-1">میخواهید از آخرین مقالات با خبر شوید؟</div>
          <div className="mb-1">
            <input placeholder="آدرس ایمیل خود را وارد کنید..." className="px-3 py-2 ml-1 border-2 rounded-xl text-sm bg-slate-200  text-gray-700 border-gray-300 focus:ring-gray-300 focus:border-gray-400 text-center" />
            <a className="px-3 py-2 mx-1 w-20 text-center border rounded-xl text-sm bg-blue-500 hover:bg-blue-700 text-slate-50 hover:cursor-pointer">
            وصل شدن
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            ما همواره سعی میکنیم بهترین و به روزترین مقالات آموزشی را در زمینه
            برنامه نویسی و طراحی را در اختیار علاقه مندان و متخصصان قراردهیم.
            برای دریافت آخرین مقالات منتشر شده ایمیل خود را ثبت کنید
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
