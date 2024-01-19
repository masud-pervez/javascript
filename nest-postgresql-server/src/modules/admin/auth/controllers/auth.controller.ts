import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserDto } from '../../user/dtos/user.dto';
import { CurrentUser } from '../decorators/current-user.decorator';
import { LoginCredentialDto, RegisterCredentialDto } from '../dtos';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(
    @Body() registerCredentialDto: RegisterCredentialDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const authPayload = await this.authService.register(registerCredentialDto);
    // set cookies token
    this.cookiesBuildTokenResponsive(res, authPayload.token);

    return {
      success: true,
      statusCode: 200,
      message: `Registration successfull`,
      data: authPayload,
    };
  }

  @Post('/login')
  async login(
    @Body() loginCredentialDto: LoginCredentialDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const authPayload = await this.authService.login(loginCredentialDto);
    // set cookies token
    this.cookiesBuildTokenResponsive(res, authPayload.token);

    return {
      success: true,
      statusCode: 200,
      message: `Login successfull`,
      data: authPayload,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/logout')
  logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    //revoke token
    Object.entries(req.cookies).forEach(([key]) => res.clearCookie(key));

    return {
      success: true,
      statusCode: 200,
      message: `Logout successfull`,
      data: null,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  getMe(@CurrentUser() user: UserDto) {
    return this.authService.getMe(user);
  }

  private cookiesBuildTokenResponsive(response: Response, token: string) {
    const cookiesOptions = {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    };
    return response.status(200).cookie('token', token, cookiesOptions);
  }
}
