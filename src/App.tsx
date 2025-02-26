import React from "react";
import { CartProvider } from "./contexts/CartContext";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ProductList } from "./components/ProductList";
import { CartSummary } from "./components/CartSummary";
import { Container } from "./components/Container";

function App() {
  return (
    <CartProvider>
      <GlobalStyles />
      <Container>
        <ProductList />
        <CartSummary />
      </Container>
    </CartProvider>
  );
};

export default App;
