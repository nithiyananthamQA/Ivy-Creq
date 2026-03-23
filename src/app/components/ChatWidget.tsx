import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Mock AI responses based on keywords
const getMockResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hi there! 👋 Welcome to Ivy Crew. How can I help you today?";
  }
  
  if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
    return "Our products range from $50 to $200. Check out our Sale section for great deals! Would you like me to show you specific items?";
  }
  
  if (message.includes('shipping') || message.includes('delivery')) {
    return "We offer FREE shipping on orders over ₹2,000! Standard shipping takes 3-5 business days. Need it faster? We also offer expedited options.";
  }
  
  if (message.includes('return') || message.includes('refund')) {
    return "We have a hassle-free 30-day return policy. All items must be unworn with tags attached. Visit our Shipping & Returns page for full details.";
  }
  
  if (message.includes('size') || message.includes('fit') || message.includes('sizing')) {
    return "We have a comprehensive size guide available! Most customers say our items fit true to size. Would you like help finding your perfect fit?";
  }
  
  if (message.includes('rewards') || message.includes('points')) {
    return "Join TM Rewards for FREE! Earn points on every purchase, get exclusive offers, and enjoy member-only perks. Sign up takes just a minute!";
  }
  
  if (message.includes('track') || message.includes('order') || message.includes('status')) {
    return "You can track your order from your account page. If you checked out as a guest, use the tracking link in your confirmation email. Need help finding it?";
  }
  
  if (message.includes('women') || message.includes("women's")) {
    return "Our women's collection features stylish and comfortable pieces perfect for golf and everyday wear. Browse tops, bottoms, and accessories designed for the modern woman.";
  }
  
  if (message.includes('men') || message.includes("men's")) {
    return "Check out our men's collection! We have everything from performance polos to casual wear, designed with style and comfort in mind.";
  }
  
  if (message.includes('sale') || message.includes('discount') || message.includes('deal')) {
    return "Great timing! We have amazing deals in our Sale section. Plus, join our newsletter for exclusive offers and early access to sales!";
  }
  
  if (message.includes('contact') || message.includes('support') || message.includes('help')) {
    return "You can reach our customer service team at support@ivycrew.com or call us at 1-800-IVY-CREW. We're here Mon-Fri 9am-6pm PST.";
  }
  
  if (message.includes('new') || message.includes('latest') || message.includes('arrival')) {
    return "Check out our New Arrivals section for the latest styles! We're constantly adding fresh pieces to keep your wardrobe on point.";
  }
  
  if (message.includes('thank') || message.includes('thanks')) {
    return "You're very welcome! Is there anything else I can help you with? 😊";
  }
  
  if (message.includes('bye') || message.includes('goodbye')) {
    return "Thanks for chatting! Have a great day and happy shopping! 👋";
  }
  
  // Default response
  return "Thanks for your message! I'm here to help with questions about our products, shipping, returns, or anything else. What would you like to know?";
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm the Ivy Crew assistant. How can I help you today? 👋",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev: Message[]) => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI "thinking" and response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getMockResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev: Message[]) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 z-50 rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-gray-800 hover:bg-gray-700' : 'bg-black hover:bg-gray-800'
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-40 w-[calc(100vw-2rem)] max-w-[400px] h-[500px] md:h-[600px] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-black text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">IC</span>
              </div>
              <div>
                <h3 className="font-bold text-sm">Ivy Crew Assistant</h3>
                <p className="text-xs text-gray-300">Online • Here to help</p>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message: Message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-black text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                >
                  <p className="text-sm break-words">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-gray-300' : 'text-gray-500'
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions (optional) */}
          <div className="px-4 py-2 bg-white border-t border-gray-200 flex gap-2 overflow-x-auto">
            {messages.length <= 1 && (
              <>
                <button
                  onClick={() => {
                    setInputMessage('Tell me about shipping');
                    setTimeout(() => handleSendMessage(), 100);
                  }}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap"
                >
                  📦 Shipping
                </button>
                <button
                  onClick={() => {
                    setInputMessage('How do I join rewards?');
                    setTimeout(() => handleSendMessage(), 100);
                  }}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap"
                >
                  🎁 Rewards
                </button>
                <button
                  onClick={() => {
                    setInputMessage("What's on sale?");
                    setTimeout(() => handleSendMessage(), 100);
                  }}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full whitespace-nowrap"
                >
                  💰 Sales
                </button>
              </>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-black text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-black text-white p-2 rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
