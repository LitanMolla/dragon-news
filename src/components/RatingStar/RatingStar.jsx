import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

const RatingStar = ({ ratingNumber }) => {
    if (ratingNumber == 4) {
        return <>
            <div className="flex text-highlight">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
            </div>
        </>
    } else if (ratingNumber == 3) {
        return <>
            <div className="flex text-highlight">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
            </div>
        </>
    } else if (ratingNumber == 5) {
        return <>
            <div className="flex text-highlight">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
        </>
    } else if (ratingNumber == 2) {
        return <>
            <div className="flex text-highlight">
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
            </div>
        </>
    } else if (ratingNumber == 1) {
        return <>
            <div className="flex text-highlight">
                <FaStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
            </div>
        </>
    } else {
        return <>
            <div className="flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </div>
        </>
    }
}

export default RatingStar