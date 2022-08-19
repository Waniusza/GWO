import { Injectable } from '@angular/core';

export enum NotificationType {
  'success',
  'error',
}

@Injectable()
export class NotificationService {
  show(message: string, type: NotificationType = NotificationType.success) {
    switch (type) {
      case NotificationType.success:
        console.log(`Notification success === ${message}`);
        break;
      case NotificationType.error:
        console.error(`Notification error === ${message}`);
        break;
      default:
        console.log(`Notification === ${message}`);
    }
  }
}
