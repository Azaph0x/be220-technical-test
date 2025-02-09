export type TrainingProgram = {
  uid: string;
  image: string;
  name: string;
  workout_days: any[];
  activated: boolean;
}

export type TrainingProgramProgress = {
  uid: string;
  trainingProgramUid: string;
  userId: string;
}
