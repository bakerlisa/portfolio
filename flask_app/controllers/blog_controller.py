from flask_app import app
from flask import render_template,redirect,request,session,flash

@app.route("/members")
def members():
    return{"members": ["Members1", "member2", "Members3"]}
