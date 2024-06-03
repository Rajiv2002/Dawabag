import React from 'react';
import FLogo from '../Assets/FLogo.png';

export default function Footer() {
  return (
    <div>
      <footer className='w-[100%] h-[389px] bg-[#184363] sm:py-[60px] py-[50px] border-b-2 border-[#184363]'>
        <div className='max-w-[1350px] py-[15px] grid sm:grid-cols-[30%_auto] grid-cols-1'>
          <div className='item-center mx-auto ml-[4rem] text-center'>

            <img src={FLogo} className="mx-auto w-[200px] h-[86px]" alt=''></img>

            <p className='font-PT Sans text-[14px] mt-2 text-[#FFFFFF]'>Stay tuned for latest updates and new features</p>
            <div className=" ml-[100px] nav-search flex justify-between h-10 rounded-md mt-4">

              <input
                placeholder="Email Adress"
                className="search-input w-[282px] px-[15px] text-sm border-none rounded-l-[25px]"
              />
              <div className="search-icon w-[143px] flex justify-center items-center text-lg bg-[#F2971F] rounded-r-[25px] text-white">
                <i className="fa-solid fa-magnifying-glass"><span className='text-[16px] font-serif'>&ensp; Subscribe</span></i>
              </div>
            </div>
            <div className=" ml-[110px] nav-search flex justify-between h-10 rounded-md mt-4">
              <label className='text-[#FFFFFF]'>
                <input className='w-[16px] h-[16px]' type="checkbox" />
                &ensp; I accept terms and conditions & privacy policy
              </label>
            </div>
          </div>
          <div className=' ml-[250px] grid sm:grid-cols-3 grid-cols-1 text-white'>

            <div>
              <ul className='text-[#ccc] mt-6'>
                <li className='mb-[20px]'><a className='text-[#FFFFFF] text-[16px] font-sans font-extrabold leading-[24px]' href='#'>Information</a></li>
                <li className='mb-[10px]'><a className='text-[#FFFFFF] text-[14px] font-sans leading-[24px]' href='#'>About us</a></li>
                <li className='mb-[10px]'><a className='text-[#FFFFFF] text-[14px] font-sans leading-[24px]' href='#'>Delivery Information</a></li>
                <li className='mb-[10px]'><a className='text-[#FFFFFF] text-[14px] font-sans leading-[24px]' href='#'>Privacy Policy</a></li>
                <li className='mb-[10px]'><a className='text-[#FFFFFF] text-[14px] font-sans leading-[24px]' href='#'>Sales</a></li>
                <li className='mb-[10px]'><a className='text-[#FFFFFF] text-[14px] font-sans leading-[24px]' href='#'>Terms & Condition</a></li>
              </ul>
            </div>
            <div>
              <ul className='text-[#ccc] mt-6'>
                <li className='mb-[20px]'><a className='text-[#FFFFFF] text-[16px] font-sans font-extrabold leading-[24px]' href='#'>Acount</a></li>
                <li className='mb-[10px]'><a className='text-[#FFFFFF] text-[14px] font-sans leading-[24px]' href='#'>Dashboard</a></li>
                <li className='mb-[10px]'><a className='text-[#FFFFFF] text-[14px] font-sans leading-[24px]' href='#'>My orders</a></li>
                <li className='mb-[10px]'><a className='text-[#FFFFFF] text-[14px] font-sans leading-[24px]' href='#'>Account details</a></li>
                <li className='mb-[10px]'><a className='text-[#FFFFFF] text-[14px] font-sans leading-[24px]' href='#'>Returns</a></li>
                <li className='mb-[10px]'><a className='text-[#FFFFFF] text-[14px] font-sans leading-[24px]' href='#'>Wishlist</a></li>
              </ul>
            </div>
            <div>
              <ul className='text-[#ccc] mt-6'>
                <li className='mb-[20px]'><a className='text-[#FFFFFF] text-[16px] font-sans font-extrabold leading-[24px]' href='#'>About/Contact</a></li>
                <li className='mb-[10px]'><i class="fa-solid fa-location-dot"></i><a className='text-[#FFFFFF] text-[14px] font-sans leading-[24px]' href='#'>&ensp; 70 Washington Square South,
                  New York, NY 10012, United States</a></li>
                <li className='mb-[10px]'><i class="fa-regular fa-envelope" style={{ "color": "#ffffff" }}></i><a className='text-[#FFFFFF] text-[14px] font-sans leading-[24px]' href='#'>&ensp;DawaBag@gmail.com</a></li>
              </ul>
              <div>
                <button className='w-[40px] h-[40px] bg-[#15A9E3] rounded-[10px] mr-1'><i class="fa-brands fa-facebook-f"></i></button>
                <button className='w-[40px] h-[40px] bg-[#15A9E3] rounded-[10px] mr-1'><i class="fa-brands fa-instagram"></i></button>
                <button className='w-[40px] h-[40px] bg-[#15A9E3] rounded-[10px] mr-1'><i class="fa-brands fa-linkedin-in"></i></button>
                <button className='w-[40px] h-[40px] bg-[#15A9E3] rounded-[10px] mr-1'><i class="fa-brands fa-x-twitter"></i></button>
                <button className='w-[40px] h-[40px] bg-[#15A9E3] rounded-[10px]'><i class="fa-brands fa-youtube"></i></button>
              </div>
            </div>

          </div>
          <hr className="my-3 mx-20 w-[1320px] border-1 border-black" />
          <p className='text-center text-[#FFFFFF] text-[14px] mt-4'>Copyright 2024 DawaBag. All Rights Reserved </p>
        </div>

      </footer>
      <footer />
    </div>
  )
}