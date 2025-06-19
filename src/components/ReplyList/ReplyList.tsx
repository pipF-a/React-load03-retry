import React from 'react'
import type { Post } from "../../types";

import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";

interface ReplyListProps {
  replys: Post[];
}

export const ReplyList: React.FC<ReplyListProps> = ({ replys}) => {
  return (
    <ul>
      {replys.map(reply =>(
        <li key={reply.id} className='w-md mt-3 p-3 ml-auto bg-gray-100 rounded-lg space-y-2'>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">{reply.createdAt}</p>
            <div>
              <button className="text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors p-1"><GoPencil /></button>
              <button className="text-red-500 hover:bg-red-50 rounded-lg transition-colors p-1"><MdDeleteOutline /></button>
            </div>
          </div>
          <p>{reply.text}</p>
        </li>
      ))}
    </ul>
  )
}
