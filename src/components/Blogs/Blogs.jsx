import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookMark, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[]);

    return (
        <div className="md:w-2/3">
            {
                blogs.map((blog) => <Blog 
                key={blog.id} handleMarkAsRead={handleMarkAsRead} id={blog.id}
                handleAddToBookMark={handleAddToBookMark} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookMark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blogs;