import { 
  createKeyFile, errorData, hasPermission, sendErrorResponse, 
  sendSuccessResponse,PermissionTemplates,Permissions } from './index';
describe('Package Module', () => {
  it('Module should loaded ', () => {
    expect(createKeyFile).toBeTruthy();
  });
  it('Should export createFile', () => {
      expect(createKeyFile).toBeTruthy();
  });
  it('Should export errorData', () => {
    expect(errorData).toBeTruthy();
  });
  it('Should export hasPermission', () => {
    expect(hasPermission).toBeTruthy()
  });
  it('Should export sendErrorResponse', () => {
    expect(sendErrorResponse).toBeTruthy();
  });
  it('Should export sendSuccessResponse', () => {
    expect(sendSuccessResponse).toBeTruthy();
  });
  it('Should export PermissionsTemplate', () => {
    expect(PermissionTemplates).toBeTruthy()
  });

  it('Should export Permissions', () => {
    expect(Permissions).toBeTruthy();
  })
});