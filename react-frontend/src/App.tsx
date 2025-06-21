import CartView from './components/CartView';
import ProductList from './pages/ProductList';
import CheckoutForm from './pages/CheckoutForm';
import './App.css'


function App() {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Add Cart</h1>
            <ProductList />
            <CartView />
            <CheckoutForm />
        </div>
    );
}

export default App
