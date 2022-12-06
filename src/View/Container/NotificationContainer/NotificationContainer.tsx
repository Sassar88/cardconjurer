import React, { FunctionComponent } from 'react';
import { useSelector }         from 'react-redux';
import { getNotifications }    from 'Flux/Query/Application';
import { NotificationWrapper } from 'View/Component/NotificationWrapper/NotificationWrapper';

export const NotificationContainer: FunctionComponent = () => {

    const notifications = useSelector(getNotifications);

    return (
        <NotificationWrapper notifications={ notifications } />
    );
};