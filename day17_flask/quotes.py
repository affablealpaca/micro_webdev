from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    color=['orange','lightblue','magenta']
    return render_template('index.html', quote1="Socrates quote here lol", colors = color)

@app.route('/about')
def about():
    return '<h1>About us</h1>'

@app.route('/quotes')
def quotes():
    return '<h1>Quotes</h1>'