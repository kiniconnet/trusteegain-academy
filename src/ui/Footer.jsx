import React from 'react'
import logo from '../assets/logo.png'
import style from './footer.module.css'


// External exports
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {


  return (
    <div>

    <footer class="bg-slate-950 dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
              <div class="mb-6 md:mb-0">
                  <a  class="flex items-center">
                      <img src={logo} class="h-8 me-3" alt="Trusteegain Logo" />
                      <span class="self-center text-slate-300 text-2xl font-semibold whitespace-nowrap dark:text-white cursor-pointer">Trusteegain</span>
                  </a>
              </div>
              <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div>
                      <h2 class="mb-6 text-sm font-semibold text-slate-600 uppercase dark:text-white">Resources</h2>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li class="mb-4">
                              <a  class="hover:underline">React</a>
                          </li>
                          <li className='mb-4'>
                              <a  class="hover:underline">Tailwind CSS</a>
                          </li>
                          <li>
                              <a class="hover:underline">Golang</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="mb-6 text-sm font-semibold text-slate-600 uppercase dark:text-white">Follow us</h2>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li class="mb-4">
                              <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                          </li>
                          <li class="mb-4">
                              <a href="https://github.com/themesberg/flowbite" class="hover:underline ">YouTube</a>
                          </li>
                          <li class="mb-4">
                              <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Twitter (X)</a>
                          </li>
                          <li>
                              <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="mb-6 text-sm font-semibold text-slate-600 uppercase dark:text-white">Legal</h2>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li class="mb-4">
                              <a href="#" class="hover:underline">Privacy Policy</a>
                          </li>
                          <li>
                              <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Trusteegain™</a>. All Rights Reserved.
              </span>
              <div class="flex mt-4 sm:justify-center sm:mt-0">
                  <a className={style.footerSocialIcons}>
                         <FaTiktok />
                  </a>
                  <a className={style.footerSocialIcons}>
                         <FaDiscord />
                  </a>
                  <a className={style.footerSocialIcons}>
                        <FaXTwitter />
                  </a>
                  <a className={style.footerSocialIcons}> 
                    <FaGithub /> 
                </a>
                  <a className={style.footerSocialIcons}>
                    <FaYoutube />
                  </a>
              </div>
          </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer