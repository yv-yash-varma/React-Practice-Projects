function Navigation(){

return(
<nav className= 'flex flex-wrap justify-around py-2 items-center' >
<div >
  <img src="src/images/brand_logo.png"  alt="" />
</div>
<ul className='flex flex-wrap items-center my-2 justify-center'>
  <li className='mr-4'>MENU</li>
  <li className='mr-4'>LOCATION</li>
  <li className='mr-4'>ABOUT</li>
  <li className='mr-4'>CONTACT</li>
</ul>
<button className='items-center bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'>
  Login
</button>
</nav>

)
}

export default Navigation;