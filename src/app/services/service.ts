import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class Service {

    constructor(private httpClient: HttpClient) { }

    getItemId(coordinates) {
        coordinates.x == null ? coordinates.x = 0 : '';
        coordinates.y == null ? coordinates.y = 0 : '';
        return this.httpClient.get<any>('/getItemId', { params: { x: coordinates.x, y: coordinates.y } });
    }



}