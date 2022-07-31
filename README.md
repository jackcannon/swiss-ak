# swiss-ak (Swiss Army Knife)

A collection of useful little things that I like to reuse across projects

```javascript
const printLn = (text) => {
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  process.stdout.moveCursor(0, -1);
  process.stdout.clearLine(0);
  process.stdout.write(text);
  process.stdout.write('\n');
};
```
