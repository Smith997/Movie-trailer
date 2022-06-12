import React from 'react'
import Trailer from './trailer';
import Content from './content';
import Search from '../components/search';

function Page() {
  return (
    <div>
        <Search/>
        <Trailer/>
        <Content/>        
    </div>
  )
}

export default Page