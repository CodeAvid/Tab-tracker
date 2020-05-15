import api from '@/services/api'
 export default {
     register (creditials){
         return api().post('register', creditials)

     }
 }


//  AuthenticationServices.register ({
//       email: 'testing@gmail.com', 
//       password: '123456'
//  })