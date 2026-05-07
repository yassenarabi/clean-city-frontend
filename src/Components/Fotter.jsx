import React from 'react'
import { Link } from 'react-router-dom'

export default function Fotter() {
  return (
    <>
    <div className='bg-emerald-100 shadow-xl p-10 my-3'>
<div className=" w-[75%] mx-auto ">
  <footer className="p-4 text-white bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-emerald-800">
    <span className="text-sm text-gray-100 sm:text-center dark:text-gray-400">© 2026 CLEANCITY EGYPT. CIVIC DUTY & ENVIRONMENTAL STEWARDSHIP.
    </span>

    <div>
    <Link to="/">
         <h1 className="font-extrabold text-xl text-green-600">
            CleanCity
          </h1>
         </Link>
    </div>



    <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
      <li>
        <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">PRIVACY POLICY</a>
      </li>
      <li>
        <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">TERMS OF SERVICE
          </a>
      </li>
      <li>
        <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">CONTACT MUNICIPALITY</a>
      </li>
      <li>
        <a href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">FAQ</a>
      </li>
    </ul>


  </footer>

</div>
</div>
    </>
  )
}
