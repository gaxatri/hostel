import { Span } from 'next/dist/trace'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-20">
    <a className="flex items-center space-x-3 rtl:space-x-reverse text-white">
        logo
    </a>

    <div className="hidden w-full md:block md:w-auto" >
      <ul className="font-semibold flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent ">
        <li>
          <a href="#" className=" italic block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-800 md:p-0">Home</a>
        </li>
        <li>
          <a href="#" className="italic block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-800 md:p-0">About</a>
        </li>
       <li>
          <a href="#" className=" italic block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-amber-800 md:p-0">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div>
<div className="flex justify-around items-center text-center h-screen">
<div className="flex flex-col space-y-6">
  <span className=" italic text-3xl font-extrabold md:text-5xl lg:text-6xl text-yellow-500  ">WELCOME</span>
  <span className='italic text-xl text-slate-800'>Your home away from home!</span>
  <button className="w-full flex justify-center items-center px-4 py-2 rounded-full bg-transparent hover:bg-amber-800 text-amber-800 font-semibold hover:text-white border border-black hover:border-transparent shadow-lg shadow-slate-300 ">
    Get Started
  </button>
</div>

  <img className="h-200 w-150 " src="https://img.freepik.com/free-vector/blank-open-journal_53876-80457.jpg?size=626&ext=jpg&ga=GA1.1.1161610126.1702110340&semt=ais"/>
</div>

  </div>

<div className="flex justify-around items-center ">
  <div className="  item w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Username
      </label>
      <input className="shadow appearance-none bg-gray-200 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Password
      </label>
      <input className="shadow appearance-none bg-gray-200 border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="***********"/>
      
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">
        Log In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-yellow-700 hover:text-yellow-600" >
        Forgot Password?
      </a>
    </div>
  </form>
  
</div>
</div>
</div>
  )
}
