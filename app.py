from meta_ai_api import MetaAI
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

ai = MetaAI()

@app.route('/ask_ai', methods=["POST"])
def ask_ai():
    data = request.get_json()
    message = data.get("message")
    response = ai.prompt(message=message)

    return jsonify({'response': response["message"]})


if __name__ == '__main__':
    app.run(debug=True)