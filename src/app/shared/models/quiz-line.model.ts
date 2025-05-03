export interface QuizLineModel {
    question: string;
    answers: string[];
    correctAnswer: string;
    userAnswer: string | null;
}