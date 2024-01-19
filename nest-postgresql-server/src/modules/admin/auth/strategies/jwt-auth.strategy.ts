import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { UserService } from '../../user/services/user.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserDto } from '../../user/dtos/user.dto';
import { AccessTokenPayload } from '../dtos';

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'myJwtSecretFromConfig',
      ignoreExpiration: false,
    });
  }

  async validate(payload: AccessTokenPayload): Promise<UserDto> {
    const { sub: userId } = payload;
    const user = await this.userService.getUser(userId);
    if (!user) {
      throw new UnauthorizedException('Token not valid');
    }
    //  need more condition for user inactive
    //  need more condition for user blocked
    // example
    // if (user.status == UserStatus.Inactive) {
    //   throw new DisabledUserException(ErrorType.InactiveUser);
    // }
    // if (user.status == UserStatus.Blocked) {
    //   throw new DisabledUserException(ErrorType.BlockedUser);
    // }
    return user;
  }
}
