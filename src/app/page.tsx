import Etoiles from "@/../public/Etoiles.png";
import baghera from "@/../public/baghera.png";
import barretotothe from "@/../public/barretotothe.png";
import boule3 from "@/../public/boule3.png";
import clinthos from "@/../public/clinthos.png";
import franceColortotothe from "@/../public/franceColortotothe.png";
import frenchdrap from "@/../public/frenchdrap.png";
import greentotothe from "@/../public/greentotothe.png";
import joueur2 from "@/../public/joueur2.png";
import limetothe from "@/../public/limetothe.png";
import muti3totothe from "@/../public/muti3totothe.png";
import mutil2totothe from "@/../public/mutil2totothe.png";
import pinktotothe from "@/../public/pinktotothe.png";
import radialgrad from "@/../public/radialgrad.png";
import redTotothe from "@/../public/redTotothe.png";
import redtotothes from "@/../public/redtotothes.png";
import totote from "@/../public/totote.png";
import totothesfrance from "@/../public/totothefrance gradient.png";
import totothes from "@/../public/totothes.png";
import totothess from "@/../public/totothess.png";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
   <div className="flex flex-col gap-y-4  min-h-screen w-full relative">

    <section className="relative w-full">
        <div className=" w-full z-0">
        </div>
        <div className=" w-full    flex flex-col min-h-[70vh] justify-end items-center">

            <div className="flex justify-center   items-center flex-col gap-y-4">
                <h4 className="text-2xl tartuffor   text-custom-marron">the french tototte</h4>
            </div>

        </div>

   
    </section>

    <section className="relative h-full  w-full">

      

        <div className="relative   z-10 gap-y-6 w-full flex flex-col justify-between items-center">

          
   

        <svg
        width={24}
        height={6}
        viewBox="0 0 24 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <rect width={8} height={6} fill="#003DB3" />
        <rect x={8} width={8} height={6} fill="white" />
        <rect x={16} width={8} height={6} fill="#F73C53" />
        </svg>

        <h2 className="text-7xl text-custom-marron  z-20 tartuffor max-w-xl text-center">
        pour ceux qui osent être différents 
        </h2>

      <div className="relative z-10 flex flex-col justify-center items-center ">
       <Link href="/" className="relative" >
        <button className="text-lg py-7"> decouvrir </button>
        </Link> 

        <svg width="2" height="400" className="relative" viewBox="0 0 2 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="1" height="400" fill="url(#paint0_linear_55_69)"/>
<defs>
<linearGradient id="paint0_linear_55_69" x1="1" y1="0" x2="1" y2="400" gradientUnits="userSpaceOnUse">
<stop stop-color="#513E40"/>
<stop offset="1" stop-color="#B78C91" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

        </div>

    

        </div>


      </section>

      <section className="relative  flex justify-center items-center min-h-screen   py-28  w-full">

        <div className="w-full relative z-40 flex flex-col gap-y-4">

          <div className="flex justify-center items-center gap-4">

            <div className="min-h-[39rem]   firstcardbg  border  w-3/12 flex flex-col justify-end rounded-lg">

              <div className="w-full  h-1/2 flex justify-start items-center ">

                <Image src={totothes} className="contain pt-4" alt="photo1" />

              </div>

                <div className="flex w-full p-7  flex-col gap-y-5">

                  <h5 className="text-3xl "> élégante et sophistiquée</h5>
                  <span className=" w-full font-thin  ">
                  Design raffiné et ornements exclusifs pour une expérience de vapotage distinguée et élégante
                  </span>
                </div>

            </div>
            
            <div className="flex flex-col  gap-y-4 w-5/12">

              <div className="w-full flex min-h-[13rem] bg-red-500  border rounded-lg  items-end overflow-hidden justify-end relative">
                <div className="w-full absolute z-0  flex justify-start items-center">
                    <Image  src={boule3} className="object-contain w-full relative top-4 h-full" alt="boule" />
                </div>
                <div className="w-full py-[5.5rem]  relative z-10 bg-transparent flex justify-start items-end flex-col ">
                  <div className="w-7/12  h-full  flex flex-col justify -start gap-y-5">
                  <h4 className="text-3xl">personnalisable</h4>
                  <span className="font-thin  w-full text-balance">
                  Ornements et accessoires premium pour créer une vapoteuse unique qui reflète votre style personnel
                  </span>
                  </div>
                </div>


              </div>

                <div className="w-full  h-[19rem]  flex gap-x-4 justify-start items-center">


    <div className="w-1/2 flex  relative flex-col h-full justify-start gap-y-4 overflow-hidden  rounded-lg border">
 <div className="w-full  absolute flex justify-start items-center ">

<Image src={totothesfrance} className="object-contain w-full relative -top-4 " alt="photo1" />

</div>

<div className="flex w-full p-7 absolute h-full justify-end  flex-col gap-y-5">

<h5 className="text-3xl "> made in france</h5>
<span className=" w-full font-thin  ">
Savoir-faire français pour une expérience de suçotage authentique et exceptionnelle
</span>
</div>
</div>


<div className="w-1/2 flex bgcard4  relative flex-col h-full justify-start gap-y-4 overflow-hidden  rounded-lg border">
 

<div className="flex w-full p-7 absolute h-full justify-start  flex-col gap-y-5">

<h5 className="text-3xl "> innovante</h5>
<span className=" w-full font-thin  ">
Technologies de pointe offrant une expérience de suçotage révolutionnaire et inégalée.
</span>
</div>

<div className="w-full  absolute flex justify-end items-end ">

<Image src={totothess} className="object-contain w-full relative  h-1/4 top-28 " alt="photo1" />

</div>
</div>
                    </div>


            </div>

          </div>

          <div className="flex  min-h-[19rem]  h-[19rem]  gap-x-4 justify-center items-center ">

            <div className="h-full relative overflow-hidden border w-[44rem] bg-custom-blue rounded-lg    ">

              <div className="absolute p-7 gap-y-5 flex flex-col w-full gap-y- justify-start items-start">

              <h4 className="text-3xl">savoureuse</h4>
                  <span className="font-thin max-w-sm  w-full text-balance">
                  Palette de saveurs exquises pour une expérience de suçotage délicieusement satisfaisante et immersive.
                  </span>

              </div>
                

                
              <div className="w-full  h-full flex justify-end items-end ">

<Image src={barretotothe} className="object-contain relative left-[20%] pt-4" alt="photo1" />

</div>

            </div>
          
          <div className="h-full border w-[18.95rem] relative bgcard6  rounded-lg ">

          <div className="absolute h-full z-0 px-7 pt-8">


<Image src={frenchdrap} className="object-contain h-16 relative  " alt="photo1" />


          </div>

          <div className=" absolute gap-y-5 z-10 flex flex-col justify-end h-full items-end">
          <div className="flex flex-col gap-y-5 p-7">
          <h4 className="text-3xl text-balance">hébergement 100% français</h4>
                  <span className="font-thin max-w-sm  w-full text-balance">
                  Notre site web est hébergé en france grâce à notre partenaire o2switch
                  </span>


          </div>
          </div>

          </div>

          </div>


        </div>

    

      </section>

      <section className="min-h-screen flex flex-col ">

        <div className="min-h-[30vh] relative flex w-full justify-center items-center ">

        <Image src={redtotothes} className="object-contain relative  z-10 " alt="photo1" />

     



        </div>

        <div className="flex flex-col  gap-y-20  justify-center items-center bgsectechno pt-36 w-full relative ">


          <div className="w-full flex relative justify-center items-center gap-x-14 ">

         


            <div className="flex flex-col h-full  justify-start  items-start px-8 max-w-sm   gap-y-5">

                <h4 className="text-6xl text-balance max-w-sm text-custom-marron-dark">
                technologie plug’n’tote
                </h4>
                <p className=" text-balances text-left w-full text-lg ">
                La tototte est équipée de la
                 <span className="font-bold text-custom-marron-dark">  technologie 
                 plug&apos;n&apos;tote</span>, permettant de
                  changer de plug à volonté, offrant ainsi un accès à une
                   <span className="font-bold text-custom-marron-dark "> gamme infinie de saveurs
                    de suçotage </span> pour satisfaire tous les goûts.

                </p>


            </div>

            <div className="flex flex-col pt-12 justify-end items-end  gap-y-5">
              <p className="max-w-xs text-lg">
              Cette technologie vous permet de changer en un clin d’œil de saveur pour 
              <span className="font-bold text-custom-marron-dark"> voyager du bout des </span>.
              </p>
            </div>


            </div>

            <div className="relative z-10 flex flex-col justify-center items-center ">
       <Link href="/" className="relative" >
        <button className="text-lg py-7"> Découvrir les saveurs </button>
        </Link> 

        <svg width="2" height="400" className="relative" viewBox="0 0 2 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="1" height="400" fill="url(#paint0_linear_55_69)"/>
<defs>
<linearGradient id="paint0_linear_55_69" x1="1" y1="0" x2="1" y2="400" gradientUnits="userSpaceOnUse">
<stop stop-color="#513E40"/>
<stop offset="1" stop-color="#B78C91" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

        </div>

        </div>


      </section>

      <section className="min-h-screen flex flex-col ">

        <div className="flex flex-col w-full gap-y-28">

            <div className="flex flex-col relative  justify-center items-center w-full">

              <div className="flex relative  gap-x-4 justify-center items-center">

                <div className="absolute flex justify-end top-[70%] h-36 w-full items-center ">
                <Image src={radialgrad} className="object-contain  relative   " alt="photo1" />


                </div>

                <div className="firstimage relative">

                <Image src={redTotothe} className="object-contain  relative  " alt="photo1" />



                </div>

                <div className="firstimage relative">

<Image src={greentotothe} className="object-contain  relative  " alt="photo1" />



</div>

<div className="firstimage relative">

<Image src={pinktotothe} className="object-contain  relative  " alt="photo1" />



</div>
<div className="firstimage relative">

<Image src={mutil2totothe} className="object-contain  relative  " alt="photo1" />



</div>

<div className="firstimage relative">

<Image src={franceColortotothe} className="object-contain  relative  " alt="photo1" />



</div>

<div className="firstimage relative">

<Image src={limetothe} className="object-contain  relative  " alt="photo1" />



</div>

<div className="firstimage relative">

<Image src={muti3totothe} className="object-contain  relative  " alt="photo1" />



</div>



              </div>
              <div className="relative flex  py-28">

                <div className="flex gap-x-24 ">

                  <div className="flex flex-col justify-start items-start text-left gap-y-6">

                    <b className="text-6xl gustavob font-bold text-custom-marron-dark">
                    30
                    </b>

                    <span className="text-sm text-balance max-w-[5rem] ">

                    Saveurs disponibles

                    </span>


                  </div>

                  
                  <div className="flex flex-col justify-start items-start text-left gap-y-6">

                    <b className="text-6xl gustavob font-bold text-custom-marron-dark">
                    11
                    </b>

                    <span className="text-sm text-balance max-w-[5rem] ">

                    Vertus
              médicinales 

                    </span>


                  </div>

                  <span className="max-w-xs pt-20 text-sm">
                  Laissez-vous tenter par les saveurs des différents plugs et découvrez un monde de délices pour chaque envie.
                  </span>


                </div>


              </div>
             



            </div>

        </div>



      </section>


      <section className=" h-auto w-full justify-start items-center flex flex-col ">
        <div className=" flex flex-col w-6/12 justify-start items-start ">
        <div className=" px-8 max-w-sm flex flex-col gap-y-5">

        <h4 className="text-6xl text-balance max-w-14 text-custom-marron-dark">
        suçotez sans 
soucis
                </h4>
                <p className=" text-balance max-w-xs text-left w-full text-sm  ">
                La tototte offre une autonomie impressionnante de 50 heures 
                de suçotage grâce à sa batterie au lithium, assurant ainsi des heures
                 de plaisir ininterrompu pour encore plus de confort et de tranquillité.
                </p>


               


        </div>
        <div className="w-full flex  relative  justify-center items-center">

<Image src={totote} className="object-contain relative h-[30rem] " alt="photo1" />


        </div>

 <div className=" w-full justify-start  items-end flex  flex-col  gap-y-5">
        <div className="w-1/2 px-8 justify-start items-start flex flex-col gap-y-5">
        <div className="flex flex-col justify-start gap-y-3 items-start">
        <span className="text-6xl text-balance gustavob max-w-sm  text-custom-marron-dark">
           50 h
                </span>
                <span className="text-xs max-w-36">
                de suçotage Bluetooth sans interruption
                </span>
</div>


                <p className=" text-balance max-w-xs text-left w-full text-sm  ">
               Grâce aux technologies sans contact profitez d’une recharge rapide sur son socle à induction
                </p>


            </div>   


        </div>
        </div>

      </section>


            <section className=" bgspotify w-full justify-center items-center flex flex-col ">

              <div className="w-6/12 flex flex-col  py-56">

                <div className="w-full rounded-lg border border-custom-marron  h-96 ">


                  </div>

                  <div className="w-full pt-20 flex justify-center items-center">

                    <h2 className="text-6xl w-1/2 text-custom-marron-dark  max-w-xs">
                    suçotez vos titres préférés
                    </h2>

                    <div className="flex w-1/2 px-16  gap-y-8 flex-col justify-start items-start">
                        <div className="flex flex-col justify-start items-start gap-y-2">
                        <button className="px-4 gap-x-1 py-2 border border-custom-marron-dark flex justify-center items-center">
                        <svg
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75C5.8 9.9 5.3 9.6 5.15 9.15C5 8.65 5.3 8.15 5.75 8C9.3 6.95 15.15 7.15 18.85 9.35C19.3 9.6 19.45 10.2 19.2 10.65C18.95 11 18.35 11.15 17.9 10.9ZM17.8 13.7C17.55 14.05 17.1 14.2 16.75 13.95C14.05 12.3 9.95 11.8 6.8 12.8C6.4 12.9 5.95 12.7 5.85 12.3C5.75 11.9 5.95 11.45 6.35 11.35C10 10.25 14.5 10.8 17.6 12.7C17.9 12.85 18.05 13.35 17.8 13.7ZM16.6 16.45C16.4 16.75 16.05 16.85 15.75 16.65C13.4 15.2 10.45 14.9 6.95 15.7C6.6 15.8 6.3 15.55 6.2 15.25C6.1 14.9 6.35 14.6 6.65 14.5C10.45 13.65 13.75 14 16.35 15.6C16.7 15.75 16.75 16.15 16.6 16.45ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
    fill="#5D4043"
  />
</svg>

<span className="text-sm  ">
Spotify Connect® 
</span>

                        </button>
                        <span className="text-sm"> En partenariat exclusif avec Spotify </span>
                        </div>

                        <p className="text-sm max-w-sm">
                        En connectant votre tototte à votre smartphone par la technologie bluetooth, 
                        dégustez vos morceaux et vos vidéos préférées directement dans votre bouche
                        </p>
                    </div>


                  </div>


              </div>

            </section>
      

            <section className="   w-full justify-center items-center flex flex-col ">
              <div className="flex w-6/12 justify-between ">

       <div className="flex w-1/2 justify-center items-center ">             
<Image src={clinthos} className="object-contain  relative  " alt="photo1" />
</div>


<div className="flex px-10  w-1/2 justify-center items-center ">
  <div className="flex flex-col gap-y-12 w-full">

    <div className="flex flex-col gap-y-6 w-full ">


  <h2 className="text-6xl text-custom-marron-dark text-balance text-custom-dark-marron max-w-lg">
  le jus de
mynthos
                    </h2>

                    <button className="px-4 gap-x-1 py-2 border border-custom-marron-dark flex justify-center items-center">
    

<span className="text-sm  ">
Collaboration exclusive
</span>

                        </button>



    </div>

    <span className="text-sm">
    Découvrez l&apos;exclusivité : la fusion inédite entre Le Jus de Mynthos et the french tototte®, offrant un goût rare et recherché. Une collaboration qui révèle l&apos;essence de l&apos;excellence et de l&apos;originalité, à savourer sans plus attendre.

      </span>

  </div>
</div>


              </div>
            </section>

            <section className="  min-h-screen w-full justify-center items-center flex flex-col ">
                <div className="w-6/12 flex-col flex justify-center gap-y-8 items-center">

                  <h2 className="text-6xl text-custom-marron-dark max-w-sm text-balance text-center">ils ont suçoté,
ils ont adoré</h2>
    <span className="text-sm text-center max-w-lg text-balance">
    Nos totottes sont utilisées par les plus grands de ce monde et si vous voulez mon avis ce n’est pas un hasard
    </span>
                </div>
              </section>

              <section className="flex gap-x-32 justify-center items-center">


                <div className="flex flex-col  items-start justify-start  gap-y-6 ">

                  <div className="size-44 rounded-full overflow-hidden">
                        
                  <Image src={baghera} className="object-contain h-full w-full relative  " alt="photo1" />


                  </div>

                  <div className="flex flex-col  justify-start items-start gap-y-4">

                    <h3 className="text-xl text-custom-marron-dark">/ baghera Jones</h3>

                    <span className="flex gap-x-1 justify-start items-center">
                    <svg
  width={16}
  height={16}
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.76044 3.95337H8.71378V6.80671H7.76044M10.3804 3.95337H11.3338V6.80671H10.3804M4.66711 1.33337L2.28711 3.71337V12.2867H5.14044V14.6667L7.52711 12.2867H9.42711L13.7138 8.00004V1.33337M12.7604 7.52671L10.8604 9.42671H8.95378L7.28711 11.0934V9.42671H5.14044V2.28671H12.7604V7.52671Z"
    fill="#30171B"
  />
</svg>

                      <span className="text-sm">  Streamer </span>
                    </span>

                    <p className="text-sm max-w-56">
                    j&apos;ai arrêté de vape depuis que j&apos;ai découvert thefrenchtototte
                    </p>

                  </div>

                </div>


                <div className="flex flex-col relative top-36 left-[2%]  gap-y-6 ">

<div className="size-44 rounded-full overflow-hidden">
      
<Image src={joueur2} className="object-contain h-full w-full relative  " alt="photo1" />


</div>

<div className="flex flex-col  justify-start items-start gap-y-4">

<h3 className="text-xl text-custom-marron-dark">/Joueur_du_Grenier</h3>

  <span className="flex gap-x-1 justify-start items-center">
  <svg
  width={16}
  height={16}
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6.66732 10L10.1273 8.00004L6.66732 6.00004V10ZM14.374 4.78004C14.4607 5.09337 14.5207 5.51337 14.5607 6.04671C14.6073 6.58004 14.6273 7.04004 14.6273 7.44004L14.6673 8.00004C14.6673 9.46004 14.5607 10.5334 14.374 11.22C14.2073 11.82 13.8207 12.2067 13.2207 12.3734C12.9073 12.46 12.334 12.52 11.454 12.56C10.5873 12.6067 9.79398 12.6267 9.06065 12.6267L8.00065 12.6667C5.20732 12.6667 3.46732 12.56 2.78065 12.3734C2.18065 12.2067 1.79398 11.82 1.62732 11.22C1.54065 10.9067 1.48065 10.4867 1.44065 9.95337C1.39398 9.42004 1.37398 8.96004 1.37398 8.56004L1.33398 8.00004C1.33398 6.54004 1.44065 5.46671 1.62732 4.78004C1.79398 4.18004 2.18065 3.79337 2.78065 3.62671C3.09398 3.54004 3.66732 3.48004 4.54732 3.44004C5.41398 3.39337 6.20732 3.37337 6.94065 3.37337L8.00065 3.33337C10.794 3.33337 12.534 3.44004 13.2207 3.62671C13.8207 3.79337 14.2073 4.18004 14.374 4.78004Z"
    fill="#30171B"
  />
</svg>

    <span className="text-sm">  YouTuber </span>
  </span>

  <p className="text-sm max-w-56">
  J&apos;ai commandé un pack pour toute la famille et même mon fils Légolas San Goku adore sa the french tototte®
  </p>

</div>

</div>


<div className="flex flex-col relative left-[3%] -top-20  gap-y-6 ">

<div className="size-44 rounded-full overflow-hidden">
      
<Image src={Etoiles} className="object-contain h-full w-full relative  " alt="photo1" />


</div>

<div className="flex flex-col  justify-start items-start gap-y-4">

<h3 className="text-xl text-custom-marron-dark">/Etoiles</h3>

  <span className="flex gap-x-1 justify-start items-center">
  <svg
  width={16}
  height={16}
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.76044 3.95337H8.71378V6.80671H7.76044M10.3804 3.95337H11.3338V6.80671H10.3804M4.66711 1.33337L2.28711 3.71337V12.2867H5.14044V14.6667L7.52711 12.2867H9.42711L13.7138 8.00004V1.33337M12.7604 7.52671L10.8604 9.42671H8.95378L7.28711 11.0934V9.42671H5.14044V2.28671H12.7604V7.52671Z"
    fill="#30171B"
  />
</svg>

    <span className="text-sm">  Streamer </span>
  </span>

  <p className="text-sm max-w-56">
  Grâce à the french tototte® je régule mon taux d&apos;insuline parfaitement et je n&apos;achète plus de saumon ni de nutella !
  </p>

</div>

</div>

              </section>


              <section className="flex bgcarou w-full mt-96 pt-56  pb-20 justify-start items-start  gap-x-20 ">



                <div className="w-7/12 flex justify-end items-center">

                  <div className="rounded-lg w-10/12 bg-white min-h-[35rem] ">


                  </div>


                </div>

                
                <div className="w-3/12 flex flex-col gap-y-32 justify-start items-start">

                    <div className="flex flex-col gap-y-8">

                          <h3 className="text-6xl text-custom-marron-dark "> personnalisez votre tototte </h3>
                          <span className="text-sm text-balance">Vous allez créer la tototte idéale pour vous.
À chacun son expérience, à chacun sa tototte.</span>

                    </div>


                    <div className="flex flex-col gap-y-8">

<h3 className="text-6xl text-custom-marron-dark "> finition</h3>
<span className="text-sm text-balance">Choisissez votre favorite</span>

<div className="flex justify-start w-full items-center gap-x-4">
      
      <button className="outline-offset-4 outline rounded-full">
        <div className="size-10 rounded-full bgboule1 "></div>
      </button>

      <button className="  rounded-full">
        <div className="size-10 rounded-full bgboule2  "></div>
      </button>

      <button className="  rounded-full">
        <div className="size-10 rounded-full bgboule3  "></div>
      </button>

      <button className="  rounded-full">
        <div className="size-10 rounded-full bgboule4  "></div>
      </button>
</div>  

</div>




<div className="flex flex-col gap-y-8">

<h3 className="text-6xl text-custom-marron-dark "> ornement</h3>
<span className="text-sm text-balance">Choisissez votre pierre précieuse</span>

<div className="flex justify-start w-full items-center gap-x-4">
      
      <button className="outline-offset-4 outline rounded-full">
        <div className="size-10 rounded-full bg-[#017AD7] "></div>
      </button>

      <button className="  rounded-full">
        <div className="size-10 rounded-full bg-[#35E1C2]  "></div>
      </button>

      <button className="  rounded-full">
        <div className="size-10 rounded-full bg-[#FF5EAB]  "></div>
      </button>

      <button className="  rounded-full">
        <div className="size-10 rounded-full bg-[#2C3C3A] "></div>
      </button>
</div>  

</div>




<div className="flex flex-col gap-y-8 w-full ">



<h3 className="text-6xl text-custom-marron-dark "> pack saveur</h3>
<span className="text-sm text-balance">Choisissez votre pack de saveurs</span>

<div className="flex justify-start flex-col gap-y-2 w-full items-center gap-x-4">
    
    <div className="flex border w-full border-custom-marron-dark justify-between  gap-x-2 items-center  p-6 ">

        <div className="">
        <h3 className="text-custom-marron-dark text-xl ">Pack Starter</h3>
        <span className="text-sm"> 3 saveurs de découverte</span>
        </div>
        <span className="text-sm">offer</span>

    </div>

    <div className="flex  w-full justify-between  gap-x-2 items-center  p-6 ">

<div className="">
<h3 className="text-custom-marron-dark text-xl ">Pack Suçoteur</h3>
<span className="text-sm"> 6 saveurs</span>
</div>
<span className="text-sm">29€</span>

</div>
      
   
<div className="flex  w-full justify-between  gap-x-2 items-center  p-6 ">

<div className="">
<h3 className="text-custom-marron-dark text-xl ">Pack Suçoteur Pro</h3>
<span className="text-sm"> 12 saveurs + 1 jus de Mynthos</span>
</div>
<span className="text-sm flex gap-x-4 "><span className="opacity-50  line-through">60€ </span>
  <span>49€</span></span>

</div>   
</div>  

</div>

                </div>



              </section>

              <footer className="w-full py-20 flex flex-col justify-start items-start relative min-h-[61rem] bg-custom-marron-dark">
              <div className="w-full flex gap-x-20 justify-start items-start">
              <div className="w-7/12 flex justify-end items-center">

<div className="rounded-lg w-10/12 bg-white min-h-[35rem] ">


</div>


</div>

                
<div className="w-3/12 flex flex-col gap-y-12   text-custom-white justify-start items-start">

      <div className="flex gap-y-2 flex-col w-full">
        <h4 className="text-4xl">votre panier est prêt</h4>
        <span className="text-sm text-custom-light-marron">Récapitulatif de votre commande</span>
      </div>

      <div className="flex flex-col w-full gap-y-6">

          <div className="w-full flex flex-col gap-y-2 justify-between items-start">
            <div className="flex w-full justify-between items-start">
              <div className="flex flex-col">
              <span>x 1 x thefrenchtotottedarklight     </span>
              <span>+  Finition argent</span>
              <span>+  Ornement obsidiennes</span>
              </div>

              <span className="text-sm">
              99,00 €
              </span>
          </div>

          <div className="w-full flex justify-between items-start">
            <span>1 x Pack Suçoteur Pro
</span>
<span>
49,00 €
</span>
          </div>

          <div className="w-full flex justify-between items-start">
            <span>Livraison
</span>
<span>
Offerte
</span>
          </div>

        


          
          <div className="w-full flex justify-between items-start">
            <span>Prix
</span>
<span>
148,00 €
</span>
          </div>
          </div>


          <div className="w-full flex justify-between items-start">
            <span>Retrait en magazin
</span>
<span>
tototte store  Lille
</span>
          </div>
          <div className="w-full flex justify-between items-start">
            <span>Commandez avant 17h
</span>
<div>
<span>Livrer à 59000</span>
<svg
  width={16}
  height={16}
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6.66732 10L10.1273 8.00004L6.66732 6.00004V10ZM14.374 4.78004C14.4607 5.09337 14.5207 5.51337 14.5607 6.04671C14.6073 6.58004 14.6273 7.04004 14.6273 7.44004L14.6673 8.00004C14.6673 9.46004 14.5607 10.5334 14.374 11.22C14.2073 11.82 13.8207 12.2067 13.2207 12.3734C12.9073 12.46 12.334 12.52 11.454 12.56C10.5873 12.6067 9.79398 12.6267 9.06065 12.6267L8.00065 12.6667C5.20732 12.6667 3.46732 12.56 2.78065 12.3734C2.18065 12.2067 1.79398 11.82 1.62732 11.22C1.54065 10.9067 1.48065 10.4867 1.44065 9.95337C1.39398 9.42004 1.37398 8.96004 1.37398 8.56004L1.33398 8.00004C1.33398 6.54004 1.44065 5.46671 1.62732 4.78004C1.79398 4.18004 2.18065 3.79337 2.78065 3.62671C3.09398 3.54004 3.66732 3.48004 4.54732 3.44004C5.41398 3.39337 6.20732 3.37337 6.94065 3.37337L8.00065 3.33337C10.794 3.33337 12.534 3.44004 13.2207 3.62671C13.8207 3.79337 14.2073 4.18004 14.374 4.78004Z"
    fill="#30171B"
  />
</svg>

</div>
          </div>


          <button className="w-full bg-custom-light-marron py-4">

            <span>Ajouter au Panier</span>

          </button>

          <p className="text-xs text-balance text-custom-light-marron font-thin">
          The French Tototte est couverte par une garantie limitée
           contre les défauts de fabrication pour une période de 2 mois
            à compter de la date d&qpos;achat. Cette garantie ne couvre pas 
            les dommages causés par une mauvaise utilisation, une négligence 
            ou une modification non autorisée du produit. Dans les limites permises 
            par la loi, thefrenchtototte décline toute responsabilité pour les dommages
             directs, indirects, spéciaux, accidentels ou consécutifs découlant de
              l&qpos;utilisation ou de l&qpos;incapacité d&qpos;utiliser thefrenchtototte, même si
               thefrenchtototte a été informée de la possibilité de tels dommages. 
               En utilisant thefrenchtototte, l&qpos;utilisateur consent à la collecte et 
               à l&qpos;utilisation de ses données conformément à la politique de confidentialité de
                thefrenchtototte. Les informations collectées peuvent inclure, mais ne sont pas
                 limitées à, des données d&qpos;utilisation, des informations de localisation et des 
                 données personnelles, telles que définies dans ladite politique de confidentialité.
          </p>
      </div>


</div>
</div>

<div className="flex w-full justify-between items-center">
        <div className="flex gap-y-1">

          <div className="w-full flex gap-x-0.5">
          <Link href="/">
          <svg
  width={20}
  height={20}
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z"
    fill="#816A6C"
  />
</svg>
</Link>

<Link href="/">
<svg
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
    fill="#816A6C"
  />
</svg>

</Link>

<Link href="/">
<svg
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z"
    fill="#816A6C"
  />
</svg>


</Link>

<Link href="/">
<svg
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
    fill="#816A6C"
  />
</svg>


</Link>

<Link href="/">
<svg
  width={22}
  height={20}
  viewBox="0 0 22 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M17.2048 0.25H20.5128L13.2858 8.51L21.7878 19.75H15.1298L9.91584 12.933L3.94984 19.75H0.639844L8.36984 10.915L0.214844 0.25H7.03984L11.7528 6.481L17.2048 0.25ZM16.0438 17.77H17.8768L6.04484 2.126H4.07784L16.0438 17.77Z"
    fill="#816A6C"
  />
</svg>



</Link>
          </div>

        </div>
</div>

              </footer>

            
   </div>
  );
}
