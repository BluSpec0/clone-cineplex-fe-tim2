import React from 'react'
import Link from "next/link";
import { Image, Card, Text } from "@mantine/core";

export default function movie1() {
  return (
    <>
    <div className=" object-top  w-full bg-white h-[110px] p-6 border-b">
          <Image
              src="https://i0.wp.com/airinsight.com/wp-content/uploads/2022/06/51894886006_20f38ed67d_o.jpg?fit=2560%2C1439&ssl=1"
              alt="iklan"
              width={728}
              height={90}
              className="iklan"
          ></Image>
      </div><div className="z-40 w-full bg-teal-800 h-[86px] p-6">
              <a href="#">
                  <Image
                      className="ml-28"
                      src="image/logo.png"
                      alt="logo"
                      width={250}
                  ></Image>
              </a>
          </div><div className="searchbar">
              <input
                  type="text"
                  placeholder="Search teathers,movies..."
                  className="z-50 bg-zinc-200 rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-4 py-2 w-96 italic text-sm font-light" />
          </div><div className="z-40 w-full bg-gray-100 h-[65px] p-5 navbar font-semibold ">
              <ul className="navlogo font-normal">
                  <a href="/#">Now Playing</a>
                  <a href="/Upcoming">Upcoming</a>
                  <a href="/Theater">Theaters</a>
                  <a href="#">Promotions</a>
                  <a href="#">Info 21</a>
                  <p className="fon"
                      style={{ margin: "-3.4rem 0rem 2rem 50rem" }}>|</p>
                  <a href="#">
                      <Image
                          src="https://21cineplex.com//theme/v5/assets/img/imax-menu.png"
                          height={18}
                          width={80}
                          alt=""
                          style={{ margin: "-5.8rem 0rem 2rem 54rem" }}></Image>
                  </a>
                  <a href="#">
                      <Image
                          src="https://21cineplex.com//theme/v5/assets/img/dolby-menu.png"
                          alt=""
                          height={18}
                          width={120}
                          style={{ margin: "-4.7rem 0rem 2rem 63rem" }}></Image>
                  </a>
                  <a href="/login">
                      <Image
                          src="https://21cineplex.com//theme/v5/assets/img/mtix-menu.png"
                          alt=""
                          height={18}
                          width={82}
                          style={{ margin: "-4.7rem 0rem 2rem 74.5rem" }}></Image>
                  </a>
              </ul>
          </div>

          <p className="font-thin text-2xl"
          style={{ margin: "3rem 0rem 2rem 8.7rem" }}>NOW PLAYING</p>

        <div>
          <Image
          src="https://media.21cineplex.com/webcontent/gallery/pictures/167878648415176_290x426.jpg"
          alt=""
          height={420}
          width={286}
          style={{ margin: "-1rem 0rem 2rem 8.6rem" }}></Image> 
        <Text weight={500} size={27} className="text-teal-800">
          <p style={{margin: "-28.5rem 0rem 20rem 28.7rem"}}>Mrs. Chatterjee vs. Norway</p>
        </Text>
        <Text weight={200} size={15} className="pr-28">
          <p style={{margin: "-18.7rem 0rem 20rem 28.7rem"}}>Jenis Film : Action, Crime, Thriller
                                                            Produser : Basil Iwanyk, Erica Lee, Chad Stahelski, Keanu Reeves
Sutradara : Chad Stahelski
Penulis : Shay Hatten, Michael Finch, Derek Kolstad
Produksi : Lionsgate
Casts : Keanu Reeves, Donnie Yen, Bill Skarsgard, Laurence Fishburne, Hiroyuki Sanada, Shamier Anderson, Lance Reddick, Rina Sawayama, Scott Adkins, Ian McShane</p>
        </Text>
      </div>

          <div className="pt-[237px] pb-4 px-2 md:px-5"></div>
      <div className="w-full bg-teal-800 h-[174px] pb-[48px] md:pb-0 px-2 md:px-5 p-5 navbar1 text-white font-thin">
        <ul className="navlogo font-normal ">
          <a href="/Upcoming">Profile</a>
          |
          <a href="#">Terms of Use</a>
          |
          <a href="#">Advertising</a>
        </ul>
        <div>
            <a href="#">
            <Image
              className=""
              src="image/instagram.png"
              alt="iklan"
              width={16}
              style={{margin: "-32px 0rem 0rem 75rem" }}
            ></Image>
            </a>
            <a href="#">
            <Image
              className=""
              src="image/facebook.png"
              alt="iklan"
              width={16}
              style={{margin: "-41px 0rem 0rem 78rem" }}
            ></Image>
            </a>
            <a href="#">
            <Image
              className=""
              src="image/twitter.png"
              alt="iklan"
              width={16}
              style={{margin: "-40px 0rem 0rem 81rem" }}
            ></Image>
            </a>
            <a href="#">
            <Image
              className=""
              src="image/youtube.png"
              alt="iklan"
              width={16}
              style={{margin: "-41px 0rem 0rem 84rem" }}
            ></Image>
            </a>
        </div>
        <div className="footer">
        © 1999-2012 21Cineplex.com. All materials and contents (texts, graphics, and every attributes) of 21Cineplex or 21Cineplex.com website are copyrights and trademarks of PT Nusantara Sejahtera Raya.
Any commercial usage of the materials and contents is forbidden without prior permission from PT Nusantara Sejahtera Raya. There is no other institutions/agencies outside
PT Nusantara Sejahtera Raya allowed to use www.21Cineplex.com (21Cineplex website) without prior permission from PT Nusantara Sejahtera Raya
        </div>
      </div>
    </>
  )
}
