export const multiTest = <T extends unknown>(items: [T, string][], run: (item: T, name: string) => void) => {
  items.forEach(([item, name]) => {
    // describe(name, () => {
    run(item, name);
    // });
  });
};
