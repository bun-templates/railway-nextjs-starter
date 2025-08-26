import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div
        style={{
          width: "100%",
          aspectRatio: "2 / 1",
          backgroundColor: "#18181b",
          overflow: "hidden",
        }}
      >
        <Image
          src="/bunrailway.jpg"
          alt="Bun + Railway"
          className="hero-image"
          width={448}
          height={224}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />
      </div>
      <div className="content">
        <h1>Welcome to Bun + Next.js on Railway!</h1>
        <p className="description">
          Deploy your Bun + Next.js apps quickly and easily on Railway. 
          Experience Bun&apos;s speed and Railway&apos;s easy deployment.
        </p>
        <div className="button-group">
          <Link href="https://bun.com/docs" className="button">
            Bun docs
            <span className="arrow">→</span>
          </Link>
          <Link href="https://docs.railway.app" className="button secondary">
            Railway docs
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}