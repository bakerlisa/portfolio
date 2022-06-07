from flask_app.config.mysqlconnection import connectToMySQL

from flask import Flask

class Tag:
    def __init__(self,data):
        self.id = data['id']
        self.tags = data['tags']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all_blogs_by_tag_id(self,data):
        query = "SELECT * FROM tags WHERE id = %(id)s"
        results = connectToMySQL('portfolio').query_db(query,data)
        return results