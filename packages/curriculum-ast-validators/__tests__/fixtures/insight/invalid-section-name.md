---
author: charlieparker
levels:
  - beginner
  - basic
  - medium
links:
  - '[wikipedia.com](https://en.wikipedia.org/wiki/Join_(SQL)){website}'
---

# Headline

---
## Content

text with `code`:

```sql
SELECT pokemon.name, type.name
FROM pokemon_type
LEFT JOIN pokemon
ON pokemon_type.pokemon_id = pokemon.id
LEFT JOIN type
ON pokemon_type.type_id = type.id;
```

and a table:

| num | char |
| :-: | :-: |
| 1 | a |
| 2 | b |
| 3 | c |

---
## I am not valid

Log the string `"example"`

```js
console.???('example')
```

- `log`
- `logger`
- `print`
- `stdout`
