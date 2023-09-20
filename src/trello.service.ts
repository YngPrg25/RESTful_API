typescript
import { Injectable } from '@nestjs/common';
import { Trello } from 'trello';

@Injectable()
export class TrelloService {
  private readonly trello: Trello;

  constructor() {
    this.trello = new Trello(process.env.TRELLO_API_KEY, process.env.TRELLO_API_TOKEN);
  }
  async getBoards(): Promise<any> {
    return await this.trello.getBoards();
  }
}