from flask import Flask, render_template, url_for, redirect
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("templates/index.html")

@app.route("/austria")
def austria():
    return render_template("templates/austria.html")

@app.route("/afghanistan")
def afghanistan():
    return render_template("templates/afghanistan.html")
