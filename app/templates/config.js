module.exports = {
  server: {
    host: 'localhost',
    port: 3000,
    static: ['public'],
    sessionKeys: ['secretkey1', 'secretkey2', '...']
  },

  database: {
    enable: true,
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    name: 'team_sport',
    user: '',
    pass: ''
  },

  restful_api: {
    enable: true,
    uri: '/api/v1'
  }
}