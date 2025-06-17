
import { useState } from 'react';
import './App.css'
import { Header } from './components/Header/Header'
import { InputMemoArea } from './components/InputMemoArea/InputMemoArea'
import { MemoList } from './components/MemoList/MemoList';
import type { Post } from './types';

function App() {

  
  const[memos,setMemos] = useState<Post[]>([]);
  const[reply,setReply] = useState<Post[]>([]);
  return (
    <>
      <Header/>
      <main className="p-3 w-full space-y-8 min-h-screen">
        <div >
          <InputMemoArea setMemos={setMemos} />
          <MemoList memos={memos} />
        </div>
      </main>
    </>
  )
}

export default App
