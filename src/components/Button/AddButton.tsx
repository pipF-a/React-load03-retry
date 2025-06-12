import { IoIosSend } from "react-icons/io";

type AddButtonProps = {
  onClick: () => void;
}

export const AddButton = ({ onClick }: AddButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className="px-8 py-3 bg-emerald-600 text-sm text-white rounded-lg hover:bg-emerald-700"
    >
      <IoIosSend />
    </button>
  )
}
