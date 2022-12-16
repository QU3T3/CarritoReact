import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Header } from './components/NavBar';
import { ProductList } from './components/ProductList';

function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	return (
		<BrowserRouter>
			<Header allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts}/>
			<Routes>
				<Route path='/' element={ <ProductList allProducts={allProducts} setAllProducts={setAllProducts} total={total} setTotal={setTotal} countProducts={countProducts} setCountProducts={setCountProducts}/> } />
			</Routes>
		</BrowserRouter>
	);
}

export default App;