import {Module} from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import {RMQModule} from "nestjs-rmq";

import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';
import {getMongoConfig} from "./configs/mongo.config";
import {getRMQConfig} from "./configs/rmq.config";

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true, envFilePath: 'envs/.account.env'}),
        UserModule,
        AuthModule,
        MongooseModule.forRootAsync(getMongoConfig()),
        RMQModule.forRootAsync(getRMQConfig())
    ],
})
export class AppModule {
}
