import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


const events = [
  {
    title: "Kannada Rajyotsava Celebration",
    date: "Sat, Nov 18, 2024 | 5:00 PM",
    location: "TBD Hall, Melbourne VIC",
    image: "/Our-Story1.png"
  },
  {
    title: "Kannada Classes for Kids",
    date: "Sun, May 12, 2024",
    location: "Kannada Bhavana, Melbourne",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350"
  },
  {
    title: "Ugadi Festival",
    date: "Sat, Apr 13, 2024",
    location: "TBD Hall, Melbourne",
    image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227"
  },
  {
    title: "Fundraising Gala Night",
    date: "Fri, Jun 7, 2024",
    location: "Grand Ballroom, Melbourne",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
  },
  {
    title: "Senior’s Meetup",
    date: "Tue, Jun 18, 2024",
    location: "Local Community Center",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952"
  },
  {
    title: "Community Cultural Night",
    date: "Sat, Jul 20, 2024",
    location: "Melbourne Convention Centre",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
  }
];

export default function UpcomingEvents() {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="mks-events-section">

      <div className="mks-events-container">

        {/* HEADER */}
        <div className="mks-events-top">
          <h2>Upcoming Events</h2>
        </div>

        {/* FEATURED EVENT */}

        <div
          className="mks-featured-event"
          style={{
            backgroundImage: `url(${events[activeIndex].image})`
          }}
        >

          <div className="mks-featured-content">

            <h3>{events[activeIndex].title}</h3>

            <p>📅 {events[activeIndex].date}</p>

            <p>📍 {events[activeIndex].location}</p>

            <div className="mks-featured-buttons">

              <button className="primary">Register Now</button>

              <button className="secondary">Add to Calendar</button>

              <button className="tertiary">View More</button>

            </div>

          </div>

        </div>


        {/* THUMBNAIL SLIDER */}

        <div className="mks-thumbnail-slider">

          <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4 }
            }}
          >

            {events.map((event, index) => (

              <SwiperSlide key={index}>

                <img
                  src={event.image}
                  alt={event.title}
                  className={`mks-thumb ${activeIndex === index ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                />

              </SwiperSlide>

            ))}

          </Swiper>

        </div>


        {/* VIEW ALL */}

        <div className="mks-view-all">

          <a href="/upcoming-events">View All Events →</a>

        </div>

      </div>

    </section>
  );
}