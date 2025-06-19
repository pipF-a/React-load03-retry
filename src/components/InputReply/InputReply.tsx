import type { Post } from '../../types';
import { AddButton } from '../Button/AddButton';


interface Props  {
  replys: Post[];
  setReplys: React.Dispatch<React.SetStateAction<Post[]>>;
  handleChangeReplyText: string;
  setHandleChangeReplyText: (value: string) => void;
  toggleApper: () => void;
}
export const InputReply = ({setReplys,handleChangeReplyText,setHandleChangeReplyText,toggleApper}:Props) => {


  const changeReplyText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHandleChangeReplyText(e.target.value);
  }

  const now = new Date();

  const formattedDateTime = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()} ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

  const handleAddReply = () => {
    if(!handleChangeReplyText?.trim()) return;

    const newReply:Post ={
      id: Date.now(),
      text: handleChangeReplyText,
      createdAt: formattedDateTime,
    }

    setReplys((prevReply) => [...prevReply,newReply])
    setHandleChangeReplyText('');
  }
  return (
    <>
      <textarea 
        placeholder="新しいメモを入力.." 
        className="block mt-4 max-w-lg w-md ml-auto rounded-lg p-4 shadow-lg bg-white" 
        rows={4}
        onChange={changeReplyText}
        value={handleChangeReplyText}
      />
      <AddButton onClick={() => { handleAddReply(); toggleApper(); }} />
    </>
  )
}
