import { ChangeDetectorRef, Component, EventEmitter, inject, Output } from '@angular/core';
import { LivroService } from '../../services/livro.service';
import { Livro } from '../../models/livro';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livro-form',
  imports: [FormsModule],
  templateUrl: './livro-form.html',
  styleUrl: './livro-form.css',
})
export class LivroForm {
  title = "Novo Livro";
  mensagem = '';
  livro: Livro = {
    titulo: '',
    autor: '',
    categoria: '',
    anoPublicacao: new Date().getFullYear(),
    editora: '',
    paginas: 0,
    disponivel: true
  };

  @Output() salvo = new EventEmitter<void>();
  
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly livroService = inject(LivroService);


  salvar(): void{
    this.livroService.criar(this.livro).subscribe({
      next: () => {

        this.mensagem =
          'Livro cadastrado com sucesso!';

        this.livro = { 
          titulo: '',
          autor: '',
          categoria: '',
          anoPublicacao: new Date().getFullYear(),
          editora: '',
          paginas: 0,
          disponivel: true
        };

          this.salvo.emit();
          this.cdr.detectChanges();
      },
      error: (erro) => console.error('Erro ao salvar livro', erro),
    });
  }
}
