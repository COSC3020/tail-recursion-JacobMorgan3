function tailRecursion(n, oldFib, fib, newFib) {
    if (n == 0)
        return newFib;
    else
        return tailRecursion(n-1, oldFib = fib, fib = newFib, newFib = fib + oldFib);
}

function helper(n) {
    if (n == 0)
        return 0;
    if (n == 1)
        return 1;
    else
        return tailRecursion(n, 1, 1, 0);
}


//add so i can test functions
module.exports = {helper, tailRecursion};
