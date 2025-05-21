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
      <section className="bisection-section">
        <h2>Example 2</h2>
        <p>Bracketing the roots of the function, <InlineMath math={'y = f(x) = sin(x)'}/>.</p>
        <p>http://siber.cankaya.edu.tr/ozdogan/NumericalComputations/mfiles/chapter1/brackPlot.m m-file:brackPlot.m</p>
        <p className="code-line">{">> brackPlot('sin',-pi,pi)"}</p>
        <p className="code-line">{">> brackPlot('sin',-2*pi,2*pi)"}</p>
        <p className="code-line">{">> brackPlot('sin',-4*pi,4*pi)"}</p>
      <p>Now, try with a user defined function: <InlineMath math={'f(x)=x-x^{\\frac{1}{3}}-2'}/></p>
      <p className="code-line">{">> brackPlot('fx3',?,?)"}</p>
      <p>In both examples, try with different variables.</p>
      </section >
      <section className="bisection-section">
        <h2>Example 3</h2>
        <p>Take the function: <InlineMath math={'3x+sin(x)-e^x'}/></p>
        <p>Look at the plot of the function to learn where the function crosses the x-axis: </p>
        <img src= {`${import.meta.env.BASE_URL}Figure 32.png`} alt="Figure 3.2" className="figure-img" />
        <figcaption>Figure 3.2. Plot of the function: <InlineMath math={'3x+sin(x)-e^x'}/> </figcaption>
        <p>The figure indicates that there are zeros at about <InlineMath math={'x = 0.35'}/> and <InlineMath math={'x = 1.9'}/></p>
        <p>Obtain the true value for the root, which is needed to compute the actual error (using MATLAB):</p>
        <p className="code-line">{">> solve(3*x + sin(x) - exp(x))"}</p>
        <InlineMath math={'ans = 0.360421702960324401369'}/>
        <img src= {`${import.meta.env.BASE_URL}Table 31.png`} alt="Table 3.1" className="figure-img" />
        <figcaption>Table 3.1. The bisection method, applied to <InlineMath math={'3x+sin(x)-e^x'}/>. The algorithm finds a value between <InlineMath math={'0'}/> and <InlineMath math={'1'}/> such that the function evaluated at that value is within <InlineMath math={'\\epsilon = 10^{-4}'}/> of <InlineMath math={'0'}/>. </figcaption>
        <ul>
          <li>To obtain the true value for the root, which is needed to compute the actual error</li>
          <p className="code-line">{">> solve(3*x + sin(x) - exp(x))"}</p>
          <InlineMath math={'ans = .36042170296032440136932951583028'}/>
        </ul>
      </section>
    </div>
  );
}

export default Bisection;
