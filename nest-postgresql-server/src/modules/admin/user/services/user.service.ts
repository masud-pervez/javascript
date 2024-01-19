import {
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import {
  CreateUserDto,
  FilterUserDto,
  UpdatePasswordDto,
  UpdateUserDto,
} from '../dtos';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  getUsers(filterUserDto: FilterUserDto): Promise<UserEntity[]> {
    this.logger.log(`${this.getUsers.name} Service Called`);
    const { name, username, status } = filterUserDto;
    const newQuery: any = {};

    if (name) newQuery.name = name;
    if (username) newQuery.username = username;
    if (status) newQuery.status = status;
    // logic for filter
    return this.userRepo.find({
      where: newQuery,
    });
  }

  async getUser(id: string): Promise<UserEntity> {
    this.logger.log(`${this.getUser.name} Service Called`);

    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User of id ${id} not found`);
    }
    return user;
  }

  async findUserById(id: string) {
    this.logger.log(`${this.findUserById.name} Service Called`);

    return this.userRepo.findOne({ where: { id } });
  }

  async findUserByUsername(username: string) {
    this.logger.log(`${this.findUserByUsername.name} Service Called`);
    return this.userRepo.findOne({ where: { username } });
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    this.logger.log(`${this.createUser.name} Service Called`);

    const hashPassword = await bcrypt.hash(createUserDto.password, 10);
    const user = this.userRepo.create({
      ...createUserDto,
      password: hashPassword,
    });
    await this.userRepo.save(user);
    delete user.password;
    return user;
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity> {
    this.logger.log(`${this.updateUser.name} Service Called`);

    const user = await this.userRepo.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User of id ${id} not found`);
    }
    this.userRepo.merge(user, updateUserDto);
    return this.userRepo.save(user);
  }

  async updatePassword(
    id: string,
    updatePasswordDto: UpdatePasswordDto,
  ): Promise<UserEntity> {
    this.logger.log(`${this.updatePassword.name} Service Called`);

    const { currentPassword, newPassword } = updatePasswordDto;

    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User of id ${id} not found`);
    }
    const valid = await this.validateUser(user, currentPassword);
    if (!valid) {
      throw new UnauthorizedException('Password is not valid');
    }

    user.password = await bcrypt.hash(newPassword, 10);
    return this.userRepo.save(user);
  }

  async resetPassword(id: string, password: string): Promise<UserEntity> {
    this.logger.log(`${this.resetPassword.name} Service Called`);

    const user = await this.getUser(id);
    user.password = await bcrypt.hash(password, 10);
    return this.userRepo.save(user);
  }

  async deleteUser(id: string): Promise<UserEntity> {
    this.logger.log(`${this.deleteUser.name} Service Called`);

    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User of id ${id} not found`);
    }
    return this.userRepo.remove(user);
  }

  validateUser(user: UserEntity, password: string): Promise<boolean> {
    return bcrypt.compare(password, user.password);
  }
}
