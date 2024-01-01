from flask import Flask, render_template ,redirect, url_for
app = Flask(__name__)


@app.route("/")
def loginPage():
    return render_template('auth/Login.html')


@app.route("/register")
def registerPage():
    return render_template('auth/Register.html')

@app.route("/admin")
def admin():
    return render_template('admin/admin.html')

@app.route("/product")
def product():
    return render_template('admin/product.html')

@app.route("/detials")
def detaild():
    return render_template('admin/detail-product.html')

@app.route("/inventory")
def inventory():
    return render_template('admin/inventory.html')

@app.route("/shop")
def shop():
    return render_template('admin/shop.html')

@app.route("/warehouse")
def warehouse():
    return render_template('admin/warehouse.html')






if __name__ == "__main__":
    app.run(debug=True)
