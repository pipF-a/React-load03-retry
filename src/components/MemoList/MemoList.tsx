import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";

import type { Post } from "../../types";
import { ReplyList } from "../ReplyList/ReplyList";
import { InputReply } from "../InputReply/InputReply";



//受け取るPropsが増えた時用にinterfaceで定義
interface MemoListProps {
  memos: Post[];
  replys: Post[];
  handleChangeReplyText: string;
  apperReplyInput:boolean;
  toggleApper: () => void;
  setReplys: React.Dispatch<React.SetStateAction<Post[]>>;
  setMemos: React.Dispatch<React.SetStateAction<Post[]>>;
  setHandleChangeReplyText: (value: string) => void;
}


//childrenに対しても自動で型定義できるReact.FC
export const MemoList: React.FC<MemoListProps> = ({ memos,replys,setReplys,handleChangeReplyText,setHandleChangeReplyText,apperReplyInput,toggleApper}) => {

  return (
    <ul className="mt-8 max-w-lg">
        <li className="border border-gray-300 shadow bg-white rounded-lg p-4" >
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">2025/6/17 16:15:51</p>
            <div className="flex gap-2">
              <button className="text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors p-1"><GoPencil /></button>
              <button className="text-red-500 hover:bg-red-50 rounded-lg transition-colors p-1"><MdDeleteOutline /></button>
            </div>
          </div>
          <div className="mt-4">
            <p className="whitespace-pre-wrap text-gray-700">こんにちは</p>
            <hr className="border-gray-300 mt-4" />
            <button className="mt-4 text-emerald-600 hover:text-emerald-700"><FaRegComment /></button>
          </div>
        </li>
      {memos.map((memo) => (
        <li className="mt-8 border border-gray-300 shadow bg-white rounded-lg p-4" key={memo.id}>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">{memo.createdAt}</p>
            <div className="flex">
              <button className="text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors p-1"><GoPencil /></button>
              <button className="text-red-500 hover:bg-red-50 rounded-lg transition-colors p-1"><MdDeleteOutline /></button>
            </div>
          </div>
          <div className="mt-4">
            <p className="whitespace-pre-wrap text-gray-700">{memo.text}</p>
            <hr className="border-gray-300 mt-4" />
          </div>
          <ReplyList replys={replys} />
          {apperReplyInput ? <InputReply replys={replys} setReplys={setReplys} handleChangeReplyText={handleChangeReplyText} setHandleChangeReplyText={setHandleChangeReplyText} toggleApper={toggleApper}/> : ''}
          {apperReplyInput ? '' : <button className=" text-emerald-600 hover:text-emerald-700 mt-4" onClick={toggleApper}><FaRegComment /></button>}
        </li>
      ))}
    </ul>
  );
};
