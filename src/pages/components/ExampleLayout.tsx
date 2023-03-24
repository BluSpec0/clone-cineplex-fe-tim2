import Link from "next/link";
import { Image } from '@mantine/core';

const ExampleLayout = ({ children }: any) => {
  return (
    <>
      <div className=" object-top  w-full bg-teal-800 h-[86px] p-5 border-b">
        <Image src="image/logo.png" alt="logo" width={250} className="logo"></Image>
      </div>
      <div className="z-50 w-full bg-gray-200 h-[65px] p-5 border-b navbar">
        <ul>
          <a href="#">Now Playing</a>
          <a href="#">Upcoming</a>
          <a href="#">Theaters</a>
          <a href="#">Promotions</a>
          <a href="#">Info 21</a> 
        </ul>
      </div>
      <div className="pt-[88px] pb-4 px-2 md:px-5">{children}</div>
      <div className="w-full bg-gray-50 h-[100px] pb-[48px] md:pb-0 px-2 md:px-5">
        Footer
      </div>
    </>
  );
};

export default ExampleLayout;
