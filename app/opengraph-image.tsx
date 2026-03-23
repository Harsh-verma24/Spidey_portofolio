import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #0b0f19 0%, #141a2f 55%, #1d223d 100%)",
          color: "#f8fafc",
          padding: "56px 64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            opacity: 0.9,
          }}
        >
          <div style={{ display: "flex" }}>HARSH VERMA</div>
          <div style={{ display: "flex", color: "#fb7185" }}>FULL-STACK DEVELOPER</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 980 }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              lineHeight: 1.03,
              letterSpacing: "-1.2px",
              fontWeight: 800,
            }}
          >
            Building Fast, Scalable Web Products
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#cbd5e1",
              lineHeight: 1.25,
            }}
          >
            Next.js, React, Node.js, MongoDB, and Java projects designed for real-world impact.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#93c5fd",
            }}
          >
            spideyharsh.me
          </div>
          <div
            style={{
              display: "flex",
              padding: "16px 28px",
              borderRadius: 999,
              border: "2px solid #fb7185",
              backgroundColor: "rgba(251, 113, 133, 0.12)",
              fontSize: 28,
              fontWeight: 700,
              color: "#fecdd3",
            }}
          >
            View Projects and Contact
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
