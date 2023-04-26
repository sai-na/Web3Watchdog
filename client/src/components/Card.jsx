import { IoLocationSharp } from 'react-icons/io5';
import { MdDateRange } from 'react-icons/md';

import { format } from "date-fns";

function Card({ owner, title, location, eventTime, amountCollected, image, handleClick }) {

    console.log(eventTime);

    const date = eventTime ? eventTime : "";

    const formattedDate = format(date, "d MMM yyyy");

    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow 00" onClick={handleClick}>
            <a href="#">
                <img className="rounded-t-lg w-full  object-cover h-64 " src={image} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                </a>
                <div className="flex gap-2"> <p className="mb-3 font-normal text-gray-700  flex items-center "><IoLocationSharp size={12} className='mr-2' />{location}</p>
                    <p className="mb-3 font-normal text-gray-700  flex items-center "><MdDateRange size={12} className='mr-2' />{formattedDate}</p></div>

                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 -700 ue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
        </div>

    );
}

export default Card;