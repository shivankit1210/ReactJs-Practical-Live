import React, { useEffect, useState } from "react";
import axios from "axios";


const FetchComponent = () => {

    const [data,setData] = useState([]);


        const fetchUser = async () => {
            try {
              const response = await axios.get("https://fakestoreapi.com/products");
              console.log(response.data)
              setData(response.data);
             
              console.log(response.data);
            } catch (error) {
              console.log(error);
            }
          };

          
          // https://jsonplaceholder.typicode.com/users




 

  return (
    <div className='flex flex-col  place-content-center items-center bg-gray-900  w-[100%] text-red-600   text-lg font-bold fetch-comp'>
      <p className='text-slate-300 px-5 py-2 text-sm md:text-sm  text-center font-light'>
      I implemented data fetching with Axios in React to learn how to work with APIs and handle asynchronous data. This project helped me practice using Axios to send requests, process responses, and manage loading states within the UI. By working through this, I learned how to structure API calls, handle errors gracefully, and integrate dynamic data into a React component. 
      </p>
      <button className='bg-red-500 w-48 rounded-md text-white font-semibold'  onClick={fetchUser}>Click to fetch data</button>
      <div className="flex flex-wrap gap-5  place-content-center items-center mt-20 ">
      {
      data.map((e)=>
      (
        <div className="w-96 h-56 bg-white shadow-sm  shadow-white flex flex-col flex-w p-1 rounded-lg hover:shadow-lg">
          <span className="text-md text-center text-black">{e.title}</span>
          <span className="text-sm text-gray-500 font-light">{e.description}</span>
          
        </div>
      )
      )
      }

      </div>
     
      
    </div>
  );
};

export default FetchComponent;

// import { useEffect, useState } from "react";
// import axios from "axios";


// const FetchComponent = () =>{

//   const[products,setProducts]= useState([])
//   const [favItems,setFavItems]= useState([])

//   const fetchData = async () =>{
//     try {
//       const response= await axios.get("https://fakestoreapi.com/products")
//       setProducts(response.data.slice(0,20))
//       console.log(response.data)
      
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const addItem = (id) =>{
//    products.map((product)=>{
//     if(product.id==id){
//       setFavItems([...favItems,product])
//     }
//    })
//   }

//   useEffect(()=>{
//     fetchData();
//   },[])

//   return(
//     <div>
//       <h2>
//         {
//           favItems.map((product)=>{
//             return(
//               <li>
//                 {product.title}
//               </li>
//             )
//           })
//         }
//       </h2>
//       <h1>products</h1>
//       {
//         products.map((product)=>{
//           return(
//             <li>
//             {product.title}
//             <button onClick={()=>addItem(product.id)}>ADD </button>
//           </li>
        

//           )
          
//         })
//       }

    
//     </div>
//   )
// }

// export default FetchComponent;
