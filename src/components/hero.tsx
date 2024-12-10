import Image from "next/image";
import image from "../../public/image 1855.png";
import { Button } from "./ui/button";
export default function Hero() {
  return (
    <div className="bg-[#F3F0F0] h-[450px]">
      <div className="flex  items-center container">
        <div className="w-3/4">
          <h1 className="text-[44px] leading-[52px] text-[#0A1729] font-[900] ">Siz kutgan Xiaomi 12 Mi Laite</h1>
          <p className="text-[#545D6A] leading-[18px] pt-1.5 pb-5 ">
            Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz
            uchun eng yaxshi arziydigan takliflarimizdan biridir!ii
          </p>
          <Button className="bg-[#0F4A97] hover:bg-[#0F4A97] py-6 px-8" variant="default">Batafsil</Button>
        </div>
        <Image src={image}  alt="image" />
      </div>
    </div>
  );
}
