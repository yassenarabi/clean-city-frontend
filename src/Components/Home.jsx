import React from "react";
import img1 from "../assets/cln.png";
import { Link } from "react-router-dom";
import img2 from "../assets/goal.png";
import zamalek from "../assets/zmlk.jpg";
import img3 from "../assets/haram.jpg";
import img5 from "../assets/last.jpg";
import img4 from "../assets/alex.jpg";
import ahmed from "../assets/people.jpg";
import sarah from "../assets/female.jpg";
import omar from "../assets/single.jpg";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">

        {/* Hero Section */}
        <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
          <div style={{
            position: "absolute", top: 0, left: 0,
            width: "100%", height: "100%",
            backgroundColor: "rgba(6, 78, 59, 0.4)", zIndex: 1
          }}></div>
          <img src={img1} style={{
            position: "absolute", top: 0, left: 0,
            width: "100%", height: "100%", objectFit: "cover"
          }} />
          <div style={{ position: "relative", zIndex: 2, height: "100%" }}
            className="d-flex align-items-center justify-content-center">
            <div className="text-center px-4" style={{ maxWidth: "800px" }}>
              <span className="text-uppercase fw-bold d-block mb-2"
                style={{ color: "#f7fee7", fontSize: "1.2rem" }}>
                YOUR CITY, YOUR RESPONSIBILITY
              </span>
              <h1 className="fw-bolder mb-4" style={{ color: "#f7fee7", fontSize: "2.5rem" }}>
                CleanCity connects citizens to report pollution & keep cities clean
              </h1>
              <p className="mb-4" style={{ color: "#f7fee7", fontSize: "1.2rem" }}>
                Join thousands of citizens who are actively reporting waste,
                pollution, and environmental issues to help build a cleaner and
                healthier city for everyone.
              </p>
              <button className="btn fw-bold text-uppercase px-5 py-3"
                style={{
                  backgroundColor: "#f7fee7", color: "#14532d",
                  borderRadius: "1rem", fontSize: "1.1rem",
                  border: "2px solid #f7fee7", transition: "all 0.5s"
                }}
                onMouseOver={e => {
                  e.target.style.backgroundColor = "#14532d";
                  e.target.style.color = "#f7fee7";
                }}
                onMouseOut={e => {
                  e.target.style.backgroundColor = "#f7fee7";
                  e.target.style.color = "#14532d";
                }}>
                JOIN THE MOVEMENT 🌱
              </button>
            </div>
          </div>
        </div>

        {/* Together Section */}
        <div style={{ backgroundColor: "#f7fee7" }}>
          <div className="container py-5">
            <div className="row align-items-center g-5">
              <div className="col-12 col-md-6">
                <span className="badge px-3 py-2 mb-3"
                  style={{ backgroundColor: "#a7f3d0", color: "#065f46", fontSize: "0.9rem" }}>
                  <i className="fa-solid fa-leaf me-1"></i> CIVIC RESPONSIBILITY FIRST
                </span>
                <h2 className="fw-bold my-3" style={{ color: "#065f46", fontSize: "2.5rem" }}>
                  Together for a <span style={{ color: "#047857" }}>Cleaner City</span>
                </h2>
                <p style={{ color: "#065f46" }} className="py-2">
                  Empower your neighborhood. Join thousands of citizens reporting waste
                  and tracking environmental improvements across Egypt using AI-driven
                  municipal management.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-2">
                  <Link to="/Reports">
                    <button className="btn px-4 py-3 fw-semibold"
                      style={{ backgroundColor: "#065f46", color: "#f0fdf4", borderRadius: "1.5rem" }}>
                      Report Now
                    </button>
                  </Link>
                  <Link to="/map">
                    <button className="btn px-4 py-3 fw-semibold"
                      style={{ border: "2px solid #065f46", color: "#065f46", borderRadius: "1.5rem" }}>
                      View Map
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <img src={img2} className="img-fluid shadow"
                  style={{ borderRadius: "1.5rem" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container my-5">
          <div className="row g-4 text-center py-4 px-3 rounded-4"
            style={{ backgroundColor: "#f3f4f6" }}>
            {[
              { icon: "fa-exclamation", value: "12,450 +", label: "Total Reports" },
              { icon: "fa-circle-check", value: "9,800 +", label: "Resolved" },
              { icon: "fa-spinner", value: "1,200", label: "In Progress" },
              { icon: "fa-city", value: "15", label: "Cities Covered" },
            ].map((stat, i) => (
              <div key={i} className="col-6 col-md-3 d-flex flex-column align-items-center">
                <div className="rounded-circle d-flex justify-content-center align-items-center mb-2"
                  style={{ width: 48, height: 48, border: "2px solid #065f46" }}>
                  <i className={`fa-solid ${stat.icon}`} style={{ color: "#065f46" }}></i>
                </div>
                <p className="fw-bold mb-0" style={{ color: "#065f46", fontSize: "1.1rem" }}>{stat.value}</p>
                <p className="fw-semibold" style={{ color: "#047857", fontSize: "1rem" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div style={{ backgroundColor: "#f7fee7" }} className="py-5">
          <div className="container text-center py-4">
            <h2 className="fw-bold mb-2" style={{ color: "#065f46", fontSize: "2rem" }}>
              How CleanCity Works
            </h2>
            <p style={{ color: "#047857" }} className="mb-5">
              Three simple steps to bridge the gap between citizens and municipal service providers.
            </p>
            <div className="row g-4">
              {[
                { icon: "fa-regular fa-camera", title: "1. Report waste with photo", desc: "Capture a photo and drop a pin. Our system detects the waste type and severity automatically." },
                { icon: "fa-solid fa-robot", title: "2. AI assigns to company", desc: "Reports are instantly routed to the relevant municipal zone and waste management companies." },
                { icon: "fa-solid fa-star", title: "3. Community gets cleaner", desc: "Watch the progress in real-time and earn points for your contribution to environmental safety." },
              ].map((step, i) => (
                <div key={i} className="col-12 col-md-4 d-flex flex-column align-items-center px-4">
                  <div className="rounded-circle d-flex justify-content-center align-items-center mb-4"
                    style={{ width: 64, height: 64, backgroundColor: "#6ee7b7" }}>
                    <i className={`${step.icon} text-xl`} style={{ color: "#065f46", fontSize: "1.3rem" }}></i>
                  </div>
                  <h3 className="fw-bold mb-2" style={{ color: "#065f46" }}>{step.title}</h3>
                  <p style={{ color: "#047857", fontSize: "0.9rem" }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Activity Section */}
        <div className="container py-5">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <h4 className="fw-bold" style={{ color: "#059669", fontSize: "1.8rem" }}>Live Activity</h4>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <p className="text-muted small mb-0">Real-time reports coming in from your fellow citizens.</p>
            <Link to="/Reports" className="fw-semibold text-decoration-none"
              style={{ color: "#047857" }}>View All Reports →</Link>
          </div>

          <div className="row g-4">
            {[
              { img: zamalek, badge: "PLASTIC", badgeBg: "#fee2e2", badgeColor: "#ef4444", status: "PENDING", statusColor: "#f87171", loc: "Zamalek District", city: "Cairo, Egypt" },
              { img: img3, badge: "ORGANIC", badgeBg: "#d1fae5", badgeColor: "#059669", status: "RESOLVED", statusColor: "#34d399", loc: "Al Haram Street", city: "Giza, Egypt" },
              { img: img4, badge: "PLASTIC", badgeBg: "#fee2e2", badgeColor: "#ef4444", status: "PENDING", statusColor: "#f87171", loc: "Corniche Road", city: "Alexandria, Egypt" },
              { img: img5, badge: "ORGANIC", badgeBg: "#d1fae5", badgeColor: "#059669", status: "RESOLVED", statusColor: "#34d399", loc: "Fifth Settlement", city: "Cairo, Egypt" },
            ].map((card, i) => (
              <div key={i} className="col-12 col-sm-6 col-md-3">
                <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "1rem", overflow: "hidden" }}>
                  <img src={card.img} className="card-img-top"
                    style={{ height: "176px", objectFit: "cover" }} />
                  <div className="card-body pt-2">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge fw-bold px-3 py-1"
                        style={{ backgroundColor: card.badgeBg, color: card.badgeColor, borderRadius: "999px" }}>
                        {card.badge}
                      </span>
                      <span className="small fw-semibold d-flex align-items-center gap-1"
                        style={{ color: card.statusColor }}>
                        <span className="rounded-circle d-inline-block"
                          style={{ width: 8, height: 8, backgroundColor: card.statusColor }}></span>
                        {card.status}
                      </span>
                    </div>
                    <h6 className="fw-bold text-dark mb-1">{card.loc}</h6>
                    <p className="text-muted small mb-0">
                      <i className="fa-solid fa-location-dot me-1"></i>{card.city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Leaders Section */}
        <div style={{ backgroundColor: "#f7fee7" }}>
          <div className="container py-5">
            <div className="col-12 col-md-8 col-lg-5 mx-auto">
              <div className="card border-0 shadow p-4" style={{ borderRadius: "1.5rem" }}>
                <div className="text-center mb-4">
                  <h4 className="fw-bold" style={{ color: "#059669" }}>Community Leaders</h4>
                  <p className="text-muted small mt-1">The environmental heroes of the month.</p>
                </div>

                {[
                  { img: ahmed, name: "Ahmed Mahmoud", role: "Cairo District Leader", points: "2,850", rank: 1, bg: "#ecfdf5", border: "#6ee7b7", rankBg: "#10b981" },
                  { img: sarah, name: "Sarah Kamel", role: "Alexandria Contributor", points: "2,420", rank: 2, bg: "#f3f4f6", border: "transparent", rankBg: "#9ca3af" },
                  { img: omar, name: "Omar Hassan", role: "Giza Active Member", points: "1,980", rank: 3, bg: "#f3f4f6", border: "transparent", rankBg: "#9ca3af" },
                ].map((leader, i) => (
                  <div key={i} className="d-flex justify-content-between align-items-center p-3 mb-3 rounded-4"
                    style={{ backgroundColor: leader.bg, border: `1px solid ${leader.border}` }}>
                    <div className="d-flex align-items-center gap-3">
                      <div style={{ position: "relative" }}>
                        <img src={leader.img} alt={leader.name}
                          className="rounded-circle object-fit-cover"
                          style={{ width: 56, height: 56 }} />
                        <span className="position-absolute d-flex align-items-center justify-content-center fw-bold text-white"
                          style={{
                            top: -4, left: -4, width: 20, height: 20,
                            backgroundColor: leader.rankBg, borderRadius: "50%", fontSize: "0.7rem"
                          }}>
                          {leader.rank}
                        </span>
                      </div>
                      <div>
                        <h6 className="fw-bold text-dark mb-0">{leader.name}</h6>
                        <p className="text-muted small mb-0">{leader.role}</p>
                      </div>
                    </div>
                    <div className="text-end">
                      <p className="fw-bold text-dark mb-0">{leader.points}</p>
                      <p className="text-muted small mb-0">POINTS</p>
                    </div>
                  </div>
                ))}

                <div className="text-center mt-2">
                  <button className="btn fw-semibold px-5 py-2 text-white rounded-pill"
                    style={{ backgroundColor: "#374151" }}>
                    Join the Leaderboard
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}