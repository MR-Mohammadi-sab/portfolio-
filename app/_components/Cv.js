import Image from "next/image";
import cv from "@/public/cv.png";
export default function CVViewer() {
  return (
    <div className="flex flex-col items-center ">
      <Image src={cv} quality={80} alt="my pdf" placeholder="blur" />
    </div>
  );
}
