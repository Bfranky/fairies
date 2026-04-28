"use client";
import { useState } from "react";

const categories = ["All", "Burgers", "Chicken", "Sides", "Drinks", "Specials"];

const menuItems = [
  {
    name: "Classic Smash Burger",
    category: "Burgers",
    price: "₦2,500",
    desc: "Juicy beef patty, cheddar cheese, lettuce, tomato & special sauce",
    image: "https://www.seriouseats.com/thmb/5aIbgxqxl40-bSCMFOFsegtQDog=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/smashburger-recipe-hero-2_1-46ccdb3e7b9a477fbb4d7dc9c2db1185.jpg",
    badge: "Best Seller",
  },
  {
    name: "Double Stack Burger",
    category: "Burgers",
    price: "₦3,500",
    desc: "Two flame-grilled patties, bacon, caramelised onions & BBQ sauce",
    image: "https://www.southernliving.com/thmb/LuRKzWB6R_7kBLlolQp1TrgQllA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/double-smash-burger-2000-99a4a7b75b264bd0a4b0e43f7cda026e.jpg",
    badge: null,
  },
  {
    name: "Spicy Crispy Chicken",
    category: "Chicken",
    price: "₦2,800",
    desc: "Marinated crispy fried chicken with our signature pepper blend",
    image: "https://www.africanbites.com/wp-content/uploads/2014/05/IMG_8669-2.jpg",
    badge: "🔥 Hot",
  },
  {
    name: "Grilled Chicken Wrap",
    category: "Chicken",
    price: "₦2,200",
    desc: "Tender grilled chicken strips with coleslaw in a soft tortilla wrap",
    image: "https://insanelygoodrecipes.com/wp-content/uploads/2023/08/Homemade-Grilled-Chicken-Wrap-with-Salad.jpg",
    badge: null,
  },
  {
    name: "Peppered Chicken Thighs",
    category: "Chicken",
    price: "₦3,000",
    desc: "Slow-cooked chicken thighs in rich Nigerian pepper sauce",
    image: "https://www.africanbites.com/wp-content/uploads/2023/01/Peppered-Chicken-10.jpg",
    badge: "Chef's Pick",
  },
  {
    name: "Seasoned Fries",
    category: "Sides",
    price: "₦800",
    desc: "Golden crispy fries dusted with our house seasoning blend",
    image: "https://www.recipetineats.com/thmb/6V2NKPBG5lTbK7X3TXRe3dSVn_c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/French-fries-recipe_2-SQ.jpg",
    badge: null,
  },
  {
    name: "Coleslaw",
    category: "Sides",
    price: "₦600",
    desc: "Fresh creamy coleslaw with a hint of citrus",
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Classic-Coleslaw_EXPS_TOHD24_9823_EricKleinberg_3.jpg",
    badge: null,
  },
  {
    name: "Jollof Rice",
    category: "Sides",
    price: "₦1,200",
    desc: "Smoky, perfectly seasoned Nigerian party jollof rice",
    image: "https://sisijemimah.com/wp-content/uploads/2015/08/party-jollof-rice-sisijemimah.com-3.jpg",
    badge: "Nigerian Fave",
  },
  {
    name: "Chilled Soft Drink",
    category: "Drinks",
    price: "₦400",
    desc: "Choice of Coke, Fanta, Sprite or Malt – served ice cold",
    image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=600&q=80",
    badge: null,
  },
  {
    name: "Fresh Zobo",
    category: "Drinks",
    price: "₦500",
    desc: "Refreshing hibiscus drink with ginger and pineapple flavours",
    image: "https://lafriquemarket.com/wp-content/uploads/2021/12/zobo-drink-hibiscus-flower-scaled.jpg",
    badge: "Local Fave",
  },
  {
    name: "Eli's Combo Meal",
    category: "Specials",
    price: "₦4,500",
    desc: "Burger + fries + drink — the perfect value meal deal",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    badge: "Value Deal",
  },
  {
    name: "Family Pack",
    category: "Specials",
    price: "₦9,800",
    desc: "4 chicken pieces, large fries, jollof rice & 4 drinks",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80",
    badge: "Popular",
  },
];

const fallbackEmojis: Record<string, string> = {
  Burgers: "🍔",
  Chicken: "🍗",
  Sides: "🍟",
  Drinks: "🥤",
  Specials: "🎉",
};

export default function Menu() {
  const [active, setActive] = useState("All");
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const filtered =
    active === "All"
      ? menuItems
      : menuItems.filter((m) => m.category === active);

  return (
    <section
      id="menu"
      style={{
        backgroundColor: "#fdf6ec",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
            What We Serve
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
            <span style={{ color: "#d4380d", fontStyle: "italic" }}>Menu</span>
          </h2>
          <p
            style={{
              color: "#6b5e52",
              fontSize: "16px",
              marginTop: "16px",
              maxWidth: "500px",
              margin: "16px auto 0",
              lineHeight: 1.6,
            }}
          >
            Bold flavours, fresh ingredients, made to order.
            Something for everyone at Eli La Fairies.
          </p>
        </div>

        {/* Category Filter */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "48px",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "10px 22px",
                borderRadius: "25px",
                border: "2px solid",
                borderColor: active === cat ? "#d4380d" : "rgba(107,94,82,0.25)",
                backgroundColor: active === cat ? "#d4380d" : "transparent",
                color: active === cat ? "white" : "#6b5e52",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "1px",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {filtered.map((item, i) => (
            <div
              key={item.name}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
                transition: "all 0.3s",
                cursor: "default",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 12px 40px rgba(212,56,13,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 2px 20px rgba(0,0,0,0.06)";
              }}
            >
              {/* Image */}
              <div
                style={{
                  height: "180px",
                  background: "linear-gradient(135deg, #1a1a1a 0%, #2d1a0e 100%)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {!imgErrors[item.name] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={() =>
                      setImgErrors((prev) => ({ ...prev, [item.name]: true }))
                    }
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.5s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLImageElement).style.transform = "scale(1.07)";
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
                      fontSize: "60px",
                    }}
                  >
                    {fallbackEmojis[item.category] ?? "🍽️"}
                  </div>
                )}

                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 55%)",
                    pointerEvents: "none",
                  }}
                />

                {item.badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      backgroundColor: "#d4380d",
                      color: "white",
                      fontSize: "10px",
                      fontWeight: "700",
                      padding: "4px 10px",
                      borderRadius: "3px",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      zIndex: 2,
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "8px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "17px",
                      fontWeight: "700",
                      color: "#1a1a1a",
                      lineHeight: 1.2,
                      flex: 1,
                      paddingRight: "8px",
                    }}
                  >
                    {item.name}
                  </h3>
                  <span
                    style={{
                      color: "#d4380d",
                      fontWeight: "900",
                      fontSize: "16px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.price}
                  </span>
                </div>
                <p
                  style={{
                    color: "#6b5e52",
                    fontSize: "13px",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          style={{
            textAlign: "center",
            marginTop: "48px",
            color: "#6b5e52",
            fontSize: "14px",
            fontStyle: "italic",
          }}
        >
          * Prices may vary. Call us for current availability: 0703 243 4003
        </p>
      </div>
    </section>
  );
}
