:root {
  --bg: #f4f7fb;
  --surface: #ffffff;
  --surface-alt: #edf4ff;
  --primary: #1f4d8c;
  --primary-dark: #163763;
  --accent: #ff7b54;
  --text: #172234;
  --muted: #66758d;
  --border: #e4eaf3;
  --shadow: 0 18px 45px rgba(18, 38, 67, 0.08);
  --radius: 22px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Tahoma, Arial, sans-serif;
  background: linear-gradient(180deg, #f6f9ff 0%, #eef3fb 100%);
  color: var(--text);
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  max-width: 1180px;
  margin: 0 auto;
  padding: 32px 18px 60px;
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px 18px 24px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), #5a8fe8);
  color: white;
  font-weight: 700;
  font-size: 1.6rem;
}

.eyebrow,
.label {
  margin: 0 0 4px;
  color: var(--muted);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

.topbar h1 {
  font-size: clamp(1.6rem, 2vw, 2.2rem);
}

.ghost-button {
  border: 0;
  background: rgba(31, 77, 140, 0.08);
  color: var(--primary-dark);
  border-radius: 14px;
  padding: 10px 16px;
  font-weight: 700;
}

.hero {
  display: grid;
  grid-template-columns: 1.1fr 1.3fr;
  gap: 22px;
  padding: 26px;
  margin-bottom: 20px;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}

.hero-copy h2 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.3;
}

.hero-copy p:last-child {
  color: var(--muted);
  line-height: 1.9;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.searchbox {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
}

.searchbox input,
.filters-row select {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: #f9fbff;
  padding: 14px 16px;
  color: var(--text);
}

.searchbox input:focus,
.filters-row select:focus {
  outline: 2px solid rgba(31, 77, 140, 0.15);
  border-color: rgba(31, 77, 140, 0.28);
}

.filters-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.filters-row label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 20px;
}

.stat-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 18px;
}

.stat-box span {
  color: var(--muted);
}

.stat-box strong {
  font-size: clamp(1.4rem, 2vw, 2rem);
}

.results-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 20px 22px;
  margin-bottom: 18px;
}

.result-pill {
  background: var(--surface-alt);
  color: var(--primary-dark);
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 0.85rem;
  font-weight: 700;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  margin-bottom: 22px;
}

.product-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.product-media {
  position: relative;
  min-height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #edf4ff, #fdf2f2);
  color: var(--primary-dark);
  font-size: 2.2rem;
  font-weight: 700;
}

.badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255, 123, 84, 0.2);
  color: var(--accent);
  border-radius: 999px;
  font-size: 0.75rem;
  padding: 6px 10px;
  font-weight: 700;
}

.card-body {
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.meta-row,
.footer-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.store,
.rating {
  background: #eef5ff;
  color: var(--primary-dark);
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.72rem;
  font-weight: 700;
}

.title {
  font-size: 1.08rem;
  line-height: 1.85;
}

.description {
  color: var(--muted);
  line-height: 1.8;
  min-height: 48px;
}

.specs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.specs span {
  background: #f7f9ff;
  border: 1px solid var(--border);
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.72rem;
  color: var(--muted);
}

.footer-row small {
  display: block;
  color: var(--muted);
  margin-bottom: 4px;
}

.price {
  color: var(--primary-dark);
  font-size: 1.25rem;
}

.compare-btn {
  border: 0;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  padding: 10px 14px;
  border-radius: 12px;
  font-weight: 700;
}

.comparison {
  padding: 24px 22px;
}

.section-head {
  margin-bottom: 18px;
}

.compare-box {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.compare-item {
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 18px;
  background: #f9fbff;
}

.compare-item h4 {
  margin-bottom: 8px;
}

.compare-item ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.9;
}

.empty-state {
  grid-column: 1 / -1;
  padding: 32px 18px;
  text-align: center;
  border: 1px dashed var(--border);
  border-radius: 18px;
  color: var(--muted);
  background: #fafcff;
}

@media (max-width: 840px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .stats-row,
  .compare-box {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .app-shell {
    padding-inline: 12px;
  }

  .topbar,
  .results-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .filters-row {
    grid-template-columns: 1fr;
  }
}
