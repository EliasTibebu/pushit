import {Module} from "@nestjs/common";
import {ClipsController} from "./clips.controller";
import {ClipsServices} from "./clips.services";
import {HttpModule} from "@nestjs/axios";

@Module({
  imports:[HttpModule],
  controllers:[ClipsController],
  providers:[ClipsServices]
})
export class ClipsModule{

}
