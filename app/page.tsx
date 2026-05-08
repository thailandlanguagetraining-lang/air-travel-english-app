"use client";

import { useConversation, ConversationProvider } from "@elevenlabs/react";

function PracticeContent() {
  const conversation = useConversation({
    onConnect: () => {
      console.log("!!! CONNECTED SUCCESSFULLY !!!");
      // This will help us see if the agent is sending data
    },
    onMessage: (message) => console.log("Agent said:", message),
    onError: (err) => console.error("SDK Error:", err),
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-xl font-bold">Air Travel English Lab</h1>
      
      <button
        onClick={() => conversation.startSession({ agentId: "agent_5701kqrx6wrzeacvwwjkmsxp78rx" })}
        className="px-10 py-5 bg-green-600 text-white rounded-full font-black shadow-lg hover:bg-green-700"
      >
        CLICK & SAY "HELLO"
      </button>

      <div className="p-4 bg-gray-100 rounded-lg font-mono text-sm">
        Status: <span className={conversation.status === 'connected' ? 'text-green-600 font-bold' : 'text-red-500'}>
          {conversation.status}
        </span>
      </div>

      {conversation.status === 'connected' && (
        <p className="animate-bounce text-blue-600 font-bold">Agent is listening... Speak now!</p>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ConversationProvider>
      <PracticeContent />
    </ConversationProvider>
  );
}