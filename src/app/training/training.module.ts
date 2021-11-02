import { NgModule } from '@angular/core';
import { TrainingComponent } from './training/training.component';
import { StopTrainingComponent } from './stop-training/stop-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    TrainingComponent,
    StopTrainingComponent,
    PastTrainingsComponent,
    NewTrainingComponent,
    CurrentTrainingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    AngularFirestoreModule
  ],
  exports: []
})
export class TrainingModule {

}
