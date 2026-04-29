"use client";
import { useState, useEffect, useRef } from "react";

const categories = ["All", "Burgers", "Chicken", "Sides", "Drinks", "Specials"];

const menuItems = [
  {
    name: "Classic Smash Burger",
    category: "Burgers",
    price: "₦2,500",
    desc: "Juicy beef patty, cheddar cheese, lettuce, tomato & special sauce",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80&fit=crop&auto=format",
    badge: "Best Seller",
    badgeColor: "#C8390A",
  },
  {
    name: "Double Stack Burger",
    category: "Burgers",
    price: "₦3,500",
    desc: "Two flame-grilled patties, bacon, caramelised onions & BBQ sauce",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&q=80&fit=crop&auto=format",
    badge: null,
    badgeColor: null,
  },
  {
    name: "Spicy Crispy Chicken",
    category: "Chicken",
    price: "₦2,800",
    desc: "Marinated crispy fried chicken with our signature pepper blend",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80&fit=crop&auto=format",
    badge: "🔥 Hot",
    badgeColor: "#D97706",
  },
  {
    name: "Grilled Chicken Wrap",
    category: "Chicken",
    price: "₦2,200",
    desc: "Tender grilled chicken strips with coleslaw in a soft tortilla wrap",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80&fit=crop&auto=format",
    badge: null,
    badgeColor: null,
  },
  {
    name: "Peppered Chicken Thighs",
    category: "Chicken",
    price: "₦3,000",
    desc: "Slow-cooked chicken thighs in rich Nigerian pepper sauce",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c7?w=800&q=80&fit=crop&auto=format",
    badge: "Chef's Pick",
    badgeColor: "#065F46",
  },
  {
    name: "Seasoned Fries",
    category: "Sides",
    price: "₦800",
    desc: "Golden crispy fries dusted with our house seasoning blend",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80&fit=crop&auto=format",
    badge: null,
    badgeColor: null,
  },
  {
    name: "Coleslaw",
    category: "Sides",
    price: "₦600",
    desc: "Fresh creamy coleslaw with a hint of citrus",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80&fit=crop&auto=format",
    badge: null,
    badgeColor: null,
  },
  {
    name: "Jollof Rice",
    category: "Sides",
    price: "₦1,200",
    desc: "Smoky, perfectly seasoned Nigerian party jollof rice",
    image: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=800&q=80&fit=crop&auto=format",
    badge: "Nigerian Fave",
    badgeColor: "#1D4ED8",
  },
  {
    name: "Chilled Soft Drink",
    category: "Drinks",
    price: "₦400",
    desc: "Choice of Coke, Fanta, Sprite or Malt – served ice cold",
    image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=800&q=80&fit=crop&auto=format",
    badge: null,
    badgeColor: null,
  },
  {
    name: "Fresh Zobo",
    category: "Drinks",
    price: "₦500",
    desc: "Refreshing hibiscus drink with ginger and pineapple flavours",
    image: "https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=800&q=80&fit=crop&auto=format",
    badge: "Local Fave",
    badgeColor: "#7C3AED",
  },
  {
    name: "Eli's Combo Meal",
    category: "Specials",
    price: "₦4,500",
    desc: "Burger + fries + drink — the perfect value meal deal",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80&fit=crop&auto=format",
    badge: "Value Deal",
    badgeColor: "#C8390A",
  },
  {
    name: "Family Pack",
    category: "Specials",
    price: "₦9,800",
    desc: "4 chicken pieces, large fries, jollof rice & 4 drinks",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80&fit=crop&auto=format",
    badge: "Popular",
    badgeColor: "#C8390A",
  },
];

const fallbackEmojis: Record<string, string> = {
  Burgers: "🍔",
  Chicken: "🍗",
  Sides: "🍟",
  Drinks: "🥤",
  Specials: "🎉",
};

