import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowSmLeftIcon } from "@heroicons/react/solid";
const HoverBtn = ({
  children,
  href,
  baseColor = "blue",
  className,
}: {
  children: React.ReactNode;
  href: string;
  baseColor?: string;
  className?: string;
}) => {
  return (
    <div className="w-1/4">
      <Link href={href}>
        <a
          className={`px-3 lg:px-2 py-2 lg:py-4 rounded-xl border text-sm flex justify-center items-center hover:text-white  ${className}   hover:animate-wiggle`}
        >
          {children}
          <ArrowSmLeftIcon className="w-4 h-4" />
        </a>
      </Link>
    </div>
  );
};

export default HoverBtn;
