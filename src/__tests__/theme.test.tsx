import theme from '../theme';

describe('Material Theme', () => {
  it('should have palette', () => {
    expect(theme.palette.primary).toBeDefined();
    expect(theme.palette.secondary).toBeDefined();
    expect(theme.palette.background).toBeDefined();
  });
});
