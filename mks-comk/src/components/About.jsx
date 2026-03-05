import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  const achievements = [
    "Karnataka Government NRI grant",
    "Independence Day celebration",
    "Kannada Rajyotsava with “Maja Talkies” by Srujan Lokesh and Team",
    "Poetry concert and felicitation of renowned poet Shri Jayant Kaykini",
    "Makar Sankranti festival celebration",
    "Cooking competition on Yugadi",
    "Singing and appreciation program by Padma Shri awardee B. Jayashree",
    "A musical evening with Bhava Gita, Folk Gita, and film songs by Ratnamala Prakash and Mr. Pancham Halibandi",
    "Grant from Victoria Multicultural Community Fund",
    "Kannada Bhavana"
  ];

    const image = [
    "https://images.unsplash.com/photo-1605379399642-870262d3d051",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    "Our-Story1.png",
    "Our-Story2.png",
    "https://images.unsplash.com/photo-1544531586-fde5298cdd40",
    "Our-Story3.png",
    "Our-Story4.png",
    "https://images.unsplash.com/photo-1593113630400-ea4288922497",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
  ];

  const images = [
    "Our-Story1.png",
    "Our-Story2.png",
    "Our-Story3.png",
    "Our-Story4.png"
  ];

  // const committeeData = [
  //   {
  //     image: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design.png",
  //     title: "Executive Committee 2023-25",
  //     link: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design.png",
  //   },
  //   {
  //     image: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-1.png",
  //     title: "Team Members",
  //     link: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-1.png",
  //   },
  //   {
  //     image: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-2.png",
  //     title: "Team Spirit",
  //     link: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-2.png",
  //   },
  //   {
  //     image: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-3.png",
  //     title: "Executive Committee 2022",
  //     link: "https://mks.org.au/wp-content/uploads/2025/03/Untitled-design-3.png",
  //   },
  // ];

  return (
    <>

      {/* Banner Section */}
      <section className="about-banner">
        <div className="about-overlay">
          <div className="about-content">
            <img src="/logo.png" alt="MKS Logo" className="about-logo" />
            <h1 className="about-title">MELBOURNE KANNADA SANGHA</h1>
            <h2 className="about-subtitle">ಕನ್ನಡಿಗರ ಮನೆ – 1986 ರಿಂದ ಸೇವೆಯಲ್ಲಿ</h2>
            <p className="about-since">
              Since 1986 • Serving the Kannada Community in Australia
            </p>
          </div>
        </div>
      </section>


      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="our-story-container">

          <div className="our-story-slider">
            <Slider {...settings}>
              {images.map((img, index) => (
                <div key={index} className="slide-item">
                  <img src={img} alt="Our Story" />
                </div>
              ))}
            </Slider>
          </div>

          <div className="our-story-content">
            <h2>Our Story</h2>
            <p>
              At <strong>Melbourne Kannada Sangha</strong>, culture is more than events —
              it is identity, belonging, and community.
            </p>
            <p>
              We create a welcoming space where members feel connected,
              valued and celebrated.
            </p>
            <p>
              Through festivals, cultural programs and community initiatives,
              we preserve traditions for future generations.
            </p>
            <button className="our-story-btn">READ MORE</button>
          </div>

        </div>
      </section>


      {/* Growth Section */}
      <section className="growth-section">
        <div className="growth-container">
          <div className="growth-column">
            <p>
              MKS has grown exponentially by organizing mega cultural events,
              Kannada classes, library services and publishing the monthly
              magazine “MELNUDI”.
            </p>
            <p>
              MKS established Kannada Bhavana — one of the few outside India —
              built purely by volunteer support.
            </p>
          </div>

          <div className="growth-column">
            <p>
              Our vision includes community-driven growth with support from
              local patrons and life members.
            </p>
            <p>
              With Melbourne’s growing Indian population, MKS aims to expand
              its impact in the coming years.
            </p>
          </div>
        </div>
      </section>

       {/* ================= VERTICAL HISTORY TIMELINE ================= */}
      <section className="vertical-timeline-section">
        <div className="vertical-timeline-wrapper">

          <h2 className="vertical-timeline-main-title">Our Journey Through the Decades</h2>
          <div className="vertical-timeline-header-line"></div>

          <div className="vertical-timeline-container">

            {/* ITEM 1 - 1980s */}
            <div className="vertical-timeline-item">
              <div className="vertical-timeline-marker"></div>
              <div className="vertical-timeline-date">1980s</div>
              <div className="vertical-timeline-content right">
                <h3>The Beginning</h3>
                <p>
                  The idea of forming the Sangha was born when a group of Kannadiga doctors gathered at a family event, Sneha Koota, and decided to create a Kannada association. Thus, the Melbourne Kannada Sangha was established in April 1986. The first meeting, held during the Ugadi festival, brought together community members for a fun-filled picnic, celebrating their shared heritage.
                </p>
              </div>
            </div>

            {/* ITEM 2 - 1996 */}
            <div className="vertical-timeline-item">
              <div className="vertical-timeline-marker"></div>
              <div className="vertical-timeline-date left-date">1996</div>
              <div className="vertical-timeline-content left">
                <h3>10th Anniversary</h3>
                <p>
                  The Sangha celebrated its 10th anniversary by inviting renowned singers and dramatists to Melbourne. This milestone event marked the Sangha’s growing influence and ability to bring together the community through cultural programs. That year, a grand celebration of the Dussehra festival was organized in October, featuring children’s performances in dance, music, and other entertainment. This set the tone for annual celebrations of Ugadi, Dussehra, and other festivals, which have since become a hallmark of the Sangha.
                </p>
              </div>
            </div>

            {/* ITEM 3 - 2004 */}
            <div className="vertical-timeline-item">
              <div className="vertical-timeline-marker"></div>
              <div className="vertical-timeline-date">2004</div>
              <div className="vertical-timeline-content right">
                <h3>Launch of the MKS Kannada Library</h3>
                <p>
                  In 2004, our Kannada Sangh was honoured with the visit of the then Home Minister of the Government of Karnataka and the Mayor of the Bangalore Metropolitan Corporation. They expressed their deep appreciation for our efforts in Melbourne and recognized the need for a Kannada library within our community. With the honourable minister’s personal interest, the library journey began with a generous donation of 500 books, weeklies, and magazines to the Melbourne Kannada Association.
                </p>
                <p>
                  Mr. Satish Savanoor took on the leadership of this library initiative and has been selflessly serving the Kannada community for the past 20 years. He started by offering library services on the first and third Sundays of each month at Jells Park and Dandenong Park, never missing a session, regardless of the weather—rain or shine. His dedication to the growth and continuity of our library has been nothing short of remarkable, and we remain forever grateful for his enduring commitment. Thanks to his efforts, the Monash City Council generously provided Clayton Hall for a full-fledged library, free of charge. Today, our library has blossomed into a thriving hub with a collection of over 2000 books, expanding year after year.
                </p>
                <p>
                  Additionally, our members have access to monthly Kannada weeklies and newspapers, further fostering our connection to our rich culture.
                </p>
                <p className="vertical-timeline-milestones-title">Some of our notable milestones include:</p>
                <ul className="vertical-timeline-milestones">
                  <li><strong>1.</strong> Successfully providing a collection of 200 small books to each of 150 village schools in Karnataka, thanks to the generous support of our members and sponsors.</li>
                  <li><strong>2.</strong> Celebrating the Silver Jubilee of the Melbourne Kannada Sangh in 2011 by distributing three unique books to each member as a special souvenir from our library.</li>
                  <li><strong>3.</strong> Publishing a high-quality memoir, “Belli Chukki,” compiled by a dedicated group of passionate individuals under the library’s patronage.</li>
                  <li><strong>4.</strong> Establishing a Kannada Book Club, which has grown significantly and has been consistently hosting meetings for the last 13 years.</li>
                  <li><strong>5.</strong> Introducing new library projects, such as an online quiz program on Kannada language knowledge, essay writing, Scholarships Club, VCE information Club, and university courses with internship opportunities.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section">
        <div className="achievements-container">

          <h2 className="achievements-title">Our Achievements</h2>

          <p className="achievements-description">
            The Melbourne Kannada Sangha has consistently been ranked as one of
            the most popular Kannada groups in recent years, thanks to its
            numerous cultural and entertainment programs, such as:
          </p>

          <div className="achievements-grid">
            {achievements.map((item, index) => (
              <div className="achievement-card" key={index}>
                <span className="achievement-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>




      {/* History Section */}
      {/* <section className="history-section">
        <div className="history-container">

          <div className="history-image">
            <img
              src="https://mks.org.au/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-24-at-13.05.06.jpeg"
              alt="MKS Event"
            />
          </div>

          <div className="history-content">
            <h2 className="history-title">History of MKS</h2>
            <div className="history-divider"></div>

            <p>
              Founded on 10 April 1986, Melbourne Kannada Sangha was formed
              to bring Kannadigas together and preserve language and culture.
            </p>

            <p>
              Over 36+ years, the Sangha has grown into a dynamic cultural
              association driven by dedicated volunteers.
            </p>

            <p>
              Registered as a non-profit incorporated association in 2005,
              MKS celebrates UGADI, DASARA and numerous cultural programs
              every year.
            </p>
          </div>

        </div>
      </section> */}
     

      {/* ================= 2011 VSL SECION ================= */}
      <section className="vsl-section">
        <div className="vsl-container">
          <div className="vsl-grid">

            {/* Left: Image */}
            <div className="vsl-image-col">
              <img
                src="vsl.png"
                alt="2011 First International Kannada School"
                className="vsl-image"
              />
            </div>

            {/* Right: Content */}
            <div className="vsl-content-col">
              <h2 className="vsl-title">2011: First International Kannada School</h2>
              <p className="vsl-text">
                In 2011, the Sangha established the first Kannada school overseas, starting with just 6 students. Today, the school has expanded to 300 students across four centres, supported by 12 volunteer teachers. This growth, facilitated by the Victorian School of Learning and the Government of Karnataka, stands as one of the Sangha’s most remarkable achievements.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Achievements */}

      {/* ================= PHOTO GALLERY ================= */}
      <section className="gallery-section">
        <div className="gallery-container">

          <h2 className="gallery-heading">PHOTO GALLERY</h2>
          <div className="gallery-divider">
            <span></span>
            <div className="lotus">✿</div>
            <span></span>
          </div>

          <h3 className="gallery-subtitle">
            Moments from Our Community
          </h3>
          <p className="gallery-description">
            Explore memories from our vibrant cultural and spiritual events.
          </p>

          <div className="gallery-grid">
            {image.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>

          <div className="gallery-btn-wrapper">
            <button className="gallery-btn">View Full Gallery</button>
          </div>

        </div>
      </section>



      {/* Committee Section */}
      <section className="events-section">
        <div className="events-wrapper">

          <h2 className="section-title">Events Committee</h2>
          <div className="title-divider"></div>

          <div className="events-grid">

            {/* Card 1 */}
            <div className="event-card">
              <h3 className="card-title">Executive Committee 2023-25</h3>
              <img
                src="Our-Story1.png"
                alt="Executive Committee"
                className="card-image"
              />
              <button className="primary-btn">Meet Our Team ›</button>
            </div>

            {/* Card 2 */}
            <div className="event-card">
              <h3 className="card-title">Team Members</h3>
              <p className="card-subtext">
                Dedicated volunteers who bring our events to life.
              </p>

              <div className="members-row">
                <div className="member">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dr. Prashanth Hegde" />
                  <span>Dr. Prashanth Hegde</span>
                  <small>President</small>
                </div>
                <div className="member">
                  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Arun Bharath" />
                  <span>Arun Bharath</span>
                  <small>Vice President</small>
                </div>
                <div className="member">
                  <img src="https://randomuser.me/api/portraits/men/50.jpg" alt="Harishi Pradhan" />
                  <span>Harishi Pradhan</span>
                  <small>Secretary</small>
                </div>
                <div className="member">
                  <img src="https://randomuser.me/api/portraits/men/60.jpg" alt="Ranjit Adiga" />
                  <span>Ranjit Adiga</span>
                  <small>Treasurer</small>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="event-card">
              <h3 className="card-title">Team Members</h3>
              <p className="card-subtext">
                Dedicated volunteers who bring our events to life.
              </p>

              <img
                src="Our-Story2.png"
                className="card-image"
                alt="Team Members"
              />
              <button className="primary-btn">View All Members</button>
            </div>

            {/* Card 4 */}
            <div className="event-card">
              <h3 className="card-title">Team Spirit</h3>
              <img
                src="Our-Story3.png"
                alt="Team Spirit"
                className="card-image"
              />
              <div className="bottom-row">
                <span className="year-text">Executive Committee 2022</span>
                <button className="primary-btn">Meet Our Past Team ›</button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};


export default About;
