from flask import Flask
from flask_cors import CORS
from config import Config
from app.auth import auth_bp
from app.threats import threats_bp
from app.intel_sources import intel_sources_bp
# Import future modules here

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)

    # Register blueprints
    app.register_blueprint(auth_bp)
    app.register_blueprint(threats_bp)
    app.register_blueprint(intel_sources_bp)
    # Register future module blueprints here

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=Config.PORT)