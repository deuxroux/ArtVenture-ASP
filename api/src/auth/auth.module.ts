import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Auth, AuthSchema } from "./schema/auth.schema";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserModule } from "../user/user.module";
import { User, UserSchema } from "../user/schema/user.schema";
import { JwtModule } from "@nestjs/jwt";
import { ServicesModule } from "../services/services.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Auth.name, schema: AuthSchema },
      { name: User.name, schema: UserSchema },
    ]),
    JwtModule.register({ secret: 'top secret' }),
    ServicesModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}