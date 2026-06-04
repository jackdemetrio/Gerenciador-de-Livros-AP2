import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { LivroForm } from './components/livro-form/livro-form';
import { LivroList } from './components/livro-list/livro-list';

@Component({
  selector: 'app-root',
  imports: [Navbar, LivroForm, LivroList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nome = 'Lucas Fogaça'
}
