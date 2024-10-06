from transformers import LlamaTokenizer, LlamaForCausalLM
import torch

# Initialize the model and tokenizer
model_path = r"C:\Users\krish\.llama\checkpoints\Llama3.2-3B-Instruct"
tokenizer = LlamaTokenizer.from_pretrained(model_path)

# Check if CUDA is available
device = "cuda" if torch.cuda.is_available() else "cpu"

# Load the model
try:
    # Try loading with float16 and device mapping
    model = LlamaForCausalLM.from_pretrained(
        model_path,
        torch_dtype=torch.float16,
        device_map="auto",
        low_cpu_mem_usage=True
    )
except Exception as e:
    print(f"Error loading model with advanced settings: {e}")
    print("Falling back to basic CPU loading...")
    model = LlamaForCausalLM.from_pretrained(model_path)
    model = model.to(device)

print(f"Model loaded on device: {device}")

def generate_code(code: str, prompt: str) -> str:
    # Combine code and prompt into a single input
    input_text = f"Code:\n{code}\n\nPrompt: {prompt}\n\nGenerated code:"
    # Tokenize the input
    inputs = tokenizer(input_text, return_tensors="pt").to(device)
    # Generate response
    with torch.no_grad():
        outputs = model.generate(**inputs, max_new_tokens=256, num_return_sequences=1)
    
    # Decode the output
    generated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)
    # Extract the generated code from the output
    generated_code = generated_text.split("Generated code:")[-1].strip()
    
    return generated_code

if __name__ == "__main__":
    # Test the function
    test_code = "def greet(name):\n    print(f'Hello, {name}!')"
    test_prompt = "Add a function to calculate the square of a number"
    result = generate_code(test_code, test_prompt)
    print(result)
