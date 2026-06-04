export interface Livro {
  id?: number;
  titulo: string;
  autor: string;
  categoria: string;
  anoPublicacao: number;
  editora: string;
  paginas: number;
  disponivel: boolean;
}