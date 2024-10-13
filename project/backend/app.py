import openai
import json
import os
from flask import Flask, request, jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS(app, resource={r"/*": {"origins": "*"}})

openai.api_key = os.getenv('OPENAI_API_KEY')  # Use the API key stored in .env

# Load the malignant features data
with open("malignant_features.json", "r") as f:
    malignant_dict = json.load(f)

# Function to get ChatGPT response
def get_chatgpt_response(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a grader, giving a student feedback for their answer to identifying a lesion."},
            {"role": "user", "content": prompt},
        ],
        max_tokens=150,
        temperature=0.7, 
    )
    return response['choices'][0]['message']['content']

@app.route('/chat', methods=['POST'])
def chat():
    """Handle requests from the frontend."""
    data = request.json
    user_diagnosis = data.get('diagnosis')  # Get student’s diagnosis
    user_reasoning = data.get('reasoning')  # Get student’s reasoning
    lesion_id = data.get('image_name')  # Get lesion ID

    # Default values in case lesion is benign
    expected_id = 'benign'
    expected_reasoning = 'it looks fine.'
    
    # Check if lesion is malignant and set the correct answer
    if lesion_id in malignant_dict:
        expected_id = 'malignant'
        expected_reasoning = ", ".join(malignant_dict[lesion_id]) + " are all significant."

    # Determine if the student's answer is correct
    is_correct = user_diagnosis.lower() == expected_id.lower()

    # Build prompt for ChatGPT
    chat_input = (f"""
A student looked at a picture of a lesion and gives 2 responses: an answer and a reasoning. Please evaluate the answer and reasoning separately (emphasis on separate).

If the correct answer is benign and the student says this, tell them their answer is correct and congratulate them, regardless of reasoning. If the correct answer is benign, ignore the reasoning.

If the correct answer is malignant, do the following steps: 
1) First tell the student if their answer is correct or not, regardless of reasoning.
2) Give them feedback to guide them if their reasoning is not correct, directly referencing the correct reasoning.

Otherwise, congratulate the student.

student answer: {user_diagnosis}. 
student reasoning: {user_reasoning}. 
The correct answer is {expected_id}. 
The correct reasoning is {expected_reasoning}.
"""
    )
    
    # Get ChatGPT response
    reply = get_chatgpt_response(chat_input)

    # Send response back to the frontend with feedback and correctness status
    return jsonify({'reply': reply, 'correct': is_correct})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
