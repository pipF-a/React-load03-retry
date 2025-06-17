import React, { useState } from 'react'
import { AddButton } from '../Button/AddButton'
import type { Memo } from '../../types';


type Props = {
  setMemos: React.Dispatch<React.SetStateAction<Memo[]>>;
}

export const InputArea = ({setMemos}:Props) => {

  const[handleChangeText,setHandleChangeText] = useState<string>('');

  const changeText = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
    setHandleChangeText(e.target.value);
  }

  const now = new Date();

  const formattedDateTime = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

  const handleAddMemo = () => {
    if(!handleChangeText.trim()) return;

    const newMemo:Memo ={
      id: Date.now(),
      text: handleChangeText,
      createdAt: formattedDateTime,
    }

    setMemos((prevMemo) => [...prevMemo,newMemo])
    setHandleChangeText('');
  }

  return (
    <>
      <textarea 
        placeholder="新しいメモを入力.." 
        className="max-w-lg w-full rounded-lg p-4 shadow-lg bg-white" 
        rows={4}
        onChange={changeText}
        value={handleChangeText}
      />
      <AddButton onClick={handleAddMemo}/>
    </>
  )
}
