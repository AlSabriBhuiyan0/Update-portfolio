import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "assistant" | "user";
  content: string;
}

const initialMessage: Message = {
  role: "assistant",
  content: "I answer questions using my resume, projects, and professional experience in data science and full-stack web development.",
};

// Mock responses for demo - would be replaced with actual AI backend
const getResponse = (question: string): string => {
  const q = question.toLowerCase();
  
  if (q.includes("experience") || q.includes("work")) {
    return "I'm a Data Scientist and Full-stack Developer with 3+ years of experience. I turn complex data into actionable insights and build user-friendly web apps with React, Next.js, Node.js, Python, TensorFlow, PyTorch, and tools like Power BI and Tableau.";
  }
  if (q.includes("data science") || q.includes("machine learning") || q.includes("ml")) {
    return "I work with TensorFlow, PyTorch, scikit-learn, Keras, and Deep Learning for data analysis and ML models. I also use Power BI, Tableau, Excel, and Deepnote for visualization and reporting.";
  }
  if (q.includes("web") || q.includes("react") || q.includes("full-stack")) {
    return "I build web applications with React, Next.js, Node.js, HTML, CSS, and JavaScript. My projects include resume builders with live preview and PDF generation, weather apps, and portfolio sites.";
  }
  if (q.includes("project")) {
    return "Key projects: Naureen Food and Beverage Limited (HTML/CSS/JS), LaTeX-Based CV Builder (React, TypeScript, styled-components, Axios), Portfolio (React, Next.js, Tailwind), and Weather App (React, WeatherAPI, Bootstrap).";
  }
  if (q.includes("language") || q.includes("programming") || q.includes("python") || q.includes("skill")) {
    return "I use Java, Python, C, JavaScript for programming. For data and ML: TensorFlow, scikit-learn, Keras, PyTorch. For web: HTML, CSS, React, Next.js. Tools: MongoDB, MariaDB, PowerBI, Tableau, Excel, Deepnote, Selenium, GitHub.";
  }
  if (q.includes("education") || q.includes("degree")) {
    return "I focus on self-taught and continuous learning in Data Science and Web Development — Python, React, ML, and full-stack technologies.";
  }
  if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
    return "You can reach me at contact@alsabribhuiyan.xyz. Links to GitHub and LinkedIn are in the Contact section below.";
  }
  
  return "I can answer questions about my data science and full-stack experience, projects (resume builder, weather app, portfolio), technical skills, and how to get in touch. What would you like to know?";
};

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-assistant", handleOpen);
    return () => window.removeEventListener("open-assistant", handleOpen);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    // Simulate response delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    const response = getResponse(userMessage);
    setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="rounded-full h-14 px-5 shadow-lg"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Ask AI
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-card border-l border-border z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div>
                <h3 className="font-medium text-foreground">AI Assistant</h3>
                <p className="text-xs text-muted-foreground">Resume & Projects</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`${
                    message.role === "assistant"
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block mb-1">
                    {message.role === "assistant" ? "Assistant" : "You"}
                  </span>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              ))}
              {isLoading && (
                <div className="text-muted-foreground">
                  <span className="text-xs font-mono uppercase tracking-wider block mb-1">
                    Assistant
                  </span>
                  <p className="text-sm">...</p>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about projects, skills, or experience"
                  className="flex-1 bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <Button type="submit" size="icon" disabled={!input.trim() || isLoading}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
