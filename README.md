# JavaScript Text Formatter

JavaScript Text Formatter is a JavaScript library that can be used to format text in different ways.

## Getting Started

## Installation

To use JavaScript File Downloader in your project, you can download the jsFileDownloader.js file and include it in your project. Alternatively, you can install it using npm:

```bash
npm i text-formatter-js --save
```

```bash
yarn add text-formatter-js
```

## Importing

```
import textFormatter from "text-formatter-js";

```

## How to use it in your project

#### use this function in your project and pass the text you want to format as a parameter

```javascript
textFormatter("your text");
```

#### or you can store the returned value in a variable

```javascript
const formattedText = textFormatter("your text");

console.log(formattedText);
```

## Parameters

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| text      | `string` | **Required**. The text you want to format. |

## Error Response

| Description                                                                                       |
| :------------------------------------------------------------------------------------------------ |
| If you pass a number or any other type of data, it will return an error (Please provide a string) |

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Author

- <img align="left" src="https://user-images.githubusercontent.com/83487057/224383152-3d83875a-6e49-46c2-be8f-5d0627e0a27e.png" alt="md-wahiduzzaman-emon" height="40" width="40" /> [Md Wahiduzzaman Emon]

## Contributing

- Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

* Please make sure to update tests as appropriate.
