import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {

  ongoingTraining: boolean = false;
  exerciseSubscription: Subscription;

  constructor(private trainingService: TrainingService) {
  }

  ngOnInit(): void {
    this.exerciseSubscription = this.trainingService.exerciseChange.subscribe(exercise => {
      this.ongoingTraining = !!exercise;
    });
  }

  ngOnDestroy(): void {
    if (this.exerciseSubscription) {
      this.exerciseSubscription.unsubscribe();
    }
  }

}
