import {Injectable} from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";

import {UserRole} from "@microservices-test/interfaces";

import {UserRepository} from "../../user/repositories/user.repository";
import {UserEntity} from "../../user/entities/user.entity";
import {AccountRegister} from "@microservices-test/contracts";

@Injectable()
export class AuthService {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService
    ) {}

    async register({email, password, displayName}: AccountRegister.Request) {
        const oldUser = await this.userRepository.findUser(email);
        if (oldUser) {
            throw new Error('Такой пользователь уже существует');
        }
        const newUserEntity = await new UserEntity({
            displayName,
            email,
            role: UserRole.User,
            passwordHash: '',
        }).setPassword(password);
        const user = await this.userRepository.createUser(newUserEntity);
        return {email: user.email};
    }

    async validateUser(email: string, password: string) {
        const user = await this.userRepository.findUser(email);
        if (!user) {
            throw new Error('Неверный логин или пароль');
        }
        const userEntity = new UserEntity(user);
        const isCorrectPassword = await userEntity.validatePassword(password);
        if (!isCorrectPassword) {
            throw new Error('Неверный логин или пароль');
        }

        return {id: user._id};
    }

    async login(id: string) {
        return {
            token: await this.jwtService.signAsync({id})
        }
    }

}
