import React from 'react'

const Pagination = ({totalPosts,postPerPage,setcurrentPage,currentPage}) => {
    let pages =[]
    for(let i=1;i<=Math.ceil(totalPosts/postPerPage);i++){
        pages.push(i)
    }
  return (
    <div className='pagination-container  flex justify-center gap-2 md:mt-5'>
      {pages.map((page,index)=>{
        return <button className=' text-white text-4xl px-2 font-bold' style={page==currentPage?{backgroundColor:"yellow" ,color:"black"}:{backgroundColor:"black"}} key={index} onClick={()=>setcurrentPage(page)}>{page}</button>
      })}
    </div>
  )
}

export default Pagination
