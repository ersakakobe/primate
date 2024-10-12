from flask import Flask
from flask_cors import CORS
from config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)

    from app.auth import bp as auth_bp
    app.register_blueprint(auth_bp)

    #from app.threats import bp as threats_bp
    #app.register_blueprint(threats_bp)

    #from app.intel_sources import bp as intel_sources_bp
    #app.register_blueprint(intel_sources_bp)

    @app.route('/')
    def hello():
        return "Hello, Primate!"

    return app