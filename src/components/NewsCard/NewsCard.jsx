import React from 'react'
import { FaBookmark,  FaEye,  FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router';
import RatingStar from '../RatingStar/RatingStar';

const NewsCard = ({news}) => {
    const {
    id,
    category_id,
    title,
    rating: { number: ratingNumber, badge: ratingBadge },
    total_view,
    author: { name: authorName, published_date, img: authorImg },
    thumbnail_url,
    image_url,
    details,
    tags,
    others: { is_today_pick, is_trending },
    production
} = news;
    console.log(news);
  return (
    <>
        <div className="border border-dark7 rounded-sm overflow-hidden shadow-gray-300 hover:shadow-lg duration-300">
            <div className="flex justify-between items-center bg-dark7 px-3 py-2">
                <div className="flex items-center gap-2 ">
                    <div className="">
                        <img className='w-12 rounded-full' src={authorImg} alt={authorName} />
                    </div>
                    <div className="">
                        <h4 className='font-medium text-dark2'>{authorName}</h4>
                        <p className='text-dark3'>{published_date.split("T")[0]}</p>
                    </div>
                </div>
                <div className="flex gap-2 items-center text-dark3">
                    <button><FaBookmark/></button>
                    <button><FaShareAlt/></button>
                </div>
            </div>
            <div className="p-3 space-y-2">
                <h2 className='text-xl font-semibold'>{title}</h2>
                <img className='rounded-md' src={image_url} alt={title} />
                <p className='text-dark3 line-clamp-4'>{details}</p>
                <Link className='text-highlight font-medium'>Read More</Link>
                <hr className='border-gray-300 mt-2' />
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <RatingStar ratingNumber={ratingNumber} />
                        <p className='text-dark3 font-medium'>{ratingNumber}</p>
                    </div>
                    <div className="flex items-center gap-2 text-dark3">
                        <FaEye />
                        {total_view}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewsCard