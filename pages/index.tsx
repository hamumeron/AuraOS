import Head from "next/head";
import Taskbar from "../components/Taskbar";
import Window from "../components/Window";
import AppChrome from "../components/AppChrome";
import { useAppStore } from "../store/useAppStore";

export default function Home() {
  const { apps, closeApp } = useAppStore();

  return (
    <>
      <Head>
        <title>AuraOS</title>
      </Head>
      <main className="h-screen w-screen bg-gradient-to-br from-gray-900 to-black text-white">
        {apps["chrome"] && (
          <Window title="Aura Chrome" onClose={() => closeApp("chrome")}>
            <AppChrome />
          </Window>
        )}
        {apps["calculator"] && (
          <Window title="Calculator" onClose={() => closeApp("calculator")}>
            <p>🧮 開発中...</p>
          </Window>
        )}
        {apps["todo"] && (
          <Window title="ToDo List" onClose={() => closeApp("todo")}>
            <p>📝 開発中...</p>
          </Window>
        )}

        <Taskbar />
      </main>
    </>
  );
}
