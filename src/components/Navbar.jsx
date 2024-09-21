import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'
const Navbar = () => {
    // const [first, setfirst] = useState('')
    const {fetchImageByCategory,setQuery} = useContext(PixabayContext);
  return (
    <>
    
    <div className='container text-center my-5'>
<button onClick={()=>fetchImageByCategory('nature')} type="button" className="btn btn-outline-primary mx-3">
    Nature
    </button>
<button onClick={()=>fetchImageByCategory('science')} type="button" className="btn btn-outline-secondary mx-3">
    Science
    </button>
<button onClick={()=>fetchImageByCategory('computer')} type="button" className="btn btn-outline-success mx-3">
    Computer
    </button>
<button onClick={()=>fetchImageByCategory('building')} type="button" className="btn btn-outline-danger mx-3">
    Buildings
    </button>
<button onClick={()=>fetchImageByCategory('sports')} type="button" className="btn btn-outline-warning mx-3">
    Sports
    </button>
<button onClick={()=>fetchImageByCategory('transpotation')} type="button" className="btn btn-outline-info mx-3">
    Transpotation
    </button>
<button onClick={()=>fetchImageByCategory('travel')} type="button" className="btn btn-outline-light mx-3">
    Travel
    </button>
<button onClick={()=>fetchImageByCategory('food')} type="button" className="btn btn-outline-dark mx-3">
    Food
    </button>
    </div>
    <div className="container" style={{width:'800px'}}>
    <input type="text" onChange={(e)=>setQuery(e.target.value)} class="form-control bg-dark text-light mb-5" aria-describedby="emailHelp"></input>
    </div>
    </>
  )
}

export default Navbar
