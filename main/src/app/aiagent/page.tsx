'use client';
import React, { useState, useRef, useEffect } from 'react';
import { callOpenAI } from '../../hooks/gaiaAgentCall';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = { role: 'system' as const, content: 'You are a strategic reasoner.' };

const userAvatar = (
  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-black to-neutral-700 flex items-center justify-center text-white font-bold shadow-md">
    <span>You</span>
  </div>
);
const assistantAvatar = (
  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-300 to-white flex items-center justify-center text-black font-bold shadow-md">
    <span>🤖</span>
  </div>
);

const AiAgentChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);
    try {
      const openAIMessages = [
        SYSTEM_PROMPT,
        ...newMessages,
      ];
      const aiContent = await callOpenAI(openAIMessages);
      const aiMessage: Message = { role: 'assistant', content: aiContent };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Error getting response.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-300 dark:from-black dark:to-neutral-900">
      {/* Main Content */}
      <main className="relative z-20 flex flex-col items-center justify-center gap-4 px-4 py-24 sm:py-32 w-full">
        <div className="w-full max-w-2xl bg-white/80 dark:bg-black/80 rounded-3xl shadow-2xl flex flex-col min-h-[600px] border border-neutral-200 dark:border-neutral-800 backdrop-blur-xl">
          <header className="px-8 pt-8 pb-4 rounded-t-3xl bg-gradient-to-r from-black to-neutral-800 text-white text-center font-bold text-2xl shadow-md">
            <span className="drop-shadow">Gaia Agent</span>
          </header>
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6 bg-transparent">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={
                  msg.role === 'user'
                    ? 'flex items-end justify-end gap-3'
                    : 'flex items-end justify-start gap-3'
                }
              >
                {msg.role === 'assistant' && assistantAvatar}
                <div
                  className={
                    `max-w-[70%] px-5 py-4 rounded-2xl text-base whitespace-pre-wrap break-words shadow-lg ` +
                    (msg.role === 'user'
                      ? 'bg-gradient-to-br from-black to-neutral-800 text-white rounded-br-lg border border-neutral-700'
                      : 'bg-white dark:bg-neutral-900 text-black dark:text-white rounded-bl-lg border border-neutral-200 dark:border-neutral-700')
                  }
                >
                  {msg.content}
                </div>
                {msg.role === 'user' && userAvatar}
              </div>
            ))}
            {loading && (
              <div className="flex items-end justify-start gap-3">
                {assistantAvatar}
                <div className="bg-white dark:bg-neutral-900 text-black dark:text-white rounded-2xl rounded-bl-lg px-5 py-4 text-base shadow-lg border border-neutral-200 dark:border-neutral-700">
                  AI is typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form
            onSubmit={e => { e.preventDefault(); sendMessage(); }}
            className="flex gap-3 px-6 py-6 border-t border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 rounded-b-3xl backdrop-blur-xl"
          >
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !loading) sendMessage(); }}
              className="flex-1 px-5 py-4 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-base focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition shadow-sm"
              placeholder="Type your message..."
              disabled={loading}
              autoFocus
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-black dark:bg-white text-white dark:text-black font-semibold px-8 py-4 rounded-xl shadow-lg transition hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed border border-black dark:border-white"
            >
              Send
            </button>
          </form>
        </div>
      </main>
      {/* Subtle overlay for effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-black/30 dark:from-black/60 dark:to-white/10 z-10" />
    </div>
  );
};

export default AiAgentChat; 