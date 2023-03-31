import {Controller, Get, Query} from "@nestjs/common";
import {ClipsServices} from "./clips.services";
import {ClipsQueryParamDto} from "../../common/dtos/ClipsQueryParamDto";

@Controller('clips')
 export class ClipsController{
 constructor(private clipsService:ClipsServices) {}
  @Get()
  getClips(@Query() clipsQueryDto:ClipsQueryParamDto){
   return this.clipsService.getClips(clipsQueryDto);
  }
}
