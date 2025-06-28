import { ReactNode } from "react";

type Props = {
  title: string;
  onClose: () => void;
  children: ReactNode;
};

export default function Window({ title, onClose, children }: Props) {
  return (
    <div className="absolute top-20 left-20 w-96 bg-white text-black rounded shadow-xl">
      <div className="bg-gray-800 text-white px-3 py-2 flex justify-between">
        <span>{title}</span>
        <button onClick={onClose}>✕</button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

