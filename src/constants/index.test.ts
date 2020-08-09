import {PermissionTemplates} from './index'
describe('Constants',()=>{
  it('Module should load',()=>{
    expect(PermissionTemplates).toBeTruthy();
  });
  it('Module Should have permissions', () => {
    expect(PermissionTemplates.DEFAULT_PERMISSION).toBeTruthy();
  })
});