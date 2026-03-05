import React from 'react';
import './../style.css'; // Ensure styles are imported if not already globally available

const Comittee = () => {
    // This is the dummy data that will eventually come from the backend
    const committeeMembers = [
        {
            id: 1,
            name: "John Doe",
            designation: "President",
            photo: "https://randomuser.me/api/portraits/men/32.jpg",
            bio: "John has been serving the community for over 15 years with a focus on cultural preservation and youth engagement.",
            contact: "president@example.com"
        },
        {
            id: 2,
            name: "Jane Smith",
            designation: "Vice President",
            photo: "https://randomuser.me/api/portraits/women/44.jpg",
            bio: "Jane is passionate about organizing large-scale events and has been instrumental in our annual festival's success.",
            contact: "vp@example.com"
        },
        {
            id: 3,
            name: "Robert Raj",
            designation: "Secretary",
            photo: "https://randomuser.me/api/portraits/men/46.jpg",
            bio: "Robert handles all day-to-day operations and communications, ensuring the Sangha runs smoothly year-round.",
            contact: "secretary@example.com"
        },
        {
            id: 4,
            name: "Anita Sharma",
            designation: "Treasurer",
            photo: "https://randomuser.me/api/portraits/women/68.jpg",
            bio: "Anita is a certified accountant who meticulously manages the organization's financial health and sponsorships.",
            contact: "treasurer@example.com"
        },
        {
            id: 5,
            name: "Sunil Kumar",
            designation: "Cultural Coordinator",
            photo: "https://randomuser.me/api/portraits/men/75.jpg",
            bio: "Sunil brings our rich heritage to life by coordinating traditional dance, music, and drama performances.",
            contact: "cultural@example.com"
        },
        {
            id: 6,
            name: "Priya Menon",
            designation: "Youth Lead",
            photo: "https://randomuser.me/api/portraits/women/89.jpg",
            bio: "Priya connects younger generations to their roots through educational workshops, sports, and modern networking events.",
            contact: "youth@example.com"
        },
        {
            id: 7,
            name: "Rahul Verma",
            designation: "Event Manager",
            photo: "https://randomuser.me/api/portraits/men/50.jpg",
            bio: "Rahul coordinates vendor relations and logistics to ensure all our events run flawlessly.",
            contact: "events@example.com"
        },
        {
            id: 8,
            name: "Meera Patel",
            designation: "Public Relations",
            photo: "https://randomuser.me/api/portraits/women/62.jpg",
            bio: "Meera manages our community outreach and social media, keeping everyone informed and engaged.",
            contact: "pr@example.com"
        }
    ];

    return (
        <>
            {/* ================= COMMITTEE HERO SECTION ================= */}
            <section
                className="committee-hero-section"
                style={{
                    backgroundImage: "url('/Comittee.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="committee-hero-overlay"></div>
                <div className="committee-hero-content">
                    <h1 className="committee-hero-title">Committee Members</h1>
                </div>
            </section>

            {/* ================= COMMITTEE LIST SECTION ================= */}
            <section className="committee-list-section">
                <div className="committee-list-container">

                    <div className="committee-list-header">
                        <h2>Committee 2023–2025 List</h2>
                        <div className="committee-list-divider"></div>
                        <p>Meet the dedicated team working to serve and uplift our community.</p>
                    </div>

                    <div className="committee-grid">
                        {committeeMembers.map((member) => (
                            <div className="committee-card" key={member.id}>
                                <div className="committee-card-img-wrapper">
                                    <img src={member.photo} alt={member.name} className="committee-card-img" />
                                </div>
                                <div className="committee-card-content">
                                    <h3 className="committee-member-name">{member.name}</h3>
                                    <h4 className="committee-member-designation">{member.designation}</h4>
                                    <p className="committee-member-bio">{member.bio}</p>

                                    {member.contact && (
                                        <div className="committee-member-contact">
                                            <i className="fas fa-envelope"></i>
                                            <a href={`mailto:${member.contact}`}>{member.contact}</a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default Comittee;