import { UserSignupDto } from './user-signup.dto';

describe('UserSignupDto', () => {
  it('should be defined', () => {
    expect(new UserSignupDto()).toBeDefined();
  });
});
