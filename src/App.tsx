
import { useState } from 'react';
import './App.css'
import { Header } from './components/Header/Header'
import { InputArea } from './components/InputArea/InputArea'
import { MemoList } from './components/MemoList/MemoList';

function App() {

  type Memo = {
    id:number;
    text:string;
    createdAt:string;
  }
  
  const[memos,setMemos] = useState<Memo[]>([]);
  console.log(memos)

  return (
    <>
      <Header/>
      <main className="p-8 p-3 w-full space-y-8 min-h-screen">
        <div >
          <InputArea setMemos={setMemos} />
          <MemoList memos={memos} />
        </div>
      </main>
    </>
  )
}

export default App
