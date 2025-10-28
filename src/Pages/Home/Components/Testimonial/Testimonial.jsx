import React, { useEffect, useState } from "react";
import SectionTitle from "../../../../Components/Common/SectionTitle/SectionTitle";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("reviews/reviews.json").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (
    <div className="container py-10 bg-white">
      <SectionTitle
        heading="TESTIMONIALS"
        subheading="---What Our Clients Say---"
      />
      {/* Testimonial content can be added here */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper bg-white">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center text-center px-8 py-12 bg-white">
              {/* Star Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((star, index) => (
                  <svg
                    key={index}
                    className={`w-8 h-8 ${
                      index < review.rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-16 h-16 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 max-w-3xl">
                {review.details}
              </p>

              {/* Reviewer Name */}
              <h4 className="text-xl font-bold text-yellow-600 uppercase tracking-wider">
                {review.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
