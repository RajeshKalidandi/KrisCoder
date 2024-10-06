import React from 'react';

interface PromptProps {
  prompt: string;
  onPromptChange: (prompt: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const Prompt: React.FC<PromptProps> = ({ prompt, onPromptChange, onSubmit, isLoading }) => {
  return (
    <div className="mt-4">
      <textarea
        className="w-full p-2 border rounded"
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        placeholder="Enter your prompt here..."
        rows={4}
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
        onClick={onSubmit}
        disabled={isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate Code'}
      </button>
    </div>
  );
};
export default Prompt;
