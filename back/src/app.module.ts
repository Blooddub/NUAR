/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { RoomController } from './room/room.controller';
import { ModeController } from './mode/mode.controller';
import { CharacterCardController } from './character_card/character_card.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, RoomController, ModeController, CharacterCardController],
  providers: [AppService],
})
export class AppModule {}
