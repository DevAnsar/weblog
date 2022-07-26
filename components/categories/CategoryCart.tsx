import CoverImage from "../containers/Image/CoverImage";
import Link from "next/link";
import type { GetCategory } from "../../types";
import categoryEmptyLogo from "../../public/images/category.png";

const CategoryCart = ({ category }: { category: GetCategory }) => {
  return (
    <div className="col-span-1">
      <Link href={`/categories/${category.slug}`}>
        <a className="w-full rounded-2xl border border-blue-400 flex gap-5 overflow-hidden hover:shadow-lg shadow-cyan-600">
          <div className="w-1/3">
            <div className="w-full h-full p-5 bg-gradient-to-l from-cyan-100 to-white">
              <CoverImage className="h-full" src={categoryEmptyLogo} />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-1 w-2/3">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">
                {category.title}
              </span>
            </div>

            <div className="flex items-center">
              <span className="text-sm text-gray-500">
                توضیحات مربوط به هر دسته بندی در این قسمت قرار میگیرند
              </span>
            </div>

            {category.posts_count !== undefined && category.posts_count !== 0 && (
              <div className="px-5 flex gap-1 justify-end items-center text-slate-600 font-sm">
                <span>{category?.posts_count}+</span>
                <span>مقاله</span>
              </div>
            )}
          </div>
        </a>
      </Link>
    </div>
  );
};
export default CategoryCart;
