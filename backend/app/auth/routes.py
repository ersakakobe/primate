from app.auth import bp
from flask import jsonify
from app.auth.auth import requires_auth

@bp.route('/api/public')
def public():
    return jsonify(message="This is a public endpoint")

@bp.route('/api/private')
@requires_auth
def private():
    return jsonify(message="This is a private endpoint")