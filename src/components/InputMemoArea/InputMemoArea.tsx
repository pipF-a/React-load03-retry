import { AddButton } from '../Button/AddButton'
import type { Post } from '../../types';


interface Props  {
  handleChangeMemoText: string;
  setMemos: React.Dispatch<React.SetStateAction<Post[]>>;
  setHandleChangeMemoText: React.Dispatch<React.SetStateAction<string>>;
}

export const InputMemoArea = ({handleChangeMemoText, setMemos, setHandleChangeMemoText}:Props) => {


  const changeText = (e: { target: { value: React.SetStateAction<string>; }; }) =>{
    setHandleChangeMemoText(e.target.value);
  }

  const now = new Date();

  const formattedDateTime = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
  const handleAddMemo = () => {
    if(!handleChangeMemoText.trim()) return;

    const newMemo:Post ={
      id: Date.now(),
      text: handleChangeMemoText,
      createdAt: formattedDateTime,
    }

    setMemos((prevMemo) => [...prevMemo,newMemo])
    setHandleChangeMemoText('');
  }

  return (
    <>
      <textarea 
        placeholder="新しいメモを入力.." 
        className="max-w-lg w-full rounded-lg p-4 shadow-lg bg-white" 
        rows={4}
        onChange={changeText}
        value={handleChangeMemoText}
      />
      <AddButton onClick={handleAddMemo}/>
    </>
  )
}
