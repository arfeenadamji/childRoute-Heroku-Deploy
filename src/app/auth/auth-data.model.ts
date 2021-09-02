export interface AuthData{
    username: string;
    password: string;
}
export interface _login{
    username:string;
    password:string;
  }
  export interface USER {
    id: string;
    clientName?: string;
    email: string;
    firstName: string;
    lastName: string;
    isEnabled: boolean;
    phoneNumber: string;
    roleList: Array<{ roleName: string; clientName: string }>;
    userId: string;
    userStatus: string;
    accessToken: string;
    profileImageURL: string;
    isSuperAdmin:boolean;
  }
  