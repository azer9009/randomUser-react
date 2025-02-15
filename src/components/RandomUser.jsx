import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RandomUser = () => {

    const [userData,setUserData] = useState({
        name:'aaa',
        email:'bbb',
        number:'ccc',
        imgSrc:'ddd'
    })
   
    const getUser = async () => {
        const response = await  axios.get('https://randomuser.me/api/')
         const user = response.data.results[0];
        setUserData({
            name:`${user.name.first} ${user.name.last}`,
            email:user.email, 
            number: user.phone,
            imgSrc: user.picture.large,
        })
        
    }

    useEffect(()=>{
        getUser();
    },[])

  return (
     <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-4">
          <img
            id="user-image"
            src={userData.imgSrc}
            alt=""
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        <h2 id="user-name" className="text-xl font-bold text-center mb-2">
          {userData.name}
        </h2>
        <p id="user-email" className="text-gray-600 text-center mb-2">
            {userData.email}
        </p>
        <p id="user-phone" className="text-gray-600 text-center">
          {userData.number}
        </p>
        <div className="mt-4 flex justify-center">
          <button onClick={getUser}
            id="new-user-btn"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Yeni İstifadəçi
          </button>
        </div>
      </div>
    </div>
  )
}

export default RandomUser
