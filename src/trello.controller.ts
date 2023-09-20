typescript
import { Controller, Get, UseGuards } from '@nestjs/common';
import { TrelloService } from './trello.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('trello')
@UseGuards(AuthGuard('local'))
export class TrelloController {
  constructor(private readonly trelloService: TrelloService) {}

  @Get('boards')
  async getBoards(): Promise<any> {
    return await this.trelloService.getBoards();
  }
}