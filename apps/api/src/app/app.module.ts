import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {RMQModule} from "nestjs-rmq";
import {JwtModule} from "@nestjs/jwt";

import {getRMQConfig} from "./configs/rmq.config";
import {getJWTConfig} from "./configs/jwt.config";
import {AuthController} from "./controllers/auth.controller";
import {PassportModule} from "@nestjs/passport";
import {UserController} from "./controllers/user.controller";

@Module({
    imports: [
        ConfigModule.forRoot({envFilePath: 'envs/.api.env', isGlobal: true}),
        RMQModule.forRootAsync(getRMQConfig()),
        JwtModule.registerAsync(getJWTConfig()),
        PassportModule
    ],
    controllers: [AuthController, UserController],
    providers: [],
})
export class AppModule {}
