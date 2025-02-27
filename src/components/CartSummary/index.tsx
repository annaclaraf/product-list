import { useState } from "react";
import { useCartContext } from "../../contexts/CartContext";
import { RiTreeLine } from "react-icons/ri";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CartModal } from "../CartModal";
import { 
  Container,
  EmptyCartContainer,
  CartImage,
  EmptyMessage,
  Title,
  CartList,
  CartItem,
  ItemDetails,
  ItemTitle,
  Price,
  Quantity,
  Total,
  RemoveButton,
  OrderTotal,
  TotalPrice,
  CarbonNeutral,
  CheckoutButton
} from "./styles";

export function CartSummary() {
  const { cart, removeFromCart } = useCartContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container>
      <Title>Your Cart ({cart.length})</Title>
      {cart.length === 0 ? (
        <EmptyCartContainer>
          <CartImage src="/assets/illustration-empty-cart.svg" alt="Empty Cart" />
          <EmptyMessage>Your added items will appear here</EmptyMessage>
        </EmptyCartContainer>
      ) : (
        <>
          <CartList>
            {cart.map((item) => (
              <CartItem key={item.id}>
                <ItemDetails>
                  <ItemTitle>{item.title}</ItemTitle>
                  <Price>
                    <Quantity>{item.quantity}x</Quantity> @ $ {item.price.toFixed(2)} <Total>$ {(item.price * item.quantity).toFixed(2)}</Total>
                  </Price>
                </ItemDetails>
                <RemoveButton onClick={() => removeFromCart(item.id)}><IoCloseCircleOutline size={20} color="87635a" /></RemoveButton>
              </CartItem>
            ))}
          </CartList>
          <OrderTotal>
            <span>Order Total</span>
            <TotalPrice>$ {totalPrice.toFixed(2)}</TotalPrice>
          </OrderTotal>
          <CarbonNeutral>
            <RiTreeLine size={22} color='1EA575' />
            <span>This is a <strong>carbon-neutral</strong> delivery</span>
          </CarbonNeutral>
          <CheckoutButton onClick={() => setIsModalOpen(true)}>Confirm Order</CheckoutButton>
        </>
      )}

      <CartModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </Container>
  );
}
