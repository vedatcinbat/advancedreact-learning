// Types
type User = {
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    name?: string;
}

type CommentProps = {
    author: User;
    text: string;
    date: Date;
}

const element = <h1>Hello World</h1>

const name = "Vedat Cinbat";
const fullName = <h1>Hello {name}</h1>

const formatName = (user: User): string => {
    return user.firstName + ' ' + user.lastName.toUpperCase();
}

const user: User = {
    firstName: "Jack",
    lastName: "doe"
}

const formattedName = (
    <h1>
        Hello, {formatName(user)}
    </h1>
)

// JSX is an Expression Too
// After compilation, JSX expressions become regular JavaScript function calls 
// and evaluate to JavaScript objects.
// This means that you can use JSX inside of "if" statements and "for" loops,
// assign it to variables, accept it as arguments, and "return" if from functions

const userElena: User = {
    firstName: "Elena",
    lastName: "Stone"
}

function getGreeting(user: User | null) {
    if(user) {
        return <h1>Hello, {formatName(user)}</h1>
    }
    return <h1>Hello, Stranger</h1>
}

// Specifying Attributes with JSX
// You may use quotes to specify string literals as attributes

const elementWithAttributes = <a href="https://www.reactjs.org">link</a>

// You may also use curly braces to embed a JavaScript expression in an attribute

//const elementWithAttributes2 = <img src={user.avatarUrl}></img>

// Specifying Children with JSX
// If a tag is empty, you may close it immediately with />, like XML

//const elementWithChildren = <img src={user.avatarUrl} />

// JSX tags may contain children

const elementWithChildren = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here</h2>
    </div>
)

// Elements are the smallest building blocks of React apps
// An element describes what you want to see on the screen

const elementExp = <h1>Hello, World</h1>;

/*
---------- Updating the Rendered Element ------------------
-> React elements are immutable
-> Once you create an element, you can't change its children or attributes
-> An element is like a single frame in a movie: it represents the UI at a certain point in time
-> With our knowledge so far, the only way to update the UI is to create a new element,
and pass it to "root.render()";

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
    const element = (
        <div>
            <h1>Hello, World</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    root.render(element);
}

setInterval(tick, 1000);

-> It calls root.render() every second from a "setInterval()" callback

Note: In practice, most React apps only call ReactDOM.render() once


-- React Only Updates What's Necessary --
-> React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state
-> You can verify this by inspecting the last example with the browser tools

*/



/*
---------- Components and Props ------------------
-> Components let you split the UI into independent, reusable pieces, and think about each 
piece in isolation
-> Conceptually, components are like JavaScript functions
-> They accept arbitrary inputs (called "props") and return React elements describing 
what should appear on the screen


-- Function and Class Components --
-> The simplest way to define a component is to write a JavaScript function

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

-> This function is a valid React component because it accepts a single "props" object argument with data and returns a React element
-> You can also use an ES6 class to define a component

class Welcome extends React.Components {
    render() {
        return <h1>Hello, {this.props.name}</h1>    
    }
}

-> The above two components are equivalent from React's point of view
-> Function and Class components both accept props and return React elements

-- Rendering a Component --
-> Previously, we only encountered React elements that represent DOM tags
-> However, elements can also represent user-defined components

const element = <Welcome name="Vedat" />

-> When React sees an element representing a user-defined component, it passes JSX attributes to this component as a single object
-> We call this object "props"

-> For example, this code renders "Hello, Vedat" on the page

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Vedat" />
root.render(element);


-- Composing Components --
-> Components can refer to other components in their output
-> This lets us use the same component abstraction for any level of detail
-> A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components

-> For example we can create an "App" component that renders "Welcome" many times

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

function App() {
    return (
        <div>
            <Welcome name="Vedat" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    )
}

-> Typically, new React apps have a single "App" component at the very top
-> However, if you integrate React into an existing app, you might start bottom-up with a small component like "Button" and gradually work your way to the top of the view hierarchy


-- Extracting Components --
-> Dont be afraid to split components into smaller components
-> For example, consider this "Comment" component

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

-> It accepts "author" (an object), "text" (a string), and "date" (a date) as props, and describes a comment on a social media website
-> This component can be tricky to change because of all the nesting, and also hard to reuse in another part of the app
-> Let's extract a few components from it

-> First, we will extract "Avatar"

function Avatar(props) {
    return (
        <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
    )
}

-> The "Avatar" doesn't need to know that it is being rendered inside a "Comment"
-> This is why we have given its prop a more generic name

-> We recommend naming props from the component's own point of view rather than the context in which it is being used

-> We can now simplify "Comment" a tiny bit

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
            +++ <Avatar user={props.author} />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

-> Next, we will extract a "UserInfo" component that renders an "Avatar" next to the user's name

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}

-> This lets us simplify "Comment" even further

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
        <div>
    )
}

-> Extracting components might seem like grunt work at first, but having a palette of reusable components pays off in larger apps
-> A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component


-- Props are Read-Only --
-> Such functions are called "pure" because they do not attempt to change their inputs, and always return the same result for the same inputs
-> In contrast, this function is impure because it changes its own input

function withdraw(account, amount) {
    account.total -= amount;
}

-> React is pretty flexible, but it has a single strict rule:
! All React components must act like pure functions with respect to their props !




*/

function formatDate(date: Date): string {
    return date.toLocaleDateString();
}

function Avatar(props: { user: User }) {
    return (
        <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
    )
}

function Comment(props: CommentProps) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <Avatar user={props.author} />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )

}



const MainConcepts: React.FC = () => {
    return (
        <>
            <div>{element}</div>
            <div>{fullName}</div>
            <div>{formattedName}</div>
            {getGreeting(userElena)}
            {getGreeting(null)}
            <div>{elementWithAttributes}</div>
            <div>{elementWithChildren}</div>
            <div>{elementExp}</div>
            <Comment author={userElena} text="Hello, World" date={new Date()} />
        </>
    )
}

export default MainConcepts;