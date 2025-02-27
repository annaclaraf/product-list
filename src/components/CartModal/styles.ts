import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    padding-top: 80px;
  }
`;

export const ModalContent = styled.div`
  background: white;
  padding: 35px;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    padding: 25px;
    max-width: 100%;
    height: 100%;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

export const Header = styled.div`
  margin-bottom: 15px;
`;

export const Content = styled.div`
  background: #FCF8F5;
  padding: 20px;
  border-radius: 4px;
`;

export const ModalTitle = styled.h2`
  color: #260f08;
  font-size: 40px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ModalMessage = styled.p`
  font-size: 16px;
  color: #87635a;
  margin-top: 3px;
`;

export const OrderList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const OrderItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 0;
  border-bottom: 1px solid #f4edeb;
`;

export const ItemImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: contain;
  mix-blend-mode: multiply;
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const ItemTitle = styled.h4`
  color: #260f08;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ItemQuantity = styled.span`
  color: #C73A0F;
  font-weight: 500;
  margin-right: 10px;
`;

export const ItemPrice = styled.span`
  color: #87635a;
`;

export const ItemTotalPrice = styled.span`
  color: #260f08;
  font-weight: 500;
`;

export const OrderTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  margin-top: 30px;
  color: #260f08;
`;

export const TotalPrice = styled.span`
  font-weight: 700;
  font-size: 24px;
`;

export const NewOrderButton = styled.button`
  background: #C73A0F;
  color: #ffffff;
  border: none;
  padding: 20px 12px;
  width: 100%;
  font-size: 16px;
  margin-top: 30px;
  cursor: pointer;
  border-radius: 30px;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    background: #a03100;
  }
`;