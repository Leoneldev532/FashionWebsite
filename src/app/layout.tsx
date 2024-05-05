import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta charSet="utf-8"/>
      <body className={inter.className + "flex text-custom-light-marron bg-custom-white  flex-col justify-center items-center"}>
          <div className="flex 2xl:hidden w-full min-h-screen  gap-y-4 flex-col  justify-center items-center">

            <h2 className="text-3xl">version mobile disponible bientot </h2> 
            <span className="text-2xl">moins de  2 jours </span>

           </div> 
        <div className=" w-full hidden 2xl:flex   flex-col relative  justify-center overflow-hidden items-center">
        <div className="relative   justify-center   w-full items-center">
          <div className="absolute top-0  h-auto z-0 w-full  max-w-[1550px] ">

          <svg
  width={1450}
  height={10368}
  viewBox="0 0 1450 10368"
  fill="none"
  className="w-full h-full"
  xmlns="http://www.w3.org/2000/svg"
>
  <g
    style={{ mixBlendMode: "difference" }}
    opacity="0.1"
    filter="url(#filter0_d_44_668)"
  >
    <rect x={5} y="-1168.35" width={360} height="11527.7" stroke="#3E4451" />
    <rect x={365} y="-1168.35" width={360} height="11527.7" stroke="#3E4451" />
    <rect x={725} y="-1168.35" width={360} height="11527.7" stroke="#3E4451" />
    <rect x={1085} y="-1168.35" width={360} height="11527.7" stroke="#3E4451" />
  </g>
  <defs>
    <filter
      id="filter0_d_44_668"
      x="0.5"
      y="-1168.85"
      width={1449}
      height="11536.7"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy={4} />
      <feGaussianBlur stdDeviation={1} />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_44_668"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_44_668"
        result="shape"
      />
    </filter>
  </defs>
</svg>

          </div>
          </div>
          <div className="relative flex w-full   justify-center items-center z-0">
        {children}

        </div>
        </div>
        </body>
   
    </html>
  );
}
