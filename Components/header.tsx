

        import Link from 'next/link'
import React from 'react'
        
        const Header = () => {
          return (
            <div className='relative'>

                <div className='relative flex  justify-between items-center'>
                    <div>
                    <button className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M4 5L16 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 19L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

                    </button>
 
                    <ul className='flex gap-x-4'>
                        <ul >
                            <li className=''><Link href={""} > <span className='text-lg'>Home</span>  </Link> </li>
                            <li className=''><Link href={""} > <span className='text-lg'>Collection</span>  </Link> </li>
                            <li className=''><Link href={""} > <span className='text-lg'>New</span>  </Link> </li>
                        </ul>
                    </ul>
                    </div>

                    <button>
                    <svg
  width={50}
  height={50}
  viewBox="0 0 50 50"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    x={25}
    width="35.3553"
    height="35.3553"
    transform="rotate(45 25 0)"
    fill="#D9D9D9"
  />
  <path
    d="M25.25 25L25.25 0.603553L49.6464 25L25.25 49.3964V25Z"
    fill="black"
    stroke="#060606"
    strokeWidth="0.5"
  />
</svg>
                    </button>

                    <div className='flex justify-between items-center'>

                            <Link href={""}>
                                <button className='h-12 w-12 text-center  bg-black flex justify-center items-center rounded-full'>
                                <svg
  width={22}
  height={22}
  viewBox="0 0 22 22"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12.8058 16.6943L12.7597 15.9458L12.8058 16.6943ZM7.33265 6.82443L7.27616 7.5723C7.47947 7.58766 7.68026 7.51958 7.83231 7.38375C7.98436 7.24792 8.07455 7.05605 8.08213 6.8523L7.33265 6.82443ZM16.5253 13.3716L17.264 13.5015L16.5253 13.3716ZM12.7597 15.9458C11.1685 16.0438 9.53438 16.2341 7.93554 16.0486C6.37518 15.8676 4.93299 15.3326 3.75936 14.0189L2.64072 15.0182C4.12623 16.6811 5.95228 17.3286 7.76269 17.5386C9.53465 17.7442 11.3739 17.534 12.852 17.4429L12.7597 15.9458ZM3.75936 14.0189C2.61674 12.7398 2.38577 11.0269 2.96456 9.70578C3.52249 8.43233 4.89674 7.39259 7.27616 7.5723L7.38913 6.07656C4.4577 5.85516 2.43608 7.17414 1.59064 9.10384C0.766056 10.9859 1.12422 13.3206 2.64072 15.0182L3.75936 14.0189ZM12.852 17.4429C13.3848 17.4101 13.9662 17.3726 14.496 17.265C15.0256 17.1575 15.5862 16.9652 16.0342 16.565L15.0349 15.4464C14.8708 15.5929 14.6086 15.7116 14.1976 15.795C13.7869 15.8784 13.31 15.9118 12.7597 15.9458L12.852 17.4429ZM17.264 13.5015C17.5205 12.043 17.9359 10.239 17.9307 8.45517C17.9254 6.63262 17.487 4.74539 16.0015 3.08251L14.8829 4.08183C16.0565 5.3956 16.4261 6.88874 16.4307 8.45957C16.4354 10.0691 16.0628 11.6715 15.7867 13.2417L17.264 13.5015ZM16.0015 3.08251C14.485 1.38493 12.2054 0.766811 10.2426 1.37478C8.23012 1.99813 6.69242 3.85881 6.58317 6.79656L8.08213 6.8523C8.17081 4.46776 9.35832 3.21898 10.6864 2.80762C12.0641 2.38087 13.7403 2.80277 14.8829 4.08183L16.0015 3.08251ZM15.7867 13.2417C15.6912 13.7847 15.6044 14.2548 15.4754 14.6535C15.3463 15.0525 15.199 15.2998 15.0349 15.4464L16.0342 16.565C16.4823 16.1647 16.7363 15.6293 16.9026 15.1152C17.069 14.6007 17.1715 14.0272 17.264 13.5015L15.7867 13.2417Z"
    fill="white"
  />
</svg>

                                </button>

                                <div className='flex'>
                                      <button className='px-4 py-2 text-center'>
                                                <span>Cart</span>
                                        </button>      
                                        <button>
                                            
                                        </button>
                                </div>
                            </Link>
                    </div>
                        
                    
                    
                    </div>

            </div>
          )
        }
        
        export default Header