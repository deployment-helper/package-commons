/**
 * entityId could be any resource most of the time value represents 
 * MCRC projectId
 */
export const PermissionTemplates = {
  GCP_APPENGINE_READ: "`entity.${data.entityId}.gcp.appengine.read`",
  GCP_APPENGINE_WRITE: "`entity.${data.entityId}.gcp.appengine.write`",
  DEFAULT_PERMISSION: "app.enity.create",
  ENTITY_READ_PERMISSION_TEMPLATE: "`entity.${data.entityId}.read`",
  ENTITY_WRITE_PERMISSION_TEMPLATE: "`entity.${data.entityId}.write`",
  ENTITY_DELETE_PERMISSION_TEMPLATE: "`entity.${data.entityId}.delete`",
  ENTITY_MANAGE_USER_PERMISSION_TEMPLATE: "`entity.${data.entityId}.manageuser`",
}