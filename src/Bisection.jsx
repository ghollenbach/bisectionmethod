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
          <div style={{ height: '16px' }}></div>
          <li>A general implementation of bisection</li>
          <p className="code-line">{">> xb = brackPlot(fx3,0,5)"}</p>
          <p className="code-line">{">> bisect(fx3,xb,5e-5)"}</p>
          <InlineMath math={'ans = 3.5214'}/>
          <p className="code-line">{">> bisect(fx3, [3 4],5e-5,5e-6,1)"}</p>
          <InlineMath math={'ans = 3.5214'}/>
                    <div style={{ height: '16px' }}></div>

          <li>It is shown above how <i>brackPlot</i> can be combined with <i>bisect</i> to find a single root of an equation.</li>
          <li>The same procedure can be extended to find more than one root if more than one root exists. Consider the code</li>
        </ul>
        <p className="code-line">{"xmin= . . . ; xmax= . . . ;"}</p>
        <p className="code-line">{"Xb=brackPlot(myFunction,xmin,xmax);"}</p>
        <p className="code-line">{"for k=1:size(Xb, 1)"}</p>
        <p className="code-line">{"     x(k)=bisect(myFunction,Xb(k,c));"}</p>
        <p className="code-line">{"     fprintf(Suspected root at %f gives f(x)=%f \n),"}</p>
        <p className="code-line">{"           x(k),myFunction(x(k))"}</p>
        <p className="code-line">{"end"}</p>
        <p>Use an appropriate myFunction, a suggestion is sine function.</p>
        <p>The root is (almost) never known exactly, since it is extremely unlikely that a numerical procedure will find the price value of x that makes f(x) exactly zero in floating-point arithmetic.</p>
        <ul>
          <li>The main advantage of interval halving is that it is guaranteed to work (continuous & bracket).</li>
          <li>The algorithm must decide how close to the root the guess should be before stopping the search (see Fig.3.3).</li>
        </ul>
        <img src= {`${import.meta.env.BASE_URL}Figure 33.png`} alt="Figure 3.3" className="figure-img" />
        <figcaption>Figure 3.3. The stopping criterion for a root-finding procedure should involve a tolerance on <InlineMath math={'x'}/>, as well as a tolerance on <InlineMath math={'f(x)'}/>. </figcaption>
        <ul>
          <li>This guarantee can be avoided, if the function has a slope very near to zero at the root.</li>
          <li>Because the interval <InlineMath math={'[a, b]'}/> is halved each time, the number of iterations to achieve a specified accuracy is known in advance.</li>
          <li>The last value of <InlineMath math={'x_3'}/> differs from the true root by less than <InlineMath math={'\\frac{1}{2}'}/> the last interval.</li>
          <li>So we can say with surely that</li>
          <InlineMath math={'\\text{error after n iterations} < |\\frac{b-a}{2^n}|'}/>
          <li>When there are multiple roots, interval halving may not be applicable, because the function may not change sign at points on either side of the roots.</li>
          <li>The major objection of interval halving has been that it is <b>slow to converge.</b></li>
          <li>Bisection is generally recommended for finding an approximate value for the root, and then this value is refined by more efficient methods.</li>
        </ul>
      </section>
    </div>
  );
}

export default Bisection;
