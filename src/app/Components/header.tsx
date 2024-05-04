

        import Link from 'next/link'
import React from 'react'
import logo from "@/../public/logo.png"
import Image from 'next/image'
        const Header = () => {
          return (

            <header className='w-full flex justify-between  py-12 px-36 items-center'>

                  <Image src={logo} alt="logo" className={"object-contain h-8 w-8 "} />
                  <Link href="/"><button className="bg-custom-marron text-white px-8 gustavor text-lg  py-4"> <span className="px-">Acheter </span> </button> </Link>
            </header>
      

          )
        }
        
        export default Header