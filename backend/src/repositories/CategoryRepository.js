const CategoryModel = require('../database/models/CategoryModel')

class CategoryRepository {
  async add(category) {
    try {
      return await CategoryModel.create(category)
    } catch (error) {
      console.log('Erro ao salvar uma category -', error.message)
    }
  }

  async selectAll() {
    try {
      return await CategoryModel.findAll()
    } catch (error) {
      console.log('Erro ao buscar todas as category -', error.message)
    }
  }

  async selectByFilter(filter) {
    try {
      return await CategoryModel.findAll({
        where: filter
      })
    } catch (error) {
      console.log('Erro ao selecionar as category -', error.message)
    }
  }

  async update(category) {
    try {
      return await category.save()
    } catch (error) {
      console.log('Erro ao editar category -', error.message)
    }
  }

  async remove(id) {
    try {
      return await CategoryModel.destroy({
        where: {
          id
        }
      })
    } catch (error) {
      console.log('Erro ao remover category -', error.message)
    }
  }
}

module.exports = CategoryRepository