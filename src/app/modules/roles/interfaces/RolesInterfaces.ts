export interface JobRole {
  _id: string;
  title: string;
  requirements: {
    text: string;
  };
  candidates: Candidate[];

}

interface Candidate {
  name: string;
  match: number;
  score: number;
  strengths: string[];
  weaknesses: string[];
  questions: string[];
}
