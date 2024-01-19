import {
  ConflictException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { CreateUserDto } from '../../user/dtos/create-user.dto';
import { UserDto } from '../../user/dtos/user.dto';
import { UserService } from '../../user/services/user.service';
import { LoginCredentialDto, RegisterCredentialDto } from '../dtos';

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerCredentialDto: RegisterCredentialDto) {
    this.logger.log(`${this.register.name} Service Called`);

    const { username } = registerCredentialDto;
    const find = await this.userService.findUserByUsername(username);

    if (find) {
      throw new ConflictException('Username already exist');
    }
    const user = await this.userService.createUser(
      registerCredentialDto as CreateUserDto,
    );
    const token = this.generatedSignedJwt(user);

    return { token, user };
  }

  async login(loginCredentialsDto: LoginCredentialDto) {
    this.logger.log(`${this.login.name} Service Called`);

    const { username, password } = loginCredentialsDto;

    const user = await this.userService.findUserByUsername(username);

    const valid = user
      ? await this.userService.validateUser(user, password)
      : false;

    if (!valid) {
      throw new UnauthorizedException('Invalid Login Credentials');
    }

    const token = this.generatedSignedJwt(user);

    return {
      user,
      token,
    };
  }

  async getMe(user: UserDto) {
    this.logger.log(`${this.getMe.name} Service Called`);
    return user;
  }

  private generatedSignedJwt(user) {
    const jwtSignOptions: JwtSignOptions = {
      subject: user.id,
    };
    return this.jwtService.sign({}, jwtSignOptions);
  }
}
