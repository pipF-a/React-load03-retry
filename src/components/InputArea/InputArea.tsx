import React, { useState } from 'react'
import { AddButton } from '../Button/AddButton'

type Memo = {
  id: number;
  text: string;
  createdAt: string;
}

type Props = {
  setMemos: React.Dispatch<React.SetStateAction<Memo[]>>;
}

export const InputArea = ({setMemos}:Props) => {

  const[handleChangeText,setHandleChangeText] = useState<string>('');

  const changeText = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
    setHandleChangeText(e.target.value);
  }

  const handleAddMemo = () => {
    if(!handleChangeText.trim()) return;

    const newMemo:Memo ={
      id: Date.now(),
      text: handleChangeText,
      createdAt: new Date().toISOString(),
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
