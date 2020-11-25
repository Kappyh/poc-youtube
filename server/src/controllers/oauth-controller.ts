import { Request, Response } from 'express';
import fetch from 'node-fetch';
export default class OauthController {

    private apiKey: string;
    private clienteId: string;
    private oauthUrl = 'https://accounts.google.com/o/oauth2/token';

    constructor(apitKey: string, clienteId: string) {
        this.apiKey = apitKey;
        this.clienteId = clienteId;
    }

    public async create(req: Request, res: Response) {
        fetch(this.oauthUrl, {
            method: 'post',
            headers: {
                contentType: 'application/x-www-form-urlencoded',
                code: '',
                client_id: '',
                client_secret: '',
                // redirect_uri=http://localhost/oauth2callback&,
                grant_type: 'authorization_code',
            }
        })
    }

};