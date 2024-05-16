export interface UserModel {
    id: number;
    firstName: string;
    lastName:string;
    email: string;
    gender: string;
    age: number;
    phone: string;
    company: CompanyModel;
}

export interface CompanyModel {
    companyId: number;
    companyName: string;
    companyLocation: string;
}