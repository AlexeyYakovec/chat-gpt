import "./App.css";
import ChatBody from "./components/ChatBody";
import { ChatInput } from "./components/ChatInput";

function App() {
   return (
      <div
         className="bg-[#1a232e] h-screen py-6 relative sm:px-16 px-12 text-white 
	overflow-hidden flex flex-col justify-between align-middle App"
      >
         <div className="gradient-01 z-0 absolute"></div>
         <div className="gradient-02 z-0 absolute"></div>
         <header className="uppercase font-bold text-2x1 text-center mb-3">
            ChatGpt
         </header>
         <div className="h-[90%] overflow-auto w-full max-w-4x1 min-w-[20rem] py-8 px-4 self-center">
            <ChatBody />
         </div>

         <div className="w-full max-w-4x1 min-w-[20rem] self-center">
            <ChatInput />
         </div>
      </div>
   );
}

export default App;
