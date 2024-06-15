import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import {dataCharacter} from "../constants/index"

function Character() {
  return (
    <div className='mt-20'> 
      <h1 className=" mb-10 text-center text-2xl sm:text-2xl lg:text-4xl">
          <span className="bg-gradient-to-r from-cs-light-red to-cs-white-smooth text-transparent bg-clip-text">
            Chara 
          </span>
            cter
      </h1>
      <p className="mt-3 mb-8 text-md text-center text-neutral-500">
      All principal characters from the first season through the seventh season have been fully 
      introduced. Their entire arcs and developments are now accessible for viewers to delve into 
      without delay, offering a complete journey through their stories.
      </p>
     
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataCharacter.map((data)=>{
          return <SwiperSlide key={data.id}>
            <img className="h-50% sm:w-50% rounded-lg hover:shadow-cs-dark-purple hover:shadow-lg" src={data.image} alt="" />
          </SwiperSlide>
        })}
      
      </Swiper>
    </div>
  )
}

export default Character