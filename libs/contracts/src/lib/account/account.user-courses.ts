import {IsString} from "class-validator";
import {IUser} from "@microservices-test/interfaces";


export namespace AccountUserInfo {

    export const topic = 'account.user-info.query';

    export class Request {
        @IsString()
        string: string;
    }

    export class Response {
        user: Omit<IUser, 'passwordHash'>;
    }
}


