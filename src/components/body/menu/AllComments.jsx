import React from 'react'

export default function AllComments(props){
    console.log(props)
    return(
        props.comments.map((comment,key) =>{
            return (
                <div>
                    <table className="table">
                        <tbody>
                          <tr>
                            <td scope="col">  <strong>Comment {key+1}</strong></td>
                            <td>{comment.comment}</td>
                          </tr>
                            <tr>
                                <td scope="col">Author</td>
                                <td>{comment.author}</td>
                            </tr>
                            <tr>
                                <td scope="col">Date</td>
                                <td>{comment.date}</td>
                            </tr>
                        </tbody>
                    </table><br/>
                </div>
            )
        })
    )
}