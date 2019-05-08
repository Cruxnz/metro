from app import app, db
from flask import jsonify, request, abort, make_response
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
  return jsonify({ 'username': user.username, 'email': user.email }), 201

@app.route('/api/login', methods = ['POST'])
def login():
  # get the post data
  post_data = request.get_json()
  try:
    # fetch the user data
    user = VPNUser.query.filter_by(
      username = post_data.get('username')
    ).first()
    if user and user.verify_password(post_data.get('password')):
      auth_token = user.encode_auth_token(user.id)
      if auth_token:
        responseObject = {
          'status': 'success',
          'message': 'Successfully logged in.',
          'auth_token': auth_token.decode()
        }
        return make_response(jsonify(responseObject)), 200
    else:
      responseObject = {
        'status': 'fail',
        'message': 'Login credentials incorrect.'
      }
      return make_response(jsonify(responseObject)), 400
  except Exception as e:
    print(e)
    responseObject = {
      'status': 'fail',
      'message': 'Try again'
    }
    return make_response(jsonify(responseObject)), 500
