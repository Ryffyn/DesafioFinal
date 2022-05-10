const CategoryModel = require('../database/models/CategoryModel')
const DeviceModel = require('../database/models/DeviceModel')

class DeviceRepository {
  async add(device) {
    try {
      return await DeviceModel.create(device)
    } catch (error) {
      console.log('Erro ao salvar um device -', error.message)
    }
  }

  async selectAll() {
    try {
      return await DeviceModel.findAll({ include: [ { model: CategoryModel } ] })
    } catch (error) {
      console.log('Erro ao selecionar vários device -', error.message)
    }
  }

  async selectByFilter(filter) {
    try {
      return await DeviceModel.findAll({
        where: filter
      })
    } catch (error) {
      console.log('Erro ao selecionar por filtro vários devices -', error.message)
    }
  }

  async update(id,device) {
    try {
      return await DeviceModel.update(device, { 
        where: {
          id: id
        }
      })
    } catch (error) {
      console.log('Erro ao editar um device -', error.message)
    }
  }

  async remove(id) {
    try {
      return await DeviceModel.destroy({
        where: {
          id:id
        }
      })
    } catch (error) {
      console.log('Erro ao remover um device -', error.message)
    }
  }
}

module.exports = DeviceRepository