import styled from "styled-components";

export const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  max-width: 1240px;
  margin: 80px auto;
  padding: 0 20px;

  @media (max-width: 1019x) {
    margin: 60px auto;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    margin: 30px auto;
  }
`;
