import React, {useState} from 'react'


function UserGreeting(props: any) {
    return <h1>Welcome back!</h1>
}

function GuestGreeting(props: any) {
    return <h1>Please sign up.</h1>
}

function Greeting(props: any) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting />
    }
    return <GuestGreeting />
}




const ConditionalRendering: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        setIsLoggedIn(!isLoggedIn);
    }


    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            <button onClick={handleClick}>
                {isLoggedIn ? 'Log out' : 'Log in'}
            </button>
            
        </div>
    )
}

export default ConditionalRendering
