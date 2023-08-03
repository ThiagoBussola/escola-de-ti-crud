import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './entities/book.entity';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {

  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) { }

  async create(createBookDto: CreateBookDto) {
    const createdBook = this.bookModel.create(createBookDto)
    return createdBook
  }

  async findAll() {
    return this.bookModel.find()
  }

  async findOne(title: String) {
    const findedBook = this.bookModel.findOne({ title: title })
    return findedBook
  }


  async update(id: string, updateBookDto: UpdateBookDto) {
    const updatedBook = this.bookModel.findByIdAndUpdate(
      id,
      {
        title: updateBookDto.title,
        subtitle: updateBookDto.subtitle,
        author: updateBookDto.author,
        edition: updateBookDto.edition,
        isbn: updateBookDto.isbn,
        publishedAt: updateBookDto.publishedAt,
        volume: updateBookDto.volume,
      },
      { new: true },
    )

    return updatedBook
  }

  async remove(id: string) {
    const deletedBook = this.bookModel.findByIdAndDelete(id);
    return deletedBook; 
  }
}