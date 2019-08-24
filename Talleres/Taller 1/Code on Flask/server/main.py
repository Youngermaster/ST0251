from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

measurement_type = {'sensor': 'FC28', 'variable': 'HUMEDAD TIERRA', 'units': '%'}
measurements = [
    {'fecha': '2019-08-07 12:24:00', **measurement_type, 'value': 10.3},
    {'fecha': '2019-08-12 16:24:00', **measurement_type, 'value': 50.3},
    {'fecha': '2019-08-07 12:24:00', **measurement_type, 'value': 8.3},
    {'fecha': '2019-08-07 12:24:00', **measurement_type, 'value': 68.4},
    {'fecha': '2019-08-07 12:24:00', **measurement_type, 'value': 3.31},
]

@app.route("/")
def index():
    return "Hello, the Method used was: %s" % request.method

@app.route("/api/measurements", methods=['POST'])
def add_measurement():
    print(request.json)
    measurements.append(request.json)
    return "received"

@app.route("/api/measurements", methods=['GET'])
def get_all():
    return jsonify(measurements)

@app.route("/api/measurements/<measurement_id>", methods=['PUT'])
def update_measurement():
    pass

@app.route("/api/measurements/<measurement_id>", methods=['DELETE'])
def delete_measurement():
    pass

@app.route("/api/measurements/greaterThan/<measurement_id>", methods=['GET'])
def get_greater_than():
    pass

if __name__ == "__main__":
    app.run(port=5000, debug=True)