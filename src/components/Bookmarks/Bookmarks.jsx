import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div className='bg-[#6047EC]/10 p-5 text-center rounded-lg mb-5'>
                <h2 className='text-2xl font-bold text-[#6047EC]'>Spent time on read : {readingTime} min</h2>
            </div>
            <div className='bg-gray-300 p-4 rounded-lg'>
                <h2 className='text-3xl font-bold'>Bookmarks : {bookmarks.length}</h2> 
                {
                    bookmarks.map((bookmark) => <Bookmark
                    key={bookmark.id} 
                    bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;