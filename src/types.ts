export type EventType = 'Wedding' | 'Baptism' | 'Party' | 'Other';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: EventType;
  message: string;
}

export interface CoverVisualizerState {
  chairType: 'Sash' | 'Full Cover';
  chairColor: 'White' | 'Ivory' | 'Red' | 'Blue' | 'Gold';
  tableType: 'Round' | 'Rectangular';
  tableColor: 'White' | 'Ivory' | 'Red' | 'Blue' | 'Gold';
  selectedView: 'chair' | 'table';
}