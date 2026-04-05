import Breadcrumb from "../components/Breadcrumb";
import "./Blog.css";

const posts = [
  {
    id: 1,
    category: "Mutual Funds",
    title: "How to Choose the Right Mutual Fund for 2024",
    excerpt: "Navigating thousands of funds can be overwhelming. Here's a framework to pick the right one based on your risk appetite and time horizon.",
    date: "Dec 12, 2023",
    readTime: "5 min read",
  },
  {
    id: 2,
    category: "Tax Planning",
    title: "Section 80C: Maximising Your Tax Deductions",
    excerpt: "Most investors leave money on the table by not utilising all available deductions. This guide walks through every option under Section 80C.",
    date: "Nov 28, 2023",
    readTime: "7 min read",
  },
  {
    id: 3,
    category: "Wealth Building",
    title: "The Power of SIP: Why Small Monthly Investments Win",
    excerpt: "Systematic Investment Plans are one of the most powerful tools for retail investors. Here's the math behind why consistent beats lucky.",
    date: "Nov 10, 2023",
    readTime: "4 min read",
  },
  {
    id: 4,
    category: "Market Insights",
    title: "India's Bull Run: What It Means For Your Portfolio",
    excerpt: "Indian markets have been on a tear. We break down what's driving the rally and how long-term investors should position themselves.",
    date: "Oct 25, 2023",
    readTime: "6 min read",
  },
  {
    id: 5,
    category: "Retirement",
    title: "Planning for Retirement in Your 30s: A Head Start Guide",
    excerpt: "Starting early is the single best thing you can do for your retirement. Here's a practical roadmap for the decade-by-decade approach.",
    date: "Oct 5, 2023",
    readTime: "8 min read",
  },
  {
    id: 6,
    category: "Mutual Funds",
    title: "Debt Funds vs Fixed Deposits: Which is Better in 2024?",
    excerpt: "With interest rates shifting, the old calculus has changed. We compare debt mutual funds and FDs on returns, tax, and liquidity.",
    date: "Sep 18, 2023",
    readTime: "5 min read",
  },
];

const categories = ["All", "Mutual Funds", "Tax Planning", "Wealth Building", "Market Insights", "Retirement"];

export default function Blog() {
  return (
    <div className="blog-page">
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Blog" }]} />

      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="section-eyebrow">Insights & Guides</p>
          <h1 className="page-hero-title">The Wealth Blog</h1>
          <p className="page-hero-desc">
            Expert articles on investing, tax planning, and building long-term wealth — written in plain English.
          </p>
        </div>
      </section>

      <section className="blog-section section">
        <div className="section-inner">
          {/* Category Filter */}
          <div className="category-filters">
            {categories.map((c) => (
              <button key={c} className={`cat-btn ${c === "All" ? "active" : ""}`}>
                {c}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-top">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-meta">{post.date} · {post.readTime}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href="#" className="blog-read-more">Read article →</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}