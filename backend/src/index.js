const DeviceRepository = require('./repositories/DeviceRepository')

async function main() {
  const deviceRepository = new DeviceRepository()

  const device = {
    categoryId: 1,
    color: 'BLUE',
    partnumber: 2357
  }

  await deviceRepository.add(device)
  
  const devices = await deviceRepository.selectAll()

  console.log(devices[0].dataValues)
}

main()