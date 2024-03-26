import{_ as e,V as d,W as i,$ as n}from"./framework-c6791857.js";const c={},l=n(`<p>在 C++ 中，左值、右值以及引用是我们经常遇到的概念，深入理解它们对于编写高效且清晰的代码至关重要。在本篇博客中，我们将探讨这些概念的含义、区别以及在实际编程中的应用。</p><h2 id="左值和右值" tabindex="-1"><a class="header-anchor" href="#左值和右值" aria-hidden="true">#</a> 左值和右值</h2><p>左值和右值是 C++ 中的两种基本表达式类型，它们对应于赋值操作中的左侧和右侧。简而言之，左值是可以取地址的表达式，而右值是临时的、不能取地址的表达式。</p><ul><li><p><code> 左值（Lvalues）</code>：具有持久性和身份的表达式，可以取地址的表达式，有较长的生命周期。例如，变量、数组元素、对象成员等都是左值。</p></li><li><p><code>右值（Rvalues）</code>：临时的、一次性的值，不能取地址的表达式，生命周期很短。例如，常量、临时变量、表达式的计算结果等都是右值。</p></li></ul><p>对于自增运算符<code>x++</code>和<code>++x</code>，<code>x++</code>会生成一份<code>x</code>的临时复制，然后对<code>x</code>自增，返回复制的内容，所以是一个<code>右值</code>；而<code>++x</code>是直接对<code>x</code>递增后返回其自身，所以是<code>左值</code>，并且像<code>++++x</code>是可以正常使用的。</p><p>可以用取地址来检测左值右值</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int *p = &amp;x++;  // 错误
int *q = &amp;++x;  // 正确
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于函数<code>get</code>，返回一个全局变量<code>x</code>，<code>x</code>明显是左值，但经过函数返回后变成了一个右值，所以像<code>int *p = &amp;get()</code>会编译失败，原因与<code>x++</code>类似，返回的是<code>x</code>的复制；<code>set</code>虽然传的是右值，但是进入函数被赋值给了形参val变成了左值，对val取地址不会有问题。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int x;

int get() {
  return x;
}

void set(int val) {
  int *p = &amp;val;
  x = val;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>注意：字面值通常是右值，除了字符串字面值</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>auto p = &amp;&quot;hello world&quot;;    // 右值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="左值引用和右值引用" tabindex="-1"><a class="header-anchor" href="#左值引用和右值引用" aria-hidden="true">#</a> 左值引用和右值引用</h2><p>在 C++11 中引入了右值引用的概念，它们与左值引用一起提供了更灵活的内存管理和性能优化机制。</p><ul><li><p>左值引用（Lvalue References）：通过 <code>&amp;</code> 符号声明的引用，用于绑定到左值。左值引用允许修改所引用对象的值。</p></li><li><p>右值引用（Rvalue References）：通过 <code>&amp;&amp;</code> 符号声明的引用，用于绑定到右值。右值引用通常用于移动语义和完美转发，提高了内存利用效率和性能。</p></li></ul><p>左值引用在一定程度上脱离了危险的指针。非常量左值引用只能引用左值，而常量左值引用既可以引用左值也可以引用右值。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int &amp;x1 = 1;        // 错误
const int &amp;x2 = 2;  // 正确
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然<code>const int &amp;x2 = 2;</code>与<code>const int x2 = 2;</code>在结果上是一样的，但因为前者是引用，所以语句结束后11的生命周期会被延长，而后者语句结束后11会被销毁。这在函数形参列表中有巨大作用，最典型的例子就是复制构造函数和复制赋值运算符函数，通常这两个函数的形参都是一个常量左值引用。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>class X {
public:
  X() {}
  X(const X &amp;x) {}
  X&amp; operator = (const X &amp;x) { return *this; }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常量左值引用可以绑定右值是非常好的特性，但也存在一个缺点——常量性。一但使用常量左值引用就表示我们无法在函数里修改该对象（强制类型转换除外），所以需要右值引用来完成这项工作。</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>int i = 0;
int &amp;j = i;   // 左值引用
int &amp;&amp;k = 2;  // 右值引用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果右值引用<code>k</code>试图引用变量<code>i</code>，则会报错。右值引用的特性之一是延长右值的生命周期</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>#include &lt;iostream&gt;
using namespace std;
class X {
public:
  X() { cout &lt;&lt; &quot;X ctor&quot; &lt;&lt; endl; }
  X(const X &amp;x) { cout &lt;&lt; &quot;X copy ctor&quot; &lt;&lt; endl; }
  ~X() {cout &lt;&lt; &quot;X dtor&quot; &lt;&lt; endl; }
  void show() { cout &lt;&lt; &quot;show X&quot; &lt;&lt; endl; }
};
X make_x() {
  X x1;
  return x1;
}
int main() {
  X &amp;&amp;x2 = make_x();
  x2.show();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果<code>X &amp;&amp;x2 = make_x();</code>这句话是<code>X x2 = make_x();</code>，在没有进行优化的情况下会发生3次构造：<code>make_x()</code>中<code>x1</code>会默认构造一次，然后<code>return x1</code>会复制构造产生临时对象，接着<code>X x2 = make_x()</code>会用复制构造将临时对象复制到<code>x2</code>，最后临时对象被销毁。</p><p>使用右值引用后的结果为（使用GCC需要加上命令行参数<code>-fno-elide-constructors</code>来关闭函数返回值优化（RVO），具体方法是在CMakeLists.txt中添加<code>set(CMAKE_CXX_FLAGS &quot;-fno-elide-constructors&quot;)</code>）</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>X ctor
X copy ctor
X dtor
show X
X dtor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从结果看只发生了两次构造：第一次是<code>make_x()</code>中<code>x1</code>的默认构造，第二次是<code>return x1</code>的复制构造。由于<code>x2</code>是右值引用，引用对象是<code>make_x()</code>返回的临时对象，所以该临时对象的生命周期得以延长，在语句结束后继续调用<code>show()</code>不会有任何问题。延长临时对象的生命周期并不是右值引用的最终目标，真正的目的是减少对象复制，提升程序性能。</p>`,26),a=[l];function s(o,r){return d(),i("div",null,a)}const t=e(c,[["render",s],["__file","value.html.vue"]]);export{t as default};
