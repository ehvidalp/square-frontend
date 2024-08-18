export interface Task {
    title: string;
    description: string;
    created_at?: Date;
    completed: boolean;
    user?: {
        email: string;
    };
  }