function allDivisors(num) {
    // Find all divisors of num
​
    if (num <= 0  || num % 1 !== 0) return 'Please provide a positive, whole number.';
    
    let numDivisors = [1];
    
    for (i = 2; i <= num; i++){
        if (num % i === 0) numDivisors.push(i);
    }
​
    return numDivisors;
}
