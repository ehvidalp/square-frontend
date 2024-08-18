export interface Task {
    id?: number;
    title: string;
    description: string;
    created_at?: Date;
    completed: boolean;
    user?: {
        email: string;
    };
  }