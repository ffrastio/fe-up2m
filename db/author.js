module.exports = function(){
    var faker = require("faker")
    var _ = require("lodash")
  
    return{
      author: _.times(50, function(n){
        return {
          id: n + 1,
          name: faker.name.findName(),
          count_penelitian: faker.random.number(40),
          count_pengabdian: faker.random.number(40),
          NIDN: faker.random.number({min:4000,max:9999}),
          jurusan: _.sample(["Teknik Informatika & Komputer", "Teknik Elektro","Teknik Mesin","Teknik Grafika & Penerbitan","Akutansi","Administrasi Niaga","Teknik Sipil","Pascasarjana"]),
          avatar: faker.image.avatar(),
        }
      })
    }
  }