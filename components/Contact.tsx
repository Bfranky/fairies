"use client";
export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#1a1a1a",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span
            style={{
              display: "inline-block",
              color: "#f5a623",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Get In Touch
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: "900",
              color: "white",
              lineHeight: 1.1,
            }}
          >
            Find{" "}
            <span style={{ color: "#d4380d", fontStyle: "italic" }}>Us</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Address */}
            <InfoCard
              icon="📍"
              title="Address"
              content={
                <>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", lineHeight: 1.6 }}>
                    Plot 8, Centenary Garden Estate
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", lineHeight: 1.6 }}>
                    1 Road, Eneka Link Rd, Umuola
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", lineHeight: 1.6 }}>
                    Port Harcourt 500102, Rivers State
                  </p>
                  <p
                    style={{
                      color: "#f5a623",
                      fontSize: "13px",
                      marginTop: "8px",
                      fontWeight: "600",
                    }}
                  >
                    Located in: Dera Plaza
                  </p>
                </>
              }
            />

            {/* Phone */}
            <InfoCard
              icon="📞"
              title="Phone"
              content={
                <a
                  href="tel:07032434003"
                  style={{
                    color: "#d4380d",
                    fontSize: "22px",
                    fontWeight: "900",
                    fontFamily: "var(--font-display)",
                    textDecoration: "none",
                    letterSpacing: "1px",
                    display: "block",
                  }}
                >
                  0703 243 4003
                </a>
              }
            />

            {/* Hours */}
            <InfoCard
              icon="🕐"
              title="Opening Hours"
              content={
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "rgba(34,197,94,0.15)",
                        color: "#4ade80",
                        padding: "2px 10px",
                        borderRadius: "3px",
                        fontSize: "11px",
                        fontWeight: "700",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                    >
                      ● Now Open
                    </span>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
                    Monday – Sunday
                  </p>
                  <p
                    style={{
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "700",
                      marginTop: "4px",
                    }}
                  >
                    Open Daily · Closes 9:00 PM
                  </p>
                </div>
              }
            />

            {/* Plus code */}
            <InfoCard
              icon="🗺️"
              title="Plus Code"
              content={
                <span
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "14px",
                    fontFamily: "monospace",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    letterSpacing: "1px",
                  }}
                >
                  V2Q9+W2 Umuola
                </span>
              }
            />
          </div>

          {/* Right: Map embed */}
          <div>
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5!2d7.0!3d4.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTEnMDAuMCJOIDfCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
                width="100%"
                height="360"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eli La Fairies Location"
              />
            </div>

            <a
              href="https://www.google.com/maps/search/Eli+La+Fairies+Eneka+Link+Road+Rivers+State"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginTop: "16px",
                backgroundColor: "#d4380d",
                color: "white",
                padding: "14px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "700",
                letterSpacing: "1px",
                textTransform: "uppercase",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#9a1c00";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#d4380d";
              }}
            >
              📍 Get Directions on Google Maps
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  content,
}: {
  icon: string;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "12px",
        padding: "24px",
        display: "flex",
        gap: "16px",
        transition: "border-color 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(212,56,13,0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(255,255,255,0.08)";
      }}
    >
      <div
        style={{
          fontSize: "24px",
          flexShrink: 0,
          marginTop: "2px",
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          {title}
        </div>
        {content}
      </div>
    </div>
  );
}
