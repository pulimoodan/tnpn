import { Controller, Get, Res, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import { parse } from 'url';
import { ViewService } from './view.service';

@Controller('/')
export class ViewController {
  constructor(private viewService: ViewService) {}

  // Add all view base paths here
  @Get([
    '/',
    '_next*',
  ])
  
  public async showHome(@Req() req: Request, @Res() res: Response) {
    this._fireUpNext(req, res);
  }

  private async _fireUpNext(req, res) {
    const parsedUrl = parse(req.url, true);
    await this.viewService
      .getNextServer()
      .render(req, res, parsedUrl.pathname, parsedUrl.query);
  }
}
