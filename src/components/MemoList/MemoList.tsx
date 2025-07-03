import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { useState } from "react";

import type { Post } from "../../types";
import { ReplyList } from "../ReplyList/ReplyList";
import { InputReply } from "../InputReply/InputReply";
import { AddButton } from '../Button/AddButton'



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
  handleDeleteMemo: (id: number) => void;
}


//childrenに対しても自動で型定義できるReact.FC
export const MemoList: React.FC<MemoListProps> = ({ memos,replys,setReplys,setMemos,handleChangeReplyText,setHandleChangeReplyText,apperReplyInput,toggleApper,handleDeleteMemo}) => {

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  const handleEditClick = (memo: Post) => {
    setEditingId(memo.id);
    setEditText(memo.text);
  };

  const handleEditSave = (id: number) => {
    setReplys([]); // 編集時はリプライ欄を閉じる（任意）
    setEditingId(null);
    setEditText("");
    setMemos((prevMemos) => prevMemos.map((memo) => memo.id === id ? { ...memo, text: editText } : memo));
  };

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
            <p className="whitespace-pre-wrap text-gray-700">こちらの内容はデモなので、削除等はできません。</p>
            <hr className="border-gray-300 mt-4" />
            <button className="mt-4 text-emerald-600 hover:text-emerald-700"><FaRegComment /></button>
          </div>
        </li>
      {memos.map((memo) => (
        <li className="mt-8 border border-gray-300 shadow bg-white rounded-lg p-4" key={memo.id}>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">{memo.createdAt}</p>
            <div className="flex">
              <button className="text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors p-1" onClick={() => handleEditClick(memo)}><GoPencil /></button>
              <button className="text-red-500 hover:bg-red-50 rounded-lg transition-colors p-1" onClick={() => handleDeleteMemo(memo.id)}><MdDeleteOutline /></button>
            </div>
          </div>
          <div className="mt-4">
            {editingId === memo.id ? (
              <>
                <textarea
                  className="max-w-lg w-full rounded-lg p-4 shadow-lg bg-white"
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                />
                 <AddButton  onClick={() => handleEditSave(memo.id)}/>
              </>
            ) : (
              <p className="whitespace-pre-wrap text-gray-700">{memo.text}</p>
            )}
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
