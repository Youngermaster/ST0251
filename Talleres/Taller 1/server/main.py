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
    return "Method used: %s" % request.method

# request.method
@app.route("/measurements", methods=['GET'])
def getMean():
    auxiliaryMean = None
    for measurement in measurements:
        for value in measurement['value']:
            auxiliaryMean = value
    print(auxiliaryMean)
    return str(auxiliaryMean)

if __name__ == "__main__":
    app.run(port=5000, debug=True)