import express = require('express');
import {ReturnArray} from '../../routes/return';

// import {} from '';

export class AppExpress{
    
    public app: express.Application = express();
    public returnArray: ReturnArray = new ReturnArray();

    constructor(){
        this.config();
        this.app = express();
        this.returnArray.routes(this.app);
    }

    public config(): void{
        this.app.use(express.static('public'));
    }
// Teste de build
}

export default new AppExpress().app;