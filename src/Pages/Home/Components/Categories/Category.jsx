import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../../../assets/home/slide1.jpg";
import img2 from "../../../../../assets/home/slide2.jpg";
import img3 from "../../../../../assets/home/slide3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Category = () => {
  return (
    <div className="py-10 container">
      <div className="text-center my-8 max-w-md mx-auto">
        <p className="text-yellow-600 italic mb-2">
          ---From 11:00am to 10:00pm---
        </p>
        <div className="border-b border-gray-300 mb-4"></div>
        <h2 className="text-3xl font-semibold text-black mb-4">ORDER ONLINE</h2>
        <div className="border-b border-gray-300"></div>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={img1} alt="slide 1" className="w-full" />
            <p className="text-xl text-center text-white absolute bottom-4 left-0 right-0 font-semibold">Paren</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img2} alt="slide 2" className="w-full" />
            <p className="text-xl text-center text-white absolute bottom-4 left-0 right-0 font-semibold">Pizza</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img3} alt="slide 3" className="w-full" />
            <p className="text-xl text-center text-white absolute bottom-4 left-0 right-0 font-semibold">Salad</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
