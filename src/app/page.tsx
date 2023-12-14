"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex flex-col h-full py-10 space-y-10">
      <div className="flex w-full justify-center items-center">
        <span className="text-blue-500 text-xl font-semibold italic">
          {`"Là đối tác tin cậy để có thể sở hữu cho mình những căn hộ, phòng trọ
          đẹp, uy tín và giá rẻ"`}
        </span>
      </div>
      <div
        className="flex flex-row justify-between items-center px-20"
        data-aos="fade-right"
      >
        <div className="flex flex-col justify-between items-start space-y-5">
          <span className="text-[#777777] text-sm font-bold">
            THE ULTIMATE LUXURY EXPERIENCE
          </span>
          <span className="text-[#222222] text-6xl font-bold">
            Luxury Apartments
          </span>
          <a
            className="text-blue-500 text-lg font-bold underline"
            href="https://zalo.me/g/alsxmf682?joinSrc=9"
          >
            Contact us now
          </a>
        </div>
        <div className="zoom-container">
          <Image
            src="/images/image1.jpg"
            alt="Image"
            width={750}
            height={960}
            className="zoom-animation"
          />
        </div>
      </div>
      <div
        className="flex flex-row justify-between items-center px-20"
        data-aos="fade-left"
      >
        <div className="zoom-container">
          <Image
            src="/images/image2.jpg"
            alt="Image"
            width={550}
            height={560}
          />
        </div>
        <div className="flex flex-col justify-between items-end space-y-5">
          <span className="text-[#777777] text-sm font-bold">
            THE ULTIMATE LUXURY EXPERIENCE
          </span>
          <span className="text-[#222222] text-6xl font-bold text-right">
            Luxury Apartments
          </span>
          <a
            className="text-blue-500 text-lg font-bold underline"
            href="https://zalo.me/g/alsxmf682?joinSrc=9"
          >
            Contact us now
          </a>
        </div>
      </div>
      <div
        className="flex flex-row justify-between items-center px-20"
        data-aos="fade-right"
      >
        <div className="flex flex-col justify-between items-start space-y-5">
          <span className="text-[#777777] text-sm font-bold">
            THE ULTIMATE LUXURY EXPERIENCE
          </span>
          <span className="text-[#222222] text-6xl font-bold">
            Luxury Apartments
          </span>
          <a
            className="text-blue-500 text-lg font-bold underline"
            href="https://zalo.me/g/alsxmf682?joinSrc=9"
          >
            Contact us now
          </a>
        </div>
        <div className="zoom-container">
          <Image
            src="/images/image3.jpg"
            alt="Image"
            width={750}
            height={960}
          />
        </div>
      </div>
      <div
        className="flex flex-row justify-between items-center px-20"
        data-aos="fade-left"
      >
        <div className="zoom-container">
          <Image
            src="/images/image4.jpg"
            alt="Image"
            width={550}
            height={560}
          />
        </div>
        <div className="flex flex-col justify-between items-end space-y-5">
          <span className="text-[#777777] text-sm font-bold">
            THE ULTIMATE LUXURY EXPERIENCE
          </span>
          <span className="text-[#222222] text-6xl font-bold text-right">
            Luxury Apartments
          </span>
          <a
            className="text-blue-500 text-lg font-bold underline"
            href="https://zalo.me/g/alsxmf682?joinSrc=9"
          >
            Contact us now
          </a>
        </div>
      </div>
      <div
        className="flex flex-row justify-between items-center px-20"
        data-aos="fade-right"
      >
        <div className="flex flex-col justify-between items-start space-y-5">
          <span className="text-[#777777] text-sm font-bold">
            THE ULTIMATE LUXURY EXPERIENCE
          </span>
          <span className="text-[#222222] text-6xl font-bold">
            Luxury Apartments
          </span>
          <a
            className="text-blue-500 text-lg font-bold underline"
            href="https://zalo.me/g/alsxmf682?joinSrc=9"
          >
            Contact us now
          </a>
        </div>
        <div className="zoom-container">
          <Image
            src="/images/image5.jpg"
            alt="Image"
            width={550}
            height={560}
          />
        </div>
      </div>
    </div>
  );
}
