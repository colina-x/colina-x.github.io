import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as p,f as e,a as n,b as t,e as o}from"./app.c05e9592.js";const c={},l=n("p",null,[n("code",null,"..."),t("叫扩展运算符，是ES6新增内容，它可以在函数调用/数组构造时，将数组表达式或者string在语法层面展开；还可以在构造字面量对象时将对象表达式按照key-value的方式展开。")],-1),i=o(`<h2 id="复制数组" tabindex="-1"><a class="header-anchor" href="#复制数组" aria-hidden="true">#</a> 复制数组</h2><div class="custom-container warning"><p class="custom-container-title">注意</p><p>这是浅拷贝</p></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 复制</span>
<span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr1<span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span>
<span class="token comment">// [1, 2, 3]</span>

<span class="token comment">// 对象的复制</span>
<span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;Tom&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">...</span>obj1<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span>
<span class="token comment">//  {name:&#39;Tom&#39;, age:18}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="合并" tabindex="-1"><a class="header-anchor" href="#合并" aria-hidden="true">#</a> 合并</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 数组的合并</span>
<span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">var</span> mergeArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr1<span class="token punctuation">,</span><span class="token operator">...</span>arr2<span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mergeArr<span class="token punctuation">)</span>
<span class="token comment">// [1, 2, 3, 4, 5, 6]</span>

<span class="token comment">// 对象的合并</span>
<span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Colina&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">height</span><span class="token operator">:</span><span class="token number">180</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> mergeObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>obj1<span class="token punctuation">,</span> <span class="token operator">...</span>obj2<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mergeObj<span class="token punctuation">)</span>
<span class="token comment">// {name: &quot;Colina&quot;, height: 180}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加" tabindex="-1"><a class="header-anchor" href="#添加" aria-hidden="true">#</a> 添加</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 向数组中添加元素</span>
<span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">var</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr1<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span>
<span class="token comment">// [1, 2, 3, 4]</span>

<span class="token comment">// 向对象中添加属性</span>
<span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Colina&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">...</span>obj1<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span>
<span class="token comment">//  {name:&#39;Colina&#39;, age:18}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符串转数组" tabindex="-1"><a class="header-anchor" href="#字符串转数组" aria-hidden="true">#</a> 字符串转数组</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>
<span class="token comment">// [&quot;h&quot;, &quot;e&quot;, &quot;l&quot;, &quot;l&quot;, &quot;o&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数传参" tabindex="-1"><a class="header-anchor" href="#函数传参" aria-hidden="true">#</a> 函数传参</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 函数传参</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">v<span class="token punctuation">,</span>w<span class="token punctuation">,</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token keyword">var</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">...</span>args<span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment">// 不定长参数</span>
<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token operator">...</span>rest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>常用在<code>Math</code>中</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">var</span> max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>arr1<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span>
<span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果直接传数组就会返回<code>NaN</code>，因为他不知道数组的最大值是什么</p><h2 id="解构对象" tabindex="-1"><a class="header-anchor" href="#解构对象" aria-hidden="true">#</a> 解构对象</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;Colina&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> <span class="token punctuation">{</span>username<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">}</span> <span class="token operator">=</span> user
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span>
<span class="token comment">// Colina</span>
<span class="token comment">// {password: &#39;password&#39;, age: 18}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function r(u,k){return a(),p("div",null,[l,e(" more "),i])}const m=s(c,[["render",r],["__file","dot.html.vue"]]);export{m as default};
