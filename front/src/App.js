
import React, { useEffect, useState } from "react";
import './App.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Pagination from "./Pagination";
// import ReactPaginate from 'react-paginate'
function App() {

  const [images, setImages] = useState(null);
  const [count ,setCount]=useState(1)

const get=async ()=>{
  try{
    const {data}=await axios.get(`http://localhost:5000`)
    setImages(data)
    console.log(images)
  }catch(err){
    console.log(err)
  }
}

useEffect(() => {
  get();
},[count] )

// const onpagechange = ({selected})=>{
// setCount(selected)
// console.log(count)
// }





  return (
    <div className="App">
      <h1>Sasta Unsplash</h1>
      {/* <button onClick={get}>button</button> */}
<div className="showcase">
      {images ? <h1>{images}</h1>
       : <img className="loder" src="https://media2.giphy.com/media/RgzryV9nRCMHPVVXPV/giphy.gif" alt="" />} 
</div>


<Pagination count={count} setCount={setCount} />





<div className="pagination"><p>.</p></div>
{/* <ReactPaginate
                breakLabel="..."
                nextLabel=">>"
                onPageChange={onpagechange}
                pageRangeDisplayed={5}
                pageCount={10}
                previousLabel="<<"
            /> */}
      {/* {images ? JSON.stringify(images) : "loading..."} */}
    </div>
  );
}

export default App;
