import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'John Doe',
    quote: 'This school is amazing! My child has learned so much.',
  },
  {
    name: 'Jane Smith',
    quote: 'Great teachers and a caring environment. Highly recommended!',
  },
  {
    name: 'Michael Johnson',
    quote: 'Best decision we made for our kid’s education.',
  },
];

const TestimonialSlider = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">What Parents Say</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <p className="text-lg italic text-gray-700 mb-4">"{testimonial.quote}"</p>
              <h4 className="text-xl font-semibold text-blue-600">{testimonial.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
