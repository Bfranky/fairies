"use client";
export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0e0e0e",
        padding: "60px 24px 32px",
        borderTop: "1px solid rgba(212,56,13,0.2)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #d4380d, #f5a623)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "900",
                  color: "white",
                  fontFamily: "var(--font-display)",
                  flexShrink: 0,
                }}
              >
                E
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "white",
                    lineHeight: 1,
                  }}
                >
                  Eli La Fairies
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#f5a623",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    lineHeight: 1,
                    marginTop: "2px",
                  }}
                >
                  Fast Food Restaurant
                </div>
              </div>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "14px",
                lineHeight: 1.7,
                maxWidth: "280px",
              }}
            >
              Serving bold, hearty fast food to the Eneka community.
              Hot, fresh, and always full of flavour.
            </p>
            <div style={{ marginTop: "20px" }}>
              <a
                href="tel:07032434003"
                style={{
                  color: "#d4380d",
                  fontSize: "18px",
                  fontWeight: "900",
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.5px",
                }}
              >
                0703 243 4003
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Quick Links
            </h4>
            {["Home", "Menu", "About", "Reviews", "Find Us"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "")}`}
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                  padding: "6px 0",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#f5a623")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.55)")
                }
              >
                {link}
              </a>
            ))}
          </div>

          {/* Hours */}
          <div>
            <h4
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Hours
            </h4>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.2)",
                color: "#4ade80",
                padding: "6px 12px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: "700",
                marginBottom: "16px",
              }}
            >
              ● Open Now
            </div>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: 1.6 }}>
              Monday – Sunday
            </p>
            <p
              style={{
                color: "white",
                fontSize: "15px",
                fontWeight: "700",
                marginTop: "4px",
              }}
            >
              Closes 9:00 PM
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "13px",
                marginTop: "12px",
              }}
            >
              📦 Takeaway available
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>
            © {new Date().getFullYear()} Eli La Fairies. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>
            Plot 8, Centenary Garden Estate, Eneka, Rivers State 🇳🇬
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
