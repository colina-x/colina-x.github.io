import{_ as a,V as l,W as e,X as s,Y as n,$ as i}from"./framework-c6791857.js";const t={},m=s("p",null,"柏林噪声是一种常见的噪声生成算法，很多沙盒游戏的地图创建都使用了此方法，相比于普通噪声，它可以生成更自然、平滑的曲线。",-1),r=s("h2",{id:"柏林噪声",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#柏林噪声","aria-hidden":"true"},"#"),n(" 柏林噪声")],-1),d=s("ul",null,[s("li",null,[n("fade函數："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"6"),s("msup",null,[s("mi",null,"t"),s("mn",null,"5")]),s("mo",null,"−"),s("mn",null,"15"),s("msup",null,[s("mi",null,"t"),s("mn",null,"4")]),s("mo",null,"+"),s("mn",null,"10"),s("msup",null,[s("mi",null,"t"),s("mn",null,"3")])]),s("annotation",{encoding:"application/x-tex"},"6t^5-15t^4+10t^3")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"6"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"t"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"5")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8974em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"15"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"t"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"4")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},"10"),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"t"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"3")])])])])])])])])])])]),s("li",null,[n("綫性插值函數："),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"f"),s("mo",{stretchy:"false"},"("),s("mi",null,"t"),s("mo",{stretchy:"false"},")"),s("mo",null,"="),s("mi",null,"a"),s("mo",null,"+"),s("mi",null,"t"),s("mo",null,"∗"),s("mo",{stretchy:"false"},"("),s("mi",null,"b"),s("mo",null,"−"),s("mi",null,"a"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"f(t)=a+t*(b-a)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.10764em"}},"f"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6151em"}}),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"b"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mclose"},")")])])])])],-1),c=i(`<div class="language-CS line-numbers-mode" data-ext="CS"><pre class="language-CS"><code>class Perlin
    {
        /// &lt;summary&gt;
        /// 哈希表
        /// &lt;/summary&gt;
        private int[] p = new int[] { 151,160,137,91,90,15,131,13,201,95,96,53,
            194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,
            247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,
            237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,
            166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,
            245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,
            89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,
            64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,
            59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,
            154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,
            110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,
            210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,
            31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,
            236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180 };

        /// &lt;summary&gt;
        /// 缓和曲线函数
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;t&quot;&gt;value&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        private double fade(double t) { return t * t * t * (t * (t * 6 - 15) + 10); }

        /// &lt;summary&gt;
        /// 线性插值函数
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;t&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;a&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;b&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        private double lerp(double t,double a,double b) { return a + t * (b - a); }

        /// &lt;summary&gt;
        /// 点乘
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;hash&quot;&gt;哈希值&lt;/param&gt;
        /// &lt;param name=&quot;x&quot;&gt;x&lt;/param&gt;
        /// &lt;param name=&quot;y&quot;&gt;y&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        private double dot(int hash,double x,double y)
        {
            switch (hash &amp; 3)
            {
                case 0: return x + y;   //(1, 1)
                case 1: return -x + y;  //(-1, 1)
                case 2: return x - y;   //(1, -1)
                case 3: return -x - y;  //(-1, -1)
                default: return 0;
            }
        }

        //1维柏林噪声
        public double perlin1(double x)
        {
            int xn = (int)Math.Floor(x);
            double xf = x - xn;
            double u = fade(xf);
            int a = p[xn &amp; 255]*2-255;
            int b = p[(xn+1) &amp; 255]*2-255;
            double v = lerp(u, a*xf, b*(xf-1));
            return v/128;
        }

        //2维柏林噪声
        public double perlin2(double x,double y)
        {
            int xn = (int)Math.Floor(x);
            int yn = (int)Math.Floor(y);
            double xf = x - xn;
            double yf = y - yn;
            double u = fade(xf);
            double v = fade(yf);
            int aa = p[(p[xn &amp; 255] + yn) &amp; 255];
            int ab = p[(p[(xn + 1) &amp; 255] + yn) &amp; 255];
            int ba = p[(p[xn &amp; 255] + yn + 1) &amp; 255];
            int bb = p[(p[(xn + 1) &amp; 255] + yn + 1) &amp; 255];
            double v1 = lerp(u, dot(aa, xf, yf), dot(ab, xf - 1, yf));
            double v2 = lerp(u, dot(ba, xf, yf - 1), dot(bb, xf - 1, yf - 1));
            double v3 = lerp(v, v1, v2);
            return v3/Math.Sqrt(2);
        }

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h2><ul><li>1维柏林噪声</li></ul><figure><img src="https://colinaa.blob.core.windows.net/img/1维.png" alt="1维柏林噪声" tabindex="0" loading="lazy"><figcaption>1维柏林噪声</figcaption></figure><ul><li>2维柏林噪声</li></ul><figure><img src="https://colinaa.blob.core.windows.net/img/2维.png" alt="2维柏林噪声" tabindex="0" loading="lazy"><figcaption>2维柏林噪声</figcaption></figure>`,6),u=[m,r,d,c];function v(p,b){return l(),e("div",null,u)}const g=a(t,[["render",v],["__file","perlin.html.vue"]]);export{g as default};
