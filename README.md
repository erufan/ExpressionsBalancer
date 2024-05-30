# Expressions Balancer

## Overview
The `ExpressionsBalancer` is a TypeScript class that checks for balanced expressions in a given string. It ensures that every opening symbol such as `(`, `<`, `[`, or `{` has a corresponding closing symbol `)`, `>`, `]`, or `}` respectively.

## Features
- **Check Balance**: Validates if the input string has balanced expressions.
- **Error Reporting**: Provides informative console logs for unbalanced expressions.

## How to Use
1. Import the `ExpressionsBalancer` class.
2. Create an instance of `ExpressionsBalancer`.
3. Call the `checkBalance` method with the string you want to validate.

## Example
```typescript
import ExpressionsBalancer from './ExpressionsBalancer';

const balancer = new ExpressionsBalancer();
balancer.checkBalance('(a < b) [c {d, e}]'); // Output: the text is balanced
balancer.checkBalance('(a < b) [c {d, e}');  // Output: no closing for:=> ]
```
Installation
To use the ExpressionsBalancer in your project, include it in your TypeScript files.

