export interface APPGGTokenRSInterface {
    sub: APPGGTokenSubRSInterface;
    iat: number;
    exp: number;
}

export interface APPGGTokenSubRSInterface {
    id: string;
    name: string;
    surname: string;
    username: string;
    email: string;
    groups: APPGGTokenGroupRSInterface[];
}

export interface APPGGTokenGroupRSInterface {
    id: string;
    name: string;
    roles: APPGGTokenRoleRSInterface[];
}

export interface APPGGTokenRoleRSInterface {
    id: string;
    name: string;
    functionalities: string[];
}
