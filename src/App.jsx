// import React from 'react'
// import Images from './components/images';
// import Navbar from './components/Navbar';
// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <div> <marquee>i will </marquee> </div>

//       <Images />
//     </div>
//   )
// }

// export default App;

import React from 'react';
import Images from './components/Images';
import Navbar from './components/Navbar';
// import './App.css'; // Ensure you create or include this CSS file

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="container my-4">
        <div className="scroll-container bg-light text-dark rounded-pill px-3 py-2 shadow-sm">
          <p className="scroll-text m-0 fw-bold">
            🚀 I will launch our official website as soon as possible!
          </p>
        </div>
      </div>

      <Images />
    </div>
  );
};

export default App;
