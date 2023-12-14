import Image from "next/image";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

type Props = {};

const TheHeader = (props: Props) => {
  return (
    <div className="bg-white flex flex-row justify-between items-center py-1">
      <Image src="/logo.jpg" height={120} width={120} alt="Logo" />
      <div className="flex flex-row justify-between items-center">
        <h2 className="font-bold text-2xl">VNHA</h2>
        <span className="mx-5">-</span>
        <span className="text-lg italic text-gray-500">{`Cuộc đời luôn có 1 nơi để về đó là "nhà"`}</span>
      </div>
      <a
        className="flex flex-row justify-between items-start"
        href="tel:0383.291.623"
      >
        <LocalPhoneIcon color="primary" sx={{ fontSize: 30 }} />
        <div className="flex flex-col">
          <span className="ms-2 text-base font-semibold">Phone number</span>
          <span className="ms-2 mt-1 text-xl font-semibold text-gray-600">
            +84 383.291.623
          </span>
        </div>
      </a>
    </div>
  );
};

export default TheHeader;
