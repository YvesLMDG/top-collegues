export interface Collegue {
  pseudo : string;
  nom?: string;
  prenom?: string;
  score: number;
  photoUrl?: string;
  photo?: string;
}

export enum Avis {
  AIMER,
  DETESTER
}
