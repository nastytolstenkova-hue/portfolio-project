
import LeftBar from "./LeftBar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="flex h-dvh w-full overflow-hidden">
      <LeftBar /> 
      <main className="flex-1 bg-white dark:bg-zinc-900 transition-colors duration-500 text:black dark:text-white p-8 overflow-y-auto">
        <Outlet /> 
      </main>
    </div>
  );
}