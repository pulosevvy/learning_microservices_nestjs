import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";

import {UserRepository} from "./repositories/user.repository";
import {User, UserSchema} from "./models/user.model";
import {UserCommands} from "./controllers/user.commands";
import {UserQueries} from "./controllers/user.queries";
import {UserService} from './services/user.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: User.name, schema: UserSchema}
        ])
    ],
    controllers: [UserCommands],
    providers: [UserService, UserRepository],
    exports: [UserRepository, UserQueries],
})

export class UserModule {}
