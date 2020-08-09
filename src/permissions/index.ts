import { PermissionTemplates } from '../constants'
export class Permissions {

  public static gcpAppEngineReadPermission(entityId: string): string {
    const data = { entityId };
    return eval(PermissionTemplates.GCP_APPENGINE_READ);
  }

  public static gcpAppEngineWritePermission(entityId: string): string {
    const data = { entityId };
    return eval(PermissionTemplates.GCP_APPENGINE_WRITE);
  }
  /***
   * @param template string 
   * Template could be a valid string to evaluvate with `eval` function Example 
   *  template = "`entity.${data.entityId}.gcp.appengine.read`"
   * @param data any 
   * Any onject that would be referenced in given template 
   */
  public static customPermisson(template: string, data: any): string {
    return eval(template);
  }
}

