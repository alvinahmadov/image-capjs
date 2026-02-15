# Image CapJS

NodeJS library for solving various types of CAPTCHAs using TensorFlow.js and deep learning models.

## Description

This project provides a unified interface for solving multiple types of CAPTCHAs, including traditional text-based CAPTCHAs and ReCaptcha image classification. It utilizes TensorFlow.js (Node backend) to run inference on pre-trained models. The architecture typically involves a DenseNet backbone followed by GRU layers and CTC decoding for sequence prediction or a classification head for ReCaptcha.

## Features

- **Multi-Type Support**: Solves a variety of CAPTCHA formats (Type1, Type3, Type4, Type5, Type6, Type7, Type8).
- **ReCaptcha Support**: identifying objects in ReCaptcha images.
- **TensorFlow.js**: Leverages `@tensorflow/tfjs-node` for efficient model inference.
- **Configurable**: Model parameters and paths are easily configurable via `params.yaml`.

## Installation

```bash
npm install
```

## Configuration

The project uses a `params.yaml` file to define parameters for each CAPTCHA type, including:

- `width`, `height`: Image dimensions expected by the model.
- `net_chanels`: Number of input channels (1 for grayscale, 3 for RGB).
- `letters` / `classes`: Character set or class labels.
- `model_path`: Path to the model definition file (`model.json`).

Supported types defined in `params.yaml`:
- `type1`, `type3`, `type4`, `type5`, `type6`, `type7`, `type8`
- `recaptcha`

## Usage

Here is a basic example of how to use the `Predictor` class:

```javascript
const { Predictor } = require('./index.js');
const path = require('path');

// Configuration
const paramsPath = './params.yaml'; // Path to your params.yaml
const modelType = 'type1';          // The type of CAPTCHA to solve (e.g., 'type1', 'recaptcha')
const shardsPath = './data/models/type1/'; // Directory containing model weights

// Initialize the predictor
const predictor = new Predictor(paramsPath, modelType, shardsPath);

// Path to the CAPTCHA image
const imagePath = './path/to/captcha.png';

// Run prediction
predictor.predict(imagePath)
    .then(result => {
        console.log(`Prediction: ${result}`);
    })
    .catch(err => {
        console.error('Error:', err);
    });
```

## Dependencies

- `@tensorflow/tfjs-node`: TensorFlow.js Node.js backend.
- `canvas`: For image manipulation.
- `jimp`: Image processing library for Node.
- `js-yaml`: YAML parser.
- `jsdom`: For DOM implementation required by some libraries.
- `opencv-wasm`: OpenCV WebAssembly bindings.

## Directory Structure

- `src/`: contains the source code for the predictor, models, and utilities.
- `index.js`: Main entry point exporting the `Predictor` class.
- `params.yaml`: Configuration file for model parameters.
