import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://metro:password@host.docker.internal/metro_db'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://%s:%s@%s/%s' % (
#     # ARGS.dbuser, ARGS.dbpass, ARGS.dbhost, ARGS.dbname
#     os.environ['DBUSER'], os.environ['DBPASS'], os.environ['DBHOST'], os.environ['DBNAME']
# )
db = SQLAlchemy(app)
from app import views
from app import models
