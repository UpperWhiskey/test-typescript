import { smartphone } from '../arrays/array';
import { Request, Response } from 'express';
import {Application} from 'express';

export class ReturnArray {

    public routes(app: Application): any {
        app.route('/allCell')
            .get(async (req, res) => {
                res.status(200).send(smartphone);
            })
//YAYYYYYYYYYYYYYY TESTE TESTE TESTE teste teste
        app.route('/')
            .get(async (req, res) => {
                res.status(200).send('yayy');
            })
    }
}