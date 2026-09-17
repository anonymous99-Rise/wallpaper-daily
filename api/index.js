module.exports = function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=3600');

  const baseUrl = 'https://wallpaper-daily-love.vercel.app';

  return res.status(200).send(`<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Wallpaper Daily API</title>
  <style>
    :root {
      color-scheme: light dark;
      --bg1: #0f172a;
      --bg2: #1d4ed8;
      --card: rgba(255,255,255,0.14);
      --line: rgba(255,255,255,0.25);
      --text: #f8fafc;
      --sub: #dbeafe;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: Inter, "PingFang SC", "Microsoft YaHei", sans-serif;
      background: radial-gradient(circle at top right, #38bdf8 0%, transparent 35%), linear-gradient(135deg, var(--bg1), var(--bg2));
      color: var(--text);
      display: grid;
      place-items: center;
      padding: 24px;
    }
    .wrap {
      width: min(920px, 100%);
      background: var(--card);
      backdrop-filter: blur(8px);
      border: 1px solid var(--line);
      border-radius: 20px;
      padding: 28px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    }
    h1 { margin: 0; font-size: 30px; }
    p { color: var(--sub); line-height: 1.6; }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 14px;
      margin-top: 18px;
    }
    a {
      display: block;
      text-decoration: none;
      color: var(--text);
      border: 1px solid var(--line);
      border-radius: 12px;
      padding: 14px;
      background: rgba(255,255,255,0.08);
      transition: transform .15s ease, background .15s ease;
    }
    a:hover {
      transform: translateY(-2px);
      background: rgba(255,255,255,0.16);
    }
    strong { display: block; margin-bottom: 6px; }
    code {
      display: block;
      font-size: 12px;
      color: #bfdbfe;
      word-break: break-all;
    }
    .foot { margin-top: 20px; font-size: 13px; color: #bfdbfe; }
  </style>
</head>
<body>
  <main class="wrap">
    <h1>✨ Wallpaper Daily API</h1>
    <p>每日壁纸接口入口页，点击下方卡片可直接访问 JSON 数据。</p>
    <section class="grid">
      <a href="${baseUrl}/api/latest" target="_blank" rel="noreferrer">
        <strong>全部分类</strong>
        <code>${baseUrl}/api/latest</code>
      </a>
      <a href="${baseUrl}/api/category?name=bing" target="_blank" rel="noreferrer">
        <strong>Bing 分类</strong>
        <code>${baseUrl}/api/category?name=bing</code>
      </a>
      <a href="${baseUrl}/api/category?name=desktop" target="_blank" rel="noreferrer">
        <strong>Desktop 分类</strong>
        <code>${baseUrl}/api/category?name=desktop</code>
      </a>
      <a href="${baseUrl}/api/category?name=mobile" target="_blank" rel="noreferrer">
        <strong>Mobile 分类</strong>
        <code>${baseUrl}/api/category?name=mobile</code>
      </a>
      <a href="${baseUrl}/api/category?name=avatar" target="_blank" rel="noreferrer">
        <strong>Avatar 分类</strong>
        <code>${baseUrl}/api/category?name=avatar</code>
      </a>
      <a href="${baseUrl}/api/random" target="_blank" rel="noreferrer">
        <strong>随机壁纸</strong>
        <code>${baseUrl}/api/random</code>
      </a>
    </section>
    <div class="foot">GitHub: <a href="https://github.com/anonymous99-Rise/wallpaper-daily" target="_blank" rel="noreferrer">anonymous99-Rise/wallpaper-daily</a></div>
  </main>
</body>
</html>`);
};
