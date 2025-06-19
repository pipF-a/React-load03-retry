import { useState } from 'react';
import './App.css'
import { Header } from './components/Header/Header'
import { InputMemoArea } from './components/InputMemoArea/InputMemoArea'
import { MemoList } from './components/MemoList/MemoList';
import type { Post } from './types';

function App() {

  // 入力内容格納用ステート
  const[memos,setMemos] = useState<Post[]>([]);
  const[replys,setReplys] = useState<Post[]>([]);

  //アクティブ入力格納用ステート
  const[handleChangeMemoText,setHandleChangeMemoText] = useState<string>('');
  //アクティブ入力格納用ステート
  const[handleChangeReplyText,setHandleChangeReplyText] = useState<string>('');

  // テキストエリアの表示状態用のステート
  const [apperReplyInput,setApperReplyInput] = useState(false);


  const toggleApper = () => {
    setApperReplyInput(prev => !prev);
  }

  return (
    <>
      <Header/>
      <main className="p-3 w-full space-y-8 min-h-screen">
        <div >
          <InputMemoArea setMemos={setMemos} handleChangeMemoText={handleChangeMemoText} setHandleChangeMemoText={setHandleChangeMemoText} />
          <MemoList 
            memos={memos} 
            replys={replys} 
            setReplys={setReplys} 
            handleChangeReplyText={handleChangeReplyText}
            setHandleChangeReplyText={setHandleChangeReplyText}
            setMemos={setMemos}
            apperReplyInput={apperReplyInput}
            // setApperReplyInput={setApperReplyInput}
            toggleApper={toggleApper}
          />
        </div>
      </main>
    </>
  )
}

export default App