function useIntersection(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function MenuCard({
  item,
  index,
}: {
  item: (typeof menuItems)[0];
  index: number;
}) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const { ref, visible } = useIntersection();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 0.07}s, transform 0.6s ease ${index * 0.07}s`,
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 2px 24px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.04)",
        cursor: "default",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-10px) scale(1.01)";
        el.style.boxShadow =
          "0 32px 64px rgba(200,57,10,0.2), 0 0 0 1px rgba(200,57,10,0.1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0) scale(1)";
        el.style.boxShadow =
          "0 2px 24px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.04)";
      }}
    >
      {/* Image */}
      <div
        style={{
          height: "220px",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#1C1410",
        }}
      >
        {/* Loading shimmer */}
        {!imgLoaded && !imgError && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #1C1410 0%, #2D1E14 50%, #1C1410 100%)",
              backgroundSize: "200% 100%",
              animation: "shimmer 1.6s infinite",
            }}
          />
        )}

        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt={item.name}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              opacity: imgLoaded ? 1 : 0,
              transition:
                "opacity 0.5s ease, transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLImageElement).style.transform =
                "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "72px",
              background:
                "radial-gradient(ellipse at center, #2D1E14 0%, #1C1410 100%)",
            }}
          >
            {fallbackEmojis[item.category] ?? "🍽️"}
          </div>
        )}

        {/* Cinematic gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(15,8,4,0.75) 0%, rgba(15,8,4,0.1) 45%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Category tag — bottom left */}
        <span
          style={{
            position: "absolute",
            bottom: "14px",
            left: "14px",
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.18)",
            color: "rgba(255,255,255,0.92)",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            padding: "4px 12px",
            borderRadius: "20px",
            fontFamily: "var(--font-body)",
          }}
        >
          {item.category}
        </span>

        {/* Badge — top right */}
        {item.badge && (
          <span
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              backgroundColor: item.badgeColor ?? "#C8390A",
              color: "#fff",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              padding: "5px 11px",
              borderRadius: "6px",
              boxShadow: `0 4px 14px ${item.badgeColor ?? "#C8390A"}55`,
              fontFamily: "var(--font-body)",
            }}
          >
            {item.badge}
          </span>
        )}
      </div>

      {/* Card body */}
      <div style={{ padding: "22px 24px 26px" }}>
        {/* Name + Price */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "17px",
              fontWeight: 700,
              color: "#18110C",
              lineHeight: 1.3,
              flex: 1,
              margin: 0,
            }}
          >
            {item.name}
          </h3>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "18px",
              fontWeight: 800,
              color: "#C8390A",
              whiteSpace: "nowrap",
              letterSpacing: "-0.5px",
            }}
          >
            {item.price}
          </span>
        </div>

        {/* Accent line */}
        <div
          style={{
            width: "36px",
            height: "2px",
            background: "linear-gradient(to right, #C8390A, #F4845F)",
            borderRadius: "2px",
            marginBottom: "12px",
            opacity: 0.7,
          }}
        />

        <p
          style={{
            fontFamily: "var(--font-body)",
            color: "#7A6A5C",
            fontSize: "13px",
            lineHeight: 1.7,
            margin: 0,
            fontWeight: 400,
          }}
        >
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function Menu() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? menuItems
      : menuItems.filter((m) => m.category === active);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Outfit:wght@300;400;500;600&display=swap');

        :root {
          --font-display: 'Cormorant Garamond', Georgia, serif;
          --font-body: 'Outfit', sans-serif;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .filter-pill {
          padding: 10px 22px;
          border-radius: 100px;
          border: 1.5px solid rgba(200,57,10,0.18);
          background: transparent;
          color: #7A6A5C;
          font-family: 'Outfit', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.22s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .filter-pill:hover {
          border-color: #C8390A;
          color: #C8390A;
          background: rgba(200,57,10,0.05);
          transform: translateY(-1px);
        }
        .filter-pill.active {
          background: #C8390A;
          border-color: #C8390A;
          color: white;
          box-shadow: 0 6px 20px rgba(200,57,10,0.35);
          transform: translateY(-1px);
        }
      `}</style>

      <section
        id="menu"
        style={{
          background: "linear-gradient(180deg, #FAF6F0 0%, #FDF8F3 60%, #FAF3E8 100%)",
          padding: "120px 28px 120px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background texture dots */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(200,57,10,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }}
        />

        {/* Decorative glow blobs */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-120px",
            right: "-180px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,57,10,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-160px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(184,137,42,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* ── Section header ── */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "72px",
              animation: "fadeSlideUp 0.8s ease both",
            }}
          >
            {/* Eyebrow */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  width: "32px",
                  height: "1.5px",
                  background: "#B8892A",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "#B8892A",
                }}
              >
                What We Serve
              </span>
              <span
                style={{
                  width: "32px",
                  height: "1.5px",
                  background: "#B8892A",
                  display: "inline-block",
                }}
              />
            </div>

            {/* Main title */}
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(44px, 6vw, 72px)",
                fontWeight: 700,
                color: "#18110C",
                lineHeight: 1.05,
                letterSpacing: "-0.5px",
                margin: "0 0 20px",
              }}
            >
              Our{" "}
              <em
                style={{
                  color: "#C8390A",
                  fontStyle: "italic",
                }}
              >
                Signature
              </em>{" "}
              Menu
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body)",
                color: "#7A6A5C",
                fontSize: "16px",
                fontWeight: 300,
                maxWidth: "480px",
                margin: "0 auto",
                lineHeight: 1.7,
                letterSpacing: "0.2px",
              }}
            >
              Bold flavours, fresh ingredients, made to order.
              Something for everyone at Eli La Fairies.
            </p>
          </div>

          {/* ── Category Filter ── */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "64px",
              animation: "fadeSlideUp 0.8s 0.15s ease both",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill${active === cat ? " active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── Menu Grid ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
              gap: "28px",
            }}
          >
            {filtered.map((item, i) => (
              <MenuCard key={item.name} item={item} index={i} />
            ))}
          </div>

          {/* ── Footer note ── */}
          <div
            style={{
              textAlign: "center",
              marginTop: "72px",
              paddingTop: "40px",
              borderTop: "1px solid rgba(200,57,10,0.10)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "#9A8880",
                fontStyle: "italic",
                letterSpacing: "0.2px",
              }}
            >
              * Prices may vary. Call us for current availability:
            </p>
            <a
              href="tel:07032434003"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                fontWeight: 700,
                color: "#C8390A",
                textDecoration: "none",
                letterSpacing: "0.5px",
                display: "inline-block",
                marginTop: "6px",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.75")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
              }
            >
              0703 243 4003
            </a>
          </div>
        </div>
      </section>
    </>
  );
}