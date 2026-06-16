export default function Home() {
  return (
    <div
      style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        background: "#fffbf9",
        color: "#1a1a2e",
        minHeight: "100vh",
      }}
    >
      {/* NAV */}
      <nav
        style={{
          padding: "20px 40px",
          borderBottom: "1px solid #ffe4e8",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: 800 }}>
          ✨ <span style={{ color: "#E8475F" }}>AIVantage</span>
          <span style={{ color: "#1a1a2e" }}>Works</span>
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a
            href="https://stackstreak.aivantageworks.com"
            style={{
              padding: "8px 16px",
              border: "1px solid #ffe4e8",
              borderRadius: "100px",
              color: "#1a1a2e",
              background: "#fff0f2",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            🔥 StackStreak
          </a>
          <a
            href="https://createandcolor.aivantageworks.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "8px 16px",
              border: "1px solid #fff3cc",
              borderRadius: "100px",
              color: "#1a1a2e",
              background: "#fff8e1",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            🎨 CreateNColor
          </a>
          <a
            href="https://invite.aivantageworks.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "8px 16px",
              border: "1px solid #E8475F",
              borderRadius: "100px",
              color: "#fff",
              background: "#E8475F",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            🎉 Inviteable
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          padding: "96px 40px 64px",
          textAlign: "center",
          maxWidth: "960px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "#FFE4E8",
            border: "1px solid #fbcfd5",
            borderRadius: "100px",
            padding: "6px 20px",
            fontSize: "13px",
            color: "#d03d55",
            marginBottom: "32px",
            fontWeight: 600,
          }}
        >
          ✨ Three apps. Built with love. Mostly free.
        </div>
        <h1
          style={{
            fontSize: "clamp(40px, 6vw, 68px)",
            fontWeight: 900,
            lineHeight: 1.1,
            margin: "0 0 24px",
            color: "#1a1a2e",
            letterSpacing: "-0.02em",
          }}
        >
          AI Apps That{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #E8475F, #ff8a9b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Actually
          </span>{" "}
          Help
        </h1>
        <p
          style={{
            fontSize: "19px",
            color: "#6b7280",
            lineHeight: 1.7,
            margin: "0 auto 56px",
            maxWidth: "620px",
          }}
        >
          Not another SaaS dashboard. Not another subscription you&apos;ll forget about.
          Just simple, beautiful tools that genuinely help.
        </p>

        {/* APP CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            textAlign: "left",
          }}
        >
          {/* StackStreak */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #ffe4e8",
              borderRadius: "24px",
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              boxShadow: "0 4px 24px rgba(232, 71, 95, 0.08)",
            }}
          >
            <div style={{ fontSize: "48px" }}>🔥</div>
            <div>
              <div
                style={{
                  background: "#fff0f2",
                  display: "inline-block",
                  borderRadius: "100px",
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#d03d55",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                StackStreak
              </div>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#1a1a2e",
                  margin: "0 0 12px",
                  lineHeight: 1.3,
                }}
              >
                Your wallet&apos;s new best friend
              </h2>
              <p
                style={{
                  color: "#6b7280",
                  lineHeight: 1.7,
                  margin: 0,
                  fontSize: "15px",
                }}
              >
                Turn saving money into a daily streak game — like Duolingo, but your
                bank account wins. Free AI tips, an inflation calculator, and savings
                challenges that actually stick.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["💰 Inflation Calc", "🔥 Daily Streaks", "🤖 AI Coach", "🛡️ Recession Score"].map(
                (f) => (
                  <span
                    key={f}
                    style={{
                      background: "#fff0f2",
                      color: "#d03d55",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    {f}
                  </span>
                )
              )}
            </div>
            <a
              href="https://stackstreak.aivantageworks.com"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #E8475F, #d03d55)",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "15px",
                boxShadow: "0 4px 16px rgba(232, 71, 95, 0.3)",
                textAlign: "center",
              }}
            >
              Start Your Streak →
            </a>
          </div>

          {/* CreateNColor */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #fff3cc",
              borderRadius: "24px",
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              boxShadow: "0 4px 24px rgba(234, 179, 8, 0.08)",
            }}
          >
            <div style={{ fontSize: "48px" }}>🎨</div>
            <div>
              <div
                style={{
                  background: "#fff8e1",
                  display: "inline-block",
                  borderRadius: "100px",
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#a16207",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                CreateNColor
              </div>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#1a1a2e",
                  margin: "0 0 12px",
                  lineHeight: 1.3,
                }}
              >
                Your kid&apos;s imagination has a printer now
              </h2>
              <p
                style={{
                  color: "#6b7280",
                  lineHeight: 1.7,
                  margin: 0,
                  fontSize: "15px",
                }}
              >
                Your 5-year-old says &ldquo;rainbow dragon eating tacos in space&rdquo;
                and you respond with a printable coloring page. In 10 seconds. The
                Magic Lens turns any photo into a coloring page.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["🗣️ Speak It", "📸 Magic Lens", "✈️ Works Offline", "🖨️ Print Ready"].map(
                (f) => (
                  <span
                    key={f}
                    style={{
                      background: "#fff8e1",
                      color: "#a16207",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    {f}
                  </span>
                )
              )}
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a
                href="https://apps.apple.com/us/app/createncolor/id6760249757"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #f59e0b, #d97706)",
                  color: "#fff",
                  padding: "14px 22px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "14px",
                  boxShadow: "0 4px 16px rgba(217, 119, 6, 0.3)",
                }}
              >
                Download iOS →
              </a>
              <a
                href="https://createandcolor.aivantageworks.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  border: "1px solid #fde68a",
                  color: "#a16207",
                  background: "#fff",
                  padding: "14px 22px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "14px",
                }}
              >
                Try Web App
              </a>
            </div>
          </div>

          {/* Inviteable */}
          <div
            style={{
              background: "linear-gradient(180deg, #fff 0%, #fff0f2 100%)",
              border: "1px solid #E8475F",
              borderRadius: "24px",
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              boxShadow: "0 4px 24px rgba(232, 71, 95, 0.15)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "#E8475F",
                color: "#fff",
                fontSize: "10px",
                fontWeight: 800,
                padding: "4px 10px",
                borderRadius: "100px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              ✨ New
            </div>
            <div style={{ fontSize: "48px" }}>🎉</div>
            <div>
              <div
                style={{
                  background: "#FFE4E8",
                  display: "inline-block",
                  borderRadius: "100px",
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#d03d55",
                  marginBottom: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Inviteable
              </div>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#1a1a2e",
                  margin: "0 0 12px",
                  lineHeight: 1.3,
                }}
              >
                Beautiful invites people will love
              </h2>
              <p
                style={{
                  color: "#6b7280",
                  lineHeight: 1.7,
                  margin: 0,
                  fontSize: "15px",
                }}
              >
                Birthdays. Weddings. Baby showers. Create stunning digital invitations,
                send them by email, and track RSVPs in real time. Flat $5 per event —
                no subscriptions, no surprises.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["🌸 Beautiful designs", "📧 Email delivery", "✅ RSVP tracking", "🔗 Shareable links"].map(
                (f) => (
                  <span
                    key={f}
                    style={{
                      background: "#FFE4E8",
                      color: "#d03d55",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    {f}
                  </span>
                )
              )}
            </div>
            <a
              href="https://invite.aivantageworks.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #E8475F, #d03d55)",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "15px",
                boxShadow: "0 4px 16px rgba(232, 71, 95, 0.3)",
                textAlign: "center",
              }}
            >
              Create an Invitation →
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        style={{
          background: "#fff0f2",
          padding: "48px 40px",
          display: "flex",
          justifyContent: "center",
          gap: "60px",
          flexWrap: "wrap",
          borderTop: "1px solid #ffe4e8",
          borderBottom: "1px solid #ffe4e8",
        }}
      >
        {[
          ["🔥", "$1,378", "saved with 52-week challenge"],
          ["🎨", "∞", "coloring page ideas"],
          ["🎉", "$5", "flat rate per invitation"],
        ].map(([icon, num, label]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "28px", marginBottom: "4px" }}>{icon}</div>
            <div style={{ fontSize: "32px", fontWeight: 900, color: "#E8475F" }}>
              {num}
            </div>
            <div style={{ fontSize: "13px", color: "#6b7280", fontWeight: 500 }}>
              {label}
            </div>
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: "80px 40px",
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#1a1a2e",
            margin: "0 0 16px",
            letterSpacing: "-0.01em",
          }}
        >
          One dev. Three apps. No VC funding.
        </h2>
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #E8475F, #ff8a9b)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            fontWeight: 800,
            color: "#fff",
            margin: "0 auto 20px",
            boxShadow: "0 8px 24px rgba(232, 71, 95, 0.3)",
          }}
        >
          SP
        </div>
        <p style={{ color: "#6b7280", lineHeight: 1.8, fontSize: "16px" }}>
          Hi, I&apos;m Sumesh. I build apps that solve problems I actually care about
          — saving money, making my kids happy, and sending invitations that don&apos;t
          look like spam. AIVantageWorks is my little corner of the internet where I
          ship things that work. No team, no investors, no nonsense.
        </p>
      </section>

      {/* WHY */}
      <section
        style={{
          background: "#fff0f2",
          padding: "64px 40px",
          borderTop: "1px solid #ffe4e8",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: 800,
              color: "#1a1a2e",
              textAlign: "center",
              margin: "0 0 40px",
              letterSpacing: "-0.01em",
            }}
          >
            Why these apps?
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              [
                "❤️",
                "Because you deserve it",
                "Good tools shouldn't cost money. Two are completely free, one is just $5 per event — no ads, no sneaky upsells.",
              ],
              [
                "🌍",
                "Built for real life",
                "Road trips, tight budgets, last-minute parties. These apps were made for actual humans living actual lives.",
              ],
              [
                "👤",
                "By a real person",
                "Not a corporation. Just one person who wanted better tools and decided to build them.",
              ],
            ].map(([icon, title, desc]) => (
              <div
                key={title as string}
                style={{
                  background: "#fff",
                  border: "1px solid #ffe4e8",
                  borderRadius: "20px",
                  padding: "28px",
                }}
              >
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{icon}</div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#1a1a2e",
                    margin: "0 0 8px",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 40px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: 900,
            color: "#1a1a2e",
            margin: "0 0 12px",
            letterSpacing: "-0.02em",
          }}
        >
          Pick your favorite. Or try all three.
        </h2>
        <p style={{ color: "#6b7280", margin: "0 0 40px", fontSize: "16px" }}>
          No credit card to start. No catch.
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://stackstreak.aivantageworks.com"
            style={{
              display: "inline-block",
              background: "#fff",
              border: "1px solid #ffe4e8",
              color: "#1a1a2e",
              padding: "16px 32px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "15px",
              boxShadow: "0 4px 16px rgba(232, 71, 95, 0.08)",
            }}
          >
            🔥 Try StackStreak
          </a>
          <a
            href="https://apps.apple.com/us/app/createncolor/id6760249757"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#fff",
              border: "1px solid #fff3cc",
              color: "#1a1a2e",
              padding: "16px 32px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "15px",
              boxShadow: "0 4px 16px rgba(234, 179, 8, 0.08)",
            }}
          >
            🎨 Try CreateNColor
          </a>
          <a
            href="https://invite.aivantageworks.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #E8475F, #d03d55)",
              color: "#fff",
              padding: "16px 32px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "15px",
              boxShadow: "0 8px 24px rgba(232, 71, 95, 0.35)",
            }}
          >
            🎉 Try Inviteable
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#fff",
          borderTop: "1px solid #ffe4e8",
          padding: "32px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div style={{ color: "#9ca3af", fontSize: "14px" }}>
          © 2026 AIVantageWorks · Made with ❤️ in Chicago
        </div>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <a
            href="https://stackstreak.aivantageworks.com"
            style={{ color: "#6b7280", textDecoration: "none", fontSize: "14px" }}
          >
            StackStreak
          </a>
          <a
            href="https://createandcolor.aivantageworks.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#6b7280", textDecoration: "none", fontSize: "14px" }}
          >
            CreateNColor
          </a>
          <a
            href="https://invite.aivantageworks.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#6b7280", textDecoration: "none", fontSize: "14px" }}
          >
            Inviteable
          </a>
          <a
            href="mailto:sumesh.pawar007@gmail.com"
            style={{ color: "#6b7280", textDecoration: "none", fontSize: "14px" }}
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
