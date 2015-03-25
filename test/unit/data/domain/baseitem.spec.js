//baseitem.spec.js
import {
    BaseItem
}
from '../../../../src/data/domain/baseitem';
import {
    DescriptionItem
}
from '../../../../src/data/domain/descriptionitem';
import {
    SigleNameItem
}
from '../../../../src/data/domain/siglenameitem';
import {
    DepartementSigleNameItem
}
from '../../../../src/data/domain/departementsiglename';
import {
    IntervallItem
}
from '../../../../src/data/domain/intervalitem';
import {
    Annee
}
from '../../../../src/data/domain/annee';
//
//
describe('BaseItem tests ', () => {
    let id = '12345';
    let rev = '4543';
    let data = new BaseItem({
        _id: id,
        _rev: rev
    });
    
    it(' constructor test', () => {
        expect(data.id).toEqual(id);
        expect(data.rev).toEqual(rev);
        expect(data.has_id).toEqual(true);
        expect(data.has_rev).toEqual(true);
        expect(data.is_storeable).toBeDefined();
        expect(data.to_insert_map).toBeDefined();
        expect(data.to_fetch_map).toBeDefined();
    });
});
describe('DescriptionItem tests ', () => {
    let id = '12345';
    let rev = '4543';
    let description = 'testdep';
    let avatarid = 're54x';
    let data = new DescriptionItem({
        _id: id,
        _rev: rev,
        description: description,
        avatarid: avatarid
    });
    it(' constructor test', () => {
        expect(data.id).toEqual(id);
        expect(data.rev).toEqual(rev);
        expect(data.has_id).toEqual(true);
        expect(data.has_rev).toEqual(true);
        expect(data.avatarid).toEqual(avatarid);
        expect(data.description).toEqual(description);
        expect(data.is_storeable).toBeDefined();
        expect(data.to_insert_map).toBeDefined();
        expect(data.to_fetch_map).toBeDefined();
        expect(data.has_description).toEqual(true);
        expect(data.has_avatarid).toEqual(true);
    });
});
//
describe('SigleNameItem tests ', () => {
    let id = '12345';
    let rev = '4543';
    let description = 'testdesc';
    let avatarid = 're54x';
    let sigle = 'testsigle';
    let name = 'testname';
    let data = new SigleNameItem({
        _id: id,
        _rev: rev,
        description: description,
        avatarid: avatarid,
        sigle: sigle,
        name: name
    });
    it(' constructor test', () => {
        expect(data.id).toEqual(id);
        expect(data.rev).toEqual(rev);
        expect(data.has_id).toEqual(true);
        expect(data.has_rev).toEqual(true);
        expect(data.avatarid).toEqual(avatarid);
        expect(data.description).toEqual(description);
        expect(data.sigle).toEqual(sigle);
        expect(data.name).toEqual(name);
        expect(data.is_storeable).toBeDefined();
        expect(data.to_insert_map).toBeDefined();
        expect(data.to_fetch_map).toBeDefined();
        expect(data.has_description).toEqual(true);
        expect(data.has_avatarid).toEqual(true);
        expect(data.has_sigle).toEqual(true);
        expect(data.has_name).toEqual(true);
    });
});
//
describe('DepartementSigleNameItem tests ', () => {
    let id = '12345';
    let rev = '4543';
    let description = 'testdesc';
    let avatarid = 're54x';
    let sigle = 'testsigle';
    let name = 'testname';
    let departementid = '87654';
    let data = new DepartementSigleNameItem({
        _id: id,
        _rev: rev,
        description: description,
        avatarid: avatarid,
        sigle: sigle,
        name: name,
        departementid: departementid
    });
    it(' constructor test', () => {
        expect(data.id).toEqual(id);
        expect(data.rev).toEqual(rev);
        expect(data.has_id).toEqual(true);
        expect(data.has_rev).toEqual(true);
        expect(data.avatarid).toEqual(avatarid);
        expect(data.description).toEqual(description);
        expect(data.sigle).toEqual(sigle);
        expect(data.name).toEqual(name);
        expect(data.departementid).toEqual(departementid);
        expect(data.is_storeable).toBeDefined();
        expect(data.to_insert_map).toBeDefined();
        expect(data.to_fetch_map).toBeDefined();
        expect(data.to_insert_map).toBeDefined();
        expect(data.to_fetch_map).toBeDefined();
        expect(data.has_description).toEqual(true);
        expect(data.has_avatarid).toEqual(true);
        expect(data.has_sigle).toEqual(true);
        expect(data.has_name).toEqual(true);
        expect(data.has_departementid).toEqual(true);
    });
});
//
describe('IntervalItem tests ', () => {
    let id = '12345';
    let rev = '4543';
    let description = 'testdesc';
    let avatarid = 're54x';
    let sigle = 'testsigle';
    let name = 'testname';
    let departementid = '87654';
    let startDate =  new Date(1990,8,1);
    let endDate =  new Date(1991,5,30);
    //
    let data = new IntervallItem({
        _id: id,
        _rev: rev,
        description: description,
        avatarid: avatarid,
        sigle: sigle,
        name: name,
        departementid: departementid,
        startDate: startDate,
        endDate: endDate
    });
    it(' constructor test', () => {
        expect(data.id).toEqual(id);
        expect(data.rev).toEqual(rev);
        expect(data.has_id).toEqual(true);
        expect(data.has_rev).toEqual(true);
        expect(data.avatarid).toEqual(avatarid);
        expect(data.description).toEqual(description);
        expect(data.sigle).toEqual(sigle);
        expect(data.name).toEqual(name);
        expect(data.departementid).toEqual(departementid);
        expect(data.startDate).toEqual(startDate);
        expect(data.endDate).toEqual(endDate);
        expect(data.is_storeable).toBeDefined();
        expect(data.to_insert_map).toBeDefined();
        expect(data.to_fetch_map).toBeDefined();
        expect(data.to_insert_map).toBeDefined();
        expect(data.to_fetch_map).toBeDefined();
        expect(data.has_description).toEqual(true);
        expect(data.has_avatarid).toEqual(true);
        expect(data.has_sigle).toEqual(true);
        expect(data.has_name).toEqual(true);
        expect(data.has_departementid).toEqual(true);
        expect(data.has_startDate).toEqual(true);
        expect(data.has_endDate).toEqual(true);
    });
});
//
describe('Annee tests ', () => {
    let id = '12345';
    let rev = '4543';
    let description = 'testdesc';
    let avatarid = 're54x';
    let sigle = 'testsigle';
    let name = 'testname';
    let departementid = '87654';
    let startDate =  new Date(1990,8,1);
    let endDate =  new Date(1991,5,30);
    //
    let data = new Annee({
        _id: id,
        _rev: rev,
        description: description,
        avatarid: avatarid,
        sigle: sigle,
        name: name,
        departementid: departementid,
        startDate: startDate,
        endDate: endDate
    });
    it(' constructor test', () => {
        expect(data.id).toEqual(id);
        expect(data.rev).toEqual(rev);
        expect(data.has_id).toEqual(true);
        expect(data.has_rev).toEqual(true);
        expect(data.avatarid).toEqual(avatarid);
        expect(data.description).toEqual(description);
        expect(data.sigle).toEqual(sigle);
        expect(data.name).toEqual(name);
        expect(data.departementid).toEqual(departementid);
        expect(data.startDate).toEqual(startDate);
        expect(data.endDate).toEqual(endDate);
        expect(data.is_storeable).toBeDefined();
        expect(data.to_insert_map).toBeDefined();
        expect(data.to_fetch_map).toBeDefined();
        expect(data.to_insert_map).toBeDefined();
        expect(data.to_fetch_map).toBeDefined();
        expect(data.has_description).toEqual(true);
        expect(data.has_avatarid).toEqual(true);
        expect(data.has_sigle).toEqual(true);
        expect(data.has_name).toEqual(true);
        expect(data.has_departementid).toEqual(true);
        expect(data.has_startDate).toEqual(true);
        expect(data.has_endDate).toEqual(true);
         expect(data.is_storeable).toEqual(true);
    });
});