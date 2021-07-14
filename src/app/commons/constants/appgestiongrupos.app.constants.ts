import { APPGGElementsCallsRS } from '../../models/calls-rs/calls-rs.model';

export class APPGGAppConstants {

  public static callModel: APPGGElementsCallsRS = new APPGGElementsCallsRS();

  public static SESSION_USER = 'currentUser';

  public static CALLS_COLS: Array<any> = [

    {
      header: 'Nombre',
      field: APPGGAppConstants.nameof(() => APPGGAppConstants.callModel.name),
      sortable: true,
    },
    {
      header: 'Asignatura',
      field: APPGGAppConstants.nameof(() => APPGGAppConstants.callModel.subject, true),
      sortable: false,
      nested: true,
    },
    {
      header: 'Fecha de inicio',
      field: APPGGAppConstants.nameof(() => APPGGAppConstants.callModel.initDate),
      sortable: false,
    },
    {
      header: 'Fecha final',
      field: APPGGAppConstants.nameof(() => APPGGAppConstants.callModel.endDate),
      sortable: false,
    },
  ];

  public static nameof(selector: () => any, fullname = false) {
    const s = '' + selector;
    const m = s.match(/return\s+([A-Z$_.]+)/i)
      || s.match(/.*?(?:=>|function.*?{(?!\s*return))\s*([A-Z$_.]+)/i);
    const name = m && m[1] || '';
    return fullname ? name.split('.').slice(2).join('.') : name.split('.').reverse()[0];
  }

}
