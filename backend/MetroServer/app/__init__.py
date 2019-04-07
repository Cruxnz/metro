from flask import Flask
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://metro:password@localhost/metro_db'
db = SQLAlchemy(app)
from app import views
from app import models
