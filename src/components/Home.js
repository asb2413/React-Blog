import {useState} from 'react'

const Home = () => {

const [blogs, setBlogs] = useState([
    {title: "sport", body: "hello world im abdullah samir boualdame form ALGERIA im web developer MERN stack", author: "samir", id:1},
    {title: "sport", body: "hello world im abdullah samir boualdame form ALGERIA im web developer MERN stack", author: "abdullah", id:2},
    {title: "sport", body: "hello world im abdullah samir boualdame form ALGERIA im web developer MERN stack", author: "abdullah", id:3},

])

    return ( 

        <div className="Home">

            {blogs.map((blog)=>(

                <div className="blog-preview" key={blog.id}>

                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>

                </div>

            ))}

        </div>

     );
}
 
export default Home;