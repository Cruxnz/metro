from app import app, db
from flask import jsonify, request, abort
from app.models import VPNUser

@app.route('/api/users', methods = ['POST'])
def new_user():
  username = request.json.get('username')
  email = request.json.get('email')
  password = request.json.get('password')
  if username is None or password is None:
    abort(400) # missing arguments
  if VPNUser.query.filter_by(username = username).first() is not None:
    abort(400) # existing username
  if email and VPNUser.query.filter_by(email = email).first() is not None:
    abort(400) # existing email
  user = VPNUser(username = username, email = email)
  user.hash_password(password)
  db.session.add(user)
  db.session.commit()
  return jsonify({ 'username': user.username, 'email': user.email }), 201, {'Location': url_for('get_user', id = user.id, _external = True)}
