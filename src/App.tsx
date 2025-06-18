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
  const[handleChangeText,setHandleChangeText] = useState<string>('');


  return (
    <>
      <Header/>
      <main className="p-3 w-full space-y-8 min-h-screen">
        <div >
          <InputMemoArea setMemos={setMemos} handleChangeText={handleChangeText} setHandleChangeText={setHandleChangeText} />
          <MemoList 
            memos={memos} 
            replys={replys} 
            setReplys={setReplys} 
            handleChangeText={handleChangeText}
            setHandleChangeText={setHandleChangeText}
            setMemos={setMemos}
          />
        </div>
      </main>
    </>
  )
}

export default App
