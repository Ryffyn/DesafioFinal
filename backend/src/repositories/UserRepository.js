const UserModel = require('../database/models/UserModel')

class UserRepository {
  async add(user) {
    try {
      return await UserModel.create(user)
    } catch (error) {
      console.log('Erro ao salvar um user -', error.message)
    }
  }

  async selectAll() {
    try {
      return await UserModel.findAll({ })
    } catch (error) {
      console.log('Erro ao selecionar vários user -', error.message)
    }
  }

  async selectByFilter(filter) {
    try {
      return await UserModel.findAll({
        where: filter
      })
    } catch (error) {
      console.log('Erro ao selecionar por filtro vários devices -', error.message)
    }
  }

  async update(id,user) {
    try {
      return await UserModel.update(user, { 
        where: {
          id: id
        }
      })
    } catch (error) {
      console.log('Erro ao editar um user -', error.message)
    }
  }

  async remove(id) {
    try {
      return await UserModel.destroy({
        where: {
          id:id
        }
      })
    } catch (error) {
      console.log('Erro ao remover um user -', error.message)
    }
  }
}

module.exports = UserRepository