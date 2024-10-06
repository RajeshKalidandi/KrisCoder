import React from 'react';

interface SuggestionsProps {
  suggestion: string;
  isLoading: boolean;
  error: string | null;
}

const Suggestions: React.FC<SuggestionsProps> = ({ suggestion, isLoading, error }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Suggestions</h2>
      {isLoading && <p className="text-gray-600">Loading suggestions...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!isLoading && !error && suggestion && (
        <pre className="p-4 bg-gray-100 rounded overflow-x-auto">
          <code>{suggestion}</code>
        </pre>
      )}
      {!isLoading && !error && !suggestion && (
        <p className="text-gray-600">No suggestions yet. Try generating some code!</p>
      )}
    </div>
  );
};
export default Suggestions;
