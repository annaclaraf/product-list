import { useEffect, useState } from "react";
import { useCartContext } from "../../contexts/CartContext";
import { fetchProducts } from "../../services/api";
import { IoCartOutline, IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { 
  Container,
  Title,
  Content,
  ProductCard,
  ProductImageContainer,
  ProductImage,
  ButtonWrapper,
  AddToCartButton,
  QuantitySelector,
  QuantityButton,
  QuantityValue,
  ProductInfo,
  ProductCategory,
  ProductName,
  ProductPrice
} from "./styles";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const ProductList = () => {
  const { addToCart, updateQuantity, cart } = useCartContext();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const getProductQuantity = (productId: number) => {
    const productInCart = cart.find((item) => item.id === productId);
    return productInCart ? productInCart.quantity : 0;
  };

  const handleAddToCart = (product: any) => {
    addToCart({ ...product, quantity: 1 });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      updateQuantity(productId, 0);
    } else {
      updateQuantity(productId, quantity);
    }
  };

  return (
    <Container>
      <Title>Products</Title>
      <Content>
        {products.map((product) => {
          const quantity = getProductQuantity(product.id);

          return (
            <ProductCard key={product.id}>
              <ProductImageContainer>
                <ProductImage src={product.image} alt={product.title} />
              </ProductImageContainer>
              <ButtonWrapper>
                {quantity > 0 ? (
                  <QuantitySelector>
                    <QuantityButton onClick={() => handleUpdateQuantity(product.id, quantity - 1)}><IoRemoveCircleOutline size={20} color='#FFF' /></QuantityButton>
                    <QuantityValue value={quantity}/>
                    <QuantityButton onClick={() => handleUpdateQuantity(product.id, quantity + 1)}><IoAddCircleOutline size={20} color='#FFF' /></QuantityButton>
                  </QuantitySelector>
                ) : (
                  <AddToCartButton onClick={() => handleAddToCart(product)}>
                    <IoCartOutline color='#C73A0F' size={18} />
                    Add To Cart
                  </AddToCartButton>
                )}
              </ButtonWrapper>
              <ProductInfo>
                <ProductCategory>{product.category}</ProductCategory>
                <ProductName>{product.title}</ProductName>
                <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </Content>
    </Container>
  );
};
