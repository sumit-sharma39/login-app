
// import { useState } from "react";

// export default function Test() {
//     const items= [1, 2, 3, 4, 5]
// const [value, setValue] = useState(items);

// const add = () => {
//     const nextNumber = value[value.length - 1] + 1;
//     setValue([...value, nextNumber]); 
// };

// return (
//     <div>
//         {/* <ul> 
//         { items.map((item ) => (<li key="item">{item}</li>)) }
//         </ul> */}
//     <ul>
//         {value.map((item) => (
//         <li key={item}>{item}</li>
//         ))}
//     </ul>

//     <button onClick={add}>add</button>
//     </div>
// );
// }
import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count is ${count}`;
    
  }, [count]); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} >
        Increase
      </button>
    </div>
  );
}
