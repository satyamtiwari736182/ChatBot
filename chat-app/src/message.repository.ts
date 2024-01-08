import replyData from './message.constant';

export class MessageRepository {
  getMessage(msg: string): string {
    const data: string[] = msg.split(' ');
    let res: string = '';
    for (let i = 0; i < data.length; i++) {
      if (replyData.has(data[i])) {
        res = replyData.get(data[i]);
        break;
      }
    }
    return res.length > 0 ? res : 'sorry it is not known to me';
  }
}
