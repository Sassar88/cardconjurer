import styled from "styled-components";

const stepMenu = {
    firstStep: 250,
    secondStep: 630,
}

export default styled.div`

    position: fixed;
    left: 0;
    top: 0;
    width: 70px;
    height: calc(100vh - 30px);
    z-index: 900;

    .contentWrapper {
        width: 0;
        left: 70px;
        background-color: #fff;
        height: 100%;
        box-shadow: 0 2px 10px #000;
        position: absolute;
        overflow: hidden;
    }

    .innerContentWrapper {
        position: absolute;
        right: 0;
        height: 100%;
        display: flex;
        flex-direction: row;
        max-width: ${stepMenu.secondStep}px;
        width: 100%;

        .secondMenu {
            width: ${stepMenu.firstStep}px;
            flex: 0 0 ${stepMenu.firstStep}px;
            height: 100%;
        }

        .contentArea {
            width: 100%;
        }
    }

    .menuDragBar {
        width: 11px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        border-left: 1px solid #e1e1e1;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;

        &:after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: -15px;
            cursor: grab;
            right: -15px;
        }

        &:hover, &[style^="grabbing"], &[style*="grabbing"] {
            background-color: #e1e1e1;

            .menuDragElement {
                background-color: #414141;
            }
        }

        .menuDragElement {
            width: 4px;
            height: 40px;
            background-color: #e1e1e1;
            position: relative;


        }
    }

    .iconMenuWrapper {
        width: 60px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        font-size: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
        background-color: #fff;

        &:after {
            content: '';
            right: -10px;
            top: 0;
            width: 11px;
            background-color: #fff;
            position: absolute;
            height: 100%;
        }

        .mainMenu {
            flex: 1;
        }

        .bottomMenu {

        }

        .menuEntry {
            padding: 2px 8px 1px;
            transition: background-color 0.7s;
            border-radius: 4px;
            margin-bottom: 16px;
            cursor: pointer;
        }

        .menuEntry.active {
            background-color: #c1c1c1;

            color: #000;
        }
    }
`;
