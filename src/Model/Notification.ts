import { createUniqKey } from "Service";

export enum NotificationType {
    INFO    = "info",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR   = "error",
}

export interface INotification {
    type: NotificationType,
    message: string,
}

export class Notification {

    id: string;
    type: NotificationType;
    message: string;

    constructor(data: INotification) {

        this.id      = createUniqKey();
        this.type    = data.type;
        this.message = data.message;
    }

}
