import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import Prompt from './components/Prompt';
import Suggestions from './components/Suggestions';
import { generateCode } from './services/api';
import { Code2 } from 'lucide-react';

const App: React.FC = () => {
  const [code, setCode] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [suggestion, setSuggestion] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateCode = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await generateCode(code, prompt);
      setSuggestion(result);
    } catch (err) {
      setError('Failed to generate code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold flex items-center">
          <Code2 className="mr-2" /> AI Coder
        </h1>
      </header>
      <main className="flex-grow flex">
        <div className="w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-2">Code Editor</h2>
          <CodeEditor code={code} onChange={setCode} />
          <Prompt 
            prompt={prompt} 
            onPromptChange={setPrompt} 
            onSubmit={handleGenerateCode}
            isLoading={isLoading}
          />
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-2">AI Interface</h2>
          <Suggestions suggestion={suggestion} isLoading={isLoading} error={error} />
        </div>
      </main>
      <footer className="bg-gray-200 p-4 text-center">
        <p>AI Coder - Powered by LLaMA (simulated)</p>
      </footer>
    </div>
  );
};
export default App;
