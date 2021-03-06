import { Photo } from 'src/photos/entities/photo.entity';
import { User } from 'src/users/user.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedingPhotos1639459462377 implements MigrationInterface {
  name = 'SeedingPhotos1639459462377';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const author = await queryRunner.manager.save(
      queryRunner.manager.create<User>(User, {
        name: 'Usuário com fotos',
        email: 'photos@certi.org.br',
        createdAt: new Date(),
      }),
    );

    await queryRunner.manager.save(
      queryRunner.manager.create<Photo>(Photo, {
        name: 'Primeira Foto',
        description: 'Descrição da foto',
        author: author,
        createdAt: new Date(),
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM \`photos\``);
  }
}
