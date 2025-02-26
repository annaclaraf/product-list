import styled from "styled-components";


export const Container = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  width: 40%;
  max-width: 400px;
  height: 100%;

  @media (max-width: 767px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #C73A0F;
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 25px 0;
`;

export const CartImage = styled.img`
  width: 130px;
  height: auto;
`;

export const EmptyMessage = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #87635a;
`;

export const CartList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
`;

export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
`;

export const ItemDetails = styled.div`
`;

export const ItemTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #260f08;
`;

export const Price = styled.p`
  font-size: 16px;
  margin: 4px 0 0;
  color: #87635a;
`;

export const Quantity = styled.span`
  color: #C73A0F;
  font-weight: 700;
  margin-right: 10px;
`;

export const Total = styled.span`
  font-weight: 600;
  margin-left: 6px;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #C73A0F;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    svg {
      stroke: #260f08;
    }
  }
`;

export const OrderTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-top: 30px;
`;

export const TotalPrice = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #260f08;
`;

export const CarbonNeutral = styled.div`
  background: #f8f5f0;
  color: #260f08;
  padding: 20px 10px;
  margin-top: 12px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 16px;
`;

export const CheckoutButton = styled.button`
  background: #C73A0F;
  color: #ffffff;
  border: none;
  padding: 20px 12px;
  width: 100%;
  font-size: 16px;
  margin-top: 25px;
  cursor: pointer;
  border-radius: 30px;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    background: #a03100;
  }
`;