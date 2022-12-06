import React, {
    FunctionComponent,
    useEffect,
    useRef,
    useState
}                             from 'react';
import { NotificationType }   from 'Model/Notification';
import { Subject, takeUntil } from 'rxjs';
import Style                  from './Notification.style';
import Action                 from 'Flux';
import { useDispatch }        from 'react-redux';

interface IProps {
    id: string,
    message: string,
    index: number,
    type: NotificationType
}

export const Notification: FunctionComponent<IProps> = ({ id, message, index, type }) => {

    const dispatch   = useDispatch();

    const fadeIn$    = useRef(new Subject());
    const fadeOut$   = useRef(new Subject());
    const delay$     = useRef(new Subject());
    const onDestroy$ = useRef(new Subject());

    const [ className, setClassName ] = useState('');

    useEffect(() => {
        let fadeInTimeout: number | null             = null;
        let fadeOutTimeout: number | null            = null;
        let removeNotificationTimeout: number | null = null;

        const onDestroy = onDestroy$.current;

        fadeIn$.current.pipe(takeUntil(onDestroy)).subscribe(() => {
            fadeInTimeout = window.setTimeout(() => {
                setClassName('visible');
                fadeOut$.current.next(undefined);
            }, 50);
        });
        fadeOut$.current.pipe(takeUntil(onDestroy)).subscribe(() => {
            fadeOutTimeout = window.setTimeout(() => {
                setClassName('hide');
                delay$.current.next(undefined);
            }, 3500);
        });

        delay$.current.pipe(takeUntil(onDestroy)).subscribe(() => {
            removeNotificationTimeout = window.setTimeout(() => {
                dispatch(Action.removeNotification({ id }))
            }, 500);
        });

        onDestroy.subscribe(() => {
            if (fadeOutTimeout !== null) {
                window.clearTimeout(fadeOutTimeout);
            }
            if (fadeInTimeout !== null) {
                window.clearTimeout(fadeInTimeout);
            }
            if (removeNotificationTimeout !== null) {
                window.clearTimeout(removeNotificationTimeout);
            }
            onDestroy$.current.complete();
        });

        fadeIn$.current.next(undefined);



        return () => {
            onDestroy.next(undefined);
        };
    }, [ id, dispatch ]);

    return (
        <Style className={ `${className} ${type}` } style={{ top: (60 * index) + 10 }}>
            { message }
        </Style>
    );

};