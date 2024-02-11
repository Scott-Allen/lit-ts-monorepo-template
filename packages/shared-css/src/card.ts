import { css } from 'lit';

export const card = css`
  .card {
    margin-left: auto;
    margin-right: auto;
    align-self: center;
    width: 100%;
    color: black;
    box-sizing: border-box;
    border-radius: 12px;
    border-width: 2px;
    padding: 24px;
    display: block;
    background-color: rgb(525 252, 255);
    box-shadow: 0 2px 2px #00000024, 0 3px 1px -2px #0000001f, 0 1px 5px #0003;
  }

  @media only screen and (min-width: 1080px) {
      /* For mobile phones: */
      .card {
        width: 60%;
      }
    }
`;