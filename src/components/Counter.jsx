import { useState } from 'react';
export default function Counter() {
const [count, setCount] = useState(0);
const[name,setName]=useState("Aakash");
function incrementor(){
setCount(count + 1);
}
return (
<div>
<p>You clicked {count} times</p>
<button onClick={incrementor}>Click me</button><br />
<input type="text" name="name" id="" value={name} onChange={(e) => setName(e.target.value)} />
<p>The current name stored is : {name}</p>
</div>
);
}