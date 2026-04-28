"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const items = hero.querySelectorAll(".hero-item");
    items.forEach((el) => {
      (el as HTMLElement).style.opacity = "1";
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#1a1a1a",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 70% 50%, rgba(212,56,13,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 50% 80% at 20% 80%, rgba(245,166,35,0.1) 0%, transparent 50%)
          `,
        }}
      />

      {/* Decorative diagonal stripe */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "45%",
          background:
            "linear-gradient(135deg, rgba(212,56,13,0.08) 0%, rgba(212,56,13,0.15) 100%)",
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />

      {/* Floating food emoji accents */}
      {["🍔", "🍟", "🌮", "🍗"].map((emoji, i) => (
        <div
          key={i}
          className="animate-float"
          style={{
            position: "absolute",
            fontSize: `${28 + i * 8}px`,
            opacity: 0.15,
            top: `${15 + i * 18}%`,
            right: `${8 + i * 6}%`,
            animationDelay: `${i * 0.7}s`,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          {emoji}
        </div>
      ))}

      {/* Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 24px 80px",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          className="hero-item animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.1s" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(245,166,35,0.15)",
              border: "1px solid rgba(245,166,35,0.4)",
              color: "#f5a623",
              padding: "6px 16px",
              borderRadius: "20px",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            ⭐ 5.0 Rated · Located in Dera Plaza
          </span>
        </div>

        <h1
          className="hero-item animate-fade-in-up opacity-0"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: "900",
            color: "white",
            lineHeight: 1.05,
            marginBottom: "8px",
            animationDelay: "0.2s",
          }}
        >
          Eli La{" "}
          <span
            style={{
              color: "#d4380d",
              fontStyle: "italic",
            }}
          >
            Fairies
          </span>
        </h1>

        <h2
          className="hero-item animate-fade-in-up opacity-0"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(18px, 3vw, 28px)",
            fontWeight: "400",
            color: "#f5a623",
            marginBottom: "24px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            animationDelay: "0.3s",
          }}
        >
          Fast Food Restaurant
        </h2>

        <p
          className="hero-item animate-fade-in-up opacity-0"
          style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(255,255,255,0.65)",
            maxWidth: "500px",
            lineHeight: 1.7,
            marginBottom: "40px",
            animationDelay: "0.4s",
          }}
        >
          Bringing bold flavours and hearty bites to Eneka, Rivers State.
          Hot, fresh, and always made with love — takeaway available daily.
        </p>

        {/* Info pills */}
        <div
          className="hero-item animate-fade-in-up opacity-0"
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "40px",
            animationDelay: "0.5s",
          }}
        >
          {[
            { icon: "🕘", text: "Open until 9 PM" },
            { icon: "📦", text: "Takeaway Available" },
            { icon: "📍", text: "Eneka Link Rd" },
          ].map(({ icon, text }) => (
            <span
              key={text}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.8)",
                padding: "8px 16px",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              {icon} {text}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="hero-item animate-fade-in-up opacity-0"
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            animationDelay: "0.6s",
          }}
        >
          <a
            href="#menu"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#d4380d",
              color: "white",
              padding: "16px 36px",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#9a1c00";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#d4380d";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            🍽️ View Menu
          </a>
          <a
            href="tel:07032434003"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "transparent",
              color: "white",
              padding: "16px 36px",
              borderRadius: "4px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              border: "2px solid rgba(255,255,255,0.3)",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#f5a623";
              (e.currentTarget as HTMLAnchorElement).style.color = "#f5a623";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.3)";
              (e.currentTarget as HTMLAnchorElement).style.color = "white";
            }}
          >
            📞 Call Us
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100px",
          background:
            "linear-gradient(to bottom, transparent, var(--color-cream))",
        }}
      />
    </section>
  );
}
