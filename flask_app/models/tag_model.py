from flask_app.config.mysqlconnection import connectToMySQL

from flask import Flask

class Tag:
    def __init__(self,data):
        self.id = data['id']
        self.tags = data['tags']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    # SELECTS : by id
    @classmethod
    def get_all_blogs_by_tag_id(self,data):
        query = "SELECT * FROM tags WHERE id = %(id)s"
        results = connectToMySQL('portfolio').query_db(query,data)
        return results
    
    # SELECT : all tags
    @classmethod
    def all_tags(self):
        query = "SELECT * FROM tags"
        results = connectToMySQL('portfolio').query_db(query)
        return results