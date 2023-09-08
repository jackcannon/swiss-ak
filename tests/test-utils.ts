const core = {
  describe: ((name, func) => func()) as jest.Describe,
  it: ((name, func) => func((() => {}) as any)) as jest.It
};

export const register = (newCore: Partial<typeof core>) => {
  Object.assign(core, newCore);
};

export const multiTest = <T extends unknown>(items: [T, string][], run: (item: T, name: string) => void) => {
  items.forEach(([item, name]) => {
    core.describe(name, () => {
      run(item, name);
    });
  });
};
