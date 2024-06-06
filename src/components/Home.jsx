import React from 'react'
import image1 from "../images/homeimg.jpg"
import image2 from "../images/room-house-decorated-with-brazilian-folklore-design.jpg"
import image3 from "../images/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf.jpg"
import image4 from "../images/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg"
import image5 from "../images/interior-design-with-photoframes-plants.jpg"
import image6 from "../images/still-life-shoe-rack-indoors.jpg"
import image7 from "../images/room-interior-design.jpg"
import image8 from "../images/realistic-interior-design-with-furniture.jpg"
import image9 from "../images/beautiful-girl-standing-room-looking-mirror.jpg"
import image10 from "../images/coffee-cup-table.jpg"
import image11 from "../images/bangkok-thailand-august-12-2016-beautiful-luxury-living-room.jpg"
import image12 from "../images/velvet-interior-classic-cushion-relax.jpg"
import video1 from "../images/homevideo.mp4"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   
  <>
  
  <div className='relative'>
      <img className='w-screen h-[700px] opacity-100' src={image1}></img>
      <div className='absolute top-40 left-24'>
        <h1 className='text- text-4xl font-bold'>
          INTERIORO DESIGN WELCOMES YOU
        </h1>
        <p className='text-gray-700 text-lg'>Every Shape, Size, Colour, and Style</p>
        <h1 className='text-gray-700 text-lg mb-10'>Whatever it is that you're looking for, we've got what you need.</h1>
        <button className='bg-transparent border-2 border-white rounded-xl px-6 py-2 text-gray-500 ml-10 hover:bg-black hover:text-white'>EXPLORE MORE</button>
      </div>
  </div>
 <div className='my-8'>
 <h1 className='text-3xl text-center font-bold mb-3 tracking-widest'>WELCOME TO THE INTERIORO DESIGNS</h1>
  <p className='text-center text-gray-500 text-lg'>Your one-stop shop for stylish furniture and decor, delivering the latest trends exclusively to Perth.</p>
 </div>
  <div className='flex'>
    <div className='relative'>
      <img className='w-[450px] h-[450px] ml-10' src={image2}></img>
      <div className='absolute top-60 left-32 text-white'>
        <h1 className=' font-bold text-3xl mb-6 text-gray-700'>LIVING</h1>
        <Link to='/products' className='bg-white text-black py-2 px-6 mx-6 hover:opacity-85 text-lg'>VIEW PRODUCTS</Link>
      </div>
    </div>
    <div className='relative'>
      <img className='w-[450px] h-[450px] ml-10' src={image3}></img>
      <div className='absolute top-60 left-32 text-white'>
      <h1 className='font-bold text-3xl mb-6 text-gray-700'>DINING</h1>
      <Link to='/products' className='bg-white text-black py-2 px-6 mx-6 hover:opacity-85 text-lg'>VIEW PRODUCTS</Link>
      </div>
    </div>
    <div className='relative top-0'>
      <img className='w-[450px] h-[450px] ml-11' src={image4}></img>
      <div className='absolute top-60 left-32 text-white '>
      <h1 className='font-bold text-3xl mb-6 text-gray-700'>BEDROOM</h1>
      <Link to='/products' className='bg-white text-black py-2 px-6 mx-6 hover:opacity-85 text-lg'>VIEW PRODUCTS</Link>
      </div>
    </div>
  </div>
  <div className='flex mt-16'>
    <div className='ml-8'>
        <h1 className='font-medium text-3xl w-[80%] mb-6'>
        IMAGINE THE POTENTIAL OF YOUR INTERIOR
        </h1>
        <p className='text-gray-400 mb-16 w-[75%] text-2xl'>
        The Interioro Design mission is to help turn your dream interior into a reality. Our team of talented stylists share a passion to create beautiful spaces for you to call home. Because life is too short not to love where you live.
        </p>
        <Link to='/contact' className='py-2 px-8 ml-20 bg-black text-white text-xl border hover:opacity-75'>CONTACT US</Link>
    </div>
    <div className='mr-8 w-[2000px]'>
    <video src={video1} typeof='mp4' autoPlay muted loop></video>
    </div>
  </div>
  <div className='text-center my-10'>
    <h1 className='text-gray-400 text-xl tracking-widest'>
    BROWSE OUR FEATURED PRODUCTS
    </h1>
    <h1 className='font-bold text-3xl'>
    TRENDING PRODUCTS
    </h1>
  </div>
  <div className='flex mx-10 my-10'>
    <div><img className='w-[330px] h-[330px] mr-8' src={image5} alt="des-img" />
    <h1 className='tracking-wider text-gray-400 ml-4'>WILLOW SINGLE SEATER SOFA</h1><h1 className='text-gray-400 ml-3'>$600</h1></div>
    <div><img  className='w-[330px] h-[330px] mr-8' src={image6} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>SIDE TABLE</h1><h1 className='text-gray-400 ml-3'>$900</h1></div>
    <div><img  className='w-[330px] h-[330px] mr-8' src={image7} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>DINING TABLE</h1><h1 className='text-gray-400 ml-3'>$750</h1></div>
    <div><img  className='w-[330px] h-[330px]' src={image8} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>CHARLOTTE SOFA</h1><h1 className='text-gray-400 ml-3'>$1300</h1></div>
  </div>
  <div className='flex mx-10 my-10'>
    <div><img className='w-[330px] h-[330px] mr-8' src={image9} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>BETHANIE FLOOR MIRROR</h1><h1 className='text-gray-400 ml-3'>$1299</h1></div>
    <div><img className='w-[330px] h-[330px] mr-8' src={image10} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>COFFEE TABLE</h1><h1 className='text-gray-400 ml-3'>$850</h1></div>
    <div><img className='w-[330px] h-[330px] mr-8' src={image11} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>LIGHTNING DESIGN</h1><h1 className='text-gray-400 ml-3'>$1199</h1></div>
    <div><img className='w-[330px] h-[330px] mr-8' src={image12} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>OMAHA SVIWEL CHAIR</h1><h1 className='text-gray-400 ml-3'>$1099</h1></div>
  </div>
  <div className='text-center'>
    <h1 className='tracking-wider text-3xl text-gray-500 mb-4'>
      FOLLOW US ON SOCIAL MEDIA
    </h1>
    <div className='inline-block mx-4 h-7'><a className='' href="#" class="fa fa-facebook"></a></div>
    <div className='inline-block mx-4 h-7'><a  className='' href="#" class="fa fa-twitter"></a></div>
    <div className='inline-block mx-4 h-7'><a className='' href="#" class="fa fa-youtube"></a></div>
    <div className='inline-block mx-4 h-7'><a  className='' href="#" class="fa fa-instagram"></a></div>
    <div className='inline-block mx-4 h-7 mb-8'><a className='' href="#" class="fa fa-pinterest"></a></div>
  </div>
  </>

  )
}

export default Home
