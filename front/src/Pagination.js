import React from 'react'

const Pagination = ({count,setCount}) => {
  return (
    <div>
      {/* <div className="pagination">
<span className="material-symbols-outlined">keyboard_double_arrow_left</span>
<span onClick={()=>setCount(1)}>1</span>
<span onClick={()=>setCount(2)}>2</span>
<span onClick={()=>setCount(3)}>3</span>
<span onClick={()=>setCount(4)}>4</span>
<span onClick={()=>setCount(5)}>5</span>
<span onClick={()=>setCount(6)}>6</span>
<span onClick={()=>setCount(7)}>7</span>
<span onClick={()=>setCount(8)}>8</span>
<span onClick={()=>setCount(9)}>9</span>
<span onClick={()=>setCount(10)}>10</span>
<span className="material-symbols-outlined">keyboard_double_arrow_right</span>
</div> */}
 {count< 11? <div className="pagination">
<span onClick={()=>setCount(1)}>1</span>
<span onClick={()=>setCount(2)}>2</span>
<span onClick={()=>setCount(3)}>3</span>
<span onClick={()=>setCount(4)}>4</span>
<span onClick={()=>setCount(5)}>5</span>
<span onClick={()=>setCount(6)}>6</span>
<span onClick={()=>setCount(7)}>7</span>
<span onClick={()=>setCount(8)}>8</span>
<span onClick={()=>setCount(9)}>9</span>
<span onClick={()=>setCount(10)}>10</span>
<span onClick={()=>setCount(11)} className="material-symbols-outlined">keyboard_double_arrow_right</span>
</div>: 
<div className="pagination">
<span onClick={()=>setCount(count-10)} className="material-symbols-outlined">keyboard_double_arrow_left</span>
<span onClick={()=>setCount(count-4)}>{count-4}</span>
<span onClick={()=>setCount(count-3)}>{count-3}</span>
<span onClick={()=>setCount(count-2)}>{count-2}</span>
<span onClick={()=>setCount(count-1)}>{count-1}</span>
<span style={{color:'aquamarine'}} onClick={()=>setCount(count)}>{count}</span>
<span onClick={()=>setCount(count+1)}>{count+1}</span>
<span onClick={()=>setCount(count+2)}>{count+2}</span>
<span onClick={()=>setCount(count+3)}>{count+3}</span>
<span onClick={()=>setCount(count+4)}>{count+4}</span>
<span onClick={()=>setCount(count+10)} className="material-symbols-outlined">keyboard_double_arrow_right</span>
</div> }
    </div>
  )
}

export default Pagination
