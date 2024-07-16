import React from 'react'

/*
-- State and Lifecycle --
-> Consider the ticking clock example from the main concepts.
-> In Rendering Elements, we have only learned one way to update the UI
-> We call root.render() to change the rendered output

const root = ReactDOM.createRoot(document.getElementById('root'));
  
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);


-> We can start by encapsulating the clock logic into a Clock component

function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    )
}

function tick() {
    root.render(<Clock date={new Date()} />);
}

setInterval(tick, 1000);


-- Adding Lifecycle Methods to A Class --
-> In applications with many components, it's very important to free up resources taken by the components when they are destroyed.
-> We want to set up a timer whenever the Clock is rendered to the DOM for the first time.
-> We also want to clear that timer whenever the DOM produced by the Clock is removed.
-> We can declare special methods on the component class to run some code when a component mounts and unmounts.

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

-> These methods are called lifecycle methods.
-> The componentDidMount() method runs after the component output has been rendered to the DOM.

componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    )
}

-> Note how we save the timer ID right on this.

-> While this.props is set up by React itself and this.state has a special meaning, you are free to add additional fields to the class manually if

componentWillUnmount() {
    clearInterval(this.timerID);
}

-> Finally we will implement a method called tick() that the Clock component will run every second.

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);

-- State Updates are Merged --
-> When you call setState(), React merges the object you provide into the current state.
-> The merging is shallow.
-> For example, your state may contain several independent variables.

constructor(props) 7
    super(props);
    this.state = {
        posts: [],
        comments: []
    };
}

-> Then you can update them independently with separate setState() calls.

componentDidMount() {
    fetchPosts().then(res => {
        this.setState({
                posts: res.posts
            });
        });
    })
}

fetchComments().then(res => {
    this.setState({
        comments: res.comments
    })
})

-> The merging is shallow, so this.setState({comments}) leaves this.state.posts intact, but completely replaces this.state.comments.


*/

interface Post {
    id: number,
    title: string,
    content: string
}

const posts: Post[] = [
    {
        id: 1,
        title: "Hello World",
        content: "Welcome to learning React!"
    },
    {
        id: 2,
        title: "Installation",
        content: "You can install React from npm."
    }
]


interface State {
    comments: any[];
    posts: Post[];
    names: any[];
}

class StateAndLifecycle extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            comments: [],
            posts: [],
            names: []
        }
    }

    componentDidMount() {
        this.setState({
            posts: posts
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world</h1>
                <h2>It is {new Date().toLocaleTimeString()}</h2>
                <h3>Posts</h3>
                <div className="posts bg-sky-300 p-2">
                    {this.state.posts.map((post) => {
                        return (
                            <div key={post.id} className="bg-red-300 p-4 m-1">
                                <h4>{post.title}</h4>
                                <p>{post.content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}


export default StateAndLifecycle
