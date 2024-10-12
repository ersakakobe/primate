from flask import Blueprint

bp = Blueprint('threats', __name__)

from app.threats import routes