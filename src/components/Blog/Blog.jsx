import PropTypes from 'prop-types';
import { BsFillBookmarksFill } from "react-icons/bs";

const Blog = ({id, blog, handleAddToBookMark, handleMarkAsRead}) => {

    const {title, cover_image, reading_time, author, author_image, posted_date, hashtags} = blog;

    return (
        <div className='mb-20 border-b'>
            <img src={cover_image} alt={`Cover image of ${title}`} className='w-full rounded-lg' />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-3 my-8'>
                    <img src={author_image} alt="" className='w-[60px]'/>
                    <div>
                        <h5 className='text-2xl font-bold'>{author}</h5>
                        <p className='opacity-60 font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time} min read</span> 
                    <button className='text-yellow-400 text-xl'
                    onClick={() => handleAddToBookMark(blog)}><BsFillBookmarksFill /></button>
                </div>
            </div>
            <h2 className='text-4xl mb-6'>{title}</h2>
            <p className='text-blue-600 mb-6'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="" className='underline'>{hash}</a> </span>)
                }
            </p>
            <button className='mb-5 underline text-blue-600 font-semibold'
            onClick={() => handleMarkAsRead(reading_time, id)}>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
}

export default Blog;