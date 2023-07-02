import React from 'react'

const Navbar = () => {
  return (
    <div>
<>
<nav class="navbar navbar-expand-lg bg-body-tertiary bg-white">
  <div class="container-fluid ">
    <a class="navbar-brand fs-4" href="#" >Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Clock</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Worldclock</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Stopwatch</a>
        </li>
   
      
      </ul>
     
    </div>
  </div>
</nav>
</>
        
    </div>
  )
}

export default Navbar