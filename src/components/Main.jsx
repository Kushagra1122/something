import React from 'react'
import { CgNotes } from "react-icons/cg";
import { PiChartDonutDuotone } from "react-icons/pi";
import { CiVideoOn } from "react-icons/ci";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { MdOutlineGrade } from "react-icons/md";
import { MdOutlineQueryStats } from "react-icons/md";
import { Link } from 'react-router-dom';
const Main = () => {
  return (
    <div>
      <div className="flex justify-center flex-wrap   gap-32 my-32 ">
        <Link to={'/visit'} className="w-40 h-40 flex flex-col justify-center items-center gap-3 text-2xl  bg-red-500 rounded-lg  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <CgNotes size={30} />
          Notes
        </Link>
        <Link to={'/visit'} className="w-40 h-40 flex flex-col justify-center items-center gap-3 text-2xl  bg-orange-500 rounded-lg  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <PiChartDonutDuotone size={30} />
          Attendance
        </Link>
        <Link to={'/visit'} className="w-40 h-40 flex flex-col justify-center items-center gap-3 text-2xl bg-green-500 rounded-lg  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <CiVideoOn size={30} />
          Lectures
        </Link>
        <Link to={'/visit'} className="w-40 h-40 flex flex-col justify-center items-center gap-3 text-2xl bg-pink-500 rounded-lg  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <MdOutlineCurrencyRupee size={30} />
          Payment
        </Link>
        <Link to={'/visit'} className="w-40 h-40 flex flex-col justify-center items-center gap-3 text-2xl bg-blue-500 rounded-lg  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <MdOutlineGrade size={30} />
          Grades
        </Link>
        <Link to={'/visit'} className="w-40 h-40 flex flex-col justify-center items-center gap-3 text-2xl  bg-yellow-500 rounded-lg  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <MdOutlineQueryStats size={30} />
          Queries
        </Link>
        <Link to={'/visit'} className="w-40 h-40 flex flex-col justify-center items-center gap-3 text-2xl  bg-purple-500 rounded-lg  transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
          <MdOutlineQueryStats size={30} />
          Events
        </Link>
      </div>
    </div>
  );
}

export default Main
