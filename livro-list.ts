import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Livro } from '../../models/livro';
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-livro-list',
  standalone: true,
  imports: [],
  templateUrl: './livro-list.html',
  styleUrl: './livro-list.css',
})
export class LivroList {
  private readonly livroService = inject(LivroService);

  livros: Livro[] = [];
  carregando: boolean = false;

  ngOnInit() {
    this.carregarLivros();
  }

  carregarLivros(): void {
    this.carregando = true;

    this.livroService.listar().subscribe({
      next: (dados) => {
        this.livros = dados;
        this.carregando = false;
      },
      error: (erro) => {
        console.error('Erro ao carregar livros:', erro);
        this.carregando = false;
      }
    });
  }

editar(livro: Livro): void {
  if (!livro.id) return;

  const novoTitulo = prompt(
    'Digite o novo título:',
    livro.titulo
  );

  if (!novoTitulo) return;

  const livroAtualizado: Livro = {
    ...livro,
    titulo: novoTitulo
  };

  this.livroService
    .atualizar(livroAtualizado, livro.id)
    .subscribe({
      next: () => this.carregarLivros(),
      error: (erro) =>
        console.error('Erro ao atualizar livro', erro),
    });
}

excluir(livro: Livro): void {
  if (!livro.id) return;

  const confirmou = confirm(
    `Deseja excluir o livro "${livro.titulo}"?`
  );

  if (!confirmou) return;

  this.livroService.excluir(livro.id).subscribe({
    next: () => this.carregarLivros(),
    error: (erro) =>
      console.error('Erro ao excluir livro', erro),
  });
}
}