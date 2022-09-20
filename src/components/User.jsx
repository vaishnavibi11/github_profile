import { Spin } from 'antd';
import Item from 'antd/lib/list/Item';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import {FiLink2} from 'react-icons/fi'
const User = ({data}) => {
  
  return (
    <>
   {data? <><div className='user'>
        <img src={data.avatar_url} className='profileImage'/>
        <div className='info'>
            <p className='name'>{data.login}</p>
            <p className='bio'>{data.bio}</p>
            <p className='location'><i><HiLocationMarker/></i>{data.location}</p>
            <p>https://twitter.com/ {data.twitter_username}</p>
        </div>
        
    </div><p className='link'><i><FiLink2/> </i>https://github.com/{data.login}</p></>:<Spin/>}
    </>
  )
}

export default User