import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<div>   <Link to="/">
    <button>Book</button>
   </Link>

<Link to="/character">
<button>Character</button>
</Link></div>
  )
}

export default Navbar