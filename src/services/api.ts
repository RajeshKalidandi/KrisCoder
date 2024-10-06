const API_URL = 'http://localhost:3000/api';

export async function generateCode(code: string, prompt: string): Promise<string> {
  try {
    // Simulate network latency
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = await fetch(`${API_URL}/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, prompt }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'An unknown error occurred');
    }

    return data.suggestion;
  } catch (error) {
    console.error('Error generating code:', error);
    throw error;
  }
}
