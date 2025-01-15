# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications where an infinite loop occurs within a `useEffect` hook. The error stems from incorrectly managing dependencies, causing the effect to run repeatedly and indefinitely. 

## Bug Description
The `MyComponent` component uses the `useState` hook to manage a `count` variable. The `useEffect` hook attempts to increment `count` in every render.  Since `count` changes, the `useEffect` triggers again, creating an infinite loop.

## Solution
The solution involves correctly specifying dependencies in the `useEffect` hook. By removing `count` from the dependency array, the effect will only run once after the initial render.

## How to Reproduce
Clone this repository and run `npm install`. After that run `npm start` to start the application. You'll observe that the counter increments infinitely in the console. 
