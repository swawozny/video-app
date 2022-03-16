import qs from "qs";

export class ParamsService {
    serializeParams(params: string[]) {
        return qs.stringify(params, {arrayFormat: 'repeat'});
    }
}
