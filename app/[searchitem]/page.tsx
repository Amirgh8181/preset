import getSearchMovie from '@/lib/getSearchMovie';
import React from 'react'

const SearchRes = async ({ params }: { params: { searchitem: string } }) => {
  console.log(params);
  const res = await getSearchMovie(params)
  const result = res?.data
  console.log(res.data);
  console.log(result.length);
  
  

  // const movieResult=()=>{
  //   if(result?.length>1)
  // }
  return (
    <div>
      {
      result?.length>1?  
        result?.map((item:movie[]) =>
          <div key={item.id}>{item.title}</div>
        ):
        <div>{result.title}</div>
      }
    </div>
  )
}

export default SearchRes;