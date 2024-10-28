import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchComponent = () => {

    const [data,setData] = useState([]);


        const fetchUser = async () => {
            try {
              const response = await axios.get("https://jsonplaceholder.typicode.com/users");
              setData(response.data);
             
              console.log(response.data);
            } catch (error) {
              console.log(error);
            }
          };



 

  return (
    <div className='flex flex-col  place-content-center items-center bg-gray-900  w-[100%] h-[90vh] text-red-600 overflow-hidden p-7 text-lg font-bold fetch-comp'>
      <p className='text-slate-300 px-5 py-2 text-sm md:text-sm  text-center font-light'>
      I implemented data fetching with Axios in React to learn how to work with APIs and handle asynchronous data. This project helped me practice using Axios to send requests, process responses, and manage loading states within the UI. By working through this, I learned how to structure API calls, handle errors gracefully, and integrate dynamic data into a React component. 
      </p>
      <button className='bg-red-500 w-48 rounded-md text-white font-semibold'  onClick={fetchUser}>Click to fetch data</button>
      {
      data.map((e)=>
        (<span className="text-white font-light"  key={e.id}>Name: "{e.name}" </span>
        )
      )
      }
      
    </div>
  );
};

export default FetchComponent;
