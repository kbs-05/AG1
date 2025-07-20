import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-c-compte',
  standalone: false,
  templateUrl: './c-compte.page.html',
  styleUrls: ['./c-compte.page.scss'],
})
export class CCOMPTEPage {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firestore: Firestore,
    private auth: Auth,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {
    // ✅ Ajout du champ userType
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phone: [''],
      userType: ['', Validators.required], // ✅ Nouveau champ
      region: ['', Validators.required],
      address: [''],
      terms: [false, Validators.requiredTrue]
    });
  }

  async onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const { email, password, confirmPassword, ...userData } = this.registerForm.value;

    // ✅ Vérification mots de passe identiques
    if (password !== confirmPassword) {
      this.showAlert('Erreur', 'Les mots de passe ne correspondent pas.');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Création du compte...',
      spinner: 'crescent'
    });
    await loading.present();

    try {
      // 1. Création du compte Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const uid = userCredential.user.uid;

      // 2. Sauvegarde des données dans Firestore
      const userDocRef = doc(this.firestore, 'users', uid);
      await setDoc(userDocRef, {
        uid,
        email,
        ...userData, // ✅ firstname, lastname, phone, userType, region, address
        createdAt: new Date().toISOString()
      });

      await loading.dismiss();

      // 3. Message succès
      this.showAlert('Succès', 'Compte créé avec succès !');
      this.router.navigate(['/tabs/tab1']);

    } catch (error: any) {
      await loading.dismiss();
      console.error('Erreur Firebase : ', error);
      this.showAlert('Erreur', error.message || 'Une erreur est survenue.');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
