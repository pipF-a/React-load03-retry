import React from 'react'
import type { Post } from "../../types";

interface ReplyListProps {
  replys: Post[];
}

export const ReplyList: React.FC<ReplyListProps> = ({ replys}) => {
  return (
    <ul>
      {replys.map(reply =>(
        <li>{reply.text}</li>
      ))}
      
    </ul>
  )
}
