"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What are Claude Code hooks?",
    answer:
      "Hooks are user-defined shell commands or scripts that run automatically at specific points during a Claude Code session. They let you automate tasks like linting on save, sending notifications, injecting context, and enforcing permissions — without modifying Claude Code itself.",
  },
  {
    question: "How do I install a hook?",
    answer:
      'Add the hook configuration to your project\'s .claude/settings.json or your global ~/.claude/settings.json file under the "hooks" key. Each hook specifies an event (like SessionStart or PreToolUse) and a command to run when that event fires.',
  },
  {
    question: "What events can hooks listen to?",
    answer:
      "Hooks can respond to session events (SessionStart, SessionEnd), prompt events (UserPromptSubmit, StopFailure), tool events (PreToolUse, PostToolUse), notification events, context events (PreCompact, InstructionsLoaded), file changes, directory changes, and agent team events (SubagentStart, TeammateIdle).",
  },
  {
    question: "What are the different hook types?",
    answer:
      'There are four hook types: "command" runs a shell command, "http" sends a webhook to a URL, "prompt" injects text into the conversation context, and "agent" delegates to an LLM for validation or decision-making.',
  },
  {
    question: "Can hooks modify Claude's behavior?",
    answer:
      'Yes. Prompt-type hooks can inject instructions into the conversation. PreToolUse hooks can block or modify tool calls before they execute. Hooks on UserPromptSubmit can validate or transform prompts. This makes hooks a powerful mechanism for guardrails and customization.',
  },
  {
    question: "Are hooks safe to use?",
    answer:
      "Hooks run with your local user permissions, so treat them like any script you'd run on your machine. Review hook code before installing, especially from third-party sources. HookHub links directly to source repositories so you can audit the code yourself.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-slate-800 rounded-xl overflow-hidden transition-colors hover:border-slate-700">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-6 py-5 text-left"
      >
        <span className="font-medium text-slate-200 pr-4">{question}</span>
        <svg
          className={`w-5 h-5 shrink-0 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-slate-400 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 mt-8 border-t border-slate-800/50">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400">
          Everything you need to know about Claude Code hooks.
        </p>
      </div>
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
