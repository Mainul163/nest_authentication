import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository, QueryFailedError } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(data): Promise<User> {
    try {
      return await this.userRepository.save(data);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        // Check if the error code indicates a duplicate entry violation
        // This may vary depending on your database system, adjust it accordingly

        // Handle duplicate entry error
        throw new ConflictException('Username or email is already taken');
      } else {
        // Rethrow the error if it's not related to a unique constraint violation
        throw error;
      }
    }
  }
}
