import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-connexion',
  standalone:false,
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class CONNEXIONPage  {
email: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(private auth: Auth, private router: Router) {}

  async onLogin() {
    if (!this.email || !this.password) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    this.loading = true;

    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, this.email, this.password);
      console.log('Utilisateur connecté :', userCredential.user);

      this.loading = false;
      this.router.navigate(['/tabs/tab1']); // Redirection après connexion
    } catch (error: any) {
      console.error('Erreur de connexion :', error.message);
      alert('Échec de la connexion : ' + error.message);
      this.loading = false;
    }
  }
}