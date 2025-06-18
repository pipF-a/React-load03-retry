import type { Post } from '../../types';
import { AddButton } from '../Button/AddButton';


interface Props  {
  replys: Post[];
  setReplys: React.Dispatch<React.SetStateAction<Post[]>>;
  handleChangeText: string;
  setHandleChangeText: (value: string) => void;
}
export const InputReply = ({setReplys,handleChangeText,setHandleChangeText}:Props) => {


  const changeReplyText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHandleChangeText(e.target.value);
  }

  const now = new Date();

  const formattedDateTime = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

  const handleAddReply = () => {
    if(!handleChangeText?.trim()) return;

    const newReply:Post ={
      id: Date.now(),
      text: handleChangeText,
      createdAt: formattedDateTime,
    }

    setReplys((prevReply) => [...prevReply,newReply])
    setHandleChangeText('');
  }
  return (
    <>
      <textarea 
        placeholder="新しいメモを入力.." 
        className="max-w-lg w-full rounded-lg p-4 shadow-lg bg-white" 
        rows={4}
        onChange={changeReplyText}
        value={handleChangeText}
      />
      <AddButton onClick={handleAddReply} />
    </>
  )
}
