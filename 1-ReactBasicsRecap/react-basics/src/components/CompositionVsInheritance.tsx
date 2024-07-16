import React from "react";


/*
----- Composition Vs Inheritance -----
-> React has a powerful composition model, and we recommend using composition instead of 
inheritance to reuse code between components

-- Containment --
-> Some components don't know their children ahaed of time
-> This is especially common for components like Sidebar or Dialog that represent generic "boxes"

-> We recommend that such components use the special children prop to pass children elements directly into their output

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>        
    )
}

-> This lets other components pass arbitrary children to them by nesting the JSX :

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 classname="Dialog-title">
                Welcome
            </h1>
            <p classname="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    )
}

-> Anything inside the <FancyBorder> JSX tag gets passed into the FancyBorder component as a children prop.
-> Since FancyBorder renders {props.children} inside a <div>, the passed elements appear in the final output.

-> While this is less commoni sometimes you might need mutliple "holes" in a component
-> In such cases you may come up with your own convention instead of using "children"



function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
    return (
        <SplitPane left={<Contact />} right={<Chat />} />
    )
}

-- So What About Inheritance? --
-> At Facebook, we use React in thousands of components, and we haven't found any use cases where we would recommend creating component inheritance hierarchies.
-> Props and composition give you all the flexibility you need to customize a component's 
look an behavior in an explicit and safe way
-> Remember that components may accpet arbitrary propes, including primitive values, React elements, or functions

-> If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module.


*/

function FancyBorder(props: any) {
    return (
        <div className={"FancyBorder border-4 m-2 border-" + props.color}>
            {props.children}
        </div>
    )
}

function WelcomeDialog() {
    return (
        <FancyBorder color="red-500">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    )
}

function SplitPane(props: any) {
    return (
        <div className="SplitPane flex">
            <div className="SplitPane-left flex-1">
                {props.left}
            </div>
            <div className="SplitPane-right flex-1">
                {props.right}
            </div>
        </div>
    )
}

function Contact() {
    return (
        <div className="bg-sky-300">
            <h1>Contact</h1>
            <p>Phone: 123456789</p>
        </div>
    )
}

function Chat() {
    return (
        <div className="bg-sky-700">
            <h1>Chat</h1>
            <p>Chat with us!</p>
        </div>
    )
}

function AppComp() {
    return (
        <SplitPane left={<Contact />} right={<Chat />} />
    )
}

const CompositionVsInheritance = () => {
    return (
        <>
            <div>Composition Vs Inheritance</div>
            {/*<WelcomeDialog /> */}
            <AppComp />
        </>
    );
}

export default CompositionVsInheritance