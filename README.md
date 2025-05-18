# Zimbabwe National ID Validator API

[![Deployment Status](https://img.shields.io/badge/deployment-active-success)](https://zim-ids.vercel.app)

A simple and elegant way to validate Zimbabwean National Identification Numbers. This API allows you to validate the format and structure of Zimbabwean National ID numbers and optionally retrieve associated province and district information.

## 🌟 Features

- ✅ Validate Zimbabwean National ID number formats
- 🗺️ Get province information for valid IDs
- 📍 Get district information for valid IDs
- 🚀 Simple, RESTful API
- 📱 Responsive demo interface

## 🚀 Live Demo

Visit the live demo at: [https://zim-ids.vercel.app](https://zim-ids.vercel.app)

## 📋 API Documentation

### Base URL

```
https://zim-ids.vercel.app
```

### Endpoints

#### Validate Zimbabwean ID

```
GET /api/validate
```

Validates a Zimbabwean National ID number and optionally returns province and district information.

**Query Parameters:**

| Parameter | Required | Description |
|-----------|----------|-------------|
| id | Yes | The Zimbabwean ID number to validate |
| includeProvince | No | Set to 'true' to include province information in the response |
| includeDistrict | No | Set to 'true' to include district information in the response |

**Example Request:**

```
https://zim-ids.vercel.app/api/validate?id=12-3456789H23&includeProvince=true&includeDistrict=true
```

**Response Format:**

```json
{
    "valid": boolean,
    "message": string,
    "province": string,  // Only included when includeProvince=true 
    "district": string   // Only included when includeDistrict=true
}
```

## 💻 Usage Examples

### JavaScript

```javascript
// Validate a Zimbabwean ID with fetch API
async function validateZimbabweanID(idNumber, includeProvince = false, includeDistrict = false) {
    try {
        const baseUrl = 'https://zim-ids.vercel.app';
        let url = `${baseUrl}/api/validate?id=${encodeURIComponent(idNumber)}`;
        
        // Add optional parameters if requested
        if (includeProvince) {
            url += '&includeProvince=true';
        }
        if (includeDistrict) {
            url += '&includeDistrict=true';
        }
        
        const response = await fetch(url);
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('Error validating ID:', error);
        return { valid: false, message: 'API request failed' };
    }
}

// Example usage
validateZimbabweanID('12-3456789H23', true, true)
    .then(result => {
        console.log(result);
        // Handle the validation result
        if (result.valid) {
            console.log('Valid ID:', result.message);
            if (result.province) console.log('Province:', result.province);
            if (result.district) console.log('District:', result.district);
        } else {
            console.log('Invalid ID:', result.message);
        }
    });
```

For more examples (cURL, PHP, Python, Java), visit the [live documentation](https://zim-ids.vercel.app).
---
