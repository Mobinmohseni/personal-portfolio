import React, { useEffect } from "react";
import { ArrowRight, Moon, Sun, Github, Linkedin, Mail } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { articles, profile } from "../data/portfolioData";

export default function BlogPost({ theme, setTheme }) {
  const { id } = useParams();
  const article = articles.find(a => String(a.id) === id) || articles[0];

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  return (
    <div className="article-page">
      <header className="header">
        <div className="container nav-wrap">
          <Link className="brand" to="/"><span className="brand-mark">M</span><span>{profile.latinName}</span></Link>
          <div className="nav-actions">
            <a className="article-home" href="/#blog">بازگشت به وبلاگ</a>
            <button className="icon-btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? <Sun size={19}/> : <Moon size={19}/>}</button>
          </div>
        </div>
      </header>
      <main className="article-main">
        <div className="container article-container">
          <Link to="/#blog" className="back-link"><ArrowRight size={17}/> بازگشت</Link>
          <div className="article-header">
            <span className="eyebrow">{article.category}</span>
            <h1>{article.title}</h1>
            <time>{article.date}</time>
          </div>
          <article className="article-content">
            {article.content.map((p, i) => <p key={i}>{p}</p>)}
          </article>
          <div className="article-share">
            <span>ارتباط:</span>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/></a>
            <a href={`mailto:${profile.email}`}><Mail size={18}/></a>
          </div>
        </div>
      </main>
    </div>
  );
}