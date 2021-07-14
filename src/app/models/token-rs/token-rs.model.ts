import {
    APPGGTokenRSInterface, APPGGTokenSubRSInterface,
    APPGGTokenGroupRSInterface, APPGGTokenRoleRSInterface,
} from './token-rs.interface';

export class APPGGTokenSubRS implements APPGGTokenSubRSInterface {
    id: string;
    name: string;
    surname: string;
    username: string;
    email: string;
    groups: APPGGTokenGroupRS[];
    constructor() {
        this.groups = new Array<APPGGTokenGroupRS>();
    }
}

export class APPGGTokenRS implements APPGGTokenRSInterface {
    sub: APPGGTokenSubRS;
    iat: number;
    exp: number;
    constructor() {
        this.sub = new APPGGTokenSubRS();
    }
}

export class APPGGTokenGroupRS implements APPGGTokenGroupRSInterface {
    id: string;
    name: string;
    roles: APPGGTokenRoleRS[];
    constructor() {
        this.roles = new Array<APPGGTokenRoleRS>();
    }
}

export class APPGGTokenRoleRS implements APPGGTokenRoleRSInterface {
    id: string;
    name: string;
    functionalities: string[];
}
