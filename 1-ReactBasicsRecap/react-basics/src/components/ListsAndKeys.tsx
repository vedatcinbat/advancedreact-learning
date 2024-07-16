import React from 'react'

interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}

const users: User[] = [
    {
        id: 1,
        firstName: "Vedat",
        lastName: "Cinbat",
        age: 25,
    },
    {

        id: 2,
        firstName: "Jack",
        lastName: "Stones",
        age: 27,
    }
]


const ListsAndKeys: React.FC = () => {
    const numbers: number[] = [1, 2, 3, 4, 5]
    const usersList: JSX.Element[] = users.map((user) => {
        return (
            <div className="bg-sky-800 p-2 mb-2">
                <h1>{user.firstName} {user.lastName}</h1>
                <p>Age: {user.age}</p>
            </div>
        )
    })

    return (
        <>
            {/* <ul>
            {numbers.map((number) => <li className="bg-sky-300 p-2 m-2 text-center">{number}</li>)}
        </ul> */}
            <h2>Users</h2>
            <div className="usersList text-white p-2">
                {usersList}
            </div>
        </>
    )
}

export default ListsAndKeys
