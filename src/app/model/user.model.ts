import { ParentEntity } from './parentEntity.model';
export class UserModel extends ParentEntity{
    public nombre: string;
    public apellido1: string;
    public apellido2: string;
    public telefono: string;
    public direccion: string;
}