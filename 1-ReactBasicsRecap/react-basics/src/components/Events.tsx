import React from 'react'

/*
----- Events in React -----



*/

// q: How to set min height as screen height with tailwindcss
// a: https://stackoverflow.com/a/68100057

const Events: React.FC = () => {
    return (
        <div className="bg-[#086292] text-white min-h-screen">
            <Toggle />
        </div>
    )
}

export default Events

interface State {
    isToggleOn: boolean;
}

class Toggle extends React.Component<{}, State>  {
    constructor(props: any) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button className="bg-white p-2 text-black rounded-xl w-[30vh]" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
