import React, {Component} from 'react'
import comments from "../../../data/comments";
import AllCommentsData from "./comments";
import MenuDetails from "../menu/MenuDetails";
import MenuItem from "../menu/MenuItem";

export default class LoadComments extends Component{
    state = {
        comments:comments
    }

    render() {

        const commentData = this.state.comments;
        const AllComment = commentData.map((item,idx)=>{
           return (
                  <MenuDetails dishComment={item} key={item.id}/>
           )
        });

        return (
            <div>
                <div>
                    {AllComment}
                </div>
            </div>
        );
    }
}