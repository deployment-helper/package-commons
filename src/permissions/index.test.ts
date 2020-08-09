import { Permissions } from '.'
describe('Permissions', () => {
  it('Module should load', () => {
    expect(Permissions).toBeTruthy()
  });
  it('Should create GCP read permission', () => {
    const toBe = "entity.12345.gcp.appengine.read"
    expect(Permissions.gcpAppEngineReadPermission('12345')).toBe(toBe);
  });
  it('Should create GCP write permission', () => {
    const toBe = "entity.12345.gcp.appengine.write"
    expect(Permissions.gcpAppEngineWritePermission('12345')).toBe(toBe);
  });
  it('Should create custom permission', () => {
    const toBe = "entity.12345.custom";
    const template = "`entity.${data.entityId}.custom`";
    const data = { entityId: 12345 };
    expect(Permissions.customPermisson(template, data)).toBe(toBe);
  })
});