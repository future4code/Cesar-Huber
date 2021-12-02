import React from 'react'
import Profile from '../components/Profile'

export default function Home(props) {
    return (
        <div>
            <Profile 
                getMatches={props.getMatches}
                matchesList={props.matchesList}
            />
        </div>
    )
}
