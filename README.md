How to reproduce:

- run `npm install`
- run `npx expo export -p web`

In the terminal, you'll see the console.log result, it will print 3 times the same log:

```bash
{ params: { '0': { id: 'one' }, '1': { id: 'two' } } }
{ params: { '0': { id: 'one' }, '1': { id: 'two' } } }
{ params: { '0': { id: 'one' }, '1': { id: 'two' } } }
```

I would expect, instead:

```bash
{ id: 'one' }
{ id: 'two' }
```
