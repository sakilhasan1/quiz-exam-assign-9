import React from 'react';
import './Blog.css'

const Blog = () => {
    return (

        <div>
            <h3 className='question'>What is the purpose of react router?</h3>
            Ans:
            <p className='ans'>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            <h3 className='question'>How does context API works?</h3>
            Ans:
            <p className='ans'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            <h3 className='question'>how does useref work?</h3>
            Ans:
            <p className='ans'>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
        </div>

    );
};

export default Blog;