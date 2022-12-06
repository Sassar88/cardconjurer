import React, {
    FunctionComponent,
    MouseEvent,
    useCallback, useContext,
    useEffect,
    useRef,
    useState
} from "react";
import StyleContainer from "./CardMenuContainer.style";
import { Icon } from "View/Common";
import gsap, {Draggable} from "gsap/all";
import {CardMenu} from "View/Component";
import {useSubject} from "Service/HookApi";
import {CardMenuContext} from "View/Container";
// import Action from "Flux";
// import {useDispatch} from "react-redux";

const stepMenu = {
    firstStep: 250,
    secondStep: 630,
    throttleRadiant: 40,
}

gsap.registerPlugin(Draggable);

export const CardMenuContainer: FunctionComponent = () => {

    // const dispatch = useDispatch();

    const menuContext = useContext(CardMenuContext);
    const MenuContent = menuContext.content;

    const dragBarRef = useRef(null);
    const menuDragBarRef = useRef(null);

    const [activeMenuPoint, setActiveMenuPoint] = useState<null | string>(null);
    const [currentXPos, setCurrentXPos] = useState(0);

    const closeMenu = () => {
        gsap.to(document.querySelector(".menuDragBar"), {x: 0, duration: 0.3});
        gsap.to(document.querySelector(".contentWrapper"), {width: 0, duration: 0.3});
        setCurrentXPos(0);
    }

    const openFirstMenuStep = useCallback(() => {
        gsap.to(document.querySelector(".menuDragBar"), {x: stepMenu.firstStep, duration: 0.3});
        gsap.to(document.querySelector(".contentWrapper"), {width: stepMenu.firstStep, duration: 0.3});
        setCurrentXPos(stepMenu.firstStep);

        if (activeMenuPoint === null) {
            setActiveMenuPoint('frames');
        }
    }, [activeMenuPoint]);

    const openSecondMenuStep = () => {
        gsap.to(document.querySelector(".menuDragBar"), {x: stepMenu.secondStep, duration: 0.3});
        gsap.to(document.querySelector(".contentWrapper"), {width: stepMenu.secondStep, duration: 0.3});
        setCurrentXPos(stepMenu.secondStep);
    };

    useEffect(() => {
        menuDragBarRef.current = Draggable.create(dragBarRef.current, {
            type: 'x',
            lockAxis: true,
            lockedAxis: 'x',
            inertia: true,
            throwProps: true,
            bounds: {minX: 0, maxX: stepMenu.secondStep},
            liveSnap: {
                points: [{x: 0, y: 0}, {x: stepMenu.firstStep, y: 0}, {x: stepMenu.secondStep, y: 0}],
                radius: stepMenu.throttleRadiant,
            },
        })[0];

        const menuDragBar = menuDragBarRef.current as typeof Draggable;

        if (!menuDragBar) {
            return;
        }
        menuDragBar.addEventListener('drag', () => {
            gsap.set(document.querySelector(".contentWrapper"), {width: menuDragBar.x});
        })
        menuDragBar.addEventListener('dragend', () => {
            const direction = menuDragBar.getDirection();
            const {x} = menuDragBar;

            switch (true) {
                case (direction === 'left' && x < stepMenu.firstStep - stepMenu.throttleRadiant) :
                case (direction === 'right' && x < stepMenu.throttleRadiant) : {
                    closeMenu();
                    break;
                }
                case (direction === 'left' && x < stepMenu.secondStep - stepMenu.throttleRadiant) :
                case (direction === 'right' && x < stepMenu.firstStep + stepMenu.throttleRadiant) : {
                    openFirstMenuStep();
                    break;
                }
                default :
                    openSecondMenuStep();
                    break;

            }
        })

    }, [dragBarRef, openFirstMenuStep])

    useEffect(() => {
        const {x} = menuDragBarRef.current as typeof Draggable;

        if (activeMenuPoint !== null && x !== stepMenu.firstStep) {
            openFirstMenuStep();
            menuContext.setContent(null);
        } else if (activeMenuPoint === null && x >= stepMenu.firstStep) {
            closeMenu();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeMenuPoint, openFirstMenuStep])

    useEffect(() => {
        if(MenuContent) {
            openSecondMenuStep();
        }
        else {
            openFirstMenuStep();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [MenuContent])

    useEffect(() => {
        (menuDragBarRef.current as typeof Draggable).x = currentXPos;
    }, [currentXPos])

    const navigateBack$ = useSubject<MouseEvent>(() => {
        // dispatch(Action.clearProject());
    })

    const handleOnClickMenuPoint = (menuPoint: string) => (evt: MouseEvent) => {

        switch(menuPoint) {
            case 'close' :
                return navigateBack$.next(evt);
        }

        const {x} = menuDragBarRef.current as typeof Draggable;

        if (menuPoint === activeMenuPoint) {
            if (x > 0) {
                return setActiveMenuPoint(null);
            }

            return openFirstMenuStep();
        }
        setActiveMenuPoint(menuPoint);
    }

    const renderMenuEntry = (menuPoint: string) => {
        return (
            <div className={`menuEntry ${activeMenuPoint === menuPoint ? 'active' : ''}`} onClick={handleOnClickMenuPoint(menuPoint)}>
                <Icon type={menuPoint}/>
            </div>
        )
    }

    return (
        <StyleContainer>
            <div className="contentWrapper">
                <div className="innerContentWrapper">
                    <div className="secondMenu">
                        {currentXPos >= stepMenu.firstStep && <CardMenu activeMenuPoint={activeMenuPoint}/>}
                    </div>
                    <div className="contentArea">
                        { MenuContent }
                    </div>
                </div>
            </div>
            <div className="iconMenuWrapper">
                <div className={`mainMenu`}>
                    {renderMenuEntry('frames')}
                    {renderMenuEntry('texts')}
                </div>
                <div className="bottomMenu">
                    {renderMenuEntry('print')}
                    {renderMenuEntry('settings')}
                    {renderMenuEntry('close')}
                </div>
            </div>
            <div className="menuDragBar" ref={dragBarRef}>
                <div className="menuDragElement"/>
            </div>

        </StyleContainer>
    )

}
