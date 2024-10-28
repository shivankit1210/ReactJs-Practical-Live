import { useEffect, useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(() => {
    // logic for local storage
    const savedcount = localStorage.getItem("count");
    return savedcount != null ? parseInt(savedcount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const plus = () => {
    setCount((prev) => prev + 1);
  };
  const minus = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className='flex flex-col place-content-center items-center bg-gray-900  w-[100%] h-[90vh] text-red-600 overflow-hidden p-7 text-lg font-bold'>
      <p className='text-slate-300 px-5 py-2 text-sm md:text-sm font-light  text-center'>
      I built a counter in React to get comfortable with managing component state and understanding how React updates the UI in response to changes. This simple project helped me practice using the `useState` hook to keep track of values and dynamically update them based on user interactions. I also wanted to explore how to set up basic functions, like incrementing and decrementing the counter, and see how React efficiently renders only what's necessary.
      </p>
      <h1>Counter can only be update between 0 and 20</h1>
     
      <span className='text-white' id="count">{count}</span>
      <div className=' w-44 p-10 justify-between flex gap-5'>

        <button className='bg-green-500 w-12 rounded-md text-black hover:bg-green-600' onClick={minus} disabled={count == 0}>
          -
        </button>
        <button className='bg-red-500 w-12 rounded-md text-black hover:bg-red-600 ' onClick={plus} disabled={count > 19}>
          +
        </button>
      </div>
        <div>
        <button className='bg-blue-500 w-18 rounded-md text-black px-2 hover:bg-blue-300' onClick={reset}>Reset</button>
      </div>
      
    </div>
  );
};

export default Counter;
