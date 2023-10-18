import React from 'react';
import Card from './Card';

const contacts = [
    {
    name: "Priyanshu Prasad",
    imgURL:
        "https://images.generated.photos/DTMdUcSp4hlLOQw_z3tAk_-A7zo9Rqz2WFSno8A_oG4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODY2MzI2LmpwZw.jpg",
    phone: "+123 456 789",
    college: "IIIT Bhopal"
    },
    {
    name: "Rujul Dwevedi",
    imgURL:
        "https://images.generated.photos/ONA1ScCkzWRHdArcp_YK6fX8oGy3M5kcdoJZpBXTvic/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTQyODIyLmpwZw.jpg",
    phone: "+987 654 321",
    college: "IIT Goa"
    },
    {
    name: "Harsh Vardhan",
    imgURL:
        "https://images.generated.photos/fZTvA-O7q-QG8PKi8Y2OD5OuqSJLF-lYDo4TLlzDKJI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDczNDIzLmpwZw.jpg",
    phone: "+212 212 212",
    college: "IIIT Lucknow"
    }
];

function App()
{
    return(
        <div>
            <h1 className='heading'>Contacts</h1>
            <Card
            name1={contacts[0].name}
            img={contacts[0].imgURL}
            tel={contacts[0].phone}
            college={contacts[0].college}
            />
            <Card
            name1={contacts[1].name}
            img={contacts[1].imgURL}
            tel={contacts[1].phone}
            college={contacts[1].college}
            />
            <Card
            name1={contacts[2].name}
            img={contacts[2].imgURL}
            tel={contacts[2].phone}
            college={contacts[2].college}
            />
        </div>
    );
}
export default App;