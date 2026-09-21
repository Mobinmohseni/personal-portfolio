import React, { useEffect, useState } from "react";
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, Moon, Sun,
  X, GraduationCap, Code2, Network, MonitorCog, ExternalLink,
  BriefcaseBusiness, Award, ChevronDown
} from "lucide-react";
import {
  profile, education, skills, certificates, projects, experience
} from "./data/portfolioData";

function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  const nav = [
    ["about", "درباره من"],
    ["education", "تحصیلات"],
    ["skills", "مهارت‌ها"],
    ["projects", "پروژه‌ها"],
    ["experience", "تجربه"],
    ["contact", "تماس"]
  ];

  return (
      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={() => setOpen(false)}>
            <span className="brand-mark">M</span>
            <span>{profile.latinName}</span>
          </a>

          <nav className={open ? "nav-links open" : "nav-links"}>
            {nav.map(([id, label]) => (
                <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                  {label}
                </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
                className="icon-btn"
                aria-label="تغییر حالت"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <button
                className="menu-btn"
                aria-label="منو"
                onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
  );
}

function SocialButtons() {
  return (
      <div className="social-row">
        <a
            className="social github"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
        >
          <Github size={18} /> GitHub <ArrowUpRight size={15} />
        </a>

        <a
            className="social linkedin"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
        >
          <Linkedin size={18} /> LinkedIn <ArrowUpRight size={15} />
        </a>

        <a
            className="social email"
            href={`mailto:${profile.email}?subject=ارتباط از وب‌سایت شخصی مبین محسنی`}
        >
          <Mail size={18} /> Email <ArrowUpRight size={15} />
        </a>
      </div>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
      <div className="section-title reveal">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
  );
}

function App({ theme, setTheme }) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.12 }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
      <>
        <Header theme={theme} setTheme={setTheme} />

        <main>
          <section id="home" className="hero section">
            <div className="hero-grid container">
              <div className="hero-copy reveal">
                <div className="status">
                  <span></span> Open to opportunities
                </div>

                <p className="hero-kicker">سلام، من </p>

                <h1>{profile.name}</h1>
                <h2>{profile.title}</h2>

                <p className="hero-text">{profile.bio}</p>

                <div className="hero-actions">
                  <a className="primary-btn" href="#contact">
                    ارتباط با من <ArrowUpRight size={18} />
                  </a>

                  <a className="secondary-btn" href="#projects">
                    مشاهده پروژه‌ها <ChevronDown size={18} />
                  </a>
                </div>

                <SocialButtons />

                <div className="hero-meta">
                <span>
                  <MapPin size={16} /> {profile.location}
                </span>

                  <span>
                  <Code2 size={16} /> Python · Django · Cisco
                </span>
                </div>
              </div>

              <div className="hero-visual reveal">
                <div className="profile-orbit orbit-one"></div>
                <div className="profile-orbit orbit-two"></div>

                <div className="profile-card">
                  <div className="profile-glow"></div>

                  <img
                      src={profile.profileImage}
                      alt={`عکس پروفایل ${profile.name}`}
                  />

                  <div className="profile-caption">
                    <span>{profile.latinName}</span>
                    <small>Computer Engineering · Network</small>
                  </div>
                </div>

                <div className="floating-card fc-one">
                  <Network size={18} />
                  <span>Networking</span>
                </div>

                <div className="floating-card fc-two">
                  <MonitorCog size={18} />
                  <span>Monitoring</span>
                </div>
              </div>
            </div>

            <div className="scroll-hint">
              <span></span> Scroll to explore
            </div>
          </section>

          <section id="about" className="section">
            <div className="container">
              <SectionTitle
                  eyebrow="01 / About"
                  title="درباره من"
                  text="فعال در حوزه شبکه و زیرساخت، با علاقه‌مندی به برنامه‌نویسی و توسعه نرم‌افزار."
              />

              <div className="about-grid">
                <div className="about-card reveal">
                  <p className="large-text">
                    من در حوزه مهندسی کامپیوتر فعالیت می‌کنم و کار اصلی من در زمینه
                    شبکه، زیرساخت و مانیتورینگ شبکه است. در کنار حوزه شبکه، به
                    برنامه‌نویسی و توسعه نرم‌افزار نیز علاقه‌مند هستم و در پروژه‌های
                    نرم‌افزاری با استفاده از تکنولوژی‌هایی مانند Python و Django
                    فعالیت می‌کنم.
                  </p>

                  <p>
                    هدف من ترکیب دانش شبکه و نرم‌افزار برای طراحی، پیاده‌سازی و
                    نگهداری سیستم‌ها و زیرساخت‌های کاربردی و قابل اعتماد است.
                  </p>

                  <div className="mini-stats">
                    <div>
                      <strong>23</strong>
                      <span>سال</span>
                    </div>

                    <div>
                      <strong>1404</strong>
                      <span>پایان کارشناسی</span>
                    </div>

                    <div>
                      <strong>1404</strong>
                      <span>شروع ارشد</span>
                    </div>
                  </div>
                </div>

                <div className="info-list reveal">
                  <div>
                    <span>نام</span>
                    <strong>{profile.name}</strong>
                  </div>

                  <div>
                    <span>موقعیت</span>
                    <strong>{profile.location}</strong>
                  </div>

                  <div>
                    <span>تحصیلات</span>
                    <strong>کارشناسی ارشد مهندسی کامپیوتر</strong>
                  </div>

                  <div>
                    <span>گرایش</span>
                    <strong>شبکه</strong>
                  </div>

                  <div>
                    <span>ایمیل</span>
                    <a href={`mailto:${profile.email}`}>
                      {profile.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="education" className="section alt">
            <div className="container">
              <SectionTitle
                  eyebrow="02 / Education"
                  title="تحصیلات"
              />

              <div className="timeline">
                {education.map((item, i) => (
                    <div className="timeline-item reveal" key={i}>
                      <div className="timeline-dot">
                        <GraduationCap size={18} />
                      </div>

                      <div className="timeline-card">
                        <span className="period">{item.period}</span>
                        <h3>{item.degree}</h3>
                        <h4>{item.university}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </section>

          <section id="skills" className="section">
            <div className="container">
              <SectionTitle
                  eyebrow="03 / Skills"
                  title="مهارت‌ها"
                  text="مهارت‌های فنی قابل توسعه و جایگزینی از فایل داده."
              />

              <div className="skills-grid">
                {skills.map((skill, i) => (
                    <div
                        className="skill-card reveal"
                        key={skill.name}
                        style={{ "--delay": `${i * 70}ms` }}
                    >
                      <div className="skill-top">
                    <span className="skill-icon">
                      <Code2 size={20} />
                    </span>

                        <strong>{skill.name}</strong>
                        <span>{skill.level}%</span>
                      </div>

                      <div className="progress">
                        <span style={{ width: `${skill.level}%` }}></span>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section alt" id="certificates">
            <div className="container">
              <SectionTitle
                  eyebrow="04 / Certificates"
                  title="دوره‌ها و مدارک"
              />

              <div className="cert-grid">
                {certificates.map((cert, i) => (
                    <div className="cert-card reveal" key={i}>
                      <div className="cert-icon">
                        <Award size={25} />
                      </div>

                      <div>
                        <h3>{cert.title}</h3>
                        <p>{cert.issuer}</p>
                      </div>

                      <span>{cert.year}</span>
                    </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="section">
            <div className="container">
              <SectionTitle
                  eyebrow="05 / Projects"
                  title="پروژه‌ها"
                  text="نمونه پروژه‌ها؛ عنوان، توضیحات، تکنولوژی‌ها و لینک هر مورد قابل تغییر است."
              />

              <div className="projects-grid">
                {projects.map((project, i) => (
                    <article className="project-card reveal" key={i}>
                      <div className="project-number">0{i + 1}</div>

                      <div className="project-icon">
                        <Network size={22} />
                      </div>

                      <h3>{project.title}</h3>
                      <p>{project.description}</p>

                      <div className="tags">
                        {project.technologies.map((t) => (
                            <span key={t}>{t}</span>
                        ))}
                      </div>

                      <a
                          className="project-link"
                          href={project.link}
                          target={project.link !== "#" ? "_blank" : undefined}
                          rel="noreferrer"
                      >
                        مشاهده پروژه <ExternalLink size={16} />
                      </a>
                    </article>
                ))}
              </div>
            </div>
          </section>

          <section id="experience" className="section alt">
            <div className="container">
              <SectionTitle
                  eyebrow="06 / Experience"
                  title="تجربه"
              />

              <div className="experience-card reveal">
                <div className="experience-icon">
                  <BriefcaseBusiness size={25} />
                </div>

                <div>
                  <span className="period">{experience[0].period}</span>
                  <h3>{experience[0].role}</h3>
                  <h4>{experience[0].company}</h4>
                  <p>{experience[0].description}</p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="section contact-section">
            <div className="container">
              <SectionTitle
                  eyebrow="07 / Contact"
                  title="در تماس باشیم"
                  text="برای همکاری، پروژه یا گفتگو می‌توانید از راه‌های زیر ارتباط بگیرید."
              />

              <div className="contact-grid">
                <div className="contact-info reveal">
                  <a
                      href={`mailto:${profile.email}`}
                      className="contact-line"
                  >
                    <Mail />
                    <div>
                      <span>ایمیل</span>
                      <strong>{profile.email}</strong>
                    </div>
                  </a>

                  <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-line"
                  >
                    <Github />
                    <div>
                      <span>GitHub</span>
                      <strong>View profile</strong>
                    </div>
                  </a>

                  <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="contact-line"
                  >
                    <Linkedin />
                    <div>
                      <span>LinkedIn</span>
                      <strong>View profile</strong>
                    </div>
                  </a>
                </div>

                <form
                    className="contact-form reveal"
                    action={`mailto:${profile.email}`}
                    method="post"
                    encType="text/plain"
                >
                  <div className="form-row">
                    <label>
                      نام
                      <input
                          required
                          name="name"
                          placeholder="نام شما"
                      />
                    </label>

                    <label>
                      ایمیل
                      <input
                          required
                          type="email"
                          name="email"
                          placeholder="example@email.com"
                      />
                    </label>
                  </div>

                  <label>
                    موضوع
                    <input
                        name="subject"
                        placeholder="موضوع پیام"
                    />
                  </label>

                  <label>
                    پیام
                    <textarea
                        required
                        name="message"
                        rows="6"
                        placeholder="پیام خود را بنویسید..."
                    ></textarea>
                  </label>

                  <button className="primary-btn" type="submit">
                    ارسال ایمیل <ArrowUpRight size={18} />
                  </button>

                  <small>
                    با کلیک روی ارسال، برنامه ایمیل پیش‌فرض دستگاه شما باز می‌شود.
                  </small>
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="container footer-inner">
          <span>
            © {new Date().getFullYear()} {profile.latinName}
          </span>

            <a href="#home">Back to top ↑</a>
          </div>
        </footer>
      </>
  );
}

export default App;