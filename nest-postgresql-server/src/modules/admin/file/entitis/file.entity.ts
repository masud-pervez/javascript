import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fieldname: string; // Photo, Signature, etc

  @Column({ nullable: true })
  originalname: string; // Photo, Signature, etc

  @Column({ nullable: true })
  encoding: string;

  @Column({ nullable: true })
  mimetype: string;

  @Column({ nullable: true })
  destination: string;

  @Column({ nullable: true })
  filename: string;

  @Column({ name: 'pdf_file', nullable: true })
  pdfFile: string;

  @Column({ nullable: true })
  path: string;

  @Column({ nullable: true })
  size: number;
}
