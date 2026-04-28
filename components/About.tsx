"use client";
export default function About() {
  const stats = [
    { value: "5.0", label: "Star Rating", icon: "⭐" },
    { value: "9PM", label: "Closing Time", icon: "🕘" },
    { value: "100%", label: "Fresh Ingredients", icon: "🥬" },
    { value: "Fast", label: "Service", icon: "⚡" },
  ];

  return (
    <section
      id="about"
      style={{
        backgroundColor: "#1a1a1a",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,56,13,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Left: Text */}
        <div>
          <span
            style={{
              color: "#f5a623",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "3px",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "16px",
            }}
          >
            Our Story
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: "900",
              color: "white",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            More Than Just{" "}
            <span
              style={{ color: "#d4380d", fontStyle: "italic", display: "block" }}
            >
              Fast Food
            </span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "16px",
              lineHeight: 1.8,
              marginBottom: "20px",
            }}
          >
            Nestled in the heart of Eneka, Rivers State, Eli La Fairies has been
            serving the community with bold, satisfying fast food that hits the spot
            every single time. We believe great food doesn&apos;t have to be complicated —
            just honest, flavourful, and freshly made.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "16px",
              lineHeight: 1.8,
              marginBottom: "36px",
            }}
          >
            Located in Dera Plaza on Eneka Link Road, we&apos;re your neighbourhood
            go-to for burgers, crispy chicken, jollof rice, and everything in between.
            Come hungry, leave happy — that&apos;s our promise.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            {["Takeaway Available", "Dine In", "Family Friendly"].map((tag) => (
              <span
                key={tag}
                style={{
                  backgroundColor: "rgba(212,56,13,0.15)",
                  border: "1px solid rgba(212,56,13,0.35)",
                  color: "#ff6b35",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Stats */}
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            {stats.map(({ value, label, icon }) => (
              <div
                key={label}
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  padding: "32px 24px",
                  textAlign: "center",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(212,56,13,0.5)";
                  (e.currentTarget as HTMLDivElement).style.backgroundColor =
                    "rgba(212,56,13,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLDivElement).style.backgroundColor =
                    "rgba(255,255,255,0.04)";
                }}
              >
                <div style={{ fontSize: "32px", marginBottom: "8px" }}>{icon}</div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "36px",
                    fontWeight: "900",
                    color: "#d4380d",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Opening hours card */}
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "rgba(245,166,35,0.08)",
              border: "1px solid rgba(245,166,35,0.25)",
              borderRadius: "12px",
              padding: "24px",
            }}
          >
            <h3
              style={{
                color: "#f5a623",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              🕐 Opening Hours
            </h3>
            {[
              { days: "Monday – Sunday", hours: "Open Daily" },
              { days: "Morning", hours: "From 8:00 AM" },
              { days: "Evening", hours: "Until 9:00 PM" },
            ].map(({ days, hours }) => (
              <div
                key={days}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px" }}>
                  {days}
                </span>
                <span
                  style={{ color: "white", fontSize: "14px", fontWeight: "700" }}
                >
                  {hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
