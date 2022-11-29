import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="mb-5">
        <p className="text-3xl font-bold">
          {" "}
          1. What are the different ways to manage a state in a React
          application?
        </p>
        <p className="text-lg m-2">
          There are four main types of state you need to properly manage in your
          React apps:
        </p>
        <p>1. Local state</p>
        <p>2. Global state</p>
        <p>3. Server state</p>
        <p>4. URL state</p>
      </div>

      <div className="mb-5">
        <h2 className="text-3xl font-bold">
          2. How does prototypical inheritance work?
        </h2>
        <p className="m-2">
          Every object with its methods and properties contains an internal and
          hidden property known as [[Prototype]]. The Prototypal Inheritance is
          a feature in javascript used to add methods and properties in objects.
          It is a method by which an object can inherit the properties and
          methods of another object. Traditionally, in order to get and set the
          [[Prototype]] of an object, we use Object.getPrototypeOf and
          Object.setPrototypeOf. Nowadays, in modern language, it is being set
          using __proto__.
        </p>
      </div>

      <div className="mb-5">
        <h2 className="text-3xl font-bold">
          3.What is a unit test? Why should we write unit tests?
        </h2>
        <p className="m-2">
          Unit testing is a software development process in which the smallest
          testable parts of an application, called units, are individually and
          independently scrutinized for proper operation. This testing
          methodology is done during the development process by the software
          developers and sometimes QA staff. The main objective of unit testing
          is to isolate written code to test and determine if it works as
          intended. Unit testing is an important step in the development
          process, because if done correctly, it can help detect early flaws in
          code which may be more difficult to find in later testing stages.
        </p>
        <p className="m-2">Why unit Test?</p>
        <p>
          1.The earlier a problem is identified, the fewer compound errors
          occur.
        </p>
        <p>
          2.Costs of fixing a problem early can quickly outweigh the cost of
          fixing it later.
        </p>
        <p>3. Debugging processes are made easier.</p>
        <p>4. Developers can quickly make changes to the code base.</p>
        <p>Developers can also re-use code, migrating it to new projects.</p>
      </div>

      <div>
        <h2 className="text-3xl font-bold">4 React vs. Angular vs. Vue?</h2>
        <p>
          Angular, React and Vue are all highly popular JavaScript libraries and
          frameworks that help developers build complex, reactive and modern
          user interfaces for the web. Actually, with additional libraries like
          React Native, Ionic (with Angular or with React) or NativeScript you
          can even build native mobile apps for mobile devices with help of
          Angular, React and Vue. In this article, we'll not really look at why
          you would need such a framework. I'll also not start explaining those
          libraries here - for that, you can check out other resources, like my
          courses on those topics (Angular, React, Vue - all included in our Pro
          subscription of course). Instead, I want to share some thoughts on how
          those frameworks and libraries compare and which of the three you
          might want to choose for your next project. I also want to mention
          that there are other, smaller, libraries or technologies like Svelte
          which do similar things. I do have a comparison on Svelte vs Angular
          etc as well.
        </p>
      </div>
    </div>
  );
};

export default Blog;
