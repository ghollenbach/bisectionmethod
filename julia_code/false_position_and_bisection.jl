using Plots

# False Position (Regula Falsi) method for root finding
# f: function to find root of
# a, b: interval endpoints [a, b]
# t: tolerance for stopping criterion (default 1e-20)
# final: maximum number of iterations (default 1e20)
# depth: current recursion depth (default 1)
function false_position(f, a, b, t=1e-20, final=1e20, depth=1)
    r = b - f(b) * (b - a) / (f(b) - f(a))  # Compute root approximation using false position formula
    if f(a) * f(b) > 0 || depth > final
        return "No Root"  # No root in interval or exceeded max iterations
    end

    if abs(f(r)) < t
        return r  # Root found within tolerance
    elseif f(a) * f(r) < 0
        return false_position(f, a, r, t, final, depth + 1)  # Recurse on [a, r]
    else
        return false_position(f, r, b, t, final, depth + 1)  # Recurse on [r, b]
    end
end

# Bisection method for root finding
# f: function to find root of
# a, b: interval endpoints [a, b]
# t: tolerance for stopping criterion (default 1e-21)
# final: maximum number of iterations (default 1e20)
# depth: current recursion depth (default 1)
function bisection(f, a, b, t=0.1e-20, final=1e20, depth=1)
    r = a + (b - a) / 2  # Compute midpoint
    if f(a) * f(b) > 0
        return "No Root"  # No root in interval
    end

    if depth > final
        return "No Root Found in $final iterations"  # Exceeded max iterations
    end

    if abs(f(r)) < t
        return r  # Root found within tolerance
    elseif f(a) * f(r) < 0
        return bisection(f, a, r, t, final, depth + 1)  # Recurse on [a, r]
    else
        return bisection(f, r, b, t, final, depth + 1)  # Recurse on [r, b]
    end
end

# Plotting function for visualizing the false position method
# a, b: interval endpoints
# x: array of x values for plotting
# f: function to plot
# n: recursion depth (default 1)
function plotting_false_position(a, b, x, f, n=1)
    if n == 1
        plot(x,
            f,
            xlims=(a, b),
            ylims=(-10, 10),
            label="f(x)",
            linewidth=3,
            framestyle=:box,
        )
        hline!([0], color=:black, linewidth=2, label="")  # Draw x-axis
        vline!([0], color=:black, linewidth=2, label="")  # Draw y-axis
    end

    slope = (f(b) - f(a)) / (b - a)  # Calculate slope of secant
    m(x) = x .* slope - slope .* a + f(a)  # Secant line equation
    plot!(m, linewidth=2, label="Average Slope $n")  # Plot secant line
    r = b - f(b) * (b - a) / (f(b) - f(a))  # False position root
    if n < 4
        if f(r) * f(a) < 0
            plotting(a, r, x, f, n + 1)  # Recurse on [a, r]
        else
            plotting(r, b, x, f, n + 1)  # Recurse on [r, b]
        end
    end
end

# Main script

a = 1  # Interval start
b = 2  # Interval end

x = range(a, b, length=100)  # X values for plotting
f(x) = x .^ 3 - 3  # Function definition

plotting(a, b, x, f)  # Plot the function and secant lines
display(current())  # Display the plot

# False position method with different tolerances
println(false_position(f, a, b, 1e-5))  # With tighter tolerance
println(false_position(f, a, b))        # With default tolerance

# Print results of bisection method with different tolerances
println(bisection(f, a, b, 1e-5))       # With tighter tolerance
println(bisection(f, a, b))             # With default tolerance

# Used GitHub Copilot for debugging and comments