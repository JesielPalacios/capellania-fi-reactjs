import styled from "styled-components";

export const Tableconta = styled.div`
  background-color: #fff;
  .cellWrapper {
    display: flex;
    align-items: center;
    border-radius: 10px;

    .image {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 10px;
      object-fit: cover;
    }
  }

  .status {
    padding: 5px;
    border-radius: 5px;

    &.Approved {
      color: green;
      background-color: rgba(0, 128, 0, 0.151);
    }
    &.Pending {
      color: goldenrod;
      background-color: rgba(189, 189, 3, 0.103);
    }
  }
`
  