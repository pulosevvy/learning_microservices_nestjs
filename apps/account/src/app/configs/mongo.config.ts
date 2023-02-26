import {ConfigModule, ConfigService} from "@nestjs/config";
import {MongooseModuleAsyncOptions} from "@nestjs/mongoose";

export const getMongoConfig = (): MongooseModuleAsyncOptions => {
    return {
        useFactory: (configService: ConfigService) => ({
            uri: configService.get('MONGO_URI')
        }),
        imports: [ConfigModule],
        inject: [ConfigService],
    }
}
