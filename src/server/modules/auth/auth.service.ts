import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthResponse } from './dto/auth-response.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';


@Injectable()
export class AuthService {

    constructor(
        private readonly prismaService: PrismaService, 
        private jwtService: JwtService, 
        private readonly usersService: UsersService
    ) { }

    async login(loginDto:LoginUserDto): Promise<AuthResponse> {
        const { email, password } = loginDto;

        const user = await this.prismaService.user.findUnique({
            where: { email }
        });

        if(!user) {
            throw new NotFoundException('user not found');
        }

        const validatePassword = await bcrypt.compare(password, user.password);

        if (!validatePassword) {
            throw new UnauthorizedException('invalid password');
        }

        return {
            token: this.jwtService.sign({
                email
            }),
            user
        }
    }

    async register(createUserDto: CreateUserDto): Promise<AuthResponse> {
        const user = await this.usersService.createUser(createUserDto);
        return {
            token: this.jwtService.sign({ email: user.email }),
            user
        }
    }
}