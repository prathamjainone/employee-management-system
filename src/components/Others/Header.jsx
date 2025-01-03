import React from 'react'
import { useState ,useEffect} from 'react'

const Header = ({ changeUser, data }) => {
  const [name, setName] = useState("Admin");
  useEffect(() => {
    if (data&&data.firstName) {
      setName(data.firstName);  // Update name if `data.firstName` is available
    } else {
      setName("Admin");  // Fallback to "Admin" if no name is provided
    }
  }, [data]);  // Dependency array ensures this effect runs when `data` changes

  const logout=()=>{
    localStorage.removeItem('loggedInUser')
    // window.location.reload()
    changeUser("")
  }

  return (


    <div className="flex justify-between">
      <div>
        <h1 className="text-lg">Hello,</h1>
        <h1 className="font-medium text-3xl">{name} 👋</h1>
      </div>
      <div>
        <button onClick={logout} className="py-2 px-4 bg-red-600 rounded-3xl">
            Log Out
        </button>
      </div>
    </div>
  )
}

export default Header