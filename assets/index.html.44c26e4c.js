import{r as n,o as r,c as l,a,w as e,F as p,b as c,d as s,e as u}from"./app.0269300c.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const d={},m=c(`<h3 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a> \u5FEB\u901F\u5F00\u59CB</h3><ul><li><strong>\u6B65\u9AA41</strong>: \u5728 <code>package.json</code> \u4E2D\u6DFB\u52A0\u4E00\u4E9B scripts</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><strong>\u6B65\u9AA42</strong>: \u521B\u5EFA\u4F60\u7684\u7B2C\u4E00\u7BC7\u6587\u6863</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> docs
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><strong>\u6B65\u9AA43</strong>: \u5728\u672C\u5730\u542F\u52A8\u670D\u52A1\u5668\u6765\u5F00\u53D1\u4F60\u7684\u6587\u6863\u7F51\u7AD9</li></ul>`,6),b=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),u(` run docs:dev
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br")])],-1);function g(k,h){const o=n("CodeGroupItem"),t=n("CodeGroup");return r(),l(p,null,[m,a(t,null,{default:e(()=>[a(o,{title:"NPM",active:""},{default:e(()=>[b]),_:1})]),_:1})],64)}var f=i(d,[["render",g]]);export{f as default};
