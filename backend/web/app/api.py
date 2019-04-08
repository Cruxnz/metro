from app import app
from flask import jsonify
from app.models import VPNUser

@app.route('/users', methods = ['GET'])
def index():
  users = VPNUser.query.all()
  print(users)
  return jsonify([u.as_dict() for u in users])
