from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

inventory = []

@app.route('/app/getItems', methods=['GET'])
def get_items():
    return jsonify(inventory)

@app.route('/app/addItem', methods=['POST'])
def add_item():
    params = request.get_json()
    data = params['item']
    if 'name' in data and 'description' in data and 'price' in data:
        item = {
            'id': len(inventory) + 1,
            'name': data['name'],
            'description': data['description'],
            'price': data['price'],
        }
        inventory.append(item)
        return jsonify(item), 201
    return jsonify({'error': 'Invalid data'}), 400

@app.route('/app/updateItem', methods=['PUT'])
def update_item():
    params = request.get_json()
    item_id = params['id']
    data = params['item']
    for item in inventory:
        if item['id'] == item_id:
            item.update(data)
            return jsonify(item)
    return jsonify({'error': 'Item not found'}), 404

@app.route('/app/deleteItem', methods=['DELETE'])
def delete_item():
    try:
        # Get JSON payload from request
        params = request.get_json()
        
        if not params or 'id' not in params:
            return jsonify({'error': 'Invalid request format'}), 400
        
        item_id = params['id']
        
        global inventory
        # Remove the item with the given ID
        inventory = [item for item in inventory if item['id'] != item_id]
        
        return jsonify({'result': 'Item deleted'}), 200

    except Exception as e:
        print(f"Exception occurred: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(debug=True)
