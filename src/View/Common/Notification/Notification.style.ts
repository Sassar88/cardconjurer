import styled from "styled-components";

export default styled.div `

    position: absolute;
    top: 10px;
    right: 10px;
    height: 40px;
    min-width: 200px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.4);
    display: flex;
    padding: 0 20px;
    box-sizing: border-box;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
    transition: top 0.3s;

    &.hide {
        display: none;
    }

    &.info {
        background-color: rgba(59, 161, 126, 0.6);
    }

`;