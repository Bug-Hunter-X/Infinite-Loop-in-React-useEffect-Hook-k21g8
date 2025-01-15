```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: This effect now runs only once after mount
    // You can perform side effects here that don't depend on count
    console.log('Mounted!');
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```