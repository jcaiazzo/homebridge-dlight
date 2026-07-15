# Homebridge DLight Plugin

This plugin allows you to control DLight devices via Homebridge. This fork of existing homebridge-dlight was updated for Homebridge 2.0 and node.js >.22

## Build and Installation

- **Requirement**: Node.js >= 22.0.0, Homebridge >= 2.0.0
- Install dependencies: `yarn install`
- Build the plugin: `yarn run build`
- Link for local development: `npm link`

## Configuration

Add the following to your Homebridge `config.json` under `accessories`:

```json
{
    "accessory": "DLight",
    "name": "My DLight",
    "device_id": "xxx",
    "device_ip": "optional"
}
```
