import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, Contact, ExternalLink } from "lucide-react";

export default function Header() {
  return (
    <nav>
      <div className="mx-auto max-w-7xl relative px-[25px] lg:px-[32px] py-[18px] flex items-center justify-between">
        <div className="flex flex-1 items-center justify-start">
          <Link className="z-50 flex items-center" href={"/"}>
            <Image
              className="w-[143px] lg:w-[157.3px] h-[33px] lg:h-[45.375px] object-cover"
              src="/assets/icons/radifyfull.png"
              width={500}
              height={500}
              alt="AeroEdit"
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <div className="flex space-x-4">
            <div className="lg:flex z-50 cursor-pointer text-gray-500 font-bold py-1 px-2 hidden gap-2 items-center justify-center bg-secondary-bg rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-secondary-strongerborder/60">
              <p className=" font-semibold text-base">Our work</p>
              <BriefcaseBusiness strokeWidth={1} />
            </div>
            <div className="z-50 cursor-pointer text-gray-500 py-1 px-2 flex gap-2 items-center justify-center bg-secondary-bg rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-secondary-strongerborder/60">
              <p className="text-sm lg:text-base">Contact</p>
              <Contact strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
