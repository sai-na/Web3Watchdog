import { IoLocationSharp } from 'react-icons/io5';
import { MdDateRange, MdPeople } from 'react-icons/md';

import { format } from "date-fns";

function Card({ owner, title, location, eventTime, description, amountCollected, image, handleClick }) {

    console.log(eventTime);

    const date = eventTime ? eventTime : "";


    const formattedDate = format(date, "d MMM yyyy");

    return (
        <>




            <div className=" m-2" onClick={handleClick} >
                <div className="p-2  " >
                    {/* <!-- Card --> */}
                    <div className="w-72 min-h-[400px] p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                        {/* <!-- Image --> */}
                        <img className="h-40 object-cover rounded-xl" src={image} alt="" />

                        <div className="p-2">
                            <div className=" ">
                                {/* <!-- Heading --> */}

                                <p className="flex items-center justify-end">
                                    <IoLocationSharp className=" mr-1 " />
                                    {location}
                                </p>
                                <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'

                                >
                                    {title ? title : " Name"}
                                </h2>
                                <p className="text-gray-800 text-base">{formattedDate}</p>



                                {/* <!-- Description --> */}
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-3">
                                {description && description}
                            </p>
                        </div>
                        {/* <!-- CTA --> */}
                        <div className="m-2">
                            <button

                                className="text-white bg-sky-500  px-3 py-1 rounded-md hover:text-black hover:bg-sky-400"
                            >
                                Read more...

                            </button>
                        </div>
                    </div>
                    {/* <!-- Card --> */}
                </div>
            </div >
        </>
    );
}

export default Card;