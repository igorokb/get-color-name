# Get Color Name

The utility aims to simplify naming of color constants. It accepts color HEX code or rgb()

## Installation

```
npm i get-user-friendly-color-name -g
``` 

## Usage examples

- with HEX code:
```bash
# expected result: HANUMAN_GREEN
clrnm 45FEA9
```

- with rgb():
```bash
# expected result: CATHODE_GREEN
clrnm "rgb(0,255,78)"
```

- get detailed response:
```bash
# expected result:
# {
#   name: 'Biloba Flower',
#   value: '#ae99d2',
#   rgb: { r: 174, g: 153, b: 210 },
#   distance: 5.196152422706632,
#   upperCaseName: 'BILOBA_FLOWER'
# }
clrnm A998D3 --full
```