# __init__.py
from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
app.secret_key = "shhhhhh be quite"