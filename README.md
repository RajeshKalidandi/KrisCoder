# KrisCoder

KrisCoder is an AI-assisted coding application that aims to integrate the LLaMA 3.2B model for code generation and assistance.

## Project Structure

KrisCoder/ ├── src/ │ ├── components/ │ │ ├── CodeEditor.tsx │ │ ├── Prompt.tsx │ │ └── Suggestions.tsx │ ├── services/ │ │ └── api.ts │ ├── App.tsx │ ├── index.css │ ├── main.tsx │ └── vite-env.d.ts ├── backend/ │ ├── llama_integration.py │ ├── package.json │ └── server.js ├── eslint.config.js ├── index.html ├── package.json ├── postcss.config.js ├── tailwind.config.js ├── tsconfig.app.json ├── tsconfig.json ├── tsconfig.node.json └── vite.config.ts

## Development Progress

1. Set up a basic React application using Vite with TypeScript.
2. Created components for CodeEditor, Prompt, and Suggestions.
3. Implemented a basic Node.js backend with Express.
4. Attempted to integrate the LLaMA 3.2B model using various Python libraries.

## Current Status

Development has been temporarily paused due to challenges in integrating the LLaMA 3.2B model. The main issues encountered are:

1. The downloaded model files are not in a format directly compatible with popular libraries like Hugging Face Transformers.
2. Attempts to use alternative libraries like `llama-cpp-python` have been unsuccessful due to compatibility issues and installation problems on Windows.

## Next Steps

To continue development, the following steps are needed:

1. Research and identify the correct format and structure required for the LLaMA 3.2B model files.
2. Investigate tools or methods to convert the existing model files to a compatible format.
3. Explore alternative libraries or approaches that can work with the current model file format.
4. Consider using a pre-converted version of the LLaMA 3.2B model that's compatible with the chosen library.

## Getting Started

Due to the current integration challenges, the project is not yet functional. However, you can set up the development environment as follows:

1. Clone the repository.
2. Install Node.js dependencies:

npm install

3. Set up a Python virtual environment and install Python dependencies:

python -m venv ai-coder-env ai-coder-env\Scripts\activate pip install transformers torch llama-cpp-python


Note: The Python environment setup may vary depending on the final integration approach chosen for the LLaMA model.

## Contributing

Contributions to resolve the model integration challenges are welcome. Please open an issue to discuss potential solutions before submitting a pull request.
