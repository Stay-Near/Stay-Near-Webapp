from flask import render_template, Blueprint

hello_blueprint = Blueprint('hello', __name__)
user_profile = Blueprint('user_profile', __name__)
log_in = Blueprint('log_in', __name__)

# Puede ser util en el futuro
# https://stackoverflow.com/questions/30620276/flask-and-react-routing

@hello_blueprint.route('/')
def index():
    return render_template('index.html')

@user_profile.route('/profile')
def index():
    return render_template('index.html')

@log_in.route('/login')
def index():
    return render_template('index.html')
