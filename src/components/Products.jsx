import React from 'react'
import image1 from "../images/modern-living-room-interior-design.jpg"
import image2 from "../images/bangkok-thailand-august-12-2016-beautiful-luxury-living-room.jpg"
import image3 from "../images/velvet-interior-classic-cushion-relax.jpg"
import image6 from "../productimages/top-view-boards-mdf-material.jpg"
import image7 from "../productimages/digital-art-interior-lamp-design.jpg"
import image8 from "../productimages/handcrafted-wooden-decorative-lamp.jpg"
import image9 from "../productimages/handcrafted-wooden-decorative-vase.jpg"
import image10 from "../productimages/mirror-vases-background-zoom-calls.jpg"
import image12 from "../productimages/man-accessories-makeup.jpg"
import image15 from "../images/interior-design-with-photoframes-plants.jpg"
import image16 from "../images/still-life-shoe-rack-indoors.jpg"
import image17 from "../images/room-interior-design.jpg"
import image18 from "../images/realistic-interior-design-with-furniture.jpg"
import image19 from "../images/coffee-cup-table.jpg"
import image20 from "../images/beautiful-girl-standing-room-looking-mirror.jpg"



const Products = () => {
  return (
    <>
    <div className='relative'>
      <img className='mb-8 w-screen h-[700px] opacity-100' src={image1} alt="product-img" />
      <div className='absolute top-[200px] left-[290px]'>
        <h1 className='text-4xl font-bold text-white tracking-widest'>
          YOU CAN BOOK AND BUY WHATEVER YOU WANT
        </h1>
        <p className=' my-6 text-center  text-white text-2xl tracking-wider'>Every Shape, Size, Colour, and Style</p>
      </div>
    </div>
    <div className='text-center text-4xl font-bold tracking-widest text-gray-500 mb-4'>
      OUR PRODUCTS
    </div>
    <hr>
    </hr>
    <div className='text-center text-4xl font-bold tracking-widest my-4'>
      FOR YOUR KITCHEN
    </div>
       <div className='flex mx-10 my-10'>
    <div><img className='w-[330px] h-[330px] mr-8' src={image6} alt="des-img" />
    <h1 className='tracking-wider text-gray-400 ml-4'>WALL DESIGNS</h1><h1 className='text-gray-400 ml-3'>$600</h1></div>
    <div><img  className='w-[330px] h-[330px] mr-8' src={image7} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>CAMEO LAMP</h1><h1 className='text-gray-400 ml-3'>$900</h1></div>
    <div><img  className='w-[330px] h-[330px] mr-8' src={image8} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>VERSAL CHE LAMP</h1><h1 className='text-gray-400 ml-3'>$750</h1></div>
    <div><img  className='w-[330px] h-[330px]' src={image9} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>WOODEN THINGS</h1><h1 className='text-gray-400 ml-3'>$1300</h1></div>
  </div>
  <div className='text-center text-4xl font-bold tracking-widest my-4'>
      FOR YOUR BEDROOM
    </div>
  <div className='flex mx-10 my-10'>
    <div><img className='w-[330px] h-[330px] mr-8' src={image10} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>BETHANIE FLOOR MIRROR</h1><h1 className='text-gray-400 ml-3'>$1299</h1></div>
    <div><img className='w-[330px] h-[330px] mr-8' src={image12} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>COFFEE TABLE</h1><h1 className='text-gray-400 ml-3'>$850</h1></div>
    <div><img className='w-[330px] h-[330px] mr-8' src={image2} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>LIGHTNING DESIGN</h1><h1 className='text-gray-400 ml-3'>$1199</h1></div>
    <div><img className='w-[330px] h-[330px] mr-8' src={image3} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>OMAHA SVIWEL CHAIR</h1><h1 className='text-gray-400 ml-3'>$1099</h1></div>
  </div>
  <div className='text-center text-4xl font-bold tracking-widest my-4'>
      FOR YOUR WALLS LIGHTNING
    </div>
  <div className='flex mx-10 my-10'>
    <div><img className='w-[330px] h-[330px] mr-8' src={image15} alt="des-img" />
    <h1 className='tracking-wider text-gray-400 ml-4'>WILLOW SINGLE SEATER SOFA</h1><h1 className='text-gray-400 ml-3'>$600</h1></div>
    <div><img  className='w-[330px] h-[330px] mr-8' src={image16} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>SIDE TABLE</h1><h1 className='text-gray-400 ml-3'>$900</h1></div>
    <div><img  className='w-[330px] h-[330px] mr-8' src={image17} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>DINING TABLE</h1><h1 className='text-gray-400 ml-3'>$750</h1></div>
    <div><img  className='w-[330px] h-[330px]' src={image18} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>CHARLOTTE SOFA</h1><h1 className='text-gray-400 ml-3'>$1300</h1></div>
  </div>
  <div className='text-center text-4xl font-bold tracking-widest my-4'>
      FOR YOUR WALLS
    </div>
  <div className='flex mx-10 my-10'>
    <div><img className='w-[330px] h-[330px] mr-8' src={image20} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>BETHANIE FLOOR MIRROR</h1><h1 className='text-gray-400 ml-3'>$1299</h1></div>
    <div><img className='w-[330px] h-[330px] mr-8' src={image19} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>COFFEE TABLE</h1><h1 className='text-gray-400 ml-3'>$850</h1></div>
    <div><img className='w-[330px] h-[330px] mr-8' src={image2} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>LIGHTNING DESIGN</h1><h1 className='text-gray-400 ml-3'>$1199</h1></div>
    <div><img className='w-[330px] h-[330px] mr-8' src={image3} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>OMAHA SVIWEL CHAIR</h1><h1 className='text-gray-400 ml-3'>$1099</h1></div>
  </div>
  <div className='text-center text-4xl font-bold tracking-widest my-4'>
      FOR YOUR LIVING ROOMS
    </div>
  <div className='flex mx-10 my-10'>
    <div><img className='w-[330px] h-[330px] mr-8' src={image15} alt="des-img" />
    <h1 className='tracking-wider text-gray-400 ml-4'>WILLOW SINGLE SEATER SOFA</h1><h1 className='text-gray-400 ml-3'>$600</h1></div>
    <div><img  className='w-[330px] h-[330px] mr-8' src={image16} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>SIDE TABLE</h1><h1 className='text-gray-400 ml-3'>$900</h1></div>
    <div><img  className='w-[330px] h-[330px] mr-8' src={image17} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>DINING TABLE</h1><h1 className='text-gray-400 ml-3'>$750</h1></div>
    <div><img  className='w-[330px] h-[330px]' src={image18} alt="des-img" /> <h1 className='tracking-wider text-gray-400 ml-4'>CHARLOTTE SOFA</h1><h1 className='text-gray-400 ml-3'>$1300</h1></div>
  </div>
  <div className='text-center'>
    <h1 className='tracking-wider text-3xl text-gray-500 my-4'>
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

export default Products
