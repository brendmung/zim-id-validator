# Zimbabwe National ID Validator API

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
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

### Python

```python
import requests

def validate_zimbabwean_id(id_number, include_province=False, include_district=False):
    """
    Validate a Zimbabwean ID number using the API
    
    Args:
        id_number (str): The Zimbabwean ID to validate
        include_province (bool): Whether to include province information
        include_district (bool): Whether to include district information
        
    Returns:
        dict: The validation result
    """
    base_url = 'https://zim-ids.vercel.app'
    params = {'id': id_number}
    
    # Add optional parameters if requested
    if include_province:
        params['includeProvince'] = 'true'
    if include_district:
        params['includeDistrict'] = 'true'
    
    try:
        response = requests.get(f'{base_url}/api/validate', params=params)
        response.raise_for_status()  # Raise an exception for HTTP errors
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error validating ID: {e}")
        return {'valid': False, 'message': 'API request failed'}

# Example usage
if __name__ == "__main__":
    result = validate_zimbabwean_id('12-3456789H23', include_province=True, include_district=True)
    
    if result['valid']:
        print(f"Valid ID: {result['message']}")
        if 'province' in result:
            print(f"Province: {result['province']}")
        if 'district' in result:
            print(f"District: {result['district']}")
    else:
        print(f"Invalid ID: {result['message']}")
```

For more examples (cURL, PHP, Java), visit the [live documentation](https://zim-ids.vercel.app).

## 🛠️ Development

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/zim-id-validator.git
   cd zim-id-validator
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment

This project is ready to be deployed on [Vercel](https://vercel.com) with zero configuration.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fzim-id-validator)
---
