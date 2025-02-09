export type TrainingProgram = {
  uid: string;
  image: string;
  name: string;
  workout_days: WorkoutDay[];
  activated: boolean;
}

export type TrainingProgramProgress = {
  uid: string;
  trainingProgramUid: string;
  userId: string;
}


export type WorkoutDay = {
  day: string,
  exercises: TrainingExercis[]
};

export type TrainingExercis = {
  name: string,
  sets: number,
  reps: number,
  rest_time: string
}
