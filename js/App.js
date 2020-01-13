//clase para el producto
class Product{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
    //se pueden agregar mas metodos por ejemplo
    //addProduct
    //deleteProducto    
}

//clase para la interfaz
class UI{
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        //card una vez se inserta el producto
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Product Name</strong> : ${product.name}
                <strong>Product Price</strong> : ${product.price}
                <strong>Product Year</strong> : ${product.year}
                <a href="#" class = "btn btn-danger" name="delete">Delete</a>
            </div>
        </div>
        `;

        productList.appendChild(element);

    }

    resertForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.parentElement.remove();
        }
    }

    showMessage(){

    }
}

//Events DOM (cuando hacemos un click)
//(eventos del html)
//cuando un usuario hace click
//cuando un usuario esta escribiendo en un input
document.getElementById('product-form').addEventListener('submit', function(e){
    //console.log('Enviando formulario')
    // console.log(document.getElementById('name').value);

    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    // console.log(name, price, year);

    // console.log(new Product(name, price, year));

    const product = new Product(name, price, year);

    const ui = new UI();

    ui.addProduct(product);
    ui.resertForm();

    e.preventDefault();
})

document.getElementById('product-list').addEventListener('click',function(e){
    //console.log(e.target);
    const ui = new UI();
    ui.deleteProduct(e.target);
})