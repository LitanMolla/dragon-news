import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router'

const FindUsOn = () => {
    return (
        <div>
            <h4 className='text-xl font-medium text-dark2 mb-3'>Find Us On</h4>
            <div className="border rounded-md border-dark3/50">
                <Link className="flex items-center gap-2 p-3">
                    <div className="w-8 h-8 bg-dark7 rounded-full flex justify-center items-center text-[#3B599C]">
                        <FaFacebook />
                    </div>
                    <p className='text-dark3 font-medium'>Facebook</p>
                </Link>
                <div className="border-b border-b-dark3/50"></div>
                <Link className="flex items-center gap-2 p-3">
                    <div className="w-8 h-8 bg-dark7 rounded-full flex justify-center items-center text-[#58A7DE]">
                        <FaTwitter />
                    </div>
                    <p className='text-dark3 font-medium'>Twitter</p>
                </Link>
                <div className="border-b border-b-dark3/50"></div>
                <Link className="flex items-center gap-2 p-3">
                    <div className="w-8 h-8 bg-dark7 rounded-full flex justify-center items-center text-[#D82D7E]">
                        <FaInstagram />
                    </div>
                    <p className='text-dark3 font-medium'>Instagram</p>
                </Link>
            </div>
        </div>
    )
}

export default FindUsOn