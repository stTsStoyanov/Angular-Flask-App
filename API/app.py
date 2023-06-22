from flask import Flask, jsonify, request
from datetime import date, datetime
from flask_cors import CORS, cross_origin
from flask_swagger import swagger

app = Flask(__name__)
CORS(app)

def compute_age(born):
    today = date.today()
    return today.year - born.year - ((today.month, today.day) < (born.month, born.day))

def get_valid_date(date_string):
    try:
        # Attempt to parse the date string using the datetime module
        date = datetime.strptime(date_string, "%Y-%m-%d")
        return date.date() # Return the date in the same format
    except ValueError:
        return None  # Return None if the date format is invalid

@app.route('/people/calculate-age', methods=['POST'])
def calculate_age():
    data = request.get_json()
    birthday = data['birthday']
    parsedBirthday = get_valid_date(birthday)

    if(parsedBirthday == None):
        return "Date format is not valid", 400
    
    if(datetime.now().date() < parsedBirthday):
        return "Date cannot be in the future", 400
    
    age = compute_age(parsedBirthday)
    response = jsonify({'age': age})
    return response


@app.route('/swagger.json', methods=['GET'])
def swagger_json():
    with open('./static/swagger/swagger.json') as file:
        swagger_data = file.read()
    return jsonify(swagger_data)

  

if __name__ == '__main__':
    app.run()



# @app.route('./static/swagger/swagger.json', methods=['GET'])
# def swagger_json():
#     swag = swagger(app)
#     swag['info']['version'] = "1.0"
#     swag['info']['title'] = "Your API Title"
#     return jsonify(swag)
