import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  signIn(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log("Inicio de sesión exitoso");
      }).catch((error) => {
        console.error("Error al iniciar sesión", error);
      });
  }

  // Método para cerrar sesión
  signOut() {
    return this.afAuth.signOut()
      .then(() => {
        console.log("Cierre de sesión exitoso");
      }).catch((error) => {
        console.error("Error al cerrar sesión", error);
      });
  }

  // Método para registrar un nuevo usuario
  register(email: string, password: string): Promise<void> {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        // Si el registro es exitoso, puedes manejar la redirección en el componente llamante.
        console.log("Registro exitoso");
      })
      .catch(error => {
        console.error("Error en el registro: ", error);
        return Promise.reject(error);  // Propagar el error para que el componente lo maneje
      });
  }
}  
