export enum Avis {
  AIMER,
  DETESTER
}

export interface Collegue {
  pseudo: string;
  nom?: string;
  prenom?: string;
  score: number;
  photoUrl?: string;
  photo?: string;
}

export interface Vote {
  pseudo: string;
  avis: Avis;
}
