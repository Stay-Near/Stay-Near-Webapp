from flask import Flask

app = Flask(__name__,
            static_folder='./public',
            template_folder="./static")

# * Don't move this upwards
from templates.hello.views import hello_blueprint
from templates.hello.views import user_profile
from templates.hello.views import log_in

# register blueprint
app.register_blueprint(hello_blueprint)
app.register_blueprint(user_profile)
app.register_blueprint(log_in)
