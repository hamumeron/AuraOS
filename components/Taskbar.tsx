import { useAppStore } from "../store/useAppStore";

export default function Taskbar() {
  const openApp = useAppStore((s) => s.openApp);

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white px-4 py-2 flex space-x-4">
      <button onClick={() => openApp("chrome")}>🌐 Chrome</button>
      <button onClick={() => openApp("calculator")}>🧮 電卓</button>
      <button onClick={() => openApp("todo")}>📝 ToDo</button>
    </div>
  );
}
