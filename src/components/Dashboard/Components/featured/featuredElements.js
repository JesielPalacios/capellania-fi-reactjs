import styled from "styled-components";

export const Featuredconta = styled.div`
  flex: 2;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 10px;
  background-color: #fff;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: gray;

    .title {
      font-size: 16px;
      font-weight: 500;
    }
  }

  .bottom {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    .featuredChart {
      width: 100px;
      height: 100px;
    }

    .title {
      font-weight: 500;
      color: gray;
    }

    .amount {
      font-size: 30px;
    }

    .desc {
      font-weight: 300;
      font-size: 12px;
      color: gray;
      text-align: center;
    }

    .summary {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .item {
        text-align: center;

        .itemTitle {
          font-size: 14px;
          color: gray;
        }

        .itemResult {
          display: flex;
          align-items: center;
          margin-top: 10px;
          font-size: 14px;

          &.positive {
            color: green;
          }

          &.negative {
            color: red;
          }
        }
      }
    }
  }
`;
