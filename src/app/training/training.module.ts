import { NgModule } from '@angular/core';
import { TrainingComponent } from './training/training.component';
import { StopTrainingComponent } from './stop-training/stop-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TrainingComponent,
    StopTrainingComponent,
    PastTrainingsComponent,
    NewTrainingComponent,
    CurrentTrainingComponent
  ],
  imports: [
    SharedModule,
    AngularFirestoreModule
  ],
  exports: []
})
export class TrainingModule {

}
