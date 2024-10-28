import React, { useEffect, useState } from "react";
import axios from "axios";
import { debounce } from "lodash";

const Infinitescroll = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page,setPage]= useState(1);
  const [scrollPosition,setScrollPosition] =useState(0);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}");
       setPosts((prevPosts)=>[...prevPosts, ...response.data]);
      // console.log("Fetched post");
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {fetchPosts()}, [page]);

//useEffect to handle page scrolling
  useEffect(()=>{
    const handleScroll = debounce(() => {
      setScrollPosition(window.scrollY);
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50
      ) {
        setPage((prev) => prev + 1);
      }
    }, 200); 

    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll);
   
  },[])

  useEffect(()=>{
    window.scrollTo(0,scrollPosition);
  },[posts,scrollPosition]);

  return (
    <div className='flex flex-col place-content-center items-center bg-gray-900  w-[100%] max-h-fit text-red-600 overflow-hidden p-7 text-lg font-bold' >
      <p className='text-slate-300 px-5 py-2 text-sm md:text-sm font-light text-center'>
      I built an infinite scroll feature in React to understand how to load data dynamically as users scroll, creating a more seamless and engaging experience. This project helped me learn about managing scroll events, implementing lazy loading, and efficiently updating the component state as new data loads. By working on this, I practiced handling asynchronous requests, optimizing performance, and providing visual feedback to users during loading.
      </p>
      <h1 className="text-white text-3xl font-light underline">Post List for infinite Scroll</h1>
      {
        loading? (<h1 className="text-red-800">Loading.......</h1>): (
            <ul className="flex flex-col justify-center items-start font-semibold">
                {
                    posts.map(post=>(
                        <li key={post.id}>     
                          
                            {post.title}
                        </li>
                    ))
                }
            </ul>
        )
      }
    </div>
  );
};

export default Infinitescroll;
