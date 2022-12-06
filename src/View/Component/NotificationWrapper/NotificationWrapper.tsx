import React, { FunctionComponent }          from 'react';
import Style                                 from './NotificationWrapper.style';
import { Notification }                      from 'View/Common';
import { Notification as NotificationModel } from 'Model/Notification';

interface IProps {
    notifications: NotificationModel[];
}

export const NotificationWrapper: FunctionComponent<IProps> = ({ notifications }) => {

    return (
        <Style>
            { notifications.map((notification, index) =>
                <Notification {...notification} index={ index } key={notification.id}/>
            )}
        </Style>
    );
};