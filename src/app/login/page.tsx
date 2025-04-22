import "../auth.scss";
// import dynamic from "next/dynamic";
import { FormComponent } from "./components/form";
import Image from "next/image";
import promo from "../../../public/assets/promos/promo_24_mayo.png";

export default function LoginPage() {
  // const VideoPlayer = dynamic(() => import("../../components/video/video"), {
  //   ssr: false,
  // });
  return (
    <div className="auth-container">
      {/* <VideoPlayer
        url="https://servidorcadefi.inowu.dev/media/2021/INOWUV/BIF/index.m3u8"
        width="75%"
        loop={true}
        muted={true}
        controls={false}
      /> */}
      <div className="relative w-full lg:w-[75%] h-full rounded-xl bg-neutral-500 overflow-hidden hidden sm:flex">
        <Image src={promo} alt="" className="object-cover" fill />
      </div>
      <FormComponent />
    </div>
  );
}
