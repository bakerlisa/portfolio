from flask_app import app
from flask import render_template,redirect,request,session,flash

# model imports
# from flask_app.models.book_model import Book
from flask_app.models.tag_model import Tag
# ROUTES


@app.route('/tags/<int:tag_id>')
def tags(tag_id):
    data = {
        "id": tag_id
    }
    tag_info = Tag.get_all_blogs_by_tag_id(data)
    return {"tag_info": tag_info}

@app.route('/tags')
def get_all_tags():
    tags = Tag.all_tags()
    return {"tags": tags}