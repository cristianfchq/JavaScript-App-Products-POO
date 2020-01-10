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
    addProduct(){

    }

    deleteProduct(){

    }

    showMessage(){

    }
}

//Events DOM (cuando hacemos un click)
//(eventos del html)
//cuando un usuario hace click
//cuando un usuario esta escribiendo en un input
document.getElementById('product-form').addEventListener('submit', function(){
    alert('Enviando formulario');
})