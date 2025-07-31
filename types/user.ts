export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'editor' | 'user';
  status: 'active' | 'inactive';
  lastLogin: string; // Or Date
  createdAt: string; // Or Date
}
export interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
  role: User['role'];
  status: User['status'];
  password?: string;
  confirmPassword?: string;
}

export interface UserRoleDefinition {
  value: User['role'];
  label: string;
  description: string;
}
