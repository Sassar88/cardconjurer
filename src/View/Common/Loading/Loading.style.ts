import styled from 'styled-components';

export default styled.div `
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    
    .loadingIndicator {

        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;

        div {
            position: absolute;
            border: 4px solid #35603E;
            opacity: 1;
            border-radius: 50%;
            animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

            &:nth-child(2) {
                animation-delay: -0.5s;
            }
        }

    }

    @keyframes lds-ripple {
        0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: 0;
            left: 0;
            width: 72px;
            height: 72px;
            opacity: 0;
        }
    }
    
`;
