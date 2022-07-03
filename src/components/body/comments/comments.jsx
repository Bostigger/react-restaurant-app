import React from 'react'
export default function AllCommentsData(props) {
    console.log(props)
    return (
        <div>
           <h5>{props.dishComment}</h5>
        </div>
    )
}