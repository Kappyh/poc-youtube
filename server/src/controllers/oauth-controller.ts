import { Request, Response } from 'express';
import nodeFetch from 'node-fetch';
export default class OauthController {

    private apiKey: string;
    private clienteId: string;

    constructor(apitKey: string, clienteId: string) {
        this.apiKey = apitKey;
        this.clienteId = clienteId;
    }

};