import Link from "next/link";
import { Image } from "@mantine/core";

const ExampleLayout = ({ children }: any) => {
  return (
    <>
      <title>CINEMA 21 - We Are The Largest Cinema Chain in Indonesia</title>
      <div className=" object-top  w-full bg-white h-[110px] p-6 border-b md:block hidden">
        <Image
          src="https://i0.wp.com/airinsight.com/wp-content/uploads/2022/06/51894886006_20f38ed67d_o.jpg?fit=2560%2C1439&ssl=1"
          alt="iklan"
          width={728}
          height={90}
          className="iklan"
        ></Image>
      </div>

      <div className="bg-teal-800 p-6 md:h-[86px] md:w-full md:block hidden">
        <a href="#">
          <Image
            className="ml-28 w-[250px] items-center md:block"
            src="image/logo.png"
            alt="logo"
          ></Image>
        </a>
      </div>
      
      <div className="z-50 fixed block">
        <div className="w-[1000px] bg-teal-800 h-[115px] p-6 md:h-[86px] md:hidden">
          <a href="#">
            <Image
              className="ml-[140px] mt-[-12px] w-[540px] items-center md:hidden"
              src="image/logo2.png"
              alt="logo2"
            ></Image>
          </a>
        </div>
        <div className="md:hidden text-[39px] bg-white h-[115px] w-[1000px] z-50 text-teal-800">
          <p className="ml-[185px] pt-[25px]">
            Theaters in <strong> JAKARTA </strong>
          </p>
        </div>
      </div>

      <div className="searchbar hidden md:block">
        <input
          type="text"
          placeholder="Search teathers,movies..."
          className="z-50 bg-zinc-200 rounded-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-4 py-2 w-96 italic text-sm font-light"
        />
      </div>

      <div className="z-40 w-full bg-gray-100 h-[65px] p-5 navbar font-semibold hidden md:block text">
        <ul className="navlogo font-normal ">
          <a href="#NowPlaying">Now Playing</a>
          <a href="/Upcoming">Upcoming</a>
          <a href="/Theater">Theaters</a>
          <a href="#">Promotions</a>
          <a href="#">Info 21</a>
          <p className="fon" style={{ margin: "-3.4rem 0rem 2rem 50rem" }}>
            |
          </p>
          <a href="https://21cineplex.com/imax">
            <Image
              src="https://21cineplex.com//theme/v5/assets/img/imax-menu.png"
              height={18}
              width={80}
              alt=""
              style={{ margin: "-5.8rem 0rem 2rem 54rem" }}
            ></Image>
          </a>
          <a href="https://21cineplex.com/dolby-atmos">
            <Image
              src="https://21cineplex.com//theme/v5/assets/img/dolby-menu.png"
              alt=""
              height={18}
              width={120}
              style={{ margin: "-4.7rem 0rem 2rem 63rem" }}
            ></Image>
          </a>
          <a href="/login">
            <Image
              src="https://21cineplex.com//theme/v5/assets/img/mtix-menu.png"
              alt=""
              height={18}
              width={82}
              style={{ margin: "-4.7rem 0rem 2rem 74.5rem" }}
            ></Image>
          </a>
        </ul>
      </div>

      <div className="z-50 object-top  w-full md:bg-white md:h-[110px] pl-6 pt-6 pb-5">
        <Image
          src="https://media.21cineplex.com/webcontent/gallery/pictures/167940075011615_925x527.jpg"
          alt="iklan"
          className="w-[925px] h-[527px] md:block hidden"
          style={{ margin: "5px 0rem 10rem 7.3rem" }}
        ></Image>
        <Image
          src="https://web3.21cineplex.com/mobile-banner/MakinDekatApps.jpg"
          alt="iklan2"
          className="w-[725px] md:hidden mt-[16.5rem]"
        ></Image>
      </div>

      <div
        className="w-40 bg-teal-800 text-gray-100 text-center pb-1.5 pt-0.5 font-bold tracking-widest md:block hidden"
        style={{ margin: "550px 0rem -2.1rem 8.7rem" }}
        id="NowPlaying"
      >
        <p>Now Playing</p>
      </div>

      <div
        className=" bg-gray-100 text-teal-800 w-44 p-1 md:block hidden"
        style={{ margin: "-21px 0rem 0rem 18.7rem" }}
      >
        <div className="select-twenty">
          <select className="custom-select bg-gray-100" id="city-change">
            <option value="77">AMBON</option>
            <option value="79">BALIKPAPAN</option>
            <option value="12">BANDUNG</option>
            <option value="76">BANJARMASIN</option>
            <option value="27">BATAM</option>
            <option value="36">BEKASI</option>
            <option value="81">BENGKULU</option>
            <option value="26">BOGOR</option>
            <option value="104">CIKARANG</option>
            <option value="59">CILEGON</option>
            <option value="61">CIREBON</option>
            <option value="56">DENPASAR</option>
            <option value="110">DEPOK</option>
            <option value="106">DUMAI</option>
            <option value="97">GARUT</option>
            <option value="85">GORONTALO</option>
            <option value="100">GRESIK</option>
            <option value="3">JAKARTA</option>
            <option value="47">JAMBI</option>
            <option value="84">JAYAPURA</option>
            <option value="102">JEMBER</option>
            <option value="91">KARAWANG</option>
            <option value="103">KEDIRI</option>
            <option value="98">KISARAN</option>
            <option value="94">KUPANG</option>
            <option value="48">LAMPUNG</option>
            <option value="54">MAKASSAR</option>
            <option value="23">MALANG</option>
            <option value="62">MANADO</option>
            <option value="108">MANOKWARI</option>
            <option value="89">MATARAM</option>
            <option value="25">MEDAN</option>
            <option value="90">PADANG</option>
            <option value="80">PALANGKARAYA</option>
            <option value="50">PALEMBANG</option>
            <option value="86">PALU</option>
            <option value="105">PANGKAL PINANG</option>
            <option value="99">PEKALONGAN</option>
            <option value="73">PEKANBARU</option>
            <option value="69">PONTIANAK</option>
            <option value="101">RANTAU PRAPAT</option>
            <option value="109">ROKAN HILIR</option>
            <option value="52">SAMARINDA</option>
            <option value="20">SEMARANG</option>
            <option value="95">SIDOARJO</option>
            <option value="87">SINGKAWANG</option>
            <option value="70">SOLO</option>
            <option value="107">SORONG</option>
            <option value="93">SUMEDANG</option>
            <option value="55">SURABAYA</option>
            <option value="35">TANGERANG</option>
            <option value="92">TANJUNG PINANG</option>
            <option value="111">TARAKAN</option>
            <option value="82">TASIKMALAYA</option>
            <option value="96">TERNATE</option>
            <option value="75">YOGYAKARTA</option>
          </select>
        </div>
      </div>
      <div className="w-full pt-[88px] pb-4 px-2 md:px-5">{children}</div>
      <div className="md:w-full bg-teal-800 h-[174px] pb-[48px] md:pb-0 px-2 md:px-5 p-5 navbar1 text-white font-thin">
        <ul className="navlogo font-normal">
          <a href="/Upcoming">Profile</a>|<a href="#">Terms of Use</a>|
          <a href="#">Advertising</a>
        </ul>
        <div>
          <a href="#">
            <Image
              className=""
              src="image/instagram.png"
              alt="iklan"
              width={16}
              style={{ margin: "-32px 0rem 0rem 75rem" }}
            ></Image>
          </a>
          <a href="#">
            <Image
              className=""
              src="image/facebook.png"
              alt="iklan"
              width={16}
              style={{ margin: "-41px 0rem 0rem 78rem" }}
            ></Image>
          </a>
          <a href="#">
            <Image
              className=""
              src="image/twitter.png"
              alt="iklan"
              width={16}
              style={{ margin: "-40px 0rem 0rem 81rem" }}
            ></Image>
          </a>
          <a href="#">
            <Image
              className=""
              src="image/youtube.png"
              alt="iklan"
              width={16}
              style={{ margin: "-41px 0rem 0rem 84rem" }}
            ></Image>
          </a>
        </div>
        <div className="footer">
          © 1999-2012 21Cineplex.com. All materials and contents (texts,
          graphics, and every attributes) of 21Cineplex or 21Cineplex.com
          website are copyrights and trademarks of PT Nusantara Sejahtera Raya.
          Any commercial usage of the materials and contents is forbidden
          without prior permission from PT Nusantara Sejahtera Raya. There is no
          other institutions/agencies outside PT Nusantara Sejahtera Raya
          allowed to use www.21Cineplex.com (21Cineplex website) without prior
          permission from PT Nusantara Sejahtera Raya
        </div>
      </div>
    </>
  );
};

export default ExampleLayout;
