import { useEffect } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useCartContext } from "../../contexts/CartContext";
import { 
  ModalOverlay,
  ModalContent,
  Header,
  ModalTitle,
  ModalMessage,
  Content,
  OrderList,
  OrderItem,
  ItemImage,
  ItemInfo,
  ItemTitle,
  ItemQuantity,
  ItemPrice,
  ItemTotalPrice,
  OrderTotal,
  TotalPrice,
  NewOrderButton
} from "./styles";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cart, setCart } = useCartContext();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  
  if (!isOpen) return null;

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  function handleNewOrder() {
    setCart([]);
    onClose();
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Header>
          <IoCheckmarkCircleOutline size={36} color='#1EA575' />
          <ModalTitle>Order Confirmed</ModalTitle>
          <ModalMessage>We hope you enjoy your food!</ModalMessage>
        </Header>
        <Content>
          <OrderList>
            {cart.map((item) => (
              <OrderItem key={item.id}>
                <ItemImage src={item.image} alt={item.title} />
                <ItemInfo>
                  <div>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemQuantity>{item.quantity}x</ItemQuantity> <ItemPrice>@ $ {item.price.toFixed(2)}</ItemPrice>
                  </div>
                  <ItemTotalPrice>${(item.quantity * item.price).toFixed(2)}</ItemTotalPrice>
                </ItemInfo>
              </OrderItem>
            ))}
          </OrderList>
          <OrderTotal>
            <span>Order Total:</span>
            <TotalPrice>${totalPrice.toFixed(2)}</TotalPrice>
          </OrderTotal>
        </Content>
        <NewOrderButton onClick={handleNewOrder}>Start New Order</NewOrderButton>
      </ModalContent>
    </ModalOverlay>
  );
}
