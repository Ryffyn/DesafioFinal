const DeviceRoutes = require('./routes/DeviceRoutes')
const CategoryRoutes = require('./routes/CategoryRoutes')
const LoginRoutes = require('./routes/LoginRoutes')
const UserRoutes = require('./routes/UserRoutes')



exports.registerRoutes = (app) => {
  app.use('/login', LoginRoutes)
  app.use('/device', DeviceRoutes)
  app.use('/category', CategoryRoutes)
  app.use('/user', UserRoutes)
  
}




