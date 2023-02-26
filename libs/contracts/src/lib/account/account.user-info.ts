import {IsEmail, IsString} from "class-validator";


export namespace AccountGetInfo {

    export const topic = 'account.user-info.query';

    export class Request {
        @IsEmail()
        email: string;

        @IsString()
        password: string;
    }

    export class Response {
        token: string;
    }
}


