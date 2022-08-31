import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor (private readonly prismaService:PrismaService) { 
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET
        });
    } 

    async validate(payload: { email:string }) {
        const user = await this.prismaService.user.findUnique({
            where: {
                email: payload.email
            }
        })

        return user;
    }
    
}