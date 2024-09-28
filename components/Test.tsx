import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonials } from '@/lib/consts';

// Update the Testimonial type to match the new structure
type Testimonial = {
    id: number; // Add id
    image: string; // Add image
    icon: string; // Add icon
    text: string; // Change quote to text
    name: string;
    position: string; // Change role to position
};

// Update the TestimonialCard component to reflect the new properties
const TestimonialCard: React.FC<Testimonial> = ({ name, position, text, image }) => (
    <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-8 rounded-lg shadow-lg flex flex-col items-center w-full h-full">
        <div className="relative mb-4">
            <img
                src={image} // Use image instead of avatarUrl
                alt={name}
                className="w-24 h-24 rounded-full border-4 border-white"
            />
        </div>
        <p className="testimonial-text">{text}</p>
        <h3 className="font-bold text-xl mb-1">
            {name}
        </h3>
        <p className="text-sm text-blue-200">
            {position}
        </p>
    </div>
);

const TestimonialSlider: React.FC = () => {
    return (
        <section className="py-5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold text-center mb-8 text-black">
                        What Users Say About Agent Coach.ai
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                        Hear from real estate professionals who have transformed their careers with our AI Coach.
                    </p>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={32}
                    loop={true}
                    centeredSlides={true}
                    pagination={false} // Disable pagination dots
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3, // This remains unchanged
                        },
                        1280: { // Add this breakpoint for larger screens
                            slidesPerView: 3, // Ensure 3 slides are shown
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard
                                {...testimonial}
                                position={testimonial.position} // Update role to position
                                text={testimonial.text} // Update quote to text
                                image={testimonial.image.src} // Update avatarUrl to image
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialSlider;