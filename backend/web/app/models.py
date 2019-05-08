from app import db
from passlib.context import CryptContext

pwd_context = CryptContext(
  # Replace this list with the hash(es) you wish to support.
  # this example sets pbkdf2_sha256 as the default.
  schemes=["pbkdf2_sha256"],

  # Automatically mark all but first hasher in list as deprecated.
  # (this will be the default in Passlib 2.0)
  deprecated="auto",

  # Optionally, set the number of rounds that should be used.
  # Appropriate values may vary for different schemes,
  # and the amount of time you wish it to take.
  # Leaving this alone is usually safe, and will use passlib's defaults.
  ## pbkdf2_sha256__rounds = 29000,
  )

class JsonModel(object):
  def as_dict(self):
    return {c.name: getattr(self, c.name) for c in self.__table__.columns}

class VPNUser(db.Model, JsonModel):
  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(80), unique = True, nullable = False)
  email = db.Column(db.String(120), unique = True)
  password_hash = db.Column(db.String(128), nullable = False)

  def __repr__(self):
    return '<VPNUser %r>' % self.username

  def hash_password(self, password):
    self.password_hash = pwd_context.hash(password)

  def verify_password(self, password):
    return pwd_context.verify(password, self.password_hash)
