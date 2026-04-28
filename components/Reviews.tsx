"use client";
export default function Reviews() {
  return (
    <section
      id="reviews"
      style={{
        backgroundColor: "#fdf6ec",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span
            style={{
              display: "inline-block",
              color: "#d4380d",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            What People Say
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: "900",
              color: "#1a1a1a",
              lineHeight: 1.1,
            }}
          >
            Our{" "}
            <span style={{ color: "#d4380d", fontStyle: "italic" }}>Reviews</span>
          </h2>

          {/* Overall rating */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "20px 32px",
              marginTop: "32px",
              boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "52px",
                fontWeight: "900",
                color: "#1a1a1a",
                lineHeight: 1,
              }}
            >
              5.0
            </div>
            <div>
              <div style={{ display: "flex", gap: "4px", marginBottom: "4px" }}>
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} style={{ color: "#f5a623", fontSize: "22px" }}>
                    {s}
                  </span>
                ))}
              </div>
              <div
                style={{
                  color: "#6b5e52",
                  fontSize: "13px",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                }}
              >
                Based on Google Reviews
              </div>
            </div>
          </div>
        </div>

        {/* Review card */}
        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "40px",
              boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.06)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Quote mark */}
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "28px",
                fontFamily: "var(--font-display)",
                fontSize: "120px",
                fontWeight: "900",
                color: "rgba(212,56,13,0.07)",
                lineHeight: 1,
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              &ldquo;
            </div>

            {/* Stars */}
            <div
              style={{ display: "flex", gap: "4px", marginBottom: "20px" }}
            >
              {"★★★★★".split("").map((s, i) => (
                <span key={i} style={{ color: "#f5a623", fontSize: "20px" }}>
                  {s}
                </span>
              ))}
            </div>

            {/* Review text */}
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                fontStyle: "italic",
                color: "#1a1a1a",
                lineHeight: 1.6,
                marginBottom: "28px",
              }}
            >
              Value for money. Truly amazing food at prices that make sense.
              Eli La Fairies never disappoints — the chicken is always perfectly
              seasoned and the service is quick. My go-to spot in Eneka!
            </p>

            {/* Reviewer */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #d4380d, #f5a623)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: "900",
                  color: "white",
                  fontFamily: "var(--font-display)",
                  flexShrink: 0,
                }}
              >
                V
              </div>
              <div>
                <div
                  style={{
                    fontWeight: "700",
                    fontSize: "15px",
                    color: "#1a1a1a",
                  }}
                >
                  Victoria Uzoma
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#6b5e52",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginTop: "2px",
                  }}
                >
                  <span>📸 9 photos</span>
                  <span>·</span>
                  <span>Google Review · 1 year ago</span>
                </div>
              </div>
            </div>
          </div>

          {/* Leave a review CTA */}
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <p style={{ color: "#6b5e52", marginBottom: "16px", fontSize: "15px" }}>
              Visited us? We&apos;d love to hear about your experience!
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#1a1a1a",
                color: "white",
                padding: "14px 28px",
                borderRadius: "4px",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "1px",
                textTransform: "uppercase",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#d4380d";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#1a1a1a";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              ⭐ Write a Review on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
