What is useEffect? What are the different behaviors of useEffect? What is a dependency array?

    UseEffect in React is a hook that help us to handle side effects in components.Some different behavior of a useEffect is  When you pass with no dependency array it going to rerender everything it mount and updateWhen you pass with a dependency empty array it going to rerender only when it mountWhen you pass with a dependency array it going to rerender everything the variable changes in the array
What is useRef and when do you want to use it?

    A UseRef is another hook taht helps us to return mutable ref object which we can directly access it and it does not rerender 
How to reuse hook logic in React?

    To reuse Hook logic in react we can create custom hooks and it can call other hooks