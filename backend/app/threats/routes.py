from app.threats import bp
from flask import jsonify

@bp.route('/api/threats')
def get_threats():
    threats = [
        {"id": 1, "name": "Phishing Campaign", "severity": "High", "status": "Active"},
        {"id": 2, "name": "Zero-day Vulnerability", "severity": "Critical", "status": "Investigating"},
        {"id": 3, "name": "DDoS Attack", "severity": "Medium", "status": "Mitigated"}
    ]
    return jsonify(threats)

@bp.route('/api/threats/<int:threat_id>')
def get_threat(threat_id):
    # This is a placeholder. In a real application, you would fetch this from a database.
    threat = {"id": threat_id, "name": "Sample Threat", "severity": "Medium", "status": "Active"}
    return jsonify(threat)