import { TelephoneModule } from './telephone.module';

describe('TelephoneModule', () => {
  let telephoneModule: TelephoneModule;

  beforeEach(() => {
    telephoneModule = new TelephoneModule();
  });

  it('should create an instance', () => {
    expect(telephoneModule).toBeTruthy();
  });
});
