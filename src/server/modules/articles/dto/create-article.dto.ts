export class CreateArticleDto {
  title: string;

  description?: string;

  body: string;

  published?: boolean = false;
}