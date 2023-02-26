import {Module} from '@nestjs/common';
import {AuthController} from './controllers/auth.controller';
import {AuthService} from './services/auth.service';
import {UserModule} from "../user/user.module";
import {JwtModule} from "@nestjs/jwt";
import {getJWTConfig} from "../configs/jwt.config";

@Module({
    imports: [
        JwtModule.registerAsync(getJWTConfig()),
        UserModule,
    ],
    controllers: [AuthController],
    providers: [AuthService],
})

export class AuthModule {}
