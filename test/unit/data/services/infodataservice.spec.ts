//infodataservice.spec.js
//
import {
    HttpClient
}
from 'aurelia-http-client';
//
import {
    InfoDataService
}
from '../../../../src/data/services/infodataservice';
//
import {
    Departement
}
from '../../../../src/data/domain/departement';
//
describe('InfoDataService Tests ', () => {
    //
    let base = 'http://localhost:52999/api';
    let sigle = 'testdepsigle';
    let http, manager, dep;
    //
    beforeEach(done => {
        http = new HttpClient();
        manager = new InfoDataService(http);
        manager.baseUrl = base;
        let model = new Departement();
        model.sigle = sigle;
        manager.get_one_item(model).then((d) => {
            if ((d !== undefined) && (d !== null)) {
                 done();
                dep = d;
               // expect(dep.id).toBeDefined();
               // expect(dep.id).not.toBeNull();
            } else {
                model.name = 'TestDepName';
                model.description = 'TestDepDescription';
                manager.insert_item(model).then((x) => {
                    manager.get_one_item(model).then((y) => {
                         done()
                        dep = y;
                        //expect(dep.id).toBeDefined();
                        //expect(dep.id).not.toBeNull();
                       
                    }, (e3) => {
                         done();
                        console.log(e3);
                        expect(false).toEqual(true);
                       
                    });
                }, (e2) => {
                     done();
                    console.log(e2);
                    expect(false).toEqual(true);
                   
                });
            }
        }, (e) => {
             done();
            console.log(e);
            expect(false).toEqual(true);
           
        });
    });
    //
    it(' get_items_count', (done) => {
       // expect(dep).toBeDefined();
      //  expect(dep.id).toBeDefined();
      //  expect(dep.id).not.toBeNull();
        var model = new Departement();
        manager.get_items_count(model).then((n) => {
             done();
            expect(n).toBeDefined();
            expect(n).not.toBe(null);
            expect(n).toBeGreaterThen(0);
        }, (err) => {
            done();
            console.log(e);
            expect(false).toEqual(true);
        });
    });
    //
});