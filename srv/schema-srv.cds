using { myInfodb } from '../db/schema';

service infoService {
    entity Infos as projection on myInfodb.Infos;
}