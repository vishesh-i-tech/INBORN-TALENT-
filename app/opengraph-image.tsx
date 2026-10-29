import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.brand} ${site.byline} - Discover your child's natural strengths`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1B1535",
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #6B46F0 0%, transparent 60%), radial-gradient(circle at 80% 70%, #5530D6 0%, transparent 60%)",
          color: "white",
          padding: "60px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle decorative circles */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            width: 200,
            height: 200,
            borderRadius: "100px",
            border: "2px dashed rgba(245, 184, 61, 0.4)",
          }}
        />

        {/* Center Card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: 1000,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(235, 229, 255, 0.15)",
              border: "1px solid rgba(235, 229, 255, 0.3)",
              borderRadius: 30,
              padding: "10px 24px",
              marginBottom: 30,
              fontSize: 22,
              fontWeight: 600,
              color: "#F5B83D",
              letterSpacing: 1,
            }}
          >
            IN-PERSON DMIT & CAREER COUNSELLING • CHHINDWARA
          </div>

          {/* Brand & Byline */}
          <h1
            style={{
              fontSize: 68,
              fontWeight: 900,
              letterSpacing: -1.5,
              margin: 0,
              lineHeight: 1.1,
              color: "#FFFFFF",
            }}
          >
            Inborn Talent
          </h1>

          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#EBE5FF",
              marginTop: 10,
              marginBottom: 24,
            }}
          >
            by Vivek Koche
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: 30,
              fontWeight: 500,
              color: "#E2DEF0",
              margin: 0,
              maxWidth: 820,
              lineHeight: 1.35,
            }}
          >
            &ldquo;Discover your child&apos;s natural strengths.&rdquo;
          </p>

          {/* Bottom Trust Chips */}
          <div
            style={{
              display: "flex",
              gap: 32,
              marginTop: 48,
              fontSize: 20,
              fontWeight: 600,
              color: "#FFFFFF",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: 20,
                padding: "8px 20px",
              }}
            >
              6 Years Experience
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: 20,
                padding: "8px 20px",
              }}
            >
              200+ Students Guided
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: 20,
                padding: "8px 20px",
              }}
            >
              In-Person Chhindwara
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
