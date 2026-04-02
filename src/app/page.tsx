import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIVantageWorks — AI Apps for Real Life",
  description: "AIVantageWorks builds simple, free AI-powered tools. Home of StackStreak and CreateNColor.",
};

export default function Home() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#0f0f1a", color: "#f0f0f5", minHeight: "100vh" }}>

      {/* NAV */}
      <nav style={{ padding: "20px 40px", borderBottom: "1px solid #2a2a4a", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ fontSize: "20px", fontWeight: 800 }}>
          ✨ <span style={{ color: "#a78bfa" }}>AIVantage</span><span style={{ color: "#fb923c" }}>Works</span>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <a href="https://stackstreak.aivantageworks.com" style={{ padding: "8px 16px", border: "1px solid #a78bfa", borderRadius: "8px", color: "#a78bfa", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>🔥 StackStreak</a>
          <a href="https://createcolor.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ padding: "8px 16px", border: "1px solid #fb923c", borderRadius: "8px", color: "#fb923c", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>🎨 CreateNColor</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "80px 40px", textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "inline-block", background: "#1e1b4b", border: "1px solid #4c1d95", borderRadius: "100px", padding: "6px 20px", fontSize: "13px", color: "#c4b5fd", marginBottom: "32px" }}>
          ✨ Two apps. Zero dollars. Real results.
        </div>
        <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, lineHeight: 1.1, margin: "0 0 24px", color: "#f0f0f5" }}>
          AI Apps That <span style={{ color: "#a78bfa" }}>Actually</span> Help
        </h1>
        <p style={{ fontSize: "18px", color: "#9ca3af", lineHeight: 1.7, margin: "0 auto 48px", maxWidth: "600px" }}>
          Not another SaaS dashboard. Not another subscription you&apos;ll forget about. Just free AI tools that genuinely help.
        </p>

        {/* APP CARDS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", textAlign: "left" }}>

          {/* StackStreak */}
          <div style={{ background: "#16162a", border: "2px solid #4c1d95", borderRadius: "20px", padding: "40px", display: "flex", flexDirection: "column", gap: "20px", boxShadow: "0 0 40px rgba(124,58,237,0.2)" }}>
            <div style={{ fontSize: "56px" }}>🔥</div>
            <div>
              <div style={{ background: "#1e1b4b", display: "inline-block", borderRadius: "100px", padding: "4px 12px", fontSize: "11px", fontWeight: 700, color: "#a78bfa", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>StackStreak</div>
              <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#f0f0f5", margin: "0 0 12px" }}>Your wallet&apos;s new best friend</h2>
              <p style={{ color: "#9ca3af", lineHeight: 1.7, margin: 0, fontSize: "15px" }}>
                Inflation added $347 to your monthly bills and nobody warned you. StackStreak turns saving money into a daily streak game — like Duolingo, but your bank account wins. Free AI tips, an inflation calculator, and savings challenges that actually stick.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["💰 Inflation Calculator", "🔥 Daily Streaks", "🤖 AI Coach", "🛡️ Recession Score"].map(f => (
                <span key={f} style={{ background: "#1e1b4b", color: "#c4b5fd", padding: "4px 10px", borderRadius: "6px", fontSize: "12px" }}>{f}</span>
              ))}
            </div>
            <a href="https://stackstreak.aivantageworks.com" style={{ display: "inline-block", background: "linear-gradient(135deg, #7c3aed, #6d28d9)", color: "#fff", padding: "14px 28px", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "15px", boxShadow: "0 4px 20px rgba(109,40,217,0.4)" }}>
              Start Your Streak →
            </a>
          </div>

          {/* CreateNColor */}
          <div style={{ background: "#1a1208", border: "2px solid #92400e", borderRadius: "20px", padding: "40px", display: "flex", flexDirection: "column", gap: "20px", boxShadow: "0 0 40px rgba(249,115,22,0.15)" }}>
            <div style={{ fontSize: "56px" }}>🎨</div>
            <div>
              <div style={{ background: "#1c1408", display: "inline-block", borderRadius: "100px", padding: "4px 12px", fontSize: "11px", fontWeight: 700, color: "#fb923c", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>CreateNColor</div>
              <h2 style={{ fontSize: "24px", fontWeight: 800, color: "#f0f0f5", margin: "0 0 12px" }}>Your kid&apos;s imagination has a printer now</h2>
              <p style={{ color: "#9ca3af", lineHeight: 1.7, margin: 0, fontSize: "15px" }}>
                Your 5-year-old says &ldquo;rainbow dragon eating tacos in space&rdquo; and your response is... a printable coloring page. In 10 seconds. The Magic Lens turns any photo into a coloring page, works offline, and it&apos;s completely free.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["🗣️ Speak It", "📸 Magic Lens", "✈️ Works Offline", "🖨️ Print Ready"].map(f => (
                <span key={f} style={{ background: "#1c1408", color: "#fb923c", padding: "4px 10px", borderRadius: "6px", fontSize: "12px" }}>{f}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com/us/app/createncolor/id6760249757" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "linear-gradient(135deg, #ea580c, #c2410c)", color: "#fff", padding: "14px 28px", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "15px", boxShadow: "0 4px 20px rgba(234,88,12,0.4)" }}>
                Download on iOS →
              </a>
              <a href="https://createcolor.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", border: "1px solid #92400e", color: "#fb923c", padding: "14px 28px", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "15px" }}>
                Try Web App
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#0a0a14", padding: "40px", display: "flex", justifyContent: "center", gap: "60px", flexWrap: "wrap", borderTop: "1px solid #1a1a3a", borderBottom: "1px solid #1a1a3a" }}>
        {[["🔥", "$1,378", "saved with 52-week challenge"], ["🎨", "∞", "coloring page ideas"], ["💸", "$0.00", "cost to you, forever"]].map(([icon, num, label]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "28px", marginBottom: "4px" }}>{icon}</div>
            <div style={{ fontSize: "32px", fontWeight: 900, color: "#a78bfa" }}>{num}</div>
            <div style={{ fontSize: "13px", color: "#6b7280" }}>{label}</div>
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section style={{ padding: "80px 40px", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#f0f0f5", margin: "0 0 16px" }}>One dev. Two apps. No VC funding.</h2>
        <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #f97316)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", fontWeight: 800, color: "#fff", margin: "0 auto 20px" }}>SP</div>
        <p style={{ color: "#9ca3af", lineHeight: 1.8, fontSize: "16px" }}>
          Hi, I&apos;m Sumesh. I build apps that solve problems I actually care about — saving money and making my kids happy. AIVantageWorks is my little corner of the internet where I ship things that work. No team, no investors, no nonsense.
        </p>
      </section>

      {/* WHY FREE */}
      <section style={{ background: "#0a0a14", padding: "60px 40px", borderTop: "1px solid #1a1a3a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#f0f0f5", textAlign: "center", margin: "0 0 40px" }}>Why is it all free?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              ["❤️", "Because you deserve it", "Good tools shouldn't cost money. Both apps are free with no ads and no sneaky upsells."],
              ["🌍", "Built for real life", "Road trips, rainy days, tight budgets. These apps were made for actual humans living actual lives."],
              ["👤", "By a real person", "Not a corporation. Just one person who wanted better tools and decided to build them."]
            ].map(([icon, title, desc]) => (
              <div key={title as string} style={{ background: "#16162a", border: "1px solid #2a2a4a", borderRadius: "16px", padding: "28px" }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{icon}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#f0f0f5", margin: "0 0 8px" }}>{title}</h3>
                <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#f0f0f5", margin: "0 0 12px" }}>Seriously, they&apos;re free. Just try them.</h2>
        <p style={{ color: "#6b7280", margin: "0 0 40px" }}>No credit card. No email required. No catch.</p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://stackstreak.aivantageworks.com" style={{ display: "inline-block", background: "linear-gradient(135deg, #7c3aed, #6d28d9)", color: "#fff", padding: "16px 36px", borderRadius: "12px", textDecoration: "none", fontWeight: 700, fontSize: "16px", boxShadow: "0 4px 24px rgba(109,40,217,0.4)" }}>
            🔥 Try StackStreak
          </a>
          <a href="https://apps.apple.com/us/app/createncolor/id6760249757" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "linear-gradient(135deg, #ea580c, #c2410c)", color: "#fff", padding: "16px 36px", borderRadius: "12px", textDecoration: "none", fontWeight: 700, fontSize: "16px", boxShadow: "0 4px 24px rgba(234,88,12,0.4)" }}>
            🎨 Try CreateNColor
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#060610", borderTop: "1px solid #1a1a3a", padding: "32px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ color: "#4b5563", fontSize: "14px" }}>© 2026 AIVantageWorks · Made with ❤️ in Chicago</div>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="https://stackstreak.aivantageworks.com" style={{ color: "#6b7280", textDecoration: "none", fontSize: "14px" }}>StackStreak</a>
          <a href="https://createcolor.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: "#6b7280", textDecoration: "none", fontSize: "14px" }}>CreateNColor</a>
          <a href="mailto:sumesh.pawar007@gmail.com" style={{ color: "#6b7280", textDecoration: "none", fontSize: "14px" }}>Contact</a>
        </div>
      </footer>

    </div>
  );
}
