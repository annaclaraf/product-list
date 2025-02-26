import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;

  @media (max-width: 1019px) {
    font-size: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px 3%;
  margin-top: 40px;
`;

export const ProductCard = styled.div`
  width: 31.33%;

  @media (max-width: 1019px) {
    width: 48%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  display: inline-flex;
  border-radius: 6px;
  overflow: hidden;
`;

export const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  mix-blend-mode: multiply;

  @media (max-width: 767px) {
    aspect-ratio: 2;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -30px;
  margin-bottom: -30px;
`;

export const AddToCartButton = styled.button`
  background: #fff;
  border: 1px solid #C73A0F;
  color: #260f08;
  padding: 10px 15px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 20px;
  transition: background 0.3s;
  width: 100%;
  max-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    color: #C73A0F;
    box-shadow: 0 0 4px #C73A0F;
  }
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 150px;
  background: #C73A0F;
  border-radius: 20px;
  padding: 10px 15px;
`;

export const QuantityButton = styled.button`
  width: 20%;
  padding: 0;
  border: none;
  background: none;
  display: inline-flex;
  cursor: pointer;

  &:hover {
    path {
      fill: #ffffff;
      stroke: #C73A0F;
    }
  }

`;

export const QuantityValue = styled.input`
  flex: 1;
  width: 40%;
  border: none;
  background: none;
  text-align: center;
  color: #ffffff;
`;

export const ProductInfo = styled.div`
  margin-top: 25px;
`;

export const ProductCategory = styled.p`
  font-size: 14px;
  color: #A69993;
  text-transform: capitalize;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  color: #260f08;
  margin: 5px 0 0;

  @media (max-width: 1019px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  color: #C73A0F;
  margin-top: 5px;

  @media (max-width: 1019px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
