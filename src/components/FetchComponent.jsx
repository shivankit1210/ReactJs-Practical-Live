import React, { useEffect, useState } from "react";
import axios from "axios";


const FetchComponent = () => {

    const [data,setData] = useState([]);


        const fetchUser = async () => {
            try {
              const response = await axios.get("https://jsonplaceholder.typicode.com/users");
              console.log(response.data)
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
        (<li className="text-white font-light p-2 flex flex-col "  key={e.id}>Email of {e.name} from API is "{e.email}" </li>
        )
      )
      }
      
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
