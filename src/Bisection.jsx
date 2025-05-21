import './Bisection.css';
import { InlineMath } from 'react-katex';
import React from 'react';

function Bisection() {
  return (
    <div className="bisection-container">
      <section className="bisection-section">
        <h1>Interval Halving (Bisection)</h1>
        <ul>
          <li>Interval halving (bisection), an ancient but effective method for finding a zero of <InlineMath math={'f(x)'}/></li>
          <li>It begins with two values for <InlineMath math={"x"} /> that brackets a root.</li>
          <li><b>The function <InlineMath math={'f(x)'}/> changes signs at these two x-values</b>, and if <InlineMath math={'f(x)'}/> is continuous, there must be at least one root between the values</li>
          <li>The test to see that <InlineMath math={'f(x)'}/> does change sign between points <InlineMath math={'a'}/> and <InlineMath math={'b'}/> is to see if <InlineMath math={'f(a) \\cdot f(b) < 0'}/> (see Fig. 3.1)</li>
        </ul>
        <img src= {`${import.meta.env.BASE_URL}Fig 31.png`} alt="Figure 3.1" className="figure-img" />
        <figcaption>Figure 3.1</figcaption>
        <p>The bisection method then </p>
        <ul>
          <li>successively divides the initial interval in half,</li>
          <li>finds in which half the root(s) must lie,</li>
          <li>and repeats with the endpoints of the smaller interval.</li>
        </ul>
      </section>
      <section className="bisection-section">
        <h2>An algorithm for halving the interval </h2>
        <img src={`${import.meta.env.BASE_URL}algorithm.png`} alt="algorithm" className="figure-img" style={{ width: 'auto', height: '200px' }}/>
        <ul>
          <li>Think about the multiplication factor, 2</li>
          <li>The final value of <InlineMath math={'x_3'}/> approximates the root, and it is the error by not more than <InlineMath math={'\\frac{|x_1-x_2|}{2}'}/></li>
          <li>The method may produce a false root if <InlineMath math ={"f(x)"}/> is discontinuous on <InlineMath math ={"[x_1, x_2]"}/></li>
        </ul>
          <p className="code-line">{">> format long e"}</p>
          <p className="code-line">{">> fa=1e-120;fb=-2e-300;"}</p>
          <p className="code-line">{">> fa*fb"}</p>
          <p className="code-line">{"ans = 0"}</p>
          <p className="code-line">{">> sign(fa)~=sign(fb)"}</p>
          <p className="code-line">{"ans = 1"}</p>
      </section>
      <section className="bisection-section">
        <h2>Example 1</h2>
        <p>Apply bisection to <InlineMath math={'f(x)=x-x^{\\frac{1}{3}}-2'}/>. </p>
        <ol>
          <li>Find values <InlineMath math={'a'}/> and <InlineMath math={'b'}/> where <InlineMath math={'f'}/> is continuous on the interval <InlineMath math={'[a, b]'}/> and <InlineMath math={'f(a)'}/> and <InlineMath math={'f(b)'}/> have opposite signs.</li>
            <ol type="a">
              <li><InlineMath math={'f(0)= -2'}/></li>
              <li><InlineMath math={'f(6)= 2.18'}/></li>
            </ol>
          <li>Find the midpoint: <InlineMath math={'c = \\frac{a+b}{2}'}/></li>
            <ol type="a">
              <li><InlineMath math={'c = \\frac{0+6}{2} = 3'}/></li>
            </ol>
          <li>If <InlineMath math={'f(c) = 0'}/>, return <InlineMath math={'c'}/> as root.</li>
          <li>Elif <InlineMath math={'f(a)'}/> and <InlineMath math={'f(c)'}/> have opposite roots, repeat with interval <InlineMath math={'[a, b] = [a, c]'}/>.</li>
          <li>Elif <InlineMath math={'f(c)'}/> and <InlineMath math={'f(b)'}/> have opposite roots, repeat with interval <InlineMath math={'[a, b] = [c, b]'}/>.</li>
          <li>Repeat until the difference between <InlineMath math={'a'}/> and <InlineMath math={'b'}/> is <InlineMath math={'< ε'}/>.</li>
        </ol>
      </section>
    </div>
  );
}

export default Bisection;
