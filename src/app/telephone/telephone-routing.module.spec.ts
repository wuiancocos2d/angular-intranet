import { TelephoneRoutingModule } from './telephone-routing.module';

describe('TelephoneRoutingModule', () => {
  let telephoneRoutingModule: TelephoneRoutingModule;

  beforeEach(() => {
    telephoneRoutingModule = new TelephoneRoutingModule();
  });

  it('should create an instance', () => {
    expect(telephoneRoutingModule).toBeTruthy();
  });
});
