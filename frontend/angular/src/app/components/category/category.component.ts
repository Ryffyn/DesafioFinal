import { Component, OnInit } from '@angular/core';
import { ModelService } from '../../services/model.service';
import  Category  from '../../models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})
export class CategoryComponent implements OnInit {

  categoryName: string = '';
  categoryId: number;

  categories: Category[] = [];

  constructor(private modelService: ModelService) { }

  ngOnInit(): void {
    this.listCategories()
  }

  onCreateCategory(): void {
    const category: Category = new Category()


    category.id = this.categoryId
    category.name = this.categoryName

    this.modelService.create(category,'category').subscribe(response => {
      if (response.errors != null ) {
        console.error('Erro ao criar category')
      } else {
        this.listCategories()
      }
    })
  }

  onDeleteCategory(categoryId: number): void {
    this.modelService.delete(categoryId,'category').subscribe(response => {
      if (response.errors != null) {
        console.error('Erro ao deletar category')
      } else {
        this.listCategories()
      }
    })
  }


  listCategories(): void {
    this.modelService.read('category').subscribe(response => {
      this.categories = response.content
    })
  }

}
