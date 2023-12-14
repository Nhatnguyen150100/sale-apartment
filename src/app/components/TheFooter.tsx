import Image from "next/image";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

type Props = {};

const TheFooter = (props: Props) => {
  return (
    <div className="w-full bg-slate-500 min-h-[250px] px-36 py-10 flex flex-row justify-start items-center">
      <div className="flex flex-col justify-center items-start">
        <div className="flex flex-row items-center justify-between">
          <Image src="/logo.jpg" alt="VNHA" height={120} width={120} />
          <h1 className="font-bold ms-5 text-9xl text-white">VHNA</h1>
        </div>
        <span className="italic text-base text-white mt-4 w-[580px]">
          {`"
            Với tên gọi VNHA, là một trong những công ty trong lĩnh vực dịch vụ cho thuê căn hộ. 
            Chúng tôi đang xây dựng một danh tiếng nhất định và được khách hàng tin tưởng thông qua việc cung cấp những căn hộ cho thuê, 
            từ căn hộ cao cấp trong các tòa nhà chung cư đẳng cấp, cho đến căn hộ giá rẻ phù hợp với ngân sách của mọi khách hàng
            "`}
        </span>
      </div>
      <div className="flex flex-col justify-between items-start ms-20 h-full space-y-5">
        <h1 className="font-bold mt-5 text-xl text-white">
          Để tham gia vào đội ngũ của chúng tôi
        </h1>
        <div className="flex flex-row justify-between items-start">
          <span className="text-lg text-white font-bold me-3">+</span>
          <LocalPhoneIcon
            color="primary"
            sx={{ fontSize: 30, color: "#fba41a" }}
          />
          <div className="flex flex-col">
            <span className="ms-2 text-base font-semibold text-white">
              Phone number
            </span>
            <a
              className="ms-2 mt-1 text-base font-semibold text-white underline"
              href="tel:0979745051"
            >
              0979745051
            </a>
            <a
              className="ms-2 mt-1 text-base font-semibold text-white underline"
              href="tel:0961739713"
            >
              0961739713
            </a>
          </div>
        </div>

        <div className="flex flex-row justify-between items-start">
          <span className="text-lg text-white font-bold me-3">+</span>
          <LocalPhoneIcon
            color="primary"
            sx={{ fontSize: 30, color: "#fba41a" }}
          />
          <div className="flex flex-col">
            <span className="ms-2 text-base font-semibold text-white">
              Zalo
            </span>
            <a className="ms-2 mt-1 text-base font-semibold text-white underline">
              https://zalo.me/g/alsxmf682?joinSrc=9
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheFooter;
