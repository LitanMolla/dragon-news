import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import NewsCard from '../../components/NewsCard/NewsCard';

const CaterogyNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);
    useEffect(() => {
        if (id == 0) {
            setCategoryNews(data)
        } else if (id == 1) {
            const filter = data.filter(item => item.others.is_today_pick);
            setCategoryNews(filter)
        } else {
            const filter = data.filter(item => item.category_id == id);
            setCategoryNews(filter)
        }
    }, [data, id])
    return (
        <>
            <h4 className='text-xl font-medium text-dark2 mb-3'>Dragon News ({categoryNews.length})</h4>
            <div className="space-y-5">
                {categoryNews.map(news => <NewsCard key={news.id} news={news} />)}
            </div>
        </>
    )
}

export default CaterogyNews