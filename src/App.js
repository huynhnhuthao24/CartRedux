import Header from "./components/Header"
import Footer from "./components/Footer";
import ProductsContainer from "./container/ProductsContainer";
import CartContainer from "./container/CartContainer";
import MessageContainer from "./container/MessageContainer";
function App() {
  return (
    <div>
     <Header/>
      <main id="mainContainer">
        <div className="container">
            <ProductsContainer/>
            <MessageContainer/>
            <CartContainer/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
